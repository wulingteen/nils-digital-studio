---
title: "【專利五】GenAI 系統的資安盲點：一個 Product Owner 如何用 AI 打造自適應安全防護？"
titleEn: "[Patent 5] GenAI Security Blind Spots: How a Product Owner Built Adaptive Security with AI"
titleDe: "[Patent 5] Sicherheitslücken in GenAI: Wie ein Product Owner adaptive Sicherheit mit KI entwickelte"
excerpt: "當 GenAI 系統被用來查詢敏感資料，如何防止惡意使用者繞過安全機制？本文介紹銀行 AI 產品經理如何設計動態存取控制專利，用 AI 守護 AI。 在銀行導入生成式 AI 的過程中，最讓我夜不能寐的問題不是模型效果，而是安全性。 一個能查詢客戶資料的 AI 聊天機器人，如果被有心人士透過特製 ..."
excerptEn: "When a GenAI system queries sensitive data, how do you prevent malicious users from bypassing security? This article details how a bank AI Product Manager d..."
excerptDe: "Wenn ein GenAI-System sensible Daten abfragt, wie verhindert man, dass böswillige Nutzer die Sicherheit umgehen? Dieser Artikel beschreibt detailliert, wie..."
date: "2025-09-11"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-adaptive-security.webp"
---

## 「用 AI 守護 AI」——這不是口號，是架構設計

在銀行導入生成式 AI 的過程中，最讓我夜不能寐的問題不是模型效果，而是**安全性**。

一個能查詢客戶資料的 AI 聊天機器人，如果被有心人士透過特製 prompt 操控，後果不堪設想。

更麻煩的是，傳統資安的靜態規則根本追不上 prompt injection 的創意。攻擊者每次換個說法，規則就失效了。

這促使我設計了一套**生成式自適應安全策略**，並最終取得專利 **M674713《資料查詢系統》**。

---

## 系統架構：讓 AI 學會「看懂惡意」

系統分成兩個核心層：

**第一層：用戶行為與意圖分析模型**

- **行為分析模組**：分析用戶的查詢頻率、時間、IP 位置、歷史查詢模式

- **即時意圖分析模組**：用 NLP 解讀每次查詢的潛在意圖

- **異常操作偵測模組**：識別偏離正常模式的操作

- **攻擊行為判斷模組**：綜合上述訊號，輸出風險判斷

**第二層：安全策略生成模型**

- **動態存取控制模組**：根據查詢模式，即時調整該用戶的資料庫存取權限

- **智慧阻擋模組**：依風險等級決定是否攔截

- **嚴格回應控制模組**：對高風險查詢產生「策略性回應」（而非直接錯誤訊息，避免洩漏系統資訊）

還有一個關鍵設計：**持續優化模組**——當系統偵測到攻擊行為，會用 GAN 生成類似的模擬攻擊情境，持續訓練模型。越被攻擊、越聰明。

---

## 為什麼這是 GenAI 產品設計的核心議題？

作為 **GenAI Product Manager**，安全性不是「交給資安部門」的事，它必須是產品架構的一部分。

在設計這個系統時，我學到幾個重要洞察：

**1. 靜態規則永遠追不上動態攻擊**
你設的每一條 guardrail，都可能被有創意的用戶繞過。系統本身需要有「學習能力」。

**2. 安全性與用戶體驗不是零和**
好的安全設計是讓正常用戶感覺不到它的存在，只有異常行為才會觸發。這需要非常精細的風險分級。

**3. AI 的存取控制應該是動態的**
不是「你有沒有權限」的二元判斷，而是「這個查詢在這個情境下，你現在適合看到什麼等級的資訊」。

---

## GenAI PO 的 Checklist：你的 AI 系統夠安全嗎？

- [ ] 系統能否偵測異常查詢模式？

- [ ] 有沒有即時的意圖分析機制？

- [ ] 存取控制是靜態角色還是動態情境感知？

- [ ] 系統被攻擊後會變聰明，還是原地不動？

**安全是 GenAI 產品上線前最後一道門，也是用戶信任的第一道牆。**

---

*M674713 資料查詢系統（生成式自適應安全策略）｜公告日：2025/09/11｜唯一發明人：劉岦崱*


💬 **延伸閱讀：** [2025 年度回顧與未來展望](/zh/insights/2025-year-in-review)
