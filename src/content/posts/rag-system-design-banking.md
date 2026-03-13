---
title: "RAG 系統設計：金融知識庫的 3 個關鍵決策"
titleEn: "RAG System Design: 3 Key Decisions for Financial Knowledge Bases"
titleDe: "RAG-Systemdesign: 3 Schlüsselentscheidungen für Finanz-Wissensdatenbanken"
excerpt: "在銀行建 RAG 系統，chunk 策略、embedding 模型、retrieval pipeline 三個決策點怎麼選？實戰經驗分享。"
excerptEn: "Building a RAG system in banking: how to choose your chunk strategy, embedding model, and retrieval pipeline. Lessons from real production experience."
excerptDe: "Ein RAG-System im Bankwesen aufbauen: Wie wählt man Chunk-Strategie, Embedding-Modell und Retrieval-Pipeline? Erfahrungen aus der Produktion."
date: "2026-03-05"
author: "Nils Liu"
tags:
  - "GenAI 實戰"
  - "GenAI"
  - "Architecture"
---

RAG（Retrieval-Augmented Generation）是 2024-2025 最熱門的企業 AI 架構。但真正在企業環境中建過 RAG 系統的人都知道：**魔鬼在細節裡。**

這篇分享我在銀行建構金融知識庫 RAG 系統時，做出的三個關鍵決策。

### 決策 #1：Chunk 策略

Chunking 是 RAG 品質的地基。切得好，後面都順；切不好，再好的 embedding 模型也救不回來。

**我試過的三種策略：**

**固定長度切分（Fixed-size）**
- 優點：簡單、快速
- 缺點：會把句子切斷、無視文件結構
- 適合：非結構化的聊天紀錄

**語意切分（Semantic chunking）**
- 優點：保持段落完整性
- 缺點：chunk 大小不均勻，有些太大有些太小
- 適合：長篇報告、研究文件

**階層式切分（Hierarchical chunking）**
- 優點：保留文件結構（章節 → 段落 → 句子）
- 缺點：實作複雜度高
- 適合：法規文件、SOP、產品說明書

**我們最終的選擇：** 針對不同文件類型使用不同策略。法規文件用階層式，FAQ 用語意切分，市場報告用固定長度。

**關鍵學習：** 沒有一個 chunk 策略適合所有文件。你的知識庫越多元，就越需要多策略的 chunking pipeline。

### 決策 #2：Embedding 模型

Embedding 模型的選擇決定了「什麼被認為是相似的」。

**我們評估的維度：**

1. **多語言支援**：銀行文件有中文、英文、甚至法律用語。需要一個真正理解中文語境的模型。
2. **領域適應性**：通用模型在金融語境下表現會打折。「利率」在日常對話和金融文件中的意義截然不同。
3. **維度與效能平衡**：維度越高，語意表達越豐富，但查詢延遲也越高。

**我們的做法：**
- 從通用模型開始（如 text-embedding-3-large）
- 用金融語料做 fine-tuning
- 建立 evaluation dataset 持續監控 recall 和 precision

**關鍵學習：** 不要在 Day 1 就追求完美的 embedding。先用通用模型跑起來，等你有了夠多的 query log，再做 domain-specific 的優化。

### 決策 #3：Retrieval Pipeline 設計

Retrieval 不只是「找到最相似的 chunk」。在企業環境中，你還需要考慮權限、時效性、以及多跳推理。

**我們的 pipeline 架構：**

\`\`\`
Query → Query Rewriting → Hybrid Search (Vector + BM25)
    → Permission Filter → Reranker → Context Assembly → LLM
\`\`\`

**每個環節的設計考量：**

**Query Rewriting**
使用者的原始查詢往往太短或太模糊。我們用 LLM 把查詢擴寫成多個子查詢，提高 recall。

**Hybrid Search**
純向量搜尋在精確匹配（如法規編號）上表現不好。加入 BM25 做關鍵字匹配，兩者互補。

**Permission Filter**
不是所有使用者都有權限看到所有文件。在 retrieval 階段就過濾，而非等到回覆時才過濾。

**Reranker**
初步檢索的 top-k 結果用 cross-encoder 重新排序，顯著提升精準度。

**Context Assembly**
不只是把 chunk 串在一起。我們會附上來源文件的 metadata（文件名稱、更新日期、分類），讓 LLM 能產出有 citation 的回覆。

### 效能數據

優化前後的對比：

| 指標 | 優化前 | 優化後 |
|------|--------|--------|
| Recall@10 | 62% | 89% |
| Answer Relevance | 71% | 88% |
| Faithfulness | 78% | 94% |
| 平均回應時間 | 4.2s | 2.1s |

### 下一步：GraphRAG

我們已經開始嘗試把部分知識轉換成 Knowledge Graph。初步結果顯示，在需要多跳推理的場景中，GraphRAG 的正確率從傳統 RAG 的 33-76% 提升到 86%。

---

*這是「GenAI 產品實戰筆記」系列的第一篇。*
