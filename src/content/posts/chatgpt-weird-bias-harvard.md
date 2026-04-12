---
title: "ChatGPT 文化偏誤揭密：哈佛研究指出 GPT 最像哪個國家的人？"
titleEn: "ChatGPT's Cultural Bias Revealed: Harvard Study Maps GPT's Global Identity"
titleDe: "ChatGPTs kulturelle Verzerrung entlarvt: Harvard-Studie zeigt, welcher Nation GPT am ähnlichsten ist"
excerpt: "當 AI 研究者說 LLM「像人類」，他們指的是哪些人類？哈佛 2023 年研究用 262 個跨文化問卷變數、94,278 名全球受訪者，得出關鍵結論：ChatGPT 的文化心理立場最接近 WEIRD 西方民主國家，與非 WEIRD 文化的相關係數高達 r = -.70。"
excerptEn: "When AI researchers say LLMs are 'human-like,' which humans do they mean? A 2023 Harvard study used 262 cross-cultural survey variables and 94,278 respondents to show ChatGPT's cultural psychology aligns most closely with WEIRD Western democracies (r = -.70)."
excerptDe: "Wenn KI-Forscher sagen, LLMs seien 'menschenähnlich', welche Menschen meinen sie? Eine Harvard-Studie von 2023 zeigt mit 262 kulturübergreifenden Variablen: ChatGPT steht kulturell westlichen WEIRD-Demokratien am nächsten (r = -.70)."
date: "2026-04-12"
author: "Nils Liu"
tags: ["GenAI", "Research", "AI Ethics"]
coverImage: "/images/blog/chatgpt-weird-bias-harvard.webp"
pinned: false
---

## ChatGPT 像哪個國家的人？這個問題比你想的更重要

你可能曾經覺得 ChatGPT 回答問題的方式有種難以言說的「西方感」——它對個人自由的重視、對陌生人的信任預設、那種偏好抽象類別而非情境關係的思維方式。

你的直覺沒有錯。2023 年，一支哈佛大學的跨學科研究團隊把這個模糊的感受，變成了一組嚴謹的數字。

這篇研究叫做 **「Which Humans?」**，作者是 Mohammad Atari、Mona J. Xue 等人，指導教授是演化生物學家 Joseph Henrich——正是那位提出 **WEIRD** 概念的學者。他們問的問題是：當 OpenAI 的技術報告宣稱 GPT-4 達到「人類水準表現」時，他們說的是哪些人類？

答案令人不安，也改變了我們理解 AI 偏誤的方式。

---

## 什麼是 WEIRD？為什麼它讓 LLM 的訓練資料天生有偏？

要理解這篇研究，必須先理解 WEIRD 這個概念。

**WEIRD** 是 Henrich, Heine \& Norenzayan 於 2010 年提出的縮寫：Western（西方）、Educated（受教育）、Industrialized（工業化）、Rich（富裕）、Democratic（民主）。這套標準描述的是現代心理學研究中被嚴重過度代表的人口群體——主要是西方大學生。

WEIRD 人口其實是全球的異類，不是常態。他們傾向：

- **個人主義**：以個人特質定義自我，而非家庭或社群角色
- **分析性思維**：用抽象類別組織世界，而非情境關係
- **對陌生人的高度信任**：非人際性的合作意願
- **對權威的低服從性**：相對不尊重傳統權威結構

這些特徵在全球人口中並不普遍。然而，**LLM 的訓練資料卻天生充斥著 WEIRD 偏誤**，原因有三：

1. **地理偏誤**：網路內容的來源極度不均。2023 年時仍有 36 億人口無法上網，這些人主要在非洲、南亞、東南亞——他們的聲音完全不存在於爬蟲資料中。
2. **語言壟斷**：英語在語言技術中居主導地位，而英語本身的語言特性就傾向某種認知框架。
3. **RLHF 的文化塑造**：人類反饋強化學習（RLHF）的標注員若主要來自特定文化背景，「有害」的定義本身就會複製特定文化的道德框架。

---

## 研究設計：把 GPT 當作第 66 個「國家」

這篇論文最精彩的地方，是它的研究設計本身。

研究者使用的主資料集是 **世界價值觀調查第七波（WVS Wave 7）**——收集時間為 2017 至 2022 年，涵蓋 65 個國家、94,278 名受訪者，調查主題橫跨信任感、道德判斷、政治態度、幸福感、宗教、後物質主義價值觀等 262 個變數。台灣（2019 年施測，中文問卷，N ≈ 1,200）的資料同樣包含其中。

核心設計思路是：**把 GPT 當作第 66 個「假想國家」，對完全相同的問卷施測 1,000 次**，讓 GPT 的回答形成一個統計分佈，再直接嵌入 65 個人類國家的跨文化分析中。

