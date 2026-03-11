export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    coverImage?: string;
    pinned?: boolean;
    tags?: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "patent-knowledge-graph",
        tags: ["Patent","GenAI","Architecture"],
        title: "【專利六】從 GenAI Product Owner 視角打造知識圖譜系統：我的第一個 AI 專利怎麼來的？",
        excerpt: "一位銀行 GenAI 產品經理如何從業務痛點出發，設計出能自動建構知識圖譜的 LLM 系統，並成功取得新型專利？本文分享從需求到專利的完整思路。",
        date: "2025-11-01",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-knowledge-graph.png",
        content: `### 為什麼銀行需要「會自己學習」的知識圖譜？

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

*M676680 知識圖譜建構系統｜公告日：2025/11/01｜唯一發明人：劉岦崱*`
    },
    {
        id: "patent-adaptive-security",
        tags: ["Patent","GenAI","Architecture"],
        title: "【專利五】GenAI 系統的資安盲點：一個 Product Owner 如何用 AI 打造自適應安全防護？",
        excerpt: "當 GenAI 系統被用來查詢敏感資料，如何防止惡意使用者繞過安全機制？本文介紹銀行 AI 產品經理如何設計動態存取控制專利，用 AI 守護 AI。",
        date: "2025-09-11",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-adaptive-security.png",
        content: `### 「用 AI 守護 AI」——這不是口號，是架構設計

在銀行導入生成式 AI 的過程中，最讓我夜不能寐的問題不是模型效果，而是**安全性**。

一個能查詢客戶資料的 AI 聊天機器人，如果被有心人士透過特製 prompt 操控，後果不堪設想。

更麻煩的是，傳統資安的靜態規則根本追不上 prompt injection 的創意。攻擊者每次換個說法，規則就失效了。

這促使我設計了一套**生成式自適應安全策略**，並最終取得專利 **M674713《資料查詢系統》**。

---

### 系統架構：讓 AI 學會「看懂惡意」

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

### 為什麼這是 GenAI 產品設計的核心議題？

作為 **GenAI Product Manager**，安全性不是「交給資安部門」的事，它必須是產品架構的一部分。

在設計這個系統時，我學到幾個重要洞察：

**1. 靜態規則永遠追不上動態攻擊**
你設的每一條 guardrail，都可能被有創意的用戶繞過。系統本身需要有「學習能力」。

**2. 安全性與用戶體驗不是零和**
好的安全設計是讓正常用戶感覺不到它的存在，只有異常行為才會觸發。這需要非常精細的風險分級。

**3. AI 的存取控制應該是動態的**
不是「你有沒有權限」的二元判斷，而是「這個查詢在這個情境下，你現在適合看到什麼等級的資訊」。

---

### GenAI PO 的 Checklist：你的 AI 系統夠安全嗎？

- [ ] 系統能否偵測異常查詢模式？
- [ ] 有沒有即時的意圖分析機制？
- [ ] 存取控制是靜態角色還是動態情境感知？
- [ ] 系統被攻擊後會變聰明，還是原地不動？

**安全是 GenAI 產品上線前最後一道門，也是用戶信任的第一道牆。**

---

*M674713 資料查詢系統（生成式自適應安全策略）｜公告日：2025/09/11｜唯一發明人：劉岦崱*`
    },
    {
        id: "patent-modular-ai",
        tags: ["Patent","GenAI","Architecture"],
        title: "【專利四】模組化 GenAI 系統設計：為什麼不是「功能越多越好」？一個 PM 的反直覺專利",
        excerpt: "大型語言模型部署成本越來越高？本文分享一位銀行 GenAI Product Manager 如何透過模組化架構設計，讓 AI 系統可依需求客製，降低硬體負擔並提升彈性。",
        date: "2025-06-11",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-modular-ai.png",
        content: `### 企業導入 LLM 最常犯的錯：把「強大」等於「好用」

剛開始做企業 GenAI 產品的時候，我也曾經迷信「模型越大越好、功能越多越強」。

直到我看到實際的部署成本。

一個部署在企業內網的 LLM 服務，如果每個場景都用全功能模型，GPU 成本、推論延遲、維護複雜度……全都往上衝。

更關鍵的是：**大部分的業務場景，根本用不到全部功能。**

客服機器人需要的是自然語言理解 + 對話管理 + 知識庫查詢。財務分析助理需要的是資料理解 + 報表生成。個人化推薦系統需要的是用戶畫像 + 偏好比對。

這個洞察促成了我的專利 **M671449《客製化生成式人工智慧系統》**——一個真正模組化的 GenAI 架構。

---

### 核心設計：「積木式」AI 系統

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

### 這對 GenAI Product Owner 意味著什麼？

作為 **GenAI PO**，這套架構給我最大的啟發是：

**AI 產品的架構設計，決定了它的邊際成本曲線。**

全功能部署的邊際成本幾乎是固定的（不管用到幾個功能，成本都在那裡）。模組化部署讓你可以根據用量動態配置資源，業務增長時水平擴展，試驗新場景時成本極低。

這其實是非常傳統的軟體工程思維——**關注點分離（Separation of Concerns）**——只是現在要應用到 AI 模組上。

---

### 三個 GenAI 架構設計原則

從這個專利中，我整理出三個對 GenAI Product Manager 有用的架構原則：

**1. 按需組合，而非一次到位**
不要試圖在第一版就實現所有功能。先找到核心模組，驗證後再疊加。

**2. 每個模組應該可以獨立替換**
LLM 技術演進非常快。如果你的文本生成模組被「焊死」在系統裡，換模型時的成本會讓你崩潰。

**3. 知識庫模組是競爭壁壘**
其他模組容易被競品複製，但你的知識庫——客戶資料、業務規則、機構記憶——才是真正難以複製的護城河。

---

*M671449 客製化生成式人工智慧系統｜公告日：2025/06/11｜唯一發明人：劉岦崱*`
    },
    {
        id: "patent-pii-filter",
        tags: ["Patent","GenAI","Architecture"],
        title: "【專利三】GenAI 合規設計的關鍵技術：銀行 AI 產品經理如何用「敏感資訊替換」兼顧效能與法遵？",
        excerpt: "在銀行導入 AI 知識庫查詢系統時，如何防止個資外洩又不犧牲回覆品質？本文介紹一個 GenAI Product Owner 設計的敏感資訊過濾與替換專利架構。",
        date: "2025-06-01",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-pii-filter.png",
        content: `### 每一個 GenAI PM 都會遇到的合規噩夢

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

### 核心機制：替換，而非遮蔽

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

### 為什麼這是 GenAI 產品設計的核心能力？

銀行、醫療、法律……這些高度受監管的行業，是 GenAI 最有價值、也最難落地的市場。

難落地的原因幾乎都不是技術問題，而是**合規問題**。

作為 **GenAI Product Manager**，如果你能在產品架構層面就解決合規疑慮，你就能把競爭對手遠遠甩在後面——因為大多數人還在用「事後 review」的方式處理法遵，而你已經把合規能力內建進系統裡了。

---

### 實作 GenAI 合規架構的三個層次

**Layer 1：輸入端過濾**
在用戶的 prompt 進入系統前，過濾掉不應該被查詢的敏感資料範疇。

**Layer 2：輸出端替換（本專利的核心）**
在回覆送出前，自動識別並替換敏感內容，確保外顯資訊合規。

**Layer 3：稽核日誌**
完整記錄每一次查詢、每一次替換，支援事後稽核與法遵查核。

**只做其中一層是不夠的。三層加在一起，才是真正的 GenAI 合規架構。**

---

*M671223 資訊查詢系統（敏感資訊過濾與替換）｜公告日：2025/06/01｜唯一發明人：劉岦崱*`
    },
    {
        id: "patent-multi-agent",
        tags: ["Patent","Agent","Architecture"],
        title: "【專利二】AI Agent 怎麼優化資料庫？一個 GenAI PM 的多代理架構設計思考",
        excerpt: "傳統 DBA 靠經驗管資料庫，但在高併發、複雜負載的環境下，這不夠用。本文分享一位 GenAI Product Owner 如何設計多 AI 代理協作的資料庫智慧優化系統，並取得新型專利。",
        date: "2025-06-01",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-multi-agent.png",
        content: `### DBA 的困境，AI Agent 的機會

資料庫優化是一門黑魔法。

資深 DBA 靠的是多年累積的直覺：看到某個查詢 pattern，知道要加什麼 index；看到某個負載曲線，知道要怎麼調 connection pool。

但問題是：**直覺無法規模化，也無法 24 小時待機。**

現代資料庫系統的負載複雜到人腦很難即時分析。特別是在電商、金融這類場景，流量峰值可能在幾秒內爆衝十倍。等 DBA 醒來手動處理，系統早就掛了。

這是我設計 **M671161《智慧優化系統》** 的起點：**用 AI Agent 把 DBA 的決策流程自動化**。

---

### 多代理架構：讓 AI 們「競合」出最佳策略

這個系統最有趣的設計，是採用**多個 AI 子代理（Sub-agents）協作競爭**的機制。

整體流程如下：

\`\`\`
效能監視模組 → 資料預處理模組 → 負載預測模組
    → 人工智慧代理模組（多個子代理）
        → 策略整合模組
            → 執行模組 → 資料庫伺服器
\`\`\`

**人工智慧代理模組**由四個子代理組成：

| 子代理 | 負責範疇 |
|--------|---------|
| 查詢優化子代理 | 分析並改寫低效 SQL 查詢 |
| 資源分配子代理 | CPU、Memory、I/O 的動態配置 |
| 索引管理子代理 | 評估哪些索引該建、哪些該移除 |
| 安全評估子代理 | 識別可疑查詢行為 |

四個子代理各自產生優化建議策略，再由**策略整合模組**整合出最佳方案執行。

而且系統具備**強化學習回饋機制**：執行優化後，觀察實際效果，反饋給 AI 代理模組持續學習。

---

### 這對 GenAI Product Manager 最重要的啟示

做 AI 產品，「單一 AI 解決所有問題」幾乎不可能。

真正好用的企業 AI 架構，往往是**多個專精 Agent 的協作系統**。

這和軟體工程的微服務概念一模一樣：與其一個單體架構做所有事，不如多個服務各司其職、互相協作。

**作為 GenAI Product Owner，你需要問的問題是：**

- 我的問題可以分解成幾個子任務？
- 每個子任務需要什麼能力的 Agent？
- 這些 Agent 如何協作、如何整合輸出？
- 整個系統如何從執行結果中學習？

設計 Multi-agent 架構是 2025 年以後 **GenAI PM** 的核心技能之一。而這個資料庫優化系統，是一個非常具體的實作範例。

---

### 負載預測：AI 需要「未來感知」

系統中另一個關鍵設計是**負載預測模組**——用深度學習模型，結合歷史效能指標資料庫、時間序列資料和行事曆（例如：月底結帳日、雙十一等高峰），預測未來的資料庫負載。

**預防性優化永遠比被動應急便宜。**

---

*M671161 智慧優化系統（AI 驅動資料庫效能預測與調優）｜公告日：2025/06/01｜唯一發明人：劉岦崱*`
    },
    {
        id: "patent-wealth-dashboard",
        tags: ["Patent","GenAI"],
        title: "【專利一】GenAI 如何改造理財服務？從需求到儀表板——一個銀行 AI PM 的產品設計思路",
        excerpt: "理財專員的痛點是什麼？GenAI 如何讓他們在對話中即時生成個人化投資建議？本文分享一位銀行 GenAI Product Manager 的金融 AI 產品設計歷程與專利思維。",
        date: "2025-05-11",
        author: "Nils Liu",
        coverImage: "/images/blog/patent-wealth-dashboard.png",
        content: `### 理財專員的真實痛點

在銀行做 AI 產品，我花了很多時間跟理財專員（RM）聊天。

他們不缺努力，也不缺對客戶的了解。

他們缺的是：**在客戶面前，快速整合所有相關資訊，給出有說服力的建議的能力。**

現實場景是這樣的：客戶說「我有 500 萬想做一些配置調整」，RM 需要在幾分鐘內：

- 查詢客戶現有資產配置
- 了解客戶的風險偏好與歷史紀錄
- 查看當前市場動態與利率走勢
- 比較內部可銷售的理財產品
- 做出個人化建議

這是一個多源資訊整合 + 個人化推薦的任務，正是 **GenAI 最適合的應用場景**。

這個洞察，就是 **M670472《金融投資建議生成系統》** 的起點。

---

### 系統架構：一個「懂業務」的 AI 助理

系統設計圍繞著 RM 的工作流程展開：

**資訊輸入層**
- **外部伺服器**：即時市場資訊、市場趨勢、產品報價
- **內部伺服器**：客戶基本資訊、風險評估報告、客戶資產、可銷售理財產品

**AI 處理層**
1. **自然語言理解模組**：解析客戶的金融投資需求（可以是自然語言）
2. **多元資訊整合模組**：同步拉取外部市場資料與內部客戶資料
3. **生成式 AI 模型（LLM）**：整合所有輸入，生成初始客製化投資建議

**視覺化輸出層**
4. **互動式資產儀表板生成模組**：呈現客戶當前多維度資產配置分析
5. **投資建議儀表板生成模組**：提供多情境模擬的客製化建議
6. **動態視覺化模組**：將上述內容整合為一張完整的金融投資儀表板

最後，**持續學習模組**根據用戶互動回饋持續優化 AI 模型。

---

### 作為 GenAI Product Manager：這個專案教了我什麼？

**1. 「個人化」需要資料架構支撐**

很多 GenAI 產品號稱個人化，但實際上只是在 prompt 裡塞幾個用戶欄位。

真正的個人化需要完整的客戶資料模型：風險偏好、資產結構、歷史行為、互動回饋……這些資料架構的設計，比 AI 模型本身更重要。

**2. 「多情境模擬」是 AI 的殺手級功能**

傳統 RM 一次只能給一個建議。這個系統可以同時產出「保守型」、「平衡型」、「積極型」三個情境的建議，讓客戶自己選擇。

這是人腦很難做到的事，但 LLM 做起來毫不費力。**找到 AI 的不對稱優勢，是 GenAI PM 最核心的工作。**

**3. 持續學習閉環是長期競爭力的來源**

產品上線只是開始。系統從每一次 RM 使用行為、客戶反應中學習，讓模型越用越準。**這個學習飛輪，才是最難被複製的護城河。**

---

### 給 GenAI PO 的產品設計建議

如果你正在設計金融 AI 產品，我的建議是：

**不要從技術出發，從 RM（或任何前線業務人員）的工作流程出發。**

找到他們在哪個環節最耗時、最容易出錯、最需要資訊整合支援——那就是 GenAI 最能創造價值的地方。

**AI 最好的定位不是「取代 RM」，而是「讓每個 RM 都像有一個全知的助手在旁邊」。**

---

*M670472 金融投資建議生成系統（客製化 GenAI 金融儀表板）｜公告日：2025/05/11｜唯一發明人：劉岦崱*`
    },
    {
        id: "ithome-hello-world-2025",
        tags: ["Event","GenAI","Architecture"],
        title: "iThome Hello World 2025：從 MCP 到 Vibe Coding，四場 AI 實戰分享",
        excerpt: "今年我在 iThome Hello World 開發者大會帶來四場密集的 AI 實戰分享，從 MCP 生態系、GraphRAG 到企業級 LLM 防禦機制，探討大型語言模型落地企業的核心技術。",
        date: "2025-10-20",
        author: "Nils Liu",
        coverImage: "/images/blog/ithome-hello-world-2025.png",
        pinned: true,
        content: `在今年的 iThome Hello World 2025 開發者大會上，我一口氣帶來了四場跟 AI 實戰高度相關的議程。這不僅僅是知識的分享，更是我們團隊在銀行內部推動 LLM 落地過程中的血汗經驗總結。

![iThome Hello World 2025 場次紀錄](/images/blog/ithome-hello-world-2025-audience.jpg)

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
        tags: ["Career","Patent","Event"],
        title: "2025 年度回顧：不喧嘩的扎實推動",
        excerpt: "我的 2025 年 AI 歷險有四個數字：6、5、1、6。不是因為多光鮮，而是因為很踏實。在銀行做 GenAI 就像在營運中的大樓換管線，真正難的往往不是模型，而是工程與信任。",
        date: "2025-12-31",
        author: "Nils Liu",
        coverImage: "/images/blog/2025-year-in-review.jpg",
        pinned: true,
        content: `我的 2025 年 AI 歷險有四個數字：

<div class="my-10 grid grid-cols-2 md:grid-cols-4 gap-6 bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/10">
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">6<span class="text-2xl ml-1">項</span></div>
    <div class="font-bold text-foreground">新型專利</div>
    <div class="text-sm text-muted-foreground mt-1">已核准</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">5<span class="text-2xl ml-1">項</span></div>
    <div class="font-bold text-foreground">發明專利</div>
    <div class="text-sm text-muted-foreground mt-1">等審查</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">1<span class="text-2xl ml-1">篇</span></div>
    <div class="font-bold text-foreground">學術論文</div>
    <div class="text-sm text-muted-foreground mt-1">投稿審閱</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">6<span class="text-2xl ml-1">場</span></div>
    <div class="font-bold text-foreground">技術演講</div>
    <div class="text-sm text-muted-foreground mt-1">公開分享</div>
  </div>
</div>

這 6 場分享包含了 1 場 DevOpsDay、4 場 iThome Hello World、以及 1 場 Google DevFest Taipei。

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
        tags: ["Event","Agent","Architecture"],
        title: "DevFest Taipei 2025：AI 教練平台分享紀錄",
        excerpt: "在 DevFest Taipei 2025 分享真實上線的 AI 業務教練平台——多 Agent 協作、Persona World、Ontology + GraphRAG，打造 24/7 個人化培訓系統。",
        date: "2025-12-02",
        author: "Nils Liu",
        coverImage: "/images/blog/AI_Coach.png",
        pinned: true,
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
        tags: ["Event","Agent"],
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
        id: "fde-diamond-org",
        tags: ["Career","Agent"],
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
        tags: ["Career","GenAI"],
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
        tags: ["Career","Agent"],
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
        tags: ["Agent"],
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
        tags: ["News","GenAI"],
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
        tags: ["News","GenAI"],
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
        tags: ["GenAI","Architecture","Career"],
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
        tags: ["Event","Agent"],
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
        tags: ["GenAI","Architecture"],
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
        tags: ["Patent","News"],
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
        tags: ["Event","Agent"],
        title: "DevFest Taipei 2025 報名開放",
        excerpt: "11/30 在 Google GDG 舉辦的 DevFest Taipei 2025 分享 AI Agent team 落地應用，免費入場，歡迎報名。",
        date: "2025-10-28",
        author: "Nils Liu",
        coverImage: "/images/blog/devfest-taipei-announce.jpg",
        content: `11/30 我會在Google GDG舉辦的DevFest Taipei 2025分享AI Agent team 落地應用，歡迎有興趣的朋友們來報名，資格審核，免費入場`
    },
    {
        id: "best-attention-explanation",
        tags: ["GenAI","Architecture"],
        title: "最佳 Attention is All You Need 講解影片推薦",
        excerpt: "這是我看過的講解 Attention is all you need 的影片中講解最好的一部。",
        date: "2025-10-26",
        author: "Nils Liu",
        coverImage: "/images/blog/attention-transformer.jpg",
        content: `這是我看過的講解Attention is all you need的影片中講解最好的一部

https://www.youtube.com/watch?v=_VaEjGnHgOI&t=1274s`
    },
    {
        id: "jason-wei-ai-scenarios",
        tags: ["GenAI","News"],
        title: "Jason Wei 演講：系統化尋找 AI 場景的方法",
        excerpt: "Jason Wei 這段演講醍醐灌頂，聽到起 goose bump，尋找 AI 場景確實應該用這個系統化的方法。",
        date: "2025-10-23",
        author: "Nils Liu",
        coverImage: "/images/blog/jason-wei-ai.jpg",
        content: `Jason Wei這段演講醍醐灌頂，聽到起goose bump，尋找AI場景確實應該用這個系統化的方法`
    },
    {
        id: "thinking-machine-lab-deterministic-ai",
        tags: ["News","GenAI","Architecture"],
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
        tags: ["News","GenAI"],
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
        tags: ["GenAI"],
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
        tags: ["Career"],
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
        tags: ["Career","GenAI"],
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
        tags: ["Agent","News"],
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
        tags: ["News"],
        title: "星際之門：24 小時輪班建置的 AI 伺服器中心",
        excerpt: "星際之門現在是一個 24 小時輪班建置的伺服器中心專案，當美國人也開始 24 小時在卷的時候，你就知道這場仗是輸不起的。",
        date: "2025-05-28",
        author: "Nils Liu",
        coverImage: "/images/blog/stargate-ai-infra.jpg",
        content: `星際之門現在是一個24小時輪班建置的伺服器中心專案，當美國人也開始24小時輪班在卷的時候，你就知道這場AI領導地位的仗是美國輸不起的一場戰役`
    },
    {
        id: "google-io-one-for-all",
        tags: ["News"],
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
        tags: ["GenAI","Career"],
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
        id: "ai-team-recruitment-genai",
        tags: ["Career"],
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
        tags: ["Career","GenAI"],
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
        tags: ["News","GenAI"],
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
