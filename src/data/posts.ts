export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    coverImage?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "ithome-hello-world-2025",
        title: "iThome Hello World 2025：從 MCP 到 Vibe Coding，四場 AI 實戰分享",
        excerpt: "今年我在 iThome Hello World 開發者大會帶來四場密集的 AI 實戰分享，從 MCP 生態系、GraphRAG 到企業級 LLM 防禦機制，探討大型語言模型落地企業的核心技術。",
        date: "2025-10-20",
        author: "Nils Liu",
        coverImage: "/images/blog/ithome-hello-world-2025.png",
        content: `在今年的 iThome Hello World 2025 開發者大會上，我一口氣帶來了四場跟 AI 實戰高度相關的議程。這不僅僅是知識的分享，更是我們團隊在銀行內部推動 LLM 落地過程中的血汗經驗總結。

相較於談論 AI 的未來願景，這次的四場分享，我更專注於「怎麼把 AI 系統做穩、做深、做得安全」。以下是四場議程的精華回顧：

## 1. MCP 大聯盟：打造 AI 驅動的資料整合與早期提示
*(2025-10-14 | 11:00 - 12:30)*

Model Context Protocol (MCP) 正在重新定義 AI Agent 如何與外部系統對接。在這場分享中，我們探討了如何利用 MCP 構建標準化的工具列，讓 LLM 能夠安全且高效地調用企業內部資料API，並透過早期提示（Early Prompting）機制來引導 Agent 的決策路徑。

## 2. 讓記憶「成群結隊」：利用 GraphRAG 建立客製化 AI 客服
*(2025-10-14 | 15:25 - 15:55)*

傳統 RAG 在面對跨維度、多跳躍的推理問題時往往力有未逮。我們分享了這一年來將純文本 RAG 升級為知識圖譜架構（Ontology + GraphRAG）的實戰經驗。透過讓資料結構成群結隊，客製化 AI 客服不僅能回答單一問題，還能展現出具備脈絡記憶的理解能力。

## 3. 五個實習生，一條生產線：Vibe Coding 實戰工作坊
*(2025-10-15 | 09:00 - 10:30)*

如何帶領零經驗的新人快速打造能用的 AI 原型？這場 90 分鐘的實戰工作坊，我帶著大家體驗了敏捷的 Vibe Coding 模式。示範如何運用 Cursor、Claude 或 Gemini 這些工具，把「詠唱（Prompting）」與「寫扣（Coding）」無縫接軌，讓五個人的生產力媲美一支完整的開發團隊。

## 4. 企業級 LLM Guardrail 與 Prompt Hardening
*(2025-10-15 | 14:10 - 14:55)*

在金融業，安全與合規是不可談判的前提。這場我們切入了最硬核的 LLM 防禦戰——從防範 Prompt Injection 到實作企業級 Guardrail（護欄機制）。探討了如何透過 Prompt Hardening 強化模型自身的抵抗力，以及如何在外圍架設檢查層，確保 AI 輸出的穩定與合規。

---

如果對這四場的投影片或技術細節感興趣，歡迎直接到大會的講者頁面查看更多資訊，或隨時找我交流討論！

[👉 查看完整議程與講者資訊 (iThome Hello World 2025)](https://hwdc.ithome.com.tw/2025/speaker-page/1582)`
    },
    {
        id: "2025-year-in-review",
        title: "2025 年度回顧：不喧嘩的扎實推動",
        excerpt: "我的 2025 年 AI 歷險有四個數字：6、5、1、6。不是因為多光鮮，而是因為很踏實。在銀行做 GenAI 就像在營運中的大樓換管線，真正難的往往不是模型，而是工程與信任。",
        date: "2025-12-31",
        author: "Nils Liu",
        coverImage: "/images/blog/2025-year-in-review.jpg",
        content: `我的 2025 年 AI 歷險有四個數字：6、5、1、6。

6 項新型專利、5 項發明專利等待批准、1 篇 conference paper 投稿、加上 6 場分享——1 場 DevOpsDay、4 場 iThome Hello World、1 場 Google DevFest Taipei。

對我來說，2025 真的是一個很適合被盤點的年份——不是因為它多光鮮，而是因為它很踏實，很像每天把一點點事情做完，最後回頭看才發現：欸，原來我走了這麼多步。

## 銀行裡的 GenAI：在營運中的大樓換管線

我一直覺得在銀行做 GenAI，有點像在一棟還在營運的大樓裡換管線。

你不能停水停電、不能影響住戶，甚至不能讓人覺得「這個改動很危險」。所以很多時候，真正難的不是模型，而是工程、流程、治理、邊界、責任，還有一大堆看起來不浪漫但超重要的細節。

2025 我更確定自己喜歡的事情就是：把「看起來很玄」的 AI，變成「可以被驗收、可以被信任、可以長期運轉」的能力。

## 專利：逼自己誠實的過程

專利這件事也是。

拿到 6 項新型專利已核准、還有 5 項發明專利在等，其實對我來說不只是多幾張證書。它比較像一種逼自己誠實的方式：
- 我到底解了什麼問題？
- 我說的方法邊界在哪？
- 我能不能把價值寫成一種別人看得懂、也能檢驗的語言？

每次寫到最後都覺得自己像在做一次超硬的 code review，只是 reviewer 不是同事，是這個世界。

然後那篇 conference paper 的投稿，對我來說也很有象徵性。因為它不是把想法丟出去而已，而是把自己放到一個會被挑戰、會被校正的場域裡。

我很清楚：如果不把它寫出來，它就只會永遠停在「我覺得」；可一旦寫出來，它就開始變成能被討論、能被改進、甚至能被推翻的東西。

奇妙的是，我反而很喜歡這種不確定感——因為那代表我還在學，還在長。

## 演講與分享：自我檢驗的場域

至於演講，2025 真的講了不少：
- DevOpsDay (1場)
- iThome Hello World (4場)
- Google DevFest Taipei (1場)

每次上台前我都會緊張，但那個緊張不是怕講不好，而是怕自己講得太像口號、太像「AI 很強大家快上車」。我更想講的是現實：企業導入 GenAI 真正困難的地方，往往是你怎麼讓它可控、可追溯、可維運、可被信任。

你講得越多，越會發現能把一件事講清楚，其實是一種自我檢驗——講不清楚的地方，就是自己還沒想透的地方。

## 2026：Run, don't walk!

2025 我學到的不是怎麼更快，而是怎麼更穩。

這個時代太容易被速度牽著走，但我越來越相信：**真正長期有價值的是那種不喧嘩的扎實**——把系統做穩、把流程做清楚、把風險放進設計裡、把人放在科技之前。

這些事做起來不炫，但做完會長出一種很可靠的底氣。

如果你也在做一樣的事——在限制很多、責任很重的地方，把技術變成能幫到人的東西——我想跟你說，你其實已經很不容易了。你不需要一次搬走整座山，你只要每天多推一點點。那些看起來很小的累積，最後會變成你最可靠的武器。

謝謝 2025，也謝謝一路上一起做事、願意交流的好夥伴們。

2026 我會繼續跑起來。
> *Run, don’t walk! Either you’re running for food, or you’re running from being food.*

#YearInReview #GenAI #專利 #研究 #DevOpsDay #HelloWorld #DevFestTaipei #AI治理 #產品化`
    },
    {
        id: "devfest-taipei-2025-recap",
        title: "DevFest Taipei 2025：AI 教練平台分享紀錄",
        excerpt: "在 DevFest Taipei 2025 分享真實上線的 AI 業務教練平台——多 Agent 協作、Persona World、Ontology + GraphRAG，打造 24/7 個人化培訓系統。",
        date: "2025-12-02",
        author: "Nils Liu",
        coverImage: "/images/blog/AI_Coach.png",
        content: `去年底我在 DevFest Taipei 2025 分享了一個我們真實跑在生產環境的產品——一個幫海外業務員做 24/7 個人化對練的 AI 教練系統。

很多人聽到「AI 教練」第一反應都是：「又一個 chatbot 吧？」但這個不一樣。我做的是一個 **多 Agent 協作的擬人教練團**，能以驚人的真實感模擬現實的銷售對話，客戶 AI 甚至會不高興掛電話。

#DevFestTaipei #AIAgent #Ontology #GraphRAG

## 為什麼要做這個？

我們在海外業務訓練上長期面對三個問題：

**45% 的業務員不到一年就離職**，經驗根本來不及傳承。新人上手期又長，商品知識參差不齊，偏偏以前培訓成本很難量化——你不知道哪一段訓練有效，哪一段在浪費時間。

所以我的目標很清楚：讓每個業務員都能隨時跟一個「比最頂尖業務員還有耐心」的 AI 對練，練完有據可查。

## 系統怎麼運作

我設計了三個 Agent 分工：

- **角色生成 Agent**：根據 15 個社會特徵維度（職業、年齡、個性、財務狀況……），能組合出約 5 億種客戶樣態，然後生成一個有完整生平故事的客戶
- **客戶 Agent**：用那個 persona 扮演真實客戶，有情緒、有顧慮，被講到不爽真的會掛電話
- **教練 Agent**：對練結束後，不只打分數，而是直接給你「更好的講法示範」

## 我最在乎的部分：Persona World

技術細節說起來很多，但我覺得整個系統的靈魂是 **Persona World**。

一般的 AI 客戶只有人口統計資料——幾歲、哪裡人、什麼職業。我做的版本會把心理特質、核心價值觀、人際關係、財務焦慮……通通注入進去，讓 AI 客戶的反應不只「聽起來像真人」，而是真的在用那個人的邏輯在思考。

這也是整個訓練有沒有「真實感」的關鍵。

## Context Engineering

我們採用四層疊加的 Context 設計—全局情境、場景設定、人物狀態、當下對話——讓三個 Agent 在同一個世界觀下運作。

有趣的是，我在 Context Engineering 這個詞還沒流行之前就已經在做這件事了。這不是在炫耀，而是想說：有時候工程上的直覺比跟風更重要。

## 讓 AI 真正「懂規則」：Ontology + GraphRAG

純靠 RAG 檢索文件是不夠的。業務場景裡，產品、風險、法規、客戶之間有複雜的關係——比如「這類客戶適合哪種產品」「這種情境下的話術有什麼合規風險」。

所以我把知識建成圖（受 Palantir 的 Ontology 概念啟發），用 GraphRAG 讓 Agent 在搜尋時不只找到「這個節點」，而是能沿著圖的結構把上下游所有相關資訊一起帶回來。

實際測試結果：GraphRAG 在 RobustQA 測試的正確率達 86%，傳統 RAG 只有 33~76%。

## 接下來想做的：Graph-R1

我現在很關注 Graph-R1 這個方向——用強化學習讓 Agent 在每一次搜尋探索後自我進化，不用頻繁調整 prompt，系統自己找到更好的策略。這是我對「數據飛輪」的期待：每一次對練都成為讓系統變得更好的資料。

## 現在的成果

目前跑下來這不是 demo，是真的在用的東西。

<div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-primary/5 rounded-3xl p-8 border border-primary/10">
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">118<span class="text-2xl ml-1">人</span></div>
    <div class="font-bold text-foreground">參與測試</div>
    <div class="text-sm text-muted-foreground">業務員人數</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">96<span class="text-2xl ml-1">%</span></div>
    <div class="font-bold text-foreground">滿意度</div>
    <div class="text-sm text-muted-foreground">(系統統計)</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">86<span class="text-2xl ml-1">%</span></div>
    <div class="font-bold text-foreground">實用度</div>
    <div class="text-sm text-muted-foreground">(問卷統計)</div>
  </div>
</div>

## 索取完整投影片

如果你對這個主題有興趣，歡迎來信，我很樂意分享更多細節。

[📩 寄信索取投影片](mailto:wulingteen@gmail.com?subject=DevFest%20Taipei%202025%20AI%20%E6%95%99%E7%B7%B4%E6%8A%95%E5%BD%B1%E7%89%87)`,
    },
    {
        id: "ithome-devopsdays-2025",
        title: "iThome DevOpsDays 2025：五種 Agent 行為模式",
        excerpt: "今年是 AI Agent 的年，6/5-6/6 DevOpsDays 見——五種 Agent 行為模式：用 AI 打造未來 DevOps 生態系。",
        date: "2025-04-02",
        author: "Nils Liu",
        coverImage: "/images/blog/ithome-devopsdays.jpg",
        content: `今年是AI Agent的年，我也再次參與了iThome的盛事，6/5-6/6 DevOpsDays見

五種 Agent 行為模式：用 AI 打造未來 DevOps 生態系

https://devopsdays.tw/2025/session-page/3772`,
    },
    {
        id: "nvidia-gtc-2025-ai-weekly",
        title: "AI 週報：Nvidia GTC 2025、xAI 基建基金、Deloitte 工程師思維",
        excerpt: "Nvidia 收購 Gretel 提升合成數據能力、xAI 與 Nvidia 加入 300 億美元 AI 基礎建設基金、Deloitte 採用工程師思維模式。",
        date: "2026-03-19",
        author: "Nils Liu",
        coverImage: "/images/blog/nvidia-gtc-2025.jpg",
        content: `🧠 Nvidia 收購 Gretel，提升合成數據能力
Nvidia 已以超過 3.2 億美元收購合成數據公司 Gretel，並將其技術及 80 名員工整合至 Nvidia 的 AI 服務中。此舉旨在為開發者提供生成合成數據的工具，解決 AI 訓練中數據稀缺與隱私問題。

🧠 Elon Musk 的 xAI 與 Nvidia 加入 300 億美元 AI 基礎建設基金
Elon Musk 的 AI 公司 xAI 和 Nvidia 已加入由 BlackRock、Microsoft 和阿布達比支持的 300 億美元 AI 基礎建設基金。這一合作專注於開發數據中心與能源項目，以滿足生成式 AI 的需求，突顯出在 AI 基礎建設上的投資熱潮。

🧠 Deloitte 在 AI 變革中採用工程師思維模式
Deloitte 合夥人 Jillian Wanner 強調，隨著 AI 擾動顧問業務，企業需要採取"工程師為主"的思維模式。該公司正投入數十億資金進行 AI 轉型，期望員工能主要以技術專家和工程師的角色來應對客戶對 AI 應用日益增長的需求。

🧠 Nvidia GTC 2025：AI 硬體與工具的重大進展
在 Nvidia 的 GTC 2025 大會上，執行長黃仁勳發布了多項重要進展，包括 Blackwell GPU 的更新以及針對 AI 工廠的 Nvidia Dynamo 作業系統。這些新技術旨在提升 AI 數據中心的推理效能與效率。

🧠 具爭議性的"胖胖"濾鏡引發歧視討論
一個利用生成式 AI 技術製成的 TikTok"胖胖"濾鏡新潮流，因涉嫌推廣肥胖恐懼症與身材羞辱而受到批評。批評者認為，這一趨勢助長了有害的美麗標準，並對身材較大者產生負面影響。`
    },
    {
        id: "fde-diamond-org",
        title: "軟體工程師的分歧：AI 時代的鑽石型組織",
        excerpt: "同一個時代，同樣叫做工程師，有人因 AI 失去工作，也有人因 AI 找到工作。決定你在哪一邊的，不是學歷年資，而是調整速度。",
        date: "2026-02-27",
        author: "Nils Liu",
        coverImage: "/images/blog/642211062_1341725981314870_7520906503631550785_n.jpg",
        content: `同一個時代，同樣叫做工程師，有人因 AI 失去工作，也有人因 AI 找到工作。決定你在哪一邊的，不是學歷年資，而是調整速度。新職缺已經靜靜上線了

———

Block 剛宣布裁員一半工程師，同一時間 Indeed 數據顯示軟體工程師職缺卻快速回升。整體就業市場幾乎沒有動靜，這條線卻獨自飆升。這個分歧說明了一件事：被裁的和被招的，不是同一種人

大公司裁掉的，是用舊方式工作的工程師——傳統 Debug、文件審閱、基礎測試。這些恰好是 AI 最擅長取代的。數據已經說得很清楚：50% 的科技職缺要求 AI 技能，比一年前增加 98%。哈佛研究分析 2 億條招聘數據也發現，採用 AI 的公司初階職缺少了 7.7%，高階職位幾乎不受影響。市場要的是決策者，不是執行者

我認為未來的工程組織會長成鑽石型結構。頂端是一個有產品願景的 PM，能定義問題、對齊目標；中間是五到十個 AI 與架構工程師，設計系統、調度 Agent、把關品質；底部是大量 AI Agent 負責執行——寫程式、測試、部署、文件。這個結構下，最稀缺的不是能寫程式的人，而是能看懂業務、翻譯需求、讓 AI 真正落地的人。

這正是 FDE（前線部署工程師）在做的事

2025 年 FDE 職缺暴增超過 8 倍，是所有工程職位中成長最快的類別。傳統產業導入 AI 的第一個工程師職缺，反而可能是現在最好的切入點——不需要進到頻繁裁員的科技公司，製造業、零售業、物流業才是真正的機會所在

如果你有工程背景，再加上一點業務溝通能力，你的組合正在變得稀缺，而不是過剩。與其等工作經驗，不如用 AI 建立作品集。現在市場要的，是能把 AI 真正裝進真實世界的人

#軟體工程師 #AI就業 #職涯轉型 #FDE #鑽石型組織`
    },
    {
        id: "ai-picking-future-talents",
        title: "從寫程式到自主提案：未來人才挑選法",
        excerpt: "過去一年我也是這樣帶團隊，但發現部份經驗與好奇心不足的人會對這種工作型態無所適從，這大概就是一種挑選未來人才的方法。",
        date: "2026-02-21",
        author: "Nils Liu",
        coverImage: "/images/blog/ai-picking-talents.jpg",
        content: `過去一年我也是這樣帶團隊，但發現部份經驗與好奇心不足的人（例如一些實習生）會對這種工作型態無所適從

個人感覺，這大概就是一種挑選未來人才的方法

---

Anthropic 的 Claude Code 創作者 Boris Cherny 近期在多個訪談（如 Lenny's Podcast 與 Y Combinator 的 Lightcone）中，針對 AI 時代的人才篩選與未來職業形態提出了非常前衛的觀點。

他認為隨著 AI 已經「基本解決了編碼問題」，企業與個人對「人才」的定義將發生根本性的轉向。以下是其核心觀點的整理：

https://www.youtube.com/watch?v=Mr2eVO052bQ

## 1. 尋找擁有「支線任務」（Side Quests）的人

Boris 非常看重候選人的好奇心與生活廣度。他提到在面試工程師時，會特別留意那些在週末進行獨特項目的人。

範例：他舉例曾面試過一位熱衷於在家自製康普茶（Kombucha）的工程師。

邏輯：這種對非工作領域的熱情與探索精神，象徵著一個人的自主驅動力與解決問題的渴望。在 AI 時代，技術門檻降低，這種「主動探索」的特質比純技術深度更難得。

## 2. 從「工程師」轉向「建造者」（Builder）

Boris 預測，「軟體工程師」這個職稱最快可能在 2026 年消失，取而代之的是 Builder（建造者）。

**全才化：** 未來的人才不再是單一領域的專家。在 Claude Code 團隊中，產品經理、設計師甚至財務人員都在寫程式。

**模糊的界限：** 他認為職位之間將有超過 50% 的重疊。人才篩選應優先考慮那些能夠跨學科思考，並能利用 AI 快速在不同角色（產品、設計、開發）間切換的人。

## 3. 「極致通才」優於「狹隘專才」

在 AI 工具（如 Claude Code）能處理 100% 程式碼撰寫的情況下，人才的價值不再是「寫出代碼」，而是：

- **定義目標：** 判斷系統該往哪個方向走。
- **結果驗證：** 判斷 AI 生成的東西是否正確、安全且符合需求。
- **人機協作能力：** Boris 建議給予優秀的人才「無限的 Token（計算資源）」，而非增加人力。他認為一個能極大化利用 AI 的通才，產出遠勝於一群傳統專才。

## 4. 具備「超前模型」的思維方式

他建議人才與創業者不應針對「現在」的模型能力來建構產品或技能，而應針對「六個月後的模型」。

這種「預判模型進化」的能力是未來人才的關鍵。如果你現在學的技能在半年後就會被模型自動化，那該技能的價值就是零。

## 5. 強化「非電腦相關」的人類特質

Boris 坦言，幾乎所有「坐在電腦前的工作」都會受到 AI 的劇烈衝擊。因此，未來人才的護城河將在於：

- **人際溝通與關係建立：** AI 無法取代的信任感。
- **倫理決策：** 在關鍵時刻做出的價值判斷。
- **創新與定義問題：** AI 擅長回答問題，但人類負責「問對的問題」。`
    },
    {
        id: "ai-agent-intern-recruit",
        title: "招募實習生｜海外 AI Agent 平台｜全端/後端/GenAI",
        excerpt: "我們在做一個「真的會上線、真的有人用」的 AI Agent 平台：把 GenAI 串進工作流程，從資料處理到 tools & workflows 的調度。",
        date: "2026-01-21",
        author: "Nils Liu",
        coverImage: "/images/blog/ai-agent-intern.jpg",
        content: `【招募實習生｜海外 AI Agent 平台｜全端/後端/GenAI】

我們在做一個「真的會上線、真的有人用」的 AI Agent 平台：把 GenAI 串進工作流程，從資料處理/檢索，到 tools & workflows 的調度、權限與記錄，做成可重用的平台能力。

你會接觸：
• PoC → MVP 快速迭代，也會碰到正式上線要面對的工程規格、觀測、資安/合規
• GCP（Cloud Run/Cloud SQL/Storage）+ Vertex AI / Gemini 等 GenAI 串接
• RAG / parsing / indexing / eval（依能力分配）

我們在找你（擇一強項即可）：
• 全端：TypeScript/React（或類似）+ API 串接
• 後端：Python/Node.js（任一）+ REST/DB 基礎
• GenAI：會做 prompt/eval/retrieval，願意把研究變成工程

加分：有 side project、GitHub、雲端部署、向量 DB / Graph 經驗

地點：台北／混合（依安排）

有興趣請私訊我：履歷 + GitHub/作品 + 想投方向（全端/後端/GenAI）+ 最想學的 1 件事`
    },
    {
        id: "ai-browser-auto-report",
        title: "AI Browser：自動記錄思考軌跡並生成調查報告",
        excerpt: "做了一個 AI Browser，能自動記錄所有思考過程、查詢軌跡、自動判斷是否需要截圖，並在最後輸出一份調查報告。",
        date: "2026-01-13",
        author: "Nils Liu",
        coverImage: "/images/blog/ai-browser.jpg",
        content: `做了一個AI Browser，能自動記錄所有思考過程、查詢軌跡、自動判斷是否需要截圖，並在最後輸出一份調查報告

https://youtu.be/Hk_42hV7q2Q?si=Rp9k7AQml9Gm0c6L`
    },
    {
        id: "ai-history-hinton-nobel",
        title: "AI 的歷史轉折：從被質疑到諾貝爾獎",
        excerpt: "過去「AI」在學術圈帶有負面標籤，Geoffrey Hinton 也曾因做神經網路被強烈質疑。如今他獲得圖靈獎與諾貝爾獎，AI 正在改變世界。",
        date: "2025-12-17",
        author: "Nils Liu",
        coverImage: "/images/blog/ai-history-hinton.jpg",
        content: `過去曾有段時間，「AI」這個詞在學術圈（特別是幾次 AI 寒冬之後）帶有負面標籤，資訊工程領域的一些專家學者如果聽到有人講 AI，可能會覺得這個人太會吹、但不夠嚴謹，並且質問道：為什麼會相信你無法掌握、無法清楚驗證的東西？Geoffrey Hinton 也曾回憶自己早年在學界因為做神經網路而被強烈質疑、甚至被罵到吵起來。

但今天的發展我們都知道了：Hinton 獲得了 2018 年圖靈獎，並在 2024 年獲得諾貝爾物理學獎。
而 Demis Hassabis 也在 2024 年因 AlphaFold 相關成果獲得諾貝爾化學獎。

AI 正在改變世界。

https://youtu.be/d95J8yzvjbQ?si=pNqqz52EE6Kt4baJ`
    },
    {
        id: "perplexity-challenges",
        title: "Perplexity 的困境：AI 搜尋的邊界在哪裡？",
        excerpt: "Perplexity面對的是一個「位置」的考驗，一邊要扛起「AI 搜尋新一代」的期待，一邊又被各種內容方用法律與商業談判來拉扯。",
        date: "2025-12-06",
        author: "Nils Liu",
        coverImage: "/images/blog/perplexity-challenges.jpg",
        content: `［關於Perplexity的困境］

在Perplexity剛出世的時候我就覺得我們團隊也做得出一樣的產品，甚至能一樣好

事實上，只要是一般夠有 sense 的開發團隊，都做得出類似的產品，技術本身沒有太強的護城河

現在Perplexity面對的，反而比較像是一個「位置」的考驗，一邊要扛起「AI 搜尋新一代」這個期待，一邊又被各種內容方用法律與商業談判來拉扯，從早期的 Forbes、Dow Jones，到現在《紐約時報》正式提告版權侵權，整個產業都在一起摸索 AI 搜尋的邊界

我自己會比較好奇的是，在這麼多壓力之下，Perplexity 能不能走出一條「內容方、使用者、自己」都覺得還算公平的合作模式

如果做得到，也許就有機會把現在的困境，變成下一階段的起點

[📰 Reuters：New York Times sues Perplexity AI for infringing copyright](https://www.reuters.com/legal/litigation/new-york-times-sues-perplexity-ai-infringing-copyright-works-2025-12-05/)`
    },
    {
        id: "google-gemini-antigravity-devops",
        title: "Google Gemini 3 Pro 與 Antigravity：開發者角色的升級",
        excerpt: "AI 不再只是 demo 的玩具，而是變成雲端基礎設施的一環。工具在變，角色就有機會跟著變。",
        date: "2025-12-06",
        author: "Nils Liu",
        coverImage: "/images/blog/google-gemini-antigravity.jpg",
        content: `Google 把 Gemini 3 Pro 和 Antigravity 推上來之後
我開始重新思考「開發者跟 AI 的關係」這件事

這一波更新，很直白地釋出一個訊號：
AI 不再只是 demo 或 side project 的玩具，而是變成雲端基礎設施的一環，從模型，到 API，到像 Antigravity 這種幫你處理配額與資源調度的服務，其實都在幫開發者把「心力」往上拉一層，少煩惱一點底層細節，多花時間在產品和使用者上

對在企業裡做 AI 的團隊來說，我自己會把這類更新拆成三個角度來看：

一是「角色的升級」，
以前工程師要自己顧 infra、自建工具鏈，很多時間卡在環境、佈署、調整參數
現在雲端廠商把這些越包越好，我們反而有空間重新定義團隊角色
例如，把一部分精力轉向 AI Product、AI Governance、Data Contract 等等，
讓人真的站在「決策與價值」那一層，而不是永遠困在 pipeline 的 troubleshooting 裡

二是「實驗的速度」，
像 Antigravity 這類服務，把使用限制放寬、讓你可以更安心地做大量試驗
對內部團隊來說，就比較有機會做系統化的 ab test、prompt 版本管理、不同模型的對比
而不是每次實驗都在擔心配額、速度跟穩定性
當實驗變便宜、變快，很多以前覺得不值得試的想法，其實可以被搬上檯面，變成真實的產品選項

三是「平台思維」，
當 Google、OpenAI、其他雲端廠商都在往「AI 平台」靠攏，企業內部如果還是只用「單一 chatbot 專案」來思考 AI 就會很難接住這些新能力，我反而會傾向往「AI 能力層」去設計，把檢索、推理、工具使用、審計、金鑰管理都抽成共用模組
前面這些雲端服務，剛好可以接在這一層下面，讓我們少造一點輪子，多專注在自己獨特的 domain know how 上

對我自己來說，看到這些更新，心裡浮現的關鍵字是「選擇權」，我們多了一些不用從零開始的選擇權，也多了一些把時間留給團隊、留給使用者、留給產品路線圖的選擇權

工具在變，角色就有機會跟著變，接下來幾年，誰能把「工具進化」跟「組織能力進化」綁在一起，誰就會在這一波 AI 浪潮裡走得比較穩`
    },
    {
        id: "devfest-taipei-2025-announcement",
        title: "DevFest Taipei 2025 演講預告：AI Agent Team 落地應用",
        excerpt: "11/30 將在 Google GDG 舉辦的 DevFest Taipei 2025 分享 AI Agent team 落地應用，歡迎報名參加。",
        date: "2025-11-16",
        author: "Nils Liu",
        coverImage: "/images/blog/devfest-announcement.jpg",
        content: `11/30 DevFest Taipei
將分享真實在生產環境使用的業務訓練Agent team應用

11/30 10:30 台大博雅教學館博201見`
    },
    {
        id: "graphrag-smart-customer-service",
        title: "GraphRAG 以知識圖譜串聯記憶，重塑智慧客服推理能力",
        excerpt: "GraphRAG 以圖譜化知識結構取代單點檢索，藉由節點與邊的關聯輔助生成，既能維持上下文一致，又具備多跳推理能力。",
        date: "2025-11-10",
        author: "Nils Liu",
        coverImage: "/images/blog/graphrag-knowledge.jpg",
        content: `GraphRAG 以知識圖譜串聯記憶，重塑智慧客服推理能力

傳統 RAG 模型仰賴向量檢索，當對話延展過長或主題跨度太廣，語意易被割裂，導致 LLM 回應冗長卻偏離重點。GraphRAG 以圖譜化知識結構取代單點檢索，藉由節點與邊的關聯輔助生成，既能維持上下文一致，又具備多跳推理能力。

原型系統結合客戶對話、金融新聞與理專背景知識三大資料來源，構築能「理解人」的智慧客服。這樣的系統不只回應問題，更能根據客戶歷史互動與市場變化，主動給出具洞察力的建議。實測結果顯示，GraphRAG 在 RobustQA 測試中的正確率達 86%，遠高於傳統 RAG 的 33~76%。

GraphRAG 技術前景看好，但導入時須考量系統複雜度、成本與隱私安全議題，唯有穩健部署方能發揮長期價值。`
    },
    {
        id: "six-patents-approved-2025",
        title: "今年六項新型專利全部核准：生成式 AI 落地爆發的一年",
        excerpt: "今年初 6 項新型專利已全部獲得核准，上個月再次提交 5 項專利。這是生成式 AI 落地爆發的一年。",
        date: "2025-11-06",
        author: "Nils Liu",
        coverImage: "/images/blog/patents-approved.jpg",
        content: `至此，今年初6項新型專利已全部獲得核准，其中2項為一案兩請（新型+專利）

上個月再次提交5項專利，預計1項新型，4項一案兩請

這是生成式AI落地爆發的一年`
    },
    {
        id: "devfest-taipei-signup",
        title: "DevFest Taipei 2025 報名開放",
        excerpt: "11/30 在 Google GDG 舉辦的 DevFest Taipei 2025 分享 AI Agent team 落地應用，免費入場，歡迎報名。",
        date: "2025-10-28",
        author: "Nils Liu",
        coverImage: "/images/blog/devfest-taipei-announce.jpg",
        content: `11/30 我會在Google GDG舉辦的DevFest Taipei 2025分享AI Agent team 落地應用，歡迎有興趣的朋友們來報名，資格審核，免費入場`
    },
    {
        id: "best-attention-explanation",
        title: "最佳 Attention is All You Need 講解影片推薦",
        excerpt: "這是我看過的講解 Attention is all you need 的影片中講解最好的一部。",
        date: "2025-10-26",
        author: "Nils Liu",
        coverImage: "/images/blog/attention-transformer.jpg",
        content: `這是我看過的講解Attention is all you need的影片中講解最好的一部`
    },
    {
        id: "jason-wei-ai-scenarios",
        title: "Jason Wei 演講：系統化尋找 AI 場景的方法",
        excerpt: "Jason Wei 這段演講醍醐灌頂，聽到起 goose bump，尋找 AI 場景確實應該用這個系統化的方法。",
        date: "2025-10-23",
        author: "Nils Liu",
        coverImage: "/images/blog/jason-wei-ai.jpg",
        content: `Jason Wei這段演講醍醐灌頂，聽到起goose bump，尋找AI場景確實應該用這個系統化的方法`
    },
    {
        id: "thinking-machine-lab-deterministic-ai",
        title: "Mira Murati 的 Thinking Machine Lab：AI 確定性推理的突破",
        excerpt: "把 AI 模型的 temperature 設為 0 就能得到完全一致的結果嗎？答案是否，Thinking Machine Lab 的研究揭示了根本性的原因。",
        date: "2025-09-13",
        author: "Nils Liu",
        coverImage: "/images/blog/thinking-machine-lab.jpg",
        content: `Thinking Machine Lab (Mira Murati創立的startup，在還沒有任何產品和工作方向時，光是Mira Murati的號召即獲得20億美元融資，估值百億美元）最近（9/10）發表了一篇文章，探討一個我們已知的問題：

「把AI模型的temperature設為0就能得到完全一致的結果嗎？答案是否，但根本性的原因是什麼？」

當用同樣的提示詞對所謂「確定性」的AI模型跑1000次測試時，會驚訝地發現竟然會得到數十種不同的輸出結果，這不是因為模型本身的隨機性，而是因為伺服器在處理批次請求時的方式會影響最終結果

這個問題的影響比想像中嚴重，在進行AI模型評估時，基準測試的分數會因為伺服器負載不同而產生高達5%的變化，這讓我們很難準確判斷模型的真實表現，對企業來說更麻煩的是，當客戶回報某個特定問題時，開發團隊往往無法重現相同的情況，因為批次處理的配置已經改變了

對於需要符合法規要求的行業來說，這種不一致性更是致命的，他們無法保證AI系統在審計時會表現出相同的行為模式，此外，許多公司投入大量資源進行A/B測試和模型比較，但這些結果現在看來都可能被這種隱藏的變異性所汙染

前OpenAI技術長Mira Murati創立的Thinking Machines Lab深入研究了這個問題，他們發現關鍵在於三個核心運算：標準化、矩陣乘法和注意力機制，當批次大小發生變化時，這些運算的數值計算就會產生微小但關鍵的差異，最終導致輸出結果的不同

他們的解決方案是開發出批次不變的版本，能夠確保無論批次如何組合，運算結果都保持一致，經過測試，這個方法確實能讓同樣的輸入產生完全相同的輸出，實現真正的確定性推理

當然，這個解決方案也有代價，確定性推理的速度大約比現有方法慢了60%，但對於那些需要絕對一致性的應用場景來說，這個效能損失是值得的

想要知道系統是否受到影響，可以做個簡單測試：用同一個提示詞跑100次，看看會得到多少種不同的結果，對於關鍵性應用，值得考慮採用這種批次不變的核心技術，儘管會有效能成本，對於一般使用者，也應該開始要求AI服務提供商提供確定性模式的選項

我們一直把這種不穩定的行為當作AI系統無法避免的特性，但現在看來這其實是可以解決的技術問題，隨著技術的持續優化，相信這60%的效能成本在不久的將來也會進一步降低，對於需要可靠性勝過速度的應用場景來說，這個發現可能會改變遊戲規則`
    },
    {
        id: "vibe-coding-three-giants",
        title: "Vibe Coding 御三家：Codex, Gemini 與 Claude",
        excerpt: "像極了轉扭蛋的 vibe coding 御三家，OpenAI 的 Codex、Google 的 Gemini、Anthropic 的 Claude。",
        date: "2025-09-02",
        author: "Nils Liu",
        coverImage: "/images/blog/vibe-coding.jpg",
        content: `像極了轉扭蛋的 vibe coding 御三家：

openai 的 Codex
google 的 Gemini
Anthropic 的 Claude`
    },
    {
        id: "gemini-flash-nano-banana",
        title: "Nano Banana：Gemini 2.5 Flash 圖像生成實測",
        excerpt: "Nano Banana（Gemini 2.5 Flash 圖像功能）真的滿猛的，從改西裝到調整笑容和細節動作，精準度令人驚艷。",
        date: "2025-08-27",
        author: "Nils Liu",
        coverImage: "/images/blog/gemini-flash-image.jpg",
        content: `Nano Banana （Gemini 2.5 Flash 圖像功能）真的滿猛的

prompt 1: 改成穿西裝在攝影棚裡拍的證件照
prompt 2: 改成帶有專業感的笑容，with eyes open
prompt 3: 手摸領帶結`
    },
    {
        id: "hiring-devops-fullstack-ddt",
        title: "尼爾斯在找隊友！DevOps 與 Fullstack 工程師招募中",
        excerpt: "把生成式 AI、現代化金融科技、智慧金融應用變成可規模化的產品與服務，一起把金融 AI 做到海外市場。",
        date: "2025-08-07",
        author: "Nils Liu",
        coverImage: "/images/blog/hiring-devops.jpg",
        content: `尼爾斯在找隊友！我們要一起把金融 AI 做到海外市場（東南亞），兩個角色同步招募中

我們在做什麼
把生成式 AI、現代化金融科技、智慧金融應用變成可規模化的產品與服務，直接解決真實業務問題。

招募職缺
① DevOps 工程師（台北信義，少量短期出差）
 • 端到端設計 / 開發 / 部署可擴展系統架構，解決金融場景的實戰問題
 • 與產品與研究協作，把 AI 技術落地到 POC 與產線
 • 追蹤技術趨勢、參與論文 / 專利 / 效能優化
 • 加分：AWS / GCP / Azure 經驗，英文佳；越文更佳

② Fullstack / Backend 工程師（台北信義，無外派）
 • 開發與維運雲端服務（前端 / 後端）
 • 依產品需求建置雲端系統，參與架構分析與導入
 • 追蹤技術趨勢、參與論文 / 專利，持續優化產品
 • 加分：AWS 或 GCP 經驗，熱愛 GenAI 開發，英文佳；越文更佳

我們希望你
 • 3+ 年軟體／雲端實作經驗，熱愛寫程式、享受把模糊問題做成可量化的產品
 • 熟悉敏捷（Scrum），能與跨域團隊緊密協作交付

你會得到
 • 金融級題目、大規模用戶與跨國市場的舞台
 • 自上而下支持的 AI 研發投入（含 POC 與論文 / 專利機會）
 • 具競爭力的待遇與完整福利與學習資源`
    },
    {
        id: "ai-pm-peter-deng-uber",
        title: "AI 產品經理的思維：Peter Deng 在 Uber 的管理哲學",
        excerpt: "Peter Deng 建立五種 PM 角色，讓因立場而產生的矛盾與緊張感公開化且透明化，超級團隊就要像復仇者聯盟。",
        date: "2025-07-20",
        author: "Nils Liu",
        coverImage: "/images/blog/ai-pm-peter-deng.jpg",
        content: `分享給大家 關於AI產品經理的思維，講的很棒

Peter Deng在Uber建立的五種PM，由於這五種PM的立場互異，他的管理哲學是讓這種因立場而產生的矛盾與緊張感公開化且透明化 （當然不是指吵架）

一個超級團隊就要像復仇者聯盟，每個人都很特別，每個人都有自己的想法，確保所有聲音都有出現並且被考慮

Peter Deng的招募人員原則有二：

1. 六個月原則：在他的團隊裡，一個新人在前六個月內如果需要被告知要做什麼的話，那麼就是不適任的人（在他團隊），因為在他需要的是思考者/驅動者，這樣的思維也能讓團隊從上下級轉為合作，從服從指令到協同工作

2. 成長心態識別原則：一個人在不同年齡階段能被教授的內容不同，持續學習的心態是團隊的軟實力`
    },
    {
        id: "chatgpt-agent-launch",
        title: "ChatGPT 出 Agent：像盯著秘書操作電腦完成抽象任務",
        excerpt: "ChatGPT 的 Agent 操作都是即時顯示且具可解釋性，基本像盯著一位人類秘書操作電腦完成抽象任務。",
        date: "2025-07-17",
        author: "Nils Liu",
        coverImage: "/images/blog/chatgpt-agent.jpg",
        content: `Chatgpt出agent

看起來Agent收到指令後操作都是即時顯示在螢幕上，也有verbose因此具可解釋性，基本像盯著一位人類秘書操作電腦完成抽象任務

開發agent的成員在加入agent team前都是在deep research和operator 這兩個team，其中一位研究人員也說agent像是更好版本的deep research + operator的融合

看來如果我們也想靠開源設計出差不多的效果的話，agent的思考要靠快速的deep research架構`
    },
    {
        id: "stargate-ai-infrastructure",
        title: "星際之門：24 小時輪班建置的 AI 伺服器中心",
        excerpt: "星際之門現在是一個 24 小時輪班建置的伺服器中心專案，當美國人也開始 24 小時在卷的時候，你就知道這場仗是輸不起的。",
        date: "2025-05-28",
        author: "Nils Liu",
        coverImage: "/images/blog/stargate-ai-infra.jpg",
        content: `星際之門現在是一個24小時輪班建置的伺服器中心專案，當美國人也開始24小時輪班在卷的時候，你就知道這場AI領導地位的仗是美國輸不起的一場戰役`
    },
    {
        id: "google-io-one-for-all",
        title: "一即全，贏者全拿：Google 發佈會精華",
        excerpt: "Google 發佈會密集地發表新產品展現態勢，在推出新功能的速度上，OpenAI 還是一間小公司。",
        date: "2025-05-21",
        author: "Nils Liu",
        coverImage: "/images/blog/google-io-all.jpg",
        content: `一即全，贏者全拿

這段影片是Google這次發佈會的精華32分鐘版本，密集地發表新產品，就展現了態勢。如果以前AI技術發展對我來說是眼花撩亂的話，那麽這次就是壓的人無法喘氣

相較之下，在推出新功能的速度上，openai還是一間小公司`
    },
    {
        id: "kobe-imagination-ai-magic",
        title: "Kobe 談想像力：Transformer 和生成式 AI 就是這樣的魔法",
        excerpt: "Elon 認為學習知識後最重要的是想像力。芙莉蓮說魔法是想像的世界——Transformer 和生成式 AI 就是這樣的魔法。",
        date: "2025-05-15",
        author: "Nils Liu",
        coverImage: "/images/blog/kobe-imagination-ai.jpg",
        content: `2017年曾有新聞採訪Kobe，詢問他對Elon Musk的看法。當時Kobe提到，Elon認為學習知識後最重要的是想像力；無論你學了多少東西、看了多少書，如果缺乏想像力，就無法將這些知識帶到更高的層次。

芙莉蓮也曾說過：「魔法是想像的世界。你想像不出的東西，你的魔法就無法實現。」我覺得Transformer和生成式AI就如同這樣的魔法。

https://www.youtube.com/watch?v=jSVdxhTEJP4

⸻
In a 2017 interview, Kobe Bryant was asked about his views on Elon Musk. Kobe shared that Elon believed imagination is the most critical element after acquiring knowledge—no matter how much you learn or how many books you read, without imagination, you can't elevate that knowledge to the next level.

Frieren once said, "Magic is a world of imagination. If you can't imagine something, your magic can't make it real." To me, Transformers and generative AI are precisely that kind of magic.`
    },
    {
        id: "patent-financial-ai-system",
        title: "金融投資建議生成系統專利獲准",
        excerpt: "與團隊共同研發的「金融投資建議生成系統」專利已獲得核准，結合 LLM、GenUI 及 RAG 自動化生成個人化投資建議。",
        date: "2025-05-13",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-financial-ai.jpg",
        content: `很高興與大家分享
我與團隊共同研發的「金融投資建議生成系統」專利（公告號 M670472，申請日 2025/03/06）已於 2025/05/11 獲得核准

這套系統結合LLM、GenUI、以及RAG
能自動化生成個人化投資建議
期望在提升決策效率與風險控管上盡一份心力

成果尚有許多可優化之處，我們會繼續扎實推進，期許未來將技術應用落地，為客戶創造更多價值

另外，我們還有更多專利等待核准中，我以及團隊對於 AI 的未來都感到非常期待，並期待能與同在 AI 領域努力的專家同好們有更多的交流

I'm pleased to share that our team's patent for the Financial Investment Recommendation Generation System (Publication No. M670472, filed March 6, 2025) was approved on May 11, 2025.

This system combines big data analytics with machine learning to automate the creation of personalized investment recommendations, aiming to enhance decision-making efficiency and strengthen risk management.

There is still much room for optimization, and we will continue to advance the technology so it can deliver even greater value to our clients.

Thank you to all who have supported and mentored us along the way. I look forward to continued exchange and growth with the fintech community.`
    },
    {
        id: "ai-team-recruitment-genai",
        title: "歡迎加入團隊：一起積極創造 AI 場景",
        excerpt: "我們的金融 AI 科技團隊正在尋找對 DevOps 與資料科學充滿熱忱的專業人員，攜手開發並落實生成式 AI 應用。",
        date: "2025-05-01",
        author: "Nils Liu",
        coverImage: "/images/blog/ai-team-recruitment.jpg",
        content: `歡迎加入團隊，一起積極創造AI場景

———

我們的金融 AI 科技團隊正在尋找對 DevOps 與資料科學充滿熱忱的專業人員，攜手開發並落實生成式 AI 應用

工作內容：
 1. 設計、開發與部署系統架構，以解決金融應用場景中的實際商業需求
 2. 追蹤並研究最新技術，撰寫論文、申請專利，持續優化產品性能與準確度
 3. 將 AI 技術整合至金融場景，開發概念驗證 (PoC) 並推動落地`
    },
    {
        id: "genai-tech-interview-revolution",
        title: "生成式 AI 驅動技術面試革新",
        excerpt: "要求候選人在 60 分鐘內結合 LLM 與前端開發能力完成靜態網站，從「知識背誦」轉向「工具落地」。",
        date: "2025-04-28",
        author: "Nils Liu",
        coverImage: "/images/blog/genai-tech-interview.jpg",
        content: `生成式 AI 驅動技術面試革新

最近，我們將實習生技術評估提升到新層次：

要求候選人在 60 分鐘內，結合 LLM 與前端開發能力，完成一個自我介紹＋OpenAI 提示工程指南的靜態網站

三位候選人全數達標，其中一份作品更完整呈現了：
1. Prompt 工程流程：設計明確、易於複用的提示範本
2. 介面實作能力：HTML/CSS 架構整潔，可快速部署
3. AI 問題解決：靈活運用生成式 AI 生成技術文件

這次面試經驗驗證：
從「知識背誦」轉向「工具落地」
從「單一解法」轉向「多元創新」
從「理論驗證」轉向「產出價值」

在數位轉型與 AI 深度融合的時代，面試已不只是測試「知道什麼」，更是在評估「能創造什麼」

#生成式AI #面試革新 #數位轉型`
    },

    {
        id: "openai-devday-2024",
        title: "OpenAI DevDay 2024: 一場屬於開發者的技術革新",
        excerpt: "OpenAI 展示了四個重要創新：視覺微調、實時 API、模型蒸餾和提示快取，將更多的創新和控制權交到開發者手中。",
        date: "2024-10-02",
        author: "Nils Liu",
        coverImage: "/images/blog/openai-devday-2024.png",
        content: `OpenAI DevDay 2024: 一場屬於開發者的技術革新

就在今天，OpenAI 展示了四個重要創新：視覺微調（Vision Fine-Tuning）、實時 API（Realtime API）、模型蒸餾（Model Distillation）、和提示快取（Prompt Caching）。這些技術揭示出 OpenAI 正以開發者為中心，將更多的創新和控制權交到開發者手中。

## 1. 實時 API：打通對話式 AI 的壁壘

實時 API 讓開發者能夠創建更流暢的多模態應用，特別是在語音互動中。從語音輸入到語音輸出，整個過程實現了低延遲，並允許用戶在自然對話中打斷系統回應，模擬人類對話的真實場景。有試用過chatgpt新一代語音對話過的人就會知道，能在自己打造的產品中用上這技術是多令人感到興奮。

## 2. 提示快取：開發者的經費福音

提示快取功能無疑是本次會議中的亮點之一。它能減少開發者的成本和延遲，尤其適合那些經常重複使用上下文的應用。這項技術能自動為已處理過的輸入代幣提供 50% 的折扣，這對於反覆運用資料的系統來說，節省潛力巨大。

透過這項功能，OpenAI 實現了兩年內將 GPT-3 相關成本降低 1000 倍的突破，這讓許多原本受限於成本的小型公司，也能夠利用這些技術開發更多應用。

## 3. 視覺微調：AI 視覺的全新篇章

對於視覺 AI，OpenAI 推出了針對 GPT-4o 的視覺微調技術，開發者可以利用圖像和文本來自定義模型的視覺理解能力。這不僅是技術上的進步，還可能帶動無人駕駛、醫療影像處理及視覺搜尋等領域的深遠影響。

## 4. 模型蒸餾：讓 AI 更加普及

最後，模型蒸餾技術或許是最具顛覆性的創新。開發者可以使用高階模型如 GPT-4o 的輸出，來訓練更小、更高效的模型，這將幫助那些資源有限的公司大幅降低計算成本。

這一次的轉變，可能會讓 AI 應用真正遍地開花，進一步推動各行各業的發展。`
    }
];
