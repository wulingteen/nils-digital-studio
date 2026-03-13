---
title: "AI PM 和一般 PM 差在哪？技能樹完整拆解"
titleEn: "AI PM vs Traditional PM: A Complete Skill Tree Breakdown"
titleDe: "AI PM vs. Traditioneller PM: Ein vollständiger Skill-Tree-Vergleich"
excerpt: "AI PM 需要寫程式嗎？需要懂數學嗎？一張技能樹圖，拆解 AI PM 和傳統 PM 的能力差異。"
excerptEn: "Does an AI PM need to code? Need to understand math? A complete skill tree breakdown comparing AI PMs and traditional PMs."
excerptDe: "Muss ein AI PM programmieren können? Muss er Mathematik verstehen? Ein vollständiger Skill-Tree-Vergleich zwischen AI PMs und traditionellen PMs."
date: "2026-03-04"
author: "Nils Liu"
tags:
  - "AI PM 系列"
  - "Career"
---

我被問過最多次的問題就是：「AI PM 跟一般 PM 到底差在哪？」

簡短版答案：**一般 PM 管的是確定性的系統，AI PM 管的是機率性的系統。**

這個差異，衍生出完全不同的技能需求。

### 共通的底層能力

先說共通的部分。不管是什麼 PM，你都需要：

- **需求拆解**：把模糊的業務目標變成可執行的 spec
- **優先排序**：資源永遠不夠，你要決定先做什麼
- **跨部門溝通**：工程、設計、業務、法務——PM 是所有人的翻譯機
- **產品思維**：理解用戶痛點、定義 MVP、設計迭代策略

這些是基本盤，不會因為你做的是 AI 就不用。

### AI PM 額外需要的技能

#### 1. 機器學習基礎理解

你不需要自己寫模型，但你需要知道：
- Transformer 架構的基本概念
- RAG 的運作原理
- Prompt engineering 的基本技巧
- Fine-tuning vs. few-shot vs. zero-shot 的差異
- Token、context window、embedding 是什麼

**為什麼？** 因為你需要和工程師討論方案的可行性。當工程師說「context window 不夠用」，你需要知道這意味著什麼、有什麼替代方案。

#### 2. 資料敏感度

AI 產品的品質 70% 取決於資料品質。AI PM 需要問的問題：
- 資料從哪裡來？品質如何？
- 有沒有標註（labeling）？標註的一致性如何？
- 資料的更新頻率是什麼？
- 有沒有偏差（bias）的風險？

#### 3. 評估能力（Evaluation）

傳統 PM 用 AB test 看 conversion rate。AI PM 要設計更複雜的評估機制：

- **自動化指標**：BLEU、ROUGE、Cosine Similarity
- **人工評估**：Relevance、Faithfulness、Harmfulness
- **業務指標**：用了 AI 之後，專員的平均服務時間有沒有下降？客戶滿意度有沒有上升？

#### 4. 風險管理

AI 系統有一種傳統軟體沒有的風險：**幻覺（Hallucination）**。

你的系統可能在 99% 的情況下都回答正確，但那 1% 的錯誤回答可能造成嚴重後果——特別是在金融業。

AI PM 需要設計：
- Guardrails（輸入輸出的安全護欄）
- Fallback 機制（AI 不確定時怎麼處理）
- Human-in-the-loop（哪些場景需要人工審核）

#### 5. 合規意識

在受監管的行業，AI PM 還需要理解：
- 資料保護法規（個資法、GDPR）
- 模型可解釋性要求
- AI 倫理準則
- 專利與智財權

### 技能樹對照表

| 能力 | 傳統 PM | AI PM |
|------|---------|-------|
| 需求拆解 | ✅ | ✅ |
| 優先排序 | ✅ | ✅ |
| 跨部門溝通 | ✅ | ✅ |
| ML 基礎理解 | ❌ | ✅ |
| 資料敏感度 | △ | ✅ |
| 評估設計 | △ | ✅ |
| 風險管理 | △ | ✅✅ |
| 合規意識 | △ | ✅✅ |
| Prompt 工程 | ❌ | ✅ |

### 轉職建議

如果你是傳統 PM 想轉 AI PM：

1. **先學 prompt engineering**——這是進入門檻最低、收穫最大的投資
2. **做一個 side project**——用 OpenAI API 做一個小工具，從頭體驗 AI 產品的開發流程
3. **讀論文摘要，不用讀全文**——了解最新的技術趨勢，不需要理解每個公式
4. **找到你的領域優勢**——金融、醫療、製造——AI PM 的競爭力來自「AI + 領域知識」的結合

---

*這是「AI PM 的真實工作」系列的最終篇。*
