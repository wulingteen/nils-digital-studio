---
title: "從需求到專利：一個 GenAI 功能的完整生命週期"
titleEn: "From Feature to Patent: Shipping GenAI in a Regulated Bank"
titleDe: "Vom Feature zum Patent: GenAI in einer regulierten Bank umsetzen"
excerpt: "一個 GenAI 功能從發想到上線到申請專利，中間經歷了什麼？銀行 AI PM 的完整旅程紀錄。"
excerptEn: "What does a GenAI feature go through from inception to launch to patent filing? A complete journey record from a bank AI PM."
excerptDe: "Was durchläuft ein GenAI-Feature von der Idee bis zum Launch und zur Patentanmeldung? Ein vollständiger Erfahrungsbericht eines Bank-KI-PMs."
date: "2026-03-02"
author: "Nils Liu"
tags:
  - "AI PM 系列"
  - "GenAI"
  - "Patent"
---

大多數人看到專利，會覺得那是「研發部門」的事。但在我們團隊，專利是從**產品需求**長出來的。

這篇文章要分享的是：一個 GenAI 功能，從需求萌芽到正式上線、最後申請專利的完整生命週期。

### Phase 1：痛點發現（Week 1-2）

故事從一場例行的業務訪談開始。

理財專員告訴我：「每次客戶問到跨產品的比較，我需要開五個系統查資料，然後自己算。」

五個系統。手動計算。這在 2025 年。

我意識到這不只是一個「UI 整合」的問題——這是一個**多源資訊即時整合 + 個人化推薦**的挑戰。而這正是 LLM 的甜蜜點。

### Phase 2：概念驗證（Week 3-6）

我花了兩週寫 PRD，核心只有一頁：

> **讓理財專員在對話中，用自然語言取得跨產品、跨系統的個人化投資建議。**

接下來是技術選型：
- **LLM**：選擇支援 function calling 的模型
- **資料層**：API gateway 串接五個內部系統
- **合規層**：輸出端加上 PII 過濾

PoC 花了四週做出來，demo 給業務看的時候，他們的反應是：「你確定這不是查好的？」

### Phase 3：合規審查（Week 7-10）

這是最痛苦的階段。

法遵的第一個問題：「AI 生成的投資建議，算不算正式建議？需不需要留存紀錄？」

答案是：**需要。** 而且每一次生成都要可追溯。

這迫使我們在架構中加入了完整的 audit trail——每一次 LLM 的 input/output、retrieval 的來源文件、最終回覆的版本——全部留存。

### Phase 4：上線與迭代（Week 11-16）

上線前做了三輪 UAT。最大的發現是：**使用者不會用你預想的方式問問題。**

我們設計的 prompt template 是：「請比較 A 基金和 B 基金」。但真實使用者會說：「那個上次你推薦給王太太的，跟新出的那個利率比較好的，哪個比較適合我？」

這種模糊、帶有上下文的查詢，需要的不只是 RAG——還需要客戶歷史對話的記憶機制。

### Phase 5：專利化（Week 17-20）

當系統穩定運行兩個月後，我開始整理專利。

專利寫作和寫 PRD 完全不同。PRD 是告訴團隊「我們要做什麼」；專利是告訴世界「我們怎麼做的，而且這個方法是新穎的」。

我需要回答三個核心問題：
1. **新穎性**：現有技術（prior art）做不到什麼，我們做到了什麼？
2. **技術手段**：具體的系統架構、模組分工、資料流向
3. **產業利用性**：這個方法在哪些場景可以被應用？

最後產出的專利範圍涵蓋了：
- 多源資訊即時整合模組
- 個人化投資建議生成系統
- 互動式資產儀表板
- 持續學習回饋機制

### 給想做 AI PM 的你

如果你也想走從需求到專利這條路，我的建議是：

**1. 養成寫作習慣**
每個功能做完，花 30 分鐘寫「我們做了什麼、為什麼這樣做、有什麼不同」。這就是專利的雛形。

**2. 理解「問題」比「方案」重要**
專利不是保護你的 code，是保護你「解問題的方法」。

**3. 和專利事務所合作**
我不是法律專家，但我知道怎麼把技術語言翻譯成專利語言。找一個好的專利代理人，事半功倍。

---

*這是「AI PM 的真實工作」系列的第二篇。*