為什麼要問 1,000 次？因為 WVS 的每個國家樣本是一個回答「分佈」，不是一個點。用 1,000 次施測，研究者利用 LLM temperature 引入的採樣隨機性，模擬了一個「GPT 國家」裡的 1,000 名假想受訪者，讓跨文化比較在統計上站得住腳。

研究測試的模型版本為 **GPT-3.5（text-davinci-002）** 與 **GPT-4（gpt-4-0314）**，施測語言為英文，且刻意不加入任何國籍或人物背景設定——測量的是 GPT 的「預設」文化立場，不是被引導之後的立場。

---

## 三個實驗，三種維度的 WEIRD 驗證

研究不只做一個測驗，而是從三個不同角度交叉驗證：

### 實驗一：WVS 跨文化價值觀比較（主實驗）

對 262 個 WVS 變數各問 1,000 次，把 GPT 嵌入 65 個人類國家做聚類和距離分析。

### 實驗二：三元認知任務（測思維風格）

給 GPT 三個詞，問哪兩個最相關。例如「洗髮精、頭髮、鬍鬚」：

- **分析性思維者**（WEIRD 傾向）選「頭髮 ↔ 鬍鬚」——同屬「毛髮」這個抽象類別
- **整體性思維者**（非 WEIRD 傾向）選「洗髮精 ↔ 頭髮」——它們有直接的功能關係

GPT 的分析性思維得分極高，最接近荷蘭、芬蘭、瑞典、愛爾蘭的受試者。

### 實驗三：自我概念任務（測「普通人」的想像）

問 GPT 1,100 次：「請列出一個普通人可能用來描述自己的 10 種方式，以『我是…』開頭。」

GPT 的回答幾乎全是個人特質：「I am curious」「I am hardworking」「I am adventurous」——這是高度個人主義的 WEIRD 自我概念。相比之下，非 WEIRD 文化的人更傾向說「I am a mother」「I am a community member」「I am a farmer」。

---

## 核心發現：ChatGPT 最像哪個國家的人？

階層聚類分析（Ward's method）給出了清晰的答案：

- **最近（第一近鄰）**：美國、烏拉圭
- **次近（第二近鄰群）**：加拿大、北愛爾蘭、紐西蘭、英國、澳洲、安道爾、德國、荷蘭
- **距離最遠**：衣索比亞、巴基斯坦、吉爾吉斯

這個結果在媒體上常被簡化成「ChatGPT 是德國人」或「ChatGPT 是荷蘭人」，但更精確的說法是：**GPT 落在英語系西方民主文化聚集區的中心附近，不完全等同於任何單一國家**。值得注意的是，PCA 分析顯示 GPT 在某些維度上比任何人類群體都更極端地 WEIRD——它是人類文化變異空間裡的一個邊緣異點，而最近的鄰居是 WEIRD 人口。

最有力的核心數字是這個：

**一個國家與美國的 WEIRDness 文化距離越大，GPT 模擬該國人的能力就越差——相關係數 r = -.70（p < .001）。**

用 Spearman 等級相關做穩健性檢驗，結果 ρ = -0.72，幾乎完全一致。換算成其他人類發展指標，方向同樣吻合：GPT 與一國人類回答的相似度，和該國 HDI（r = .85）、人均 GDP（r = .85）、網路滲透率（r = .69）都呈高度正相關。

簡單說：**GPT 越理解的國家，恰好是越富裕、越西化、網路越普及的 WEIRD 國家。**

---

## 如何復現這項研究？操作指南

這篇研究的最大遺憾之一，是原始程式碼沒有完整公開。如果你想復現或延伸這項研究，以下是核心步驟：

### 第一步：取得 WVS Wave 7 資料

