---
title: "銀行 AI PM 一天在做什麼？"
titleEn: "What Does an AI PM at a Bank Actually Do?"
titleDe: "Was macht ein AI PM bei einer Bank eigentlich den ganzen Tag?"
excerpt: "不寫程式、不調模型，那 AI 產品經理整天在忙什麼？一個銀行 GenAI PM 的真實日常拆解。"
excerptEn: "No coding, no model tuning — so what does an AI Product Manager actually do all day? A real daily breakdown from a GenAI PM working in banking."
excerptDe: "Kein Code, kein Modell-Tuning — was macht ein KI-Produktmanager eigentlich den ganzen Tag? Ein realistischer Tagesablauf eines GenAI PMs im Bankwesen."
date: "2026-03-01"
author: "Nils Liu"
tags:
  - "AI PM 系列"
  - "GenAI"
  - "Career"
---

很多人聽到「AI 產品經理」，第一反應是：「所以你是在寫 Python 嗎？」

不是。

我每天做的事情更像是在當翻譯——把業務的語言翻成工程師聽得懂的規格，把技術的限制翻成主管能接受的取捨。

### 一天的真實節奏

**09:00 — 站會＋進度追蹤**

和工程團隊的 daily standup。不是聽報告，是在抓風險。如果有人說「差不多快好了」，我會追問：「差不多是指今天下班前，還是這週？」在銀行做 AI，delay 的代價比你想像的大——因為後面接的是法遵審查、資安檢核、UAT 測試，每一個環節都有自己的排程。

**10:00 — 需求釐清會議**

業務單位帶著一個新需求來：「我們想要讓 AI 自動回覆客戶的投資問題。」

這句話背後有十個未解的問題：
- 回覆的範圍是什麼？只有基金還是包含保險？
- 回覆的內容需要經過合規審查嗎？
- 如果 AI 回答錯了，責任歸誰？
- 客戶資料的存取權限怎麼設定？

我的工作就是把這些問題一個一個拆開，變成可以被工程團隊執行的 user story。

**13:30 — 技術深潛**

下午通常是和工程師一起深入討論技術方案。比如今天的議題是：「RAG 的 chunk size 要設多大？」

這不是純技術問題。chunk 太大，檢索精度下降；chunk 太小，上下文斷裂。最終的決定要同時考量：
- 知識庫的文件類型（法規文件 vs. FAQ vs. 產品說明書）
- 使用者的查詢習慣（短問句 vs. 長段描述）
- 回應延遲的容忍度

**15:00 — 合規與資安對齊**

在銀行做 AI，你永遠繞不過法遵。今天要和資安團隊確認：我們新上線的 chatbot，在回覆中如果不小心帶到客戶姓名怎麼辦？

這促使我設計了一套「輸出端敏感資訊替換機制」——也就是後來拿到專利的那個系統。

**17:00 — 寫 PRD 和文件**

一天中最安靜的時段，用來寫產品需求文件。在銀行，PRD 不只是給工程師看的——法遵要看、稽核要看、主管要看。所以每個 feature 都需要附上風險評估、資料流向圖、以及回滾計畫。

### AI PM 最重要的三個能力

從這樣的日常中，我歸納出三個 AI PM 最核心的能力：

**1. 翻譯力**
能在業務語言、技術語言、法遵語言之間自由切換。

**2. 判斷力**
80% 的需求不該做。AI PM 的價值不是把每個需求都做出來，而是判斷哪些值得投入資源。

**3. 風險預判力**
AI 產品的不確定性比傳統軟體高很多。你必須在問題發生之前就設計好 fallback 方案。

---

*如果你正在考慮轉職 AI PM，歡迎繼續閱讀這個系列的其他文章。*
