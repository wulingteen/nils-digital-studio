---
title: "Harness Engineering：替你的 AI Agent 打造執行底盤"
titleEn: "Harness Engineering: Building the Execution Layer for Your AI Agent"
titleDe: "Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen"
excerpt: "Harness Engineering 是 AI Agent 架構中的執行底層。這篇文章介紹 Harness 的核心設計，涵蓋執行控制、可觀測性、Hook 機制、工具沙盒與狀態管理。"
excerptEn: "Harness Engineering is the execution layer in AI Agent architecture. This post introduces the core design of a Harness: execution control, observability, hooks, tool sandboxing, and state management."
excerptDe: "Harness Engineering ist die Ausführungsschicht in der KI-Agenten-Architektur. Dieser Beitrag stellt das Kerndesign eines Harness vor: Ausführungskontrolle, Observierbarkeit, Hooks, Tool-Sandbox und Zustandsverwaltung."
date: "2026-04-15"
author: "Nils Liu"
tags:
  - "GenAI 實戰"
  - "Blog"
  - "Agent"
  - "Architecture"
coverImage: "/images/blog/harness-engineering.webp"
---

**Harness Engineering** 是 AI Agent 架構中負責執行層的系統設計。

在 AI Agent 開發中，大多數討論集中在 prompt 設計、Agent 流程和模型選型。Harness 則是另一個維度的問題——它不處理業務邏輯，而是處理執行環境的可靠性、可觀測性和安全邊界。這篇文章拆解 Harness Engineering 的核心設計，說明它包含哪些元件以及各自解決什麼問題。

## 什麼是 Harness Engineering

Harness，字面意思是「馬具」——把馬套住、讓馬力能夠被控制和引導的那套系統。

在 AI Agent 開發中，**Harness 是你的 Agent 邏輯和底層 LLM/工具之間的那層執行框架**。它不負責業務邏輯，它負責執行環境的可靠性、可觀測性和安全邊界。

換個說法：你的 Agent 是引擎，Harness 是底盤。沒有底盤，引擎再強也沒辦法安全上路。

這個概念在軟體開發中並不新——**測試框架（Test Harness）** 早就有這個思路。但在 LLM Agent 的語境下，Harness 需要處理的問題更複雜，因為 LLM 的行為本質上是不確定的（non-deterministic）。

## 核心設計：Harness 要管哪些事

### 1. 執行控制（Execution Control）

Agent 執行過程中，你需要幾個硬邊界：

- **最大步驟數（Max Steps）**：Agent 最多走幾步就強制終止。我們通常設 15–20 步，視任務複雜度調整。超過就回傳「執行超出預期範圍」，而不是讓它繼續跑下去。
- **超時機制（Timeout）**：每個 LLM call 和 tool call 都要有獨立的 timeout，而不是靠前端的連線超時來兜底。
- **Circuit Breaker**：如果同一個工具在 N 次呼叫內連續失敗，Harness 要能暫停這條路徑、改走 fallback 或直接中止。

設定合理的步驟上限能確保 Agent 在可預期的範圍內運作，也方便後續的除錯與成本控制。

### 2. 可觀測性（Observability）

**沒有 trace，Agent 等同於黑盒**。

一個最小可行的 Harness 觀測層要記錄：

- 每個 LLM call 的 input/output、model、token 數、latency
- 每個 tool call 的參數和回傳值
- Agent 的完整執行路徑（哪個步驟呼叫了哪個工具，結果是什麼）
- 任何 exception 或非預期的分支

我推薦用 **OpenTelemetry** 作為 trace 的底層標準，然後接到你習慣的後端（Langfuse、Jaeger、Grafana）。不要自己造輪子，trace 格式的正規化比你想的重要。

### 3. 前後鉤子（Hooks）

Harness 最有彈性的設計是允許你在執行的特定節點插入自定義邏輯：

