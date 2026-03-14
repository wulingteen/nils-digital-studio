---
title: "為什麼金融業 AI 落地比你想的難 10 倍"
titleEn: "Why Deploying LLMs in Banking Is 10x Harder Than You Think"
titleDe: "Warum die KI-Einführung im Bankwesen 10x schwieriger ist als gedacht"
excerpt: "在銀行做 AI 不是選個模型就好。法遵、資安、資料治理、組織文化——每一關都是將 AI 系統從 1 推進到 100 的必經之路。"
excerptEn: "Deploying AI in a bank isn't just picking a model. Compliance, security, data governance, organizational culture — each hurdle is the necessary path from 1 to 100."
excerptDe: "KI in einer Bank einzusetzen bedeutet nicht einfach ein Modell auszuwählen. Compliance, Sicherheit, Data Governance, Organisationskultur — jede Hürde ist der notwendige Weg von 1 bis 100."
date: "2026-03-03"
author: "Nils Liu"
tags:
  - "AI PM 系列"
  - "GenAI"
  - "Architecture"
---

在新創公司做 AI 產品，你可能三天就能上線一個 Chatbot，完成從 0 到 1 的概念驗證 (PoC)。

進入銀行？三個月。如果運氣不好，六個月。

這不是因為銀行工程師比較慢，而是因為金融業的限制條件，會讓你重新思考「AI 落地」這四個字的真正含義。誠如 OpenAI 產品副總裁 Peter Deng 所言：**真正的產品不是螢幕上的像素，而是深度的端到端體驗，而且在 1 到 100 的規模化階段，系統設計與基礎架構的穩健度才是決勝關鍵。**

## 難關 #1：資料存取權限與飛輪建構

在銀行，不是每個人都看得到所有資料。不是每個系統都能互相串接。甚至不是每張表都有完整的 Schema 文件。

當你想建一個 RAG 系統，第一個問題不是「用什麼 embedding model」，而是：
> 「這份文件誰有權限讀？AI 讀了算不算存取？存取紀錄要留多久？」

光是這三個問題，就可以卡你兩個月。但同時，這也是在建構企業專屬的**數據飛輪 (Data Flywheel)**：必須先確保安全合規，後續的權限管理與資料餵養才能生生不息。

## 難關 #2：模型解釋性與無感智能化

金融監理機構（如金管會）對 AI 的基本要求是：**可解釋。** 

這意味著你不能只說「AI 建議買 A 基金」——你要能解釋**為什麼**。是因為客戶的風險偏好？市場趨勢？過去的持有紀錄？
在實作層面，銀行追求的是極致的**無感智能化**。理專不需要知道背後用了什麼大模型，技術完全隱身在他們最熟悉的系統後台。我們必須在架構底層做到：
* **溯源保存**：保存每一次 Retrieval 的來源文件
* **歷程追蹤**：記錄 Prompt 的完整構成
* **引用驗證**：建立回覆與來源的對應關係（Citation）

## 難關 #3：機率系統的測試與驗證

傳統軟體測試是確定性的：Input A → 預期 Output B。
而 LLM 的測試是機率性的：Input A → Output 可能是 B、B'、或 C。

在銀行，這種不確定性在規模化 (1 to 100) 時是不被接受的。因此，需要建立嚴格的防護欄與評估框架：
1. **自動化測試**：用 Golden Dataset 做回歸測試，確保新版 Prompt 不會讓既有品質下降。
2. **人工抽檢**：每週由業務專家抽檢 50 筆回覆，打分標註。
3. **異常偵測**：監控回覆中的敏感詞、異常長度，以及偏離正常分佈的行為。

## 難關 #4：組織文化與成長心態

技術上的困難都可以用工程解決，最難的其實是**人**。

「AI 會不會取代我？」——這是理財專員最常問的問題。如果他們不信任 AI 系統，他們就不會用；不用就沒有使用數據；沒有數據，就無法推動剛才提到的數據飛輪。

我的做法是：**從「助理」而非「替代」的角度導入。**

不是「AI 幫你決定賣什麼給客戶」，而是「AI 幫你兩秒內查到客戶過去半年的所有交易紀錄」。先建立團隊的**成長心態 (Growth Mindset)**，讓他們從害怕出錯轉為協同學習，這才是推動 AI 最強的軟實力。

## 難關 #5：成本控制與基礎架構

企業用 AI 不是免費的。每一次 API call 都有成本，每一次 Fine-tuning 都需要 GPU 時數。在銀行，你還需要考慮：
* **地端部署**：很多敏感資料不能上公有雲。
* **GPU 採購**：一張 A100 的預算可能要走三個月的採購流程。
* **模型授權**：不是每個模型的 License 都允許商業使用。

---

## 為什麼難做還要堅持做？

因為金融業是 AI 最能創造價值的領域之一：
* 海量且乾淨的結構化資料
* 清晰嚴格的決策流程
* 高重複性的大規模知識勞動
* 巨大的效率提升空間

正如 Peter Deng 強調的，技術組合往往優於純粹的技術發明。在銀行做 AI，核心不是發明新模型，而是把現有最強的 AI 技術，透過嚴格的合規與工程架構，完美**組合**進金融場景中。

**越難做的事情，護城河越深。**

如果你能在銀行把 AI 做到 1 到 100，那麼你在任何行業的主戰場都能勝出。

> *這是「AI PM 的真實工作」系列文章。*
