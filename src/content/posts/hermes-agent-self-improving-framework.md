---
title: "Hermes Agent：越用越聰明的開源 AI Agent 框架"
titleEn: "Hermes Agent: The Open-Source AI Agent Framework That Gets Smarter Over Time"
titleDe: "Hermes Agent: Das Open-Source-KI-Agenten-Framework, das mit der Zeit klüger wird"
excerpt: "大多數 AI Agent 每次對話結束就「失憶」。Hermes Agent 不一樣——它會把你教給它的東西記下來，下一次用得更好。這是 NousResearch 在 2026 年推出的開源 Agent 框架，三層記憶體架構讓它越跑越聰明。"
excerptEn: "Most AI Agents forget everything after each session. Hermes Agent is different — it remembers what you teach it and gets better over time. Here's what makes this open-source framework from NousResearch stand out."
excerptDe: "Die meisten KI-Agenten vergessen alles nach jeder Sitzung. Hermes Agent ist anders — er merkt sich, was Sie ihm beibringen, und wird mit der Zeit besser. Was dieses Open-Source-Framework von NousResearch auszeichnet."
date: "2026-04-16"
author: "Nils Liu"
tags:
  - "GenAI 實戰"
  - "Blog"
  - "Agent"
  - "Open Source"
coverImage: "/images/blog/hermes-agent-network.webp"
---

**Hermes Agent** 是 NousResearch 在 2026 年 2 月 25 日發布的開源 AI Agent 框架，發布幾週內就累積了 57,000 個 GitHub Stars，是今年成長最快的 Agent 開源專案之一。

它到底做對了什麼？我認為答案在於一個大多數 Agent 框架根本沒認真處理的問題：**記憶體**。

## 大多數 Agent 框架的盲點

現在的 Agent 框架設計邏輯普遍是這樣：接收請求 → 規劃 → 執行 → 輸出結果。然後對話結束，什麼都不留下。

你今天告訴 Agent「我的報告格式要這樣」，明天它又回到出廠設定。你上個月花了三個小時讓它學會一套資料分析流程，下次還得從頭來。

Hermes Agent 的設計想解決的就是這件事。

## 三層記憶體架構

Hermes Agent 的記憶體系統分三層：

**第一層：Session Memory（工作記憶）**

當前對話的上下文，跟一般 Agent 一樣。

**第二層：Persistent Memory（持久記憶）**

跨 session 儲存的使用者偏好、行為模式和背景知識。不是把所有對話紀錄都塞進 context——那樣 token 消耗會爆炸——而是用 SQLite + FTS5 全文搜尋索引，讓 Agent 在需要的時候主動搜尋自己的記憶庫。

**第三層：Skill Memory（技能記憶）**

這是最有意思的一層。當 Agent 完成一個複雜任務，它會自動把這個流程抽象成一份 skill 文件，下次遇到類似任務直接調用。技能會在使用過程中持續自我修正。

這三層疊在一起，讓 Hermes Agent 的行為有點像一個每天都在成長的員工，而不是每次都重新上工的臨時工。

## 底層模型：Hermes 4

Hermes Agent 的基礎是 NousResearch 在 2025 年 8 月推出的 **Hermes 4** 模型家族，基於 Meta Llama 3.1 架構，提供三種規格：14B、70B、405B。

幾個技術亮點：

- **131K token context window**：能一次塞入整個 codebase 或超長文件
- **Hybrid Reasoning Mode**：支援 `<think>...</think>` 標籤，可以在快速回覆和深度推理之間切換
- **35B MoE 變體**：Mixture-of-Experts 架構，每次推理只激活 3B active parameters，在速度和能力間取得平衡
- **訓練規模**：使用 1,000 個不同的 task-specific verifier 進行 rejection sampling，訓練資料從 100 萬筆擴展到約 500 萬筆

## 模型無關 + 跨平台部署

Hermes Agent 的另一個設計選擇是**模型無關（model-agnostic）**。它支援 200 多個 LLM provider，包括 OpenAI、Anthropic Claude、Nous Portal、OpenRouter、HuggingFace，也可以接本機的 local model。你不需要綁在任何一個 API 上。

更特別的是它的跨平台策略：**一個 gateway，同時跑在 15 個以上的平台**。

CLI、Telegram、Discord、Slack、WhatsApp、Signal、Matrix、Email、SMS，甚至 DingTalk、飛書、WeCom、Home Assistant——部署一次，所有渠道都能用同一個 Agent 實例，共享同一套記憶體和技能庫。不用為每個平台各自維護一份 Agent。

這個設計對需要在多個渠道服務用戶的場景特別有吸引力。

## 實際用途

根據目前的社群回饋，Hermes Agent 跑得比較好的場景是：

**重複性高的研究任務**。例如每週追蹤特定主題的最新動態、定期整理競品資訊。Agent 會隨著時間累積關於這個主題的背景知識，後期的輸出品質明顯比初期好。

**個人助理**。透過 Telegram 或 WhatsApp 跑一個 Hermes Agent，讓它記住你的行程偏好、工作習慣、常用格式，隨著使用時間拉長，日常委派任務的溝通成本會愈來愈低。

**模型訓練資料生成**。Hermes 本身和 Nous Research 的 Atropos RL 框架整合，可以用來生成 fine-tuning 的訓練軌跡。這個用途是其他通用 Agent 框架比較少見的。

另外內建了 47 種工具，包含瀏覽器操作、網頁搜尋、排程（cron）、批量處理等，初始能力覆蓋範圍相當完整。

## 適合誰用

Hermes Agent 是 MIT 授權的開源專案，適合幾種情境：

- 想要一個能在多個訊息平台統一調度的個人 Agent
- 正在研究如何讓 Agent 具備長期記憶能力的工程師
- 在本機或私有環境部署 Agent、不想依賴特定雲端 API 的團隊
- 在做 LLM 研究、需要生成高品質訓練資料的研究者

如果你的使用情境是一次性任務或短期 demo，Hermes 的三層記憶體設計就顯得有點過重。但如果你的 Agent 需要長時間運行、累積知識、服務固定用戶——這個框架值得認真評估。

我在 [Harness Engineering 那篇文章](/zh/insights/harness-engineering-ai-agent)裡提到，Agent 系統要走向可靠上線，需要一層執行底盤負責可觀測性、circuit breaker 和狀態管理。Hermes Agent 的 Skill Memory 和持久狀態設計，本質上是把一部分 Harness 的職責內建進框架裡——這是個有意思的設計取捨。

---

*這是「GenAI 產品實戰筆記」系列文章之一。*

💬 **延伸閱讀：**
- [Harness Engineering：替你的 AI Agent 打造執行底盤](/zh/insights/harness-engineering-ai-agent)
- [AI Agent 產品設計的 5 個陷阱](/zh/insights/ai-agent-product-design-traps)
