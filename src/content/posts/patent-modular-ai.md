---
title: "【專利四】模組化 GenAI 系統設計：為什麼不是「功能越多越好」？一個 PM 的反直覺專利"
titleEn: "[Patent 4] Modular GenAI System Design"
titleDe: "[Patent 4] Modulares GenAI-Systemdesign"
excerpt: "大型語言模型部署成本越來越高？本文分享一位銀行 GenAI Product Manager 如何透過模組化架構設計，讓 AI 系統可依需求客製，降低硬體負擔並提升彈性。 剛開始做企業 GenAI 產品的時候，我也曾經迷信「模型越大越好、功能越多越強」。 直到我看到實際的部署成本。 一個部署在企業..."
excerptEn: "Are LLM deployment costs skyrocketing? This article shares how a bank GenAI Product Manager used modular architecture design to customize AI systems on dema..."
excerptDe: "Explodieren die Bereitstellungskosten für LLMs? Dieser Artikel zeigt, wie ein Bank-GenAI-Produktmanager eine modulare Architektur nutzte, um KI-Systeme nach..."
date: "2025-06-11"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-modular-ai.webp"
---

## 企業導入 LLM 最常犯的錯：把「強大」等於「好用」

剛開始做企業 GenAI 產品的時候，我也曾經迷信「模型越大越好、功能越多越強」。

直到我看到實際的部署成本。

一個部署在企業內網的 LLM 服務，如果每個場景都用全功能模型，GPU 成本、推論延遲、維護複雜度……全都往上衝。

更關鍵的是：**大部分的業務場景，根本用不到全部功能。**

客服機器人需要的是自然語言理解 + 對話管理 + 知識庫查詢。財務分析助理需要的是資料理解 + 報表生成。個人化推薦系統需要的是用戶畫像 + 偏好比對。

這個洞察促成了我的專利 **M671449《客製化生成式人工智慧系統》**——一個真正模組化的 GenAI 架構。

---

## 核心設計：「積木式」AI 系統

這套系統的基礎模組包括：

| 模組 | 功能 |
|------|------|
| 自然語言理解模組 | 將使用者輸入轉換成結構化處理後訊息 |
| 對話管理模組 | 根據處理後訊息決定行動決策 |
| 知識庫模組 | 查詢結構化與非結構化資料（支援知識圖譜） |
| 文本生成模組 | 根據決策與查詢結果生成回應文本 |

進階可選模組：

- **情感分析模組**：讓回應更有溫度

- **個人化模組**：接入內部伺服器的客戶歷史資料

- **學習與適應模組**：從互動回饋持續優化生成品質

- **中央控制模組**：協調各模組的執行順序與資訊傳遞

根據不同業務場景，你可以只部署需要的模組組合，大幅降低硬體需求與系統複雜度。

---

## 這對 GenAI Product Owner 意味著什麼？

作為 **GenAI PO**，這套架構給我最大的啟發是：

**AI 產品的架構設計，決定了它的邊際成本曲線。**

全功能部署的邊際成本幾乎是固定的（不管用到幾個功能，成本都在那裡）。模組化部署讓你可以根據用量動態配置資源，業務增長時水平擴展，試驗新場景時成本極低。

這其實是非常傳統的軟體工程思維——**關注點分離（Separation of Concerns）**——只是現在要應用到 AI 模組上。

---

## 三個 GenAI 架構設計原則

從這個專利中，我整理出三個對 GenAI Product Manager 有用的架構原則：

**1. 按需組合，而非一次到位**
不要試圖在第一版就實現所有功能。先找到核心模組，驗證後再疊加。

**2. 每個模組應該可以獨立替換**
LLM 技術演進非常快。如果你的文本生成模組被「焊死」在系統裡，換模型時的成本會讓你崩潰。

**3. 知識庫模組是競爭壁壘**
其他模組容易被競品複製，但你的知識庫——客戶資料、業務規則、機構記憶——才是真正難以複製的護城河。

---

*M671449 客製化生成式人工智慧系統｜公告日：2025/06/11｜唯一發明人：劉岦崱*


💬 **延伸閱讀：** [2025 年度回顧與未來展望](/zh/insights/2025-year-in-review)
