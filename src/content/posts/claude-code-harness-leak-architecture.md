---
title: "Claude Code 洩漏事件解析：一窺 Anthropic 的 AI Agent 核心藍圖"
titleEn: "Claude Code Harness Leak: Decoding Anthropic's Core AI Agent Blueprint"
titleDe: "Claude Code Harness Leak: Dematerialisierung der Anthropic AI-Agent-Architektur"
excerpt: "2026年3月底，Anthropic 在 npm 發布更新時意外夾帶 59.8MB 的 Source Map，導致 Claude Code 的底層程式碼全面洩漏。這不僅是一次工程失誤，更是企業級 Agent 架構、多層提示詞與臥底模式等設計細節的首次大解密。"
excerptEn: "In late March 2026, an accidental 59.8MB Source Map in Anthropic's npm release led to a full leak of Claude Code's underlying architecture. Beyond an engineering flaw, this is the first unboxing of enterprise-grade Agent frameworks, multi-layer prompting, and Undercover modes."
excerptDe: "Ende Maerz 2026 fuehrte eine versehentliche 59.8MB Source Map in Analytics' npm-Release zu einem vollstaendigen Leak der zugrunde liegenden Claude Code Architektur. Neben einem technischen Fehler ist dies die erste Dematerialisierung von Enterprise-Grade Agent-Frameworks, mehrschichtigen Prompts und Undercover-Modi."
date: "2026-04-01"
author: "Nils Liu"
tags:
  - "GenAI"
  - "News"
  - "Agent"
  - "Tech"
coverImage: "/images/blog/claude-code-leak.webp"
---

在 2026 年 3 月 31 日，AI 開發者社群迎來了一顆震撼彈：Anthropic 在發布 `@anthropic-ai/claude-code` v2.1.88 版本的 npm 套件時，意外打包了一個高達 59.8 MB 的 JavaScript `Source Map (.map)` 檔案。這個看似微小的發布失誤，讓外界得以還原出超過 50 萬行的 TypeScript 原始碼。

這並非是一次遭駭客攻擊的資安外洩，而是純粹的「人為打包錯誤」。然而，對於密切關注 AI 應用開發的工程師而言，**這無疑是免費公開了當今最頂尖的 高階 AI Agent 架構藍圖（Blueprint）**。

Claude Code 從來就不只是把 API 包裝成 CLI 工具這麼簡單。在這次的程式碼洩漏中，我們得以一窺其背後被稱為「Harness」的框架，究竟藏著哪些祕密？

## 秘密一：終結單一 Prompt，迎接動態重組矩陣

許多開發者在打造自己的 AI Agent 時，習慣寫死一個落落長的「系統提示詞（System Prompt）」。但 Claude Code 完全捨棄了這種做法。

洩漏的程式碼顯示，Claude Code 會根據當前的任務狀態（State）與選定模式（例如：Plan、Explore、Delegate），**動態組裝數十種微型 Prompt Fragment**。

當你要 Claude Code 執行一個複雜的 Refactor 任務時，它不是把所有的規則一次丟給模型，而是將 Prompt 視為一組「積木」，在每個推論步驟（Inference Step）之前，即時生成出當下最合適的組合。這大幅度降低了 LLM「注意力渙散（Attention Span Drop）」的機率。

## 秘密二：嚴謹的 6 層提示詞堆疊架構

這次最令業界驚豔的設計，是 Claude Code 維繫運作的「六層 Context 堆疊（The Six-Layer Prompt Stack）」：

1. **System Prompt (核心定義)**：規範 Agent 的基本身分與破壞性行為防護。
2. **Tool Definitions (工具定義)**：提供 Bash、Write、TodoWrite 等指令的嚴謹 JSON Schema。
3. **Runtime Instructions (運行環境)**：目前機器的權限邊界限制與環境變數。
4. **Project Context (專案脈絡)**：讀取 `CLAUDE.md` 或者開發者給予的長期指導原則。
5. **Conversation History (歷史對話)**：經過壓縮、過濾的工具調用紀錄與輸出。
6. **User Input (當前指令)**：使用者最即時的要求。

更令人意外的是，**Anthropic 選擇將這個 Prompt 組裝引擎寫在 Client 端（也就是使用者的終端機內），而不是 Server 端**。這種讓 Client 掌握拼裝邏輯的做法也是這次 Leak 能夠看得如此清晰的原因。

## 秘密三：「臥底模式」與背景作業代理人

在洩漏的程式碼中，開發者還挖出了幾個極具啟發性的進階機制：

*   **臥底模式 (Undercover Mode)**：這是一個防止 AI「自曝身分」的巧妙設計。它強制 Claude 在撰寫 Git Commit 或是產生公開對外的技術文件時，必須剝離掉具有 AI 特徵的詞彙（像是 "As an AI..."）或是 Anthropic 內部的代號，讓產出的程式碼與紀錄看起來完全像是人類工程師的手筆。
*   **多層次記憶體 (Multi-layered Memory)**：Claude Code 具有在 `MEMORY.md` 檔中儲存短期與長期經驗的能力。甚至有段尚未完全啟用的 `autoDream` 邏輯，暗示未來 AI 代理人可能在終端機閒置時，自己於背景進行記憶重組與最佳化。
*   **委派代理 (Delegator & Worker)**：程式碼展示了成熟的多代理人（Multi-agent）工作流邏輯 —— 一個主 Agent 可以派更小、只有受限工具權限的「Worker Agent」去處理單一代碼的繁瑣修改，然後再收斂結果。

## 對開發者的啟示

Claude Code 的程式碼外洩雖然讓 Anthropic 損失了部分商業機密，但卻等於幫全球的 AI 開發者上了一堂免費的「企業級 Agent 系統設計大師課」。

這次事件證明了，打造具備高度自治性（High-agency）的 AI 產品，關鍵早已不在於模型本身有多聰明，而是**你如何設計一套強大的「Harness 控制框架」，負責精準的 Prompt 組裝、權限守門與錯誤恢復**。

當你下一次因為你的 AI Agent 不聽話而苦惱時，或許可以參考 Claude Code 的六層 Prompt 堆疊，重新設計你的框架。這就是 AI 驅動軟體工程的下一個標準姿勢。
