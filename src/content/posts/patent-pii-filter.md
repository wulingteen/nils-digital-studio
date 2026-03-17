---
title: "【專利三】GenAI 合規設計的關鍵技術：銀行 AI 產品經理如何用「敏感資訊替換」兼顧效能與法遵？"
titleEn: "[Patent 3] GenAI Compliance Design Key Tech: How a Bank AI PM Used 'Sensitive Info Substitution' to Balance Performance & Compliance"
titleDe: "[Patent 3] GenAI Compliance-Design: Wie ein Bank-AI-PM 'sensible Informationssubstitution' nutzte, um Leistung & Compliance zu vereinen"
excerpt: "在銀行導入 AI 知識庫查詢系統時，如何防止個資外洩又不犧牲回覆品質？本文介紹一個 GenAI Product Owner 設計的敏感資訊過濾與替換專利架構。 想像這個場景： 你終於把 RAG 系統上線了，客服人員用它查詢客戶資料、業務規則、內部 SOP……效果很好，大家都很開心。 然後法遵部門..."
excerptEn: "When introducing an AI knowledge base query system in a bank, how do you prevent PII leaks without sacrificing response quality? This article introduces a G..."
excerptDe: "Wie verhindert man bei der Einführung eines KI-Wissensdatenbanksystems in einer Bank Datenlecks, ohne die Antwortqualität zu beeinträchtigen? Dieser Artikel..."
date: "2025-06-01"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-pii-filter.webp"
---

## 每一個 GenAI PM 都會遇到的合規噩夢

想像這個場景：

你終於把 RAG 系統上線了，客服人員用它查詢客戶資料、業務規則、內部 SOP……效果很好，大家都很開心。

然後法遵部門來了。

「這個系統的回覆包含了客戶姓名、帳號資訊，這樣符合個資法嗎？」

「內部業務資料顯示在回覆裡，萬一截圖外流怎麼辦？」

「這個回覆提到的時間地點，是不是隱含了某些敏感業務資訊？」

這不是假設場景，這是我親身經歷過的對話。

**身為 GenAI Product Owner，你必須讓 AI 系統「又有用、又合規」——這兩件事不是互斥的。**

我的解法就是專利 **M671223《資訊查詢系統》**中的敏感資訊過濾與替換技術。

---

## 核心機制：替換，而非遮蔽

很多人聽到「敏感資訊處理」，第一反應是「直接刪掉」或「打星號遮蔽」。

但這樣做會讓回覆失去語意完整性，用戶根本看不懂。

這個系統的設計更精巧：**用「同類型、不同內容」的替代訊息取代敏感內容，保留語意結構**。

具體來說，系統會：

1. 接收資訊查詢請求，從知識庫中找出相關金融業務資料

2. 由 LLM 產生「初始回覆」，其中可能包含敏感訊息

3. 輸出資訊處理模組識別初始回覆中的**待替換訊息**，分類為：
   - 個人資料（姓名、身分證號、帳號等）
   - 業務內容（特定產品細節、費率等）
   - 時間資訊（敏感交易時間等）
   - 地點資訊（特定分行、地址等）

4. 依預設規則，將敏感內容替換為**類型相同、內容相異**的替代訊息

5. 輸出最終合規回覆

---

## 為什麼這是 GenAI 產品設計的核心能力？

銀行、醫療、法律……這些高度受監管的行業，是 GenAI 最有價值、也最難落地的市場。

難落地的原因幾乎都不是技術問題，而是**合規問題**。

作為 **GenAI Product Manager**，如果你能在產品架構層面就解決合規疑慮，你就能把競爭對手遠遠甩在後面——因為大多數人還在用「事後 review」的方式處理法遵，而你已經把合規能力內建進系統裡了。

---

## 實作 GenAI 合規架構的三個層次

**Layer 1：輸入端過濾**
在用戶的 prompt 進入系統前，過濾掉不應該被查詢的敏感資料範疇。

**Layer 2：輸出端替換（本專利的核心）**
在回覆送出前，自動識別並替換敏感內容，確保外顯資訊合規。

**Layer 3：稽核日誌**
完整記錄每一次查詢、每一次替換，支援事後稽核與法遵查核。

**只做其中一層是不夠的。三層加在一起，才是真正的 GenAI 合規架構。**

---

*M671223 資訊查詢系統（敏感資訊過濾與替換）｜公告日：2025/06/01｜唯一發明人：劉岦崱*


💬 **延伸閱讀：** [2025 年度回顧與未來展望](/zh/insights/2025-year-in-review)