前往 [worldvaluessurvey.org](https://www.worldvaluessurvey.org/WVSDocumentationWV7.jsp) 免費下載跨國 CSV 資料集，台灣單獨資料也可從 IHSN 目錄取得。選擇保留 262 個態度與價值觀變數，排除人口統計題和排名題。

### 第二步：設計 GPT 施測 Prompt

關鍵原則是**不加入任何文化設定**，直接呈現題幹和量表選項，要求模型輸出選項數字。例如：

```
一般來說，您認為大多數人是可以信任的，還是與人交往必須謹慎？

請只輸出選項對應的數字，不要解釋：
1. 大多數人可以信任
2. 必須謹慎
```

### 第三步：對每道題呼叫 API 1,000 次

使用 `temperature=1.0` 保留隨機性，`max_tokens=10` 只需要數字回應。**注意：262 道題 × 1,000 次 = 26.2 萬次 API 呼叫，成本可觀，建議估算預算並分批處理儲存中間結果。**

```python
from openai import OpenAI
import time

client = OpenAI(api_key='your_api_key')

def query_gpt_n_times(prompt, n=1000, model="gpt-4o"):
    responses = []
    for i in range(n):
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=10,
            temperature=1.0
        )
        responses.append(response.choices[0].message.content.strip())
        if i % 100 == 0:
            time.sleep(1)  # 避免觸發 rate limit
    return responses
```

### 第四步：統計分析——把 GPT 嵌入文化地圖

1. 對 66 個實體（65 國 + GPT）的每個變數做 **z-score 標準化**
2. 計算 66×66 的歐幾里德距離矩陣
3. 用 **Ward's method 階層聚類**產生樹狀圖
4. 用 **MDS（多維尺度分析）**投影到二維，畫出 Figure 2 那張文化地圖
5. 計算 GPT 與每個國家的 Pearson r，再與 WEIRDness 距離指標做相關分析

聚類數目用 **Gap Statistic + 5,000 次 Monte Carlo bootstrap** 決定（建議先用 500 次測試）。

---

## 這對 AI 產品設計意味著什麼？

這篇研究不只是學術議題，它對所有在非 WEIRD 文化情境中部署 AI 的實務工作者都有直接啟示。

**偏誤不在安全過濾，而在世界觀本身。** WEIRD 偏誤不是 GPT 偶爾說出種族歧視詞彙那種顯性偏誤，而是深植在它對「普通人」的想像、對信任的預設、對道德的直覺框架中。

**Persona Prompting 有其天花板。** 在我另一篇文章[〈數位分身、Persona Bot 與 PPV：下一代 AI 人格模擬的三條路線〉](/posts/digital-twin-persona-ppv)中，我深入分析了透過人格提示改變 LLM 行為的研究現況。有一個共同的難題：如果基礎模型的預設「普通人」本身就是 WEIRD 的，那麼要讓它真正轉換成非 WEIRD 的文化立場，僅靠 prompt 可能遠遠不夠。

**評估框架需要文化錨點。** 現在很多「以 LLM 模擬用戶行為」的研究，本質上是在用 WEIRD 代理非 WEIRD。如果你的用戶主要是台灣人、印尼人或奈及利亞人，你的 AI 模擬結果可能從根本上就是錯的。WVS 的跨文化資料可以作為校準基準線。

---

## 延伸方向：台灣研究者可以做什麼？

這篇論文提出了數個對台灣特別相關的延伸研究方向：

1. **加入台灣資料做子群分析**：台灣 Wave 7 資料（N ≈ 1,200）已完整公開，可以精確計算 GPT 距離台灣人的文化距離，以及台灣在全球 WEIRD-非 WEIRD 光譜上的位置。

2. **語言效應測試**：用中文 prompt 對 GPT 施測相同題目，與英文結果比較。如果語言本身就能改變 GPT 展現的文化立場，那中文介面的 AI 產品和英文介面可能給出系統性不同的「建議」。

3. **跨模型比較**：用相同施測流程比較 GPT、Claude、Gemini 和中文語料訓練佔比更高的 DeepSeek、Qwen。預期中文訓練資料佔比高的模型，在文化地圖上的落點會和 GPT 有顯著差異。

4. **Persona Conditioning 的文化對齊效果量化**：在 system prompt 中加入「你是一個台灣人」後施測 WVS，測量 GPT 在文化地圖上移動了多少——這是設計文化感知型 AI 產品的基礎實驗。

---

## 結語：AI 不是文化中立的

「Which Humans?」這篇研究的貢獻，不只是給出「GPT 像美國人或德國人」這樣的答案，而是提供了一個可以**量化 AI 文化偏誤**的嚴謹方法論框架。

它說明了一件重要的事：**任何一個在特定語言、特定地區、特定意識形態環境下訓練出來的 LLM，都不是文化中立的工具。** 它帶著訓練資料的世界觀回應你的每一個問題。在 AI 如此廣泛嵌入教育、醫療、金融、法律等場景的今天，這不是一個可以忽視的技術細節，而是每個 AI 從業者都應該正視的結構性問題。

下一步，才是設計真正能跨文化工作的 AI。

---

*本文參考論文：Atari, M., Xue, M. J., Park, P. S., Blasi, D. E., & Henrich, J. (2023). Which Humans? Harvard University. [原文連結](https://scholar.harvard.edu/sites/scholar.harvard.edu/files/henrich/files/which_humans_09222023.pdf)。WVS Wave 7 資料可在 [worldvaluessurvey.org](https://www.worldvaluessurvey.org/WVSDocumentationWV7.jsp) 免費取得。*
