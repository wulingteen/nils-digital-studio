---
title: "【專利六】從 GenAI Product Owner 視角打造知識圖譜系統：我的第一個 AI 專利怎麼來的？"
titleEn: "[Patent 6] Building a Knowledge Graph from a GenAI Product Owner's Perspective: My First AI Patent"
titleDe: "[Patent 6] Aufbau eines Knowledge Graphs aus der Perspektive eines GenAI Product Owners: Mein erstes KI-Patent"
excerpt: "一位銀行 GenAI 產品經理如何從業務痛點出發，設計出能自動建構知識圖譜的 LLM 系統，並成功取得新型專利？本文分享從需求到專利的完整思路。"
excerptEn: "How does a bank GenAI Product Manager design an LLM system that automatically builds a knowledge graph from business pain points, and successfully obtain a utility patent? This article shares the complete thought process from requirement to patent."
excerptDe: "Wie konzipiert ein Bank-GenAI-Produktmanager ein LLM-System, das als Antwort auf Geschäftsprobleme automatisch einen Knowledge Graph aufbaut, und erhält dafür ein Patent? Dieser Artikel teilt den kompletten Denkprozess."
date: "2025-11-01"
author: "Nils Liu"
tags:
  - "Patent"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-knowledge-graph.png"
---

### 為什麼銀行需要「會自己學習」的知識圖譜？

大多數人對知識圖譜的印象是：需要大量人工標記、需要事先定義本體（ontology）、需要一群領域專家持續維護。

這在金融業尤其是個大問題。

銀行的業務知識變動極快：法規更新、產品改版、新客群需求……傳統知識圖譜的建構成本高、更新週期慢，根本跟不上業務節奏。

身為一個 **GenAI Product Owner**，我問自己一個問題：

> **「如果讓 LLM 在每次客戶互動中，自動萃取實體與關係、持續更新知識圖譜——這樣的系統可行嗎？」**

答案是可行的，而這個想法後來成為我的專利 **M676680《知識圖譜建構系統》**。

---

### 系統怎麼運作？

這個系統的核心架構很直觀，分成四個模組：

1. **處理模組**：將客戶的行為數據與查詢輸入大語言模型，解析成結構化的「處理後文本」

2. **實體識別模組**：從文本中辨識出關鍵實體（人物、產品、事件、風險類型等）

3. **關係抽取模組**：分析實體之間的潛在關係（如「客戶 A → 持有 → 基金 B」）

4. **儲存模組**：以圖資料庫（Graph DB）儲存並持續更新知識圖譜

更重要的是，系統還能根據這張知識圖譜 + 使用者畫像，提供**個人化資訊回應**。

---

### GenAI PM 的核心思維：從流程痛點找創新點

很多人問我，**一個 PM/PO 怎麼會去申請專利？**

我的答案是：**因為專利本來就是解決問題的紀錄**。

做 GenAI 產品，你每天都在解一個問題：如何讓 AI 系統在企業環境中真正跑起來？知識管理是 RAG 架構最脆弱的一環——垃圾進、垃圾出（GIGO）。如果知識庫不能自我演化，RAG 的效果會快速衰減。

這個專利的核心價值不是技術炫技，而是**用系統化架構解決知識庫的維護成本問題**。

---

### 對 GenAI Product Manager 的啟示

如果你正在規劃企業 GenAI 產品，這幾個問題值得認真思考：

- 你的知識庫多久更新一次？由誰負責？

- 有沒有辦法讓系統從用戶互動中**自動學習**？

- 你的知識圖譜設計能支援個人化嗎？

**知識圖譜不只是技術選型，更是 GenAI 產品的「記憶力設計」。**

---

*M676680 知識圖譜建構系統｜公告日：2025/11/01｜唯一發明人：劉岦崱*