- **Pre-tool hook**：在 Agent 呼叫任何工具之前執行。適合做安全檢查、參數驗證、日誌記錄。
- **Post-tool hook**：工具回傳之後執行。適合做輸出清洗、格式轉換、副作用觸發。
- **Pre-LLM-call hook**：LLM call 之前。適合做 prompt 注入防禦、PII 過濾。
- **Post-LLM-call hook**：LLM 回傳之後。適合做輸出守衛（output guard）、有害內容過濾。

這個設計讓你的安全邏輯、監控邏輯和業務邏輯保持分離。**改一個安全規則不需要動 Agent 本體。**

Claude Code 的 [hooks 機制](https://docs.anthropic.com/zh-TW/docs/claude-code/hooks)就是這個思路的實作——你可以在 `settings.json` 裡定義在哪個事件點觸發哪個 shell 指令，Harness 負責執行，Agent 邏輯和執行控制邏輯完全分開。

### 4. 工具白名單與沙盒（Tool Sandboxing）

Agent 能呼叫哪些工具，應該是 Harness 決定的，不是 Agent 自己決定的。

- **靜態白名單**：在 Harness 層定義允許的工具清單。Agent prompt 裡說「你可以用任何工具」，但 Harness 只會讓白名單裡的工具被執行。
- **動態授權**：某些工具在特定條件下才允許呼叫（例如金額超過閾值才需要人工審核觸發器）。
- **沙盒隔離**：高風險工具（例如可以寫入資料庫、發送外部請求的工具）跑在隔離環境裡，防止副作用外洩。

我在 [AI Agent 產品設計的 5 個陷阱](/zh/insights/ai-agent-product-design-traps)裡也討論了「過度信任 Agent 的推理」的問題。工具白名單是從架構層解決這個問題，而不是靠 prompt 自律。

### 5. 狀態管理（State Management）

Agent 跨輪對話最難搞的問題是**狀態一致性**。

Harness 要負責：

- **Context 注入**：每一輪對話從哪個 context 開始？歷史記憶如何壓縮後注入？
- **狀態序列化**：如果 Agent 中途失敗，狀態要能被恢復（Checkpoint），不能每次都從頭來。
- **Session 隔離**：不同使用者的 Agent 執行不能互相污染狀態。

這塊我們目前用 Redis 做短期狀態存儲，配合 PostgreSQL 做長期記憶。設計原則是：**狀態和邏輯分開存，Agent 本身不持有狀態。**

## 一個真實的 Harness 架構長什麼樣

我們目前在銀行 AI 教練系統跑的 Harness 大概長這樣：

```
User Request
     ↓
[Harness Layer]
  - Pre-request guard (PII filter, prompt injection detection)
  - Session state loader
  - Tool registry (whitelist check)
         ↓
[Agent Logic]
  - 每個 step 都回調 Harness hooks
  - Harness 決定是否允許繼續
         ↓
[Harness Layer]
  - Post-response guard (output sanitization)
  - Trace flusher (送到 Langfuse)
  - State persister
     ↓
User Response
```

這個架構讓我們做到：Agent 邏輯完全不知道背後有監控、有安全檢查、有狀態管理。換掉任何一層不需要改 Agent 本體。

## 什麼時候需要做 Harness

如果你的 Agent 目前還是個人使用或內部 demo，可以先不管。

但只要滿足以下任一條件，Harness 就應該進 roadmap：

1. Agent 要服務真實使用者
2. Agent 的任何 tool call 有副作用（寫入、送出、觸發外部系統）
3. 你需要知道「Agent 為什麼做了這個決定」
4. 有合規或安全要求（金融、醫療、法律場景幾乎都有）

Harness 的投入時機取決於 Agent 所在的階段與應用場景，早期規劃好執行層的設計，能讓後續的維運和擴展省下相當多的成本。

---

*這是「GenAI 產品實戰筆記」系列文章之一。*

💬 **延伸閱讀：**
- [AI Agent 產品設計的 5 個陷阱](/zh/insights/ai-agent-product-design-traps)
- [Prompt Engineering 在企業場景的眉眉角角](/zh/insights/enterprise-prompt-engineering)
