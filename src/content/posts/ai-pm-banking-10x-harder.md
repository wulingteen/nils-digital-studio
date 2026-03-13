---
title: "為什麼金融業 AI 落地比你想的難 10 倍"
titleEn: "Why Deploying LLMs in Banking Is 10x Harder Than You Think"
titleDe: "Warum die KI-Einführung im Bankwesen 10x schwieriger ist als gedacht"
excerpt: "在銀行做 AI 不是選個模型就好。法遵、資安、資料治理、組織文化——每一關都比上一關難打。"
excerptEn: "Deploying AI in a bank isn't just picking a model. Compliance, security, data governance, organizational culture — each hurdle is harder than the last."
excerptDe: "KI in einer Bank einzusetzen bedeutet nicht einfach ein Modell auszuwählen. Compliance, Sicherheit, Data Governance, Organisationskultur — jede Hürde ist schwieriger als die vorherige."
date: "2026-03-03"
author: "Nils Liu"
tags:
  - "AI PM 系列"
  - "GenAI"
  - "Architecture"
---

在新創公司做 AI 產品，你可能三天就能上線一個 chatbot。

在銀行？三個月。如果運氣不好，六個月。

這不是因為銀行工程師比較慢，而是因為金融業的限制條件，會讓你重新思考「AI 落地」這四個字的真正含義。

### 難關 #1：資料存取權限

在銀行，不是每個人都看得到所有資料。不是每個系統都能互相串接。甚至不是每張表都有完整的 schema 文件。

當你想建一個 RAG 系統，第一個問題不是「用什麼 embedding model」，而是：

> 「這份文件誰有權限讀？AI 讀了算不算存取？存取紀錄要留多久？」

光是這三個問題，就可以卡你兩個月。

### 難關 #2：模型解釋性

金融監理機構（如金管會）對 AI 的基本要求是：**可解釋。**

這意味著你不能只說「AI 建議買 A 基金」——你要能解釋**為什麼**。是因為客戶的風險偏好？市場趨勢？過去的持有紀錄？

在技術層面，這要求你的系統必須做到：
- 保存每次 retrieval 的來源文件
- 記錄 prompt 的完整構成
- 建立回覆與來源的對應關係（citation）

### 難關 #3：測試與驗證

傳統軟體測試是確定性的：input A → 預期 output B。

LLM 的測試是機率性的：input A → output 可能是 B、B'、或 C。

在銀行，這種不確定性是不被接受的。所以我們建立了一套 evaluation framework：

1. **自動化測試**：用 golden dataset 做 regression test，確保新版 prompt 不會讓既有回覆品質下降
2. **人工抽檢**：每週由業務專家抽檢 50 筆回覆，打分標註
3. **異常偵測**：監控回覆中的敏感詞、異常長度、以及偏離正常分佈的回覆

### 難關 #4：組織文化

技術上的困難都可以用工程解決。最難的其實是**人**。

「AI 會不會取代我？」——這是理財專員最常問的問題。如果他們不信任 AI，他們就不會用；不用就沒有使用數據；沒有數據就無法證明價值。

我的做法是：**從「助理」而非「替代」的角度導入。**

不是「AI 幫你決定賣什麼給客戶」，而是「AI 幫你兩秒內查到客戶過去半年的所有交易紀錄」。先建立信任，再逐步擴大功能。

### 難關 #5：成本控制

企業用 AI 不是免費的。每一次 API call 都有成本。每一次 fine-tuning 都需要 GPU 時數。

在銀行，你還需要考慮：
- **地端部署**：很多資料不能上公有雲
- **GPU 採購**：一張 A100 的預算要走三個月的採購流程
- **模型授權**：不是每個模型的 license 都允許商業使用

### 那為什麼還要做？

因為金融業是 AI 最能創造價值的領域之一。

- 海量結構化資料
- 清晰的決策流程
- 高重複性的工作
- 巨大的效率提升空間

**難做的事情，才有護城河。**

如果你能在銀行把 AI 做成功，你在任何行業都能做。

---

*這是「AI PM 的真實工作」系列的第三篇。*
