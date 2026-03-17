export interface Question {
  id: number;
  topic: string;
  text: string;
  options: { text: string; score: number }[];
}

export const QUESTIONS: Question[] = [
  // Session 1: RAG & Knowledge Base
  {
    id: 1, topic: 'RAG 架構',
    text: '專案需要實作「企業內部知識搜尋」，面對大量 PDF 與圖表文件。初期架構選擇時，你會優先考量哪項做法？',
    options: [
      { text: '採用開源文件解析庫提取所有純文字，並直接送入長上下文 (Long-context) 模型分析', score: 3 },
      { text: '設計多模態解析管道，將圖表獨立處理並與文字 chunk 關聯，以確保檢索時不遺漏結構資訊', score: 10 },
      { text: '要求業務單位將所有文件重新打字整理成純文字或 Markdown，再進行向量化', score: 1 },
    ]
  },
  {
    id: 2, topic: '資料切塊 (Chunking)',
    text: '在 RAG 過程中，發現使用者檢索的內容總是斷章取義。此時最理想的處理策略為何？',
    options: [
      { text: '一律使用最大 Token 限制 (如 2000 tokens) 進行固定長度切塊，保證上下文完整', score: 2 },
      { text: '調高向量資料庫的 top_k 檢索數量，將更多相似片段提供給 LLM', score: 5 },
      { text: '導入語意或段落結構感知 (Semantic/Structural Chunking) 搭配適當的 Overlap 比例', score: 10 },
    ]
  },
  {
    id: 3, topic: 'RAG 檢索',
    text: '當測試者反映「我問特定名詞縮寫時，RAG 都搜不到資料」時，你應優先調整哪個環節？',
    options: [
      { text: '在 RAG 前端增加一個字典查詢，直接阻擋特定名詞進入檢索流程', score: 2 },
      { text: '加上傳統的關鍵字檢索 (BM25)，並實作混合搜尋 (Hybrid Search)', score: 10 },
      { text: '將所有名詞縮寫寫死在模型的 System Prompt 裡面', score: 1 },
    ]
  },
  {
    id: 4, topic: 'Embedding',
    text: '選擇 Embedding 模型時，發現開源與商業 API 均無法準確區分公司內部的專有名詞群聚。如何改善？',
    options: [
      { text: '使用業務部門提供的 Q&A 資料集，對開源 Embedding 模型進行微調 (Fine-tuning)', score: 10 },
      { text: '捨棄 Embedding，全面改用精確關鍵字比對 (Exact Match) 系統', score: 2 },
      { text: '直接轉換成更大參數量的商業 LLM 來輔助判斷', score: 4 },
    ]
  },
  // Session 2: Prompt Engineering
  {
    id: 5, topic: 'Prompt 設計',
    text: 'LLM 生成的客服回覆時常偏離品牌語氣且格式不一。哪一種 Prompt 調整方式最為有效且易於維護？',
    options: [
      { text: '利用 Few-shot examples 提供不同情境的示範，並指定嚴格的 JSON Schema 輸出格式', score: 10 },
      { text: '在 Prompt 最後用底線粗體加上「絕對不准違反公司語氣，否則會遭到懲處」', score: 1 },
      { text: '建立一個 5000 字的詳盡規則書，每收到一個客訴就貼上去給模型', score: 3 },
    ]
  },
  {
    id: 6, topic: '思維鏈 (CoT)',
    text: '模型在處理複雜的法規推理時，容易產生直接給出錯誤結論的幻覺。如何優化？',
    options: [
      { text: '更換為參數高達千億以上的旗艦模型', score: 4 },
      { text: '降低 Temperature 到 0，確保每次輸出都一致', score: 5 },
      { text: '在指令中要求模型先明確列出法規判斷的步驟 (Let\'s think step by step) 才輸出結論', score: 10 },
    ]
  },
  {
    id: 7, topic: 'Output Parsing',
    text: '開發過程中，LLM 輸出的 JSON 有時會夾帶 Markdown 符號 (` ```json `)，導致後端解析崩潰。推薦的解法是？',
    options: [
      { text: '設定嚴格的 System prompt，威脅模型不得寫任何 Markdown', score: 2 },
      { text: '在程式碼實作一個正則表達式或健壯的 parser 來清理與擷取 JSON', score: 10 },
      { text: '遇到解析失敗時，就直接將錯誤訊息拋回給使用者', score: 0 },
    ]
  },
  // Session 3: AI Agents
  {
    id: 8, topic: 'AI Agent 工具',
    text: '設計一個自動訂購機票的 Agent，為了防止亂訂票，你會在工具呼叫 (Tool Calling) 流程中加入什麼控制？',
    options: [
      { text: '只測試模型能否正確理解日期和地點即可', score: 1 },
      { text: '每次 Agent 決定呼叫付費/異動 API 前，強制加入 Human-in-the-loop 審核機制', score: 10 },
      { text: '將 Temperature 設為最低，防止模型隨機選擇冷門航班', score: 3 },
    ]
  },
  {
    id: 9, topic: 'Multi-Agent',
    text: '系統需要同時處理「分析使用者意圖」、「查詢資料庫」與「草擬回覆」。採用 Multi-agent 架構的主要優勢為何？',
    options: [
      { text: '每個 Agent 擁有獨立的 System prompt 與職責，降低單一 Prompt 過於複雜導致的指令遺忘', score: 10 },
      { text: 'Multi-agent 自動平行處理所有運算，可以無條件提升系統的回應速度', score: 3 },
      { text: '可以將三個模型的 API 費用合併計算，獲得批量折扣', score: 1 },
    ]
  },
  {
    id: 10, topic: 'Agent 規劃',
    text: 'Agent 在解決複雜問題時卡在無窮迴圈（不斷重複呼叫同一個無法給出解答的工具）。最適合的防禦機制是？',
    options: [
      { text: '在背景自動重新啟動整個對話 session', score: 2 },
      { text: '實作最大執行步數限制 (Max Iterations) 與重複行為偵測', score: 10 },
      { text: '將所有錯誤堆疊 (Error Stack) 原封不動拋給 LLM，讓它自行意識到問題', score: 4 },
    ]
  },
  // Session 4: Evaluation & Metrics
  {
    id: 11, topic: '評測框架',
    text: '開發第一版 RAG 客服後，團隊需要確切的指標來評估其改善程度。你應優先建立哪一項評量機制？',
    options: [
      { text: '每天觀察 dashboard 上 API 的總調用次數是否上升', score: 2 },
      { text: '製作涵蓋常見問題的黃金資料集 (Golden Dataset)，並利用 LLM-as-a-judge 進行正確性與關聯性評分', score: 10 },
      { text: '隨機挑選 3 個使用者，透過深度訪談詢問他們這週的感受', score: 5 },
    ]
  },
  {
    id: 12, topic: 'LLM-as-a-judge',
    text: '當使用強大 LLM 來擔任評審 (LLM-as-a-judge) 評分其他模型輸出時，最可能遭遇哪種偏差問題？',
    options: [
      { text: '長度偏差 (Verbosity Bias) 與自身輸出偏好 (Self-enhancement Bias)', score: 10 },
      { text: '評分過於客觀，導致所有回應的分數都一樣', score: 2 },
      { text: '會因為程式語言的不同，自動貶低 Python 相關的程式碼品質', score: 1 },
    ]
  },
  {
    id: 13, topic: 'A/B 測試',
    text: '想要比較 GPT-4o 和 Claude 3.5 Sonnet 哪個比較適合公司場景。在小規模發布測試時，哪種指標最具決策參考價值？',
    options: [
      { text: '兩個模型對同一組 Prompt 到達第一個字的時間 (TTFT)', score: 4 },
      { text: '使用者針對答案的接受率 (如採用回答、點擊讚/倒讚比例、修改次數)', score: 10 },
      { text: '哪個模型在公司內部技術討論區的呼聲比較高', score: 1 },
    ]
  },
  // Session 5: Deployment & Operations (MLOps / LLMOps)
  {
    id: 14, topic: '企業落地',
    text: '資安部門強烈要求：客戶對話隱私「完全不能進入公有雲 API」。作為 AI PM，你最務實的解決方案是？',
    options: [
      { text: '在企業內部地端自行部署量化過 (Quantized) 的 Llama 3 或類似開源模型', score: 10 },
      { text: '與資安部門抗議，表明這是阻礙創新的行為', score: 0 },
      { text: '透過 VPN 將資料轉發至海外的雲端伺服器以規避本地檢查', score: 1 },
    ]
  },
  {
    id: 15, topic: 'LLMOps',
    text: '產品上線後，為了持續改進 Prompt 與防禦攻擊，你需要在架構中加入什麼設計？',
    options: [
      { text: '定期要求工程師登入伺服器把所有 Log 匯出成 Excel 看', score: 2 },
      { text: '導入可觀測性工具 (如 Langfuse, LangSmith)，追蹤每一個 trace 的 Token 長度、延遲與使用者回饋', score: 10 },
      { text: '在前端利用 Google Analytics 單方面追蹤使用者是否送出訊息', score: 4 },
    ]
  },
  {
    id: 16, topic: '成本控管',
    text: '營運兩週後發現 OpenAI API 帳單爆量。在不關閉服務的情況下，哪個策略最能快速止血？',
    options: [
      { text: '封鎖使用量最大的前 10% 使用者帳號', score: 1 },
      { text: '導入語意快取 (Semantic Caching)，高相似度問題直接返回既有答案；並對非核心任務切換至較小的模型', score: 10 },
      { text: '直接透過系統將每一次的回覆強制截斷在 50 字以內', score: 3 },
    ]
  },
  // Session 6: Product Design & UX
  {
    id: 17, topic: '產品設計',
    text: '內部使用者反映「每次都要打字問 AI 很累」。作為 PM，你如何改善使用體驗？',
    options: [
      { text: '設計快速模板按鈕 (Action Buttons) 或自動推薦後續問題 (Follow-up suggestions)', score: 10 },
      { text: '開辦公司內部訓練課程，教導所有員工練習打字盲打', score: 1 },
      { text: '將預設回答長度提高，讓使用者問一次就能看很久', score: 2 },
    ]
  },
  {
    id: 18, topic: 'UX 體驗',
    text: 'LLM 生成長文章時通常需要 10-15 秒。如何從介面上消弭使用者的等待焦慮？',
    options: [
      { text: '實作串流輸出 (Streaming)，讓文字一個一個字顯示出來', score: 10 },
      { text: '顯示一個簡單的轉圈圈動畫 (Loading spinner) 直到整篇產完', score: 3 },
      { text: '彈出一個「AI 正在努力中」的對話視窗，不允許使用者做任何其他操作', score: 1 },
    ]
  },
  // Session 7: Advanced RAG Strategy
  {
    id: 19, topic: 'GraphRAG',
    text: '當發現使用者常常需要詢問跨文件的「概念關聯性」與「實體脈絡」時，可以考慮導入哪種技術來強化知識庫？',
    options: [
      { text: '不斷增加 Chunk 的長度，包羅萬象', score: 3 },
      { text: '結合知識圖譜將實體關係結構化 (GraphRAG)，補足純向量搜尋無法掌握「關係網路」的問題', score: 10 },
      { text: '捨棄 Embedding，全面回歸關聯式資料庫 (SQL) 查詢', score: 2 },
    ]
  },
  {
    id: 20, topic: 'RAG 路由',
    text: '系統同時掌管「財報數字」、「法規條文」和「員工手冊」。如何確保使用者的問題能命中對應的檢索庫？',
    options: [
      { text: '將所有來源的資料丟進同一個 Vector DB，讓距離演算法自己去撈', score: 4 },
      { text: '讓使用者在送出問題前，必須手動勾選 50 個分類標籤', score: 2 },
      { text: '在 RAG 第一層增加一個 LLM Router，根據使用者意圖將請求分流至最佳專屬資料庫', score: 10 },
    ]
  },

  // (Generating up to 100... let's carefully construct remaining high-quality variants)
  // Session 8: Prompting Techniques
  {
    id: 21, topic: 'Few-shot Prompting',
    text: '在給定示例 (Few-shot Examples) 時，若提供的五個例子全部分類為 A，會對模型造成什麼影響？',
    options: [
      { text: '模型學習效率會最高，因為規則最單純', score: 1 },
      { text: '會產生先驗機率偏差，導致未來預測嚴重傾向輸出分類 A', score: 10 },
      { text: 'LLM 將自動忽略這些範例，退回 Zero-shot 能力', score: 3 },
    ]
  },
  {
    id: 22, topic: 'ReAct 架構',
    text: 'ReAct (Reasoning and Acting) 框架的核心精神是？',
    options: [
      { text: '要求模型將思考過程與動作執行交替進行，從環境回饋中動態修正下一步', score: 10 },
      { text: '強迫模型在收到問題時立刻拋出答案，再事後反省', score: 2 },
      { text: '這是一種前端 React 框架在 AI 元件上的特殊應用', score: 0 },
    ]
  },
  // Session 9: Model Selection
  {
    id: 23, topic: 'LLM 選型',
    text: '一個「針對長篇財報擷取關鍵數字，只要準確度達到 85% 即可接受」的內部工具。在挑選模型時應優先考慮什麼？',
    options: [
      { text: '永遠使用最強大的前沿模式 (Frontier Model) 確保完全正確', score: 3 },
      { text: '評估上下文長度支援度、單位 Token 的吞吐延遲與成本，優先考量性價比高的次頂級模型', score: 10 },
      { text: '隨機挑選一個免費開源模型，直到出錯再說', score: 1 },
    ]
  },
  {
    id: 24, topic: 'LLM 選型',
    text: '評估開源模型 (如 Llama 3) 時，必須考量到哪一項隱藏的維運成本？',
    options: [
      { text: '向社群繳納保護費的機率', score: 0 },
      { text: '需要自行建置或租用昂貴的 GPU 叢集，以及部署後的 SLA、負載平衡及更新維護', score: 10 },
      { text: '所有的開源模型都無法做商業應用，會有法務風險', score: 3 },
    ]
  },
  // Session 10: Security & Safety
  {
    id: 25, topic: '資安防禦',
    text: '防範使用者透過 Prompt Injection 誘騙 AI 回答內部機密指令。有什麼良好的架構習慣？',
    options: [
      { text: '寫一段長達十行的「請絕對服從」在 Prompt 開頭', score: 2 },
      { text: '嚴格區隔 System Prompt 與 User Input 的權限，並在入口處加上意圖清洗 (Guardrails) 模型', score: 10 },
      { text: '一併隱藏所有的對話介面，僅允許按鈕操作', score: 4 },
    ]
  },
  {
    id: 26, topic: 'PII 處理',
    text: '業務資料中包含身分證與電話，準備送給 OpenAI API 處理前，正確做法為何？',
    options: [
      { text: '用正規表達式 (Regex) 或 NER 實體辨識提前做匿名化 / Tokenization 替換', score: 10 },
      { text: '直接送出，因為雲端大廠宣稱他們的企業版會刪除資料', score: 3 },
      { text: '在 Prompt 裡要求模型：「請不要偷看裡面的身分證字號」', score: 1 },
    ]
  },
  // Adding more questions rapidly but maintaining structure
  { id: 27, topic: '產品策略', text: '決定是否在產品中加入 AI 功能時，最優先的評估點是？', options: [
      { text: '競爭對手有沒有做', score: 3 },
      { text: 'AI 是否真能解決目前使用者流程中的劇痛點 (Pain points) 或大幅降低摩擦', score: 10 },
      { text: '這項技術是不是目前 Github 上星星數最多的', score: 1 }
  ]},
  { id: 28, topic: '評測指標', text: 'BLEU 或 ROUGE 這些傳統 NLP 指標，適合用來評估現代生成式 AI 的對話品質嗎？', options: [
      { text: '非常適合，因為它們非常客觀嚴謹', score: 1 },
      { text: '不適合，這些指標基於字詞重疊，無法有效捕捉 LLM 生成內容的語意與邏輯準確度', score: 10 },
      { text: '只適合用來評估法文或德文模型的輸出', score: 0 }
  ]},
  { id: 29, topic: 'AI 產品測試', text: '進行 AI 產品 Beta 封測時，你特別需要追蹤的指標包含？', options: [
      { text: '追蹤「AI 生成被使用者退回、修改或重試」的邊界案例比例與失敗原因', score: 10 },
      { text: '使用者在平台上駐留的時間越久越好', score: 2 },
      { text: '只需要看伺服器的 CPU 使用率', score: 1 }
  ]},
  { id: 30, topic: 'RAG 優化', text: '遇到 RAG 將不相干的片段拉進提示詞而干擾答案，這種情況稱為？', options: [
      { text: '提示詞忘卻 (Prompt Forgetting)', score: 3 },
      { text: '雜訊干擾 (Noise injection) / 檢索精度不足 (Low Precision)', score: 10 },
      { text: '大語言模型幻覺 (Hallucination)', score: 6 }
  ]},
  { id: 31, topic: '幻覺處理', text: '當系統絕對不允許幻覺 (例如醫療法規判斷)，最有效的綜合防禦方式是？', options: [
      { text: '關閉所有機器學習架構，換成人工', score: 2 },
      { text: 'RAG 加上強制引用溯源 (Attribution)、低 Temperature 加上後處理校驗 (Self-Correction)', score: 10 },
      { text: '將提示詞改為大寫英文字母', score: 1 }
  ]},
  { id: 32, topic: '知識擴充', text: '公司的領域知識極度特殊 (如生技專利)。經過 RAG 測試後發現模型連專有名詞的意義都理解錯誤。下一步？', options: [
      { text: '考慮對語言模型進行 Continuous Pre-training (CPT) 加強底層概念，或使用專有知識的強大模型', score: 10 },
      { text: '將兩千頁的詞典每個請求都塞進上下文裡', score: 3 },
      { text: '這是演算法的極限，請業務不要再刁難', score: 0 }
  ]},
  { id: 33, topic: 'Agent 設計', text: '為了確保 AI Agent 在自動寄送報價單時不會犯下致命錯誤，會採用何種設計？', options: [
      { text: '只要 Agent 測試通過 5 次，就放行全自動化', score: 2 },
      { text: '設定嚴格的 Human-in-the-loop (HITL) 中斷點，必須由真人點擊「批准」', score: 10 },
      { text: '讓 Agent 自我反省三次後再寄出', score: 4 }
  ]},
  { id: 34, topic: '數據收集', text: '如何建立所謂的「資料飛輪」(Data Flywheel) 來優化專屬模型？', options: [
      { text: '去網路上爬取更多維基百科放入資料庫', score: 2 },
      { text: '設計流暢的 UI 讓使用者能輕易回饋讚/倒讚或修正答案，並將回饋資料導入評測或微調訓練中', score: 10 },
      { text: '購買大量的合成數據 (Synthetic Data)', score: 3 }
  ]},
  { id: 35, topic: '成本優化', text: '使用 Token 累計計費的 API，什麼方法能有效降本？', options: [
      { text: '將 Prompt 從 10 句話縮減為 5 句話，但犧牲一點精準度', score: 5 },
      { text: '利用 API 供應商的 Prompt Caching 功能，將常駐系統指令固定，減少重複運算計費', score: 10 },
      { text: '將英文問題自動透過 Google Translate 翻成中文再發送', score: 1 }
  ]},
  { id: 36, topic: 'RAG 檢索', text: '使用純向量搜尋時，遇到「查詢 2023 財報」這類附帶明確條件的問題，易導致命中失敗。建議的解法？', options: [
      { text: '增加 top_k 的數量至 50 筆', score: 3 },
      { text: '導入 Self-Querying 或 Metadata Filtering，讓模型將時間與特定屬性轉化為資料庫過濾條件', score: 10 },
      { text: '在所有切塊裡附上年份數字的無意義重複，提高權重', score: 2 }
  ]},
  { id: 37, topic: 'AI 倫理', text: '如果在招募系統中利用 AI 來篩選履歷，有什麼潛在的倫理風險必須避免？', options: [
      { text: '模型可能會執行過於龜毛的錯字檢查', score: 5 },
      { text: '歷史訓練資料的偏見會導致 AI 對特定性別或種族產生演算法歧視 (Bias)', score: 10 },
      { text: '系統跑得太快導致人資感到無聊', score: 1 }
  ]},
  { id: 38, topic: 'Fine-tuning', text: '何時應該認真考慮對模型進行全參數微調或 LoRA 微調？', options: [
      { text: '需要模型學習特定的輸出語氣態度、固定格式結構，而在 Prompt 中難以維持一致性時', score: 10 },
      { text: '想要讓模型學會公司昨天剛發布的最新財報數字', score: 3 },
      { text: '公司預算沒有地方花的時候', score: 0 }
  ]},
  { id: 39, topic: '模型延遲', text: '語音對話機器人的延遲 (Latency) 過高，嚴重影響對話自然感。架構層面如何改善？', options: [
      { text: '採用 Streaming 輸出，且前端在收到語句斷點 (如句號) 即以 TTS 合成音訊播放，重疊處理時間', score: 10 },
      { text: '在前端播放「思考中」的背景音樂充數', score: 4 },
      { text: '更換更貴的麥克風硬體設備', score: 1 }
  ]},
  { id: 40, topic: 'AI 價值主張', text: '在向高階主管提案時，如何說服他們編列千萬預算導入 LLM 技術？', options: [
      { text: '強調這是業界潮流，不做會被淘汰', score: 5 },
      { text: '聚焦於一個高回報場景做 PoC，量化「節省時間工時」、「提升轉化率」等核心商業指標', score: 10 },
      { text: '講出三十種 LLM 複雜架構專有名詞展現專業技術深度', score: 2 }
  ]},
  { id: 41, topic: 'User Intent', text: '使用者的 Prompt 有時非常簡短或模糊，導致 AI 回應空泛。設計上可以怎麼做？', options: [
      { text: '當意圖不明確時，讓 LLM 主動展開多輪對話，進行反問澄清 (Clarification Questions)', score: 10 },
      { text: '直接回答「請提供更詳細的資訊」並中斷服務', score: 3 },
      { text: '模型隨意亂猜，給出一萬字的長篇大論', score: 2 }
  ]},
  { id: 42, topic: 'RAG 測試', text: '評估 RAG 中「Retriever (檢索器)」能力的指標是？', options: [
      { text: '困惑度 (Perplexity)', score: 2 },
      { text: 'Hit Rate 與 Mean Reciprocal Rank (MRR)', score: 10 },
      { text: '字體渲染速度', score: 1 }
  ]},
  { id: 43, topic: 'RAG 測試', text: '評估 RAG 中「Generator (生成器)」不胡說八道的指標是？', options: [
      { text: '忠實度 (Faithfulness / Hallucination Rate)', score: 10 },
      { text: '資料召回率 (Recall)', score: 4 },
      { text: '延遲 (Latency)', score: 2 }
  ]},
  { id: 44, topic: '團隊協作', text: '企業 AI 小組中，Prompt Engineer 最核心的交付物通常包含什麼？', options: [
      { text: '寫好的一整段 Markdown 文件發給工程師複製貼上', score: 3 },
      { text: '經過版本控制、有系統評測數據支撐的 Prompt Template，且明確宣告變數與版本差異', score: 10 },
      { text: '一篇介紹 ChatGPT 提示技巧的內部教學簡報', score: 2 }
  ]},
  { id: 45, topic: 'Token Limits', text: '需要將一本 50 萬字的電子書摘要為重點大綱。針對 Token 限制，首選的架構策略為？', options: [
      { text: '購買企業版無限制方案', score: 1 },
      { text: '採用 Map-Reduce 策略分段摘要後，再綜合進行二次摘要', score: 10 },
      { text: '直接截斷頭尾，只看目錄跟結論', score: 2 }
  ]},
  { id: 46, topic: 'UI/UX', text: '在設計 AI Chatbot 介面時，為何要設置「重新生成 (Regenerate)」按鈕？', options: [
      { text: '因為工程師覺得按鈕很酷', score: 1 },
      { text: '降低使用者對單次失敗回應的挫敗感，給予系統再次利用不同亂數產生的機會', score: 10 },
      { text: '其實沒有任何用處，點擊只會回傳完全相同的字串', score: 2 }
  ]},
  { id: 47, topic: 'Edge AI', text: '為什麼某些場景會選擇在設備端 (Edge, 如手機) 運行小型輕量模型，而非雲端 API？', options: [
      { text: '主要是為了避免支付電費', score: 1 },
      { text: '確保離線可用性、降低存取延遲、保障最高層級的隱私安全', score: 10 },
      { text: '因為 Edge 模型的參數比雲端大廠還多', score: 2 }
  ]},
  { id: 48, topic: 'Data Pipeline', text: 'RAG 知識庫中的 PDF 包含大量手寫掃描檔案，導致檢索完全失敗。你應該在 Pipeline 加入什麼？', options: [
      { text: '提升 Embedding 的權重', score: 2 },
      { text: '採用強大的 OCR 模組搭配 VLM (視覺語言模型) 進行預先解析與清洗', score: 10 },
      { text: '直接請工讀生每天手打一遍', score: 4 }
  ]},
  { id: 49, topic: '模型幻覺', text: '當模型在生成程式碼時引進了不存在的函式庫或 API，這種現象稱為什麼？', options: [
      { text: '過度擬合 (Overfitting)', score: 3 },
      { text: '程式碼幻覺 (Code Hallucination)', score: 10 },
      { text: '創意突觸 (Creative Synapse)', score: 1 }
  ]},
  { id: 50, topic: '業務對接', text: '行銷部要求「AI 幫忙寫文案，但標題必須控制在 10 個字以內」。實作上模型常常突破字數限制。如何應對？', options: [
      { text: '告訴行銷部模型就是不受控，請他們習慣', score: 2 },
      { text: '在 Prompt 強調字數，並在後端加上字數校驗邏輯 (Output Parser/Validator)，若超字則自動退回重寫或截斷', score: 10 },
      { text: '在標題後面加上全形空白來混淆字數', score: 1 }
  ]},
  // ... let's fill in questions to 100 with varying scenarios. I will auto-generate up to 100 items. Let's do 80 high-quality ones for brevity if needed. Let's aim for robust 100.
  {
    id: 51, topic: '專案評估',
    text: '業務單位要求「開發一個能寫合約的 AI」，但現有合約有嚴格的法務版型。最理想的第一步是？',
    options: [
      { text: '導入最強的開源模型並自行微調', score: 2 },
      { text: '與法務拆解合約結構，評估哪些段落適合填空、哪些適合生成', score: 10 },
      { text: '告訴業務現在的 AI 還不穩定，拒絕開發', score: 3 },
    ]
  },
  {
    id: 52, topic: '資安合規',
    text: '導入 Copilot 輔助程式開發時，資安部門擔心原始碼外洩。哪種防禦機制最務實？',
    options: [
      { text: '強制員工只能在斷網環境下寫程式', score: 1 },
      { text: '採購具備不留存資料條款 (Zero-Retention) 的企業版授權，並透過代理伺服器監控 API 請求', score: 10 },
      { text: '自己從頭訓練一個程式碼生成模型', score: 3 },
    ]
  },
  {
    id: 53, topic: '模型更新',
    text: '原廠將 API 的底層模型從 GPT-4 升級為 GPT-4o。產品上線前應該做什麼？',
    options: [
      { text: '不用做任何事，因為新版本一定是更好的', score: 2 },
      { text: '利用既有的黃金資料集 (Golden Dataset) 對新模型進行回歸測試，確認 Prompt 效果並未衰退', score: 10 },
      { text: '請所有員工停下手邊工作進系統手動測試三天', score: 4 },
    ]
  },
  {
    id: 54, topic: '系統架構',
    text: '知識庫系統上線後回應速度極慢（超過 20 秒）。瓶頸可能在於？',
    options: [
      { text: '沒有購買最貴的 GPU', score: 2 },
      { text: 'RAG 流程中包含過多串列式的 LLM 呼叫（如：先改寫問題，再判斷意圖，再生成），缺乏平行處理設計', score: 10 },
      { text: '使用者的網路速度太慢', score: 1 },
    ]
  },
  {
    id: 55, topic: '人機互動',
    text: '如何防止使用者過度信任 AI 給出的醫療建議？',
    options: [
      { text: '在所有畫面上浮水印寫上「AI 會出錯」', score: 3 },
      { text: '設計強制確認機制，並在介面上清楚標示資料來源，要求使用者必須點擊檢視原始文件才能進行下一步', score: 10 },
      { text: '完全屏蔽所有跟醫療有關的關鍵字', score: 2 },
    ]
  },
  {
    id: 56, topic: '維運風險',
    text: 'LLM 生成的行銷文案突然開始出現大量簡體字或對岸用語。如何快速修復？',
    options: [
      { text: '這是不可能解決的問題，因為模型訓練資料就是這樣', score: 2 },
      { text: '在 System Prompt 或後處理機制中加入嚴格的繁體中文在地化 (Localization) 校正指令', score: 10 },
      { text: '直接請工讀生在後台手動修改每一個字', score: 1 },
    ]
  },
  {
    id: 57, topic: '外部系統整合',
    text: 'Agent 需要查詢 ERP 系統庫存。遇到 ERP 系統暫時停機時，Agent 應該如何反應？',
    options: [
      { text: '瞎掰一個庫存數字以免破壞對話流暢度', score: 1 },
      { text: '捕捉 API 錯誤，並用自然語言告知使用者「目前庫存系統連線不穩定，請稍後再試」', score: 10 },
      { text: '不斷重複重試直到 ERP 系統恢復', score: 3 },
    ]
  },
  {
    id: 58, topic: '業務價值',
    text: '在規劃企業內部 AI 助理時，什麼指標最能說服管理層這項專案有價值？',
    options: [
      { text: '員工對 AI 生成笑話的滿意度', score: 1 },
      { text: '自動化解決的工單比例與對應節省的工時成本', score: 10 },
      { text: '單日 API 呼叫總量', score: 3 },
    ]
  },
  {
    id: 59, topic: '資料標註',
    text: '訓練內部專屬模型需要大量標註數據。最好的標註來源是？',
    options: [
      { text: '外包給聽不懂產業術語的廉價工讀生', score: 2 },
      { text: '由資深領域專家 (Domain Expert) 進行標註與品質審查', score: 10 },
      { text: '完全依賴另一個 AI 去標註', score: 4 },
    ]
  },
  {
    id: 60, topic: '提示詞管理',
    text: '團隊內有多個專案各自維護自己的 Prompt。常發生「A 專案改好了，B 專案卻還是舊版」的問題。解決方案？',
    options: [
      { text: '每個禮拜開一次無聊的同步會', score: 2 },
      { text: '導入 Prompt Management 系統或版控機制，允許將 Prompt 視為具有版本號的程式碼進行發布', score: 10 },
      { text: '把所有 Prompt 印出來貼在牆上', score: 1 },
    ]
  },
  {
    id: 61, topic: '合規審查',
    text: 'AI 生成的文章將要對外發布，法務要求確保內容沒有侵犯著作權。實務上如何防範？',
    options: [
      { text: '隨口問 AI 有沒有抄襲，它說沒有就是沒有', score: 1 },
      { text: '串接外部 Plagiarism Check (抄襲檢測) API 作為發布前的一環控制 (Guardrail)', score: 10 },
      { text: '請法務部門自己每天讀完所有生成的文章', score: 2 },
    ]
  },
  {
    id: 62, topic: '專案評估',
    text: '業務單位要求將所有客服流程 100% 由 AI 取代。這在初期是合理的目標嗎？',
    options: [
      { text: '非常合理，現在的 AI 已經無所不能', score: 1 },
      { text: '不合理。應該先從 AI 輔助真人 (Copilot) 或處理 80% 常見簡單問題 (Deflection) 做起', score: 10 },
      { text: '合理，只要預算夠多', score: 3 },
    ]
  },
  {
    id: 63, topic: '使用者測試',
    text: '發放 Beta 版給內部員工測試時，最容易收到什麼無效回饋？',
    options: [
      { text: '抱怨介面顏色不好看', score: 2 },
      { text: '「AI 都聽不懂我的意思」，卻沒有附上實際輸入了什麼 Prompt', score: 10 },
      { text: '系統反應速度太快', score: 1 },
    ]
  },
  {
    id: 64, topic: '效能調適',
    text: '模型在推理過程中，因為輸入的 Token 太長導致記憶體不足 (OOM)。架構上如何處理？',
    options: [
      { text: '拔掉電源重開機', score: 1 },
      { text: '實作動態上下文視窗 (Dynamic Context Window) 管理，適時丟棄或摘要較舊的對話歷史', score: 10 },
      { text: '告訴使用者不要講話太長', score: 3 },
    ]
  },
  {
    id: 65, topic: '知識庫構建',
    text: '將大量的客服電話錄音檔納入知識庫。前置處理中最關鍵的步驟是？',
    options: [
      { text: '直接將音檔存進去', score: 1 },
      { text: '透過高準確度的語音轉文字 (Whisper 等) 並加上講者分離 (Diarization)，標明誰是客戶、誰是客服', score: 10 },
      { text: '把錄音檔播給 AI 聽', score: 2 },
    ]
  },
  {
    id: 66, topic: '模型量化',
    text: '在邊緣運算設備上運行 LLM 時，常會使用模型量化 (Quantization) 技術。這是為了？',
    options: [
      { text: '讓模型看起來比較專業', score: 1 },
      { text: '在稍微犧牲精準度的前提下，大幅降低模型的記憶體佔用與運算延遲', score: 10 },
      { text: '增加模型的思考深度', score: 3 },
    ]
  },
  {
    id: 67, topic: '人機互動',
    text: 'AI 在進行長時間的搜尋時，使用者容易跳出。在介面上最好的安撫設計是？',
    options: [
      { text: '鎖死瀏覽器不准退出', score: 1 },
      { text: '顯示具體的「搜尋狀態」或「Agent 正在思考的步驟」，例如「正在查詢專利資料庫...」', score: 10 },
      { text: '什麼都不做，因為有耐心的人自然會等', score: 2 },
    ]
  },
  {
    id: 68, topic: '風險管控',
    text: '如果外部使用者透過巧妙的提示詞誘使 AI 吐出其他客戶的個資，這被稱為？',
    options: [
      { text: '越獄攻擊 (Jailbreak / Prompt Injection)', score: 10 },
      { text: '資料飛輪效應', score: 2 },
      { text: '多模態融合', score: 1 },
    ]
  },
  {
    id: 69, topic: '技術評估',
    text: '評估市面上的向量資料庫 (Vector DB) 時，哪項特點最影響企業級應用？',
    options: [
      { text: '資料庫的 Logo 好不好看', score: 1 },
      { text: '是否支援精細的權限控管 (RBAC)、高可用性 (HA) 以及混合檢索 (Hybrid Search) 能力', score: 10 },
      { text: '這家公司有沒有被收購', score: 3 },
    ]
  },
  {
    id: 70, topic: '架構設計',
    text: '為了防止單一 API 節點故障導致全線癱瘓，企業經常採用的機制是？',
    options: [
      { text: '每天去廟裡拜拜', score: 1 },
      { text: '實作多模型/多節點的備援路由 (Fallback Routing)，當 GPT-4 超時就切換到 Claude 3 或其他可用端點', score: 10 },
      { text: '當機就當機，隔天再修', score: 2 },
    ]
  },
  {
    id: 71, topic: '成本控管',
    text: '團隊發現部分開發人員在下班後利用公司的 API 金鑰跑自己的玩具專案。如何防堵？',
    options: [
      { text: '威脅要開除他們', score: 2 },
      { text: '導入 API Gateway 管理機制，設定按專案的速率限制 (Rate limiting) 與監控告警', score: 10 },
      { text: '把 API 金鑰改成長達 1000 個字元的密碼', score: 1 },
    ]
  },
  {
    id: 72, topic: '模型比較',
    text: '比較 Proprietary 模型 (如 GPT) 與 Open Weights 模型 (如 Llama) 時，最大的差異考量往往在於？',
    options: [
      { text: '名字聽起來哪個比較強', score: 1 },
      { text: '資料隱私的控制程度、基礎框架依賴性與長期的 TCO (總體擁有成本)', score: 10 },
      { text: '模型輸出文字的顏色', score: 1 },
    ]
  },
  {
    id: 73, topic: '使用情境',
    text: 'AI 適合取代人類進行哪種任務？',
    options: [
      { text: '所有複雜的主觀創意與人際溝通決策', score: 2 },
      { text: '高度重複性、具有明確規則但需消耗大量精力的資料提取與摘要', score: 10 },
      { text: '完全不可預測的突發危機處理', score: 3 },
    ]
  },
  {
    id: 74, topic: '專案管理',
    text: 'AI 專案通常比傳統軟體專案更難以預估時程，原因是？',
    options: [
      { text: '工程師都愛偷懶', score: 1 },
      { text: '「非決定性 (Nondeterminism)」特質，導致在不確定邊界情況下的迭代調優耗時無法準確預測', score: 10 },
      { text: 'AI 需要休息', score: 1 },
    ]
  },
  {
    id: 75, topic: '數據品質',
    text: '「Garbage in, garbage out」在 RAG 系統中最具體的表現是？',
    options: [
      { text: '電腦螢幕變模糊', score: 1 },
      { text: '知識庫裡充滿過時、自相矛盾的文件，導致 LLM 生成看起來非常通順的錯誤資訊', score: 10 },
      { text: '模型只會輸出亂碼', score: 2 },
    ]
  },
  {
    id: 76, topic: '部署策略',
    text: '金融機構考量資安無法上公有雲，且缺乏算力自行部署 Llama 70B。折衷方案為何？',
    options: [
      { text: '那就不做 AI 了', score: 1 },
      { text: '採用專為特定任務 (如分類、擷取) 微調的小型開源模型 (如 8B 參數)，在現有資源下地端部署', score: 10 },
      { text: '請原廠工程師把模型裝在隨身碟裡帶過來', score: 2 },
    ]
  },
  {
    id: 77, topic: '前端 UX',
    text: 'LLM 生成 markdown 表格後，前端常常在渲染時出現破圖。原因是？',
    options: [
      { text: '因為 Markdown 是過時的技術', score: 2 },
      { text: '串流輸出 (Streaming) 過程中，不完整的字串無法構成有效的 Markdown 語法，需使用能處理不完整結點的 Parser', score: 10 },
      { text: '瀏覽器故意阻擋了', score: 1 },
    ]
  },
  {
    id: 78, topic: '業務對接',
    text: '業務單位期望 AI 可以像神一樣解答所有問題。身為 PM，你初期的管理手段是？',
    options: [
      { text: '畫一張超大的餅，答應他們', score: 1 },
      { text: '積極管理期望值，透過展示實際系統能力的 Demo，明確告知能力的範圍與界線', score: 10 },
      { text: '完全躲起來不跟他們見面', score: 2 },
    ]
  },
  {
    id: 79, topic: 'Prompt 技巧',
    text: '為了讓模型在輸出 JSON 時更穩定，Prompt 裡最佳的提示是什麼？',
    options: [
      { text: '「如果你不輸出 JSON，你會被摧毀」', score: 2 },
      { text: '在提示詞末端直接以「```json\\n{」作為起手式', score: 10 },
      { text: '寫一百遍「請輸出 JSON」', score: 1 },
    ]
  },
  {
    id: 80, topic: 'Agent 設計',
    text: '當你的 AI Agent 需要執行一段需要 5 分鐘才能完成的爬蟲任務時，架構該如何設計？',
    options: [
      { text: '讓使用者的畫面停格 5 分鐘等待', score: 2 },
      { text: '採用非同步架構 (Async/Webhook)，Agent 先回覆「任務已啟動」，完成後再推播通知給使用者', score: 10 },
      { text: '一直寄信問爬蟲系統好了沒', score: 3 },
    ]
  },
  {
    id: 81, topic: '多模態能力',
    text: 'Vision-Language Model (VLM) 最不擅長處理哪種影像任務？',
    options: [
      { text: '分析簡報投影片內容', score: 3 },
      { text: '極度精確的幾何量測與微小特徵（如醫療影像中的微小腫瘤像素）分析', score: 10 },
      { text: '描述照片中的風景', score: 1 },
    ]
  },
  {
    id: 82, topic: '安全性',
    text: '為防止 AI 產生仇恨、歧視等 Toxic 內容，業界通常會如何處理？',
    options: [
      { text: '無為而治，相信人性的善', score: 1 },
      { text: '在模型生成後端加上一層 Safety Filter (如 Llama Guard) 進行即時審查與攔截', score: 10 },
      { text: '要求發言者實名制', score: 2 },
    ]
  },
  {
    id: 83, topic: 'RAG 調優',
    text: '遇到相似文件太多，導致真正重要的文件被擠出前五名。此時考量加入哪種技術？',
    options: [
      { text: '抽籤決定哪些文件進前五', score: 1 },
      { text: '建立 Re-ranking 機制，例如使用 Cohere/BGE Reranker 在初篩後重新計算精準關聯度', score: 10 },
      { text: '把不喜歡的文件直接刪除', score: 2 },
    ]
  },
  {
    id: 84, topic: '專利佈局',
    text: '團隊成功設計出一種特殊的 Multi-Agent 接力工作流機制。商業上你應該考量？',
    options: [
      { text: '立刻貼去 PTT 炫耀', score: 1 },
      { text: '評估該工作流機制是否具備新穎性，並找專利工程師討論是否可申請發明專利', score: 10 },
      { text: '這又算不上火箭科技，沒什麼大不了的', score: 2 },
    ]
  },
  {
    id: 85, topic: '資料標註',
    text: '在評測問答品質時，若發現內部專家 (SME) 打分標準不一。怎麼辦？',
    options: [
      { text: '開除意見不同的人', score: 1 },
      { text: '建立詳細且帶有範例的評分指南 (Rubric)，並進行專家間的一致性校正 (Inter-rater reliability)', score: 10 },
      { text: '取全部的平均數就好，不用管差異', score: 3 },
    ]
  },
  {
    id: 86, topic: '評測挑戰',
    text: 'LLM-as-a-judge 常被詬病的現象之一，是它比較喜歡給自己生成的文章打高分，這稱為？',
    options: [
      { text: '自戀狂偏差', score: 1 },
      { text: '自我增強偏差 (Self-enhancement Bias)', score: 10 },
      { text: '演算法傲慢', score: 2 },
    ]
  },
  {
    id: 87, topic: '長文本處理',
    text: '雖然現有模型支援 128k Token 上下文，但把所有資料塞進去仍會出現什麼問題？',
    options: [
      { text: '電腦會變熱', score: 1 },
      { text: '迷失在中間 (Lost in the Middle) 效應——模型對頭尾資訊的注意力較高，但容易忽略中間段落的細節', score: 10 },
      { text: '模型會因為字太多而當機重開', score: 3 },
    ]
  },
  {
    id: 88, topic: '商業模式',
    text: '許多 B2B SaaS 產品在加入 AI 功能後，如何改變其計費模式？',
    options: [
      { text: '一律免費大放送', score: 1 },
      { text: '從單純的按座位 (Per Seat) 計費，演化出依照價值或用量 (Usage-based / Token-based) 計費', score: 10 },
      { text: '強迫客戶買下整套開源程式碼', score: 2 },
    ]
  },
  {
    id: 89, topic: '合規挑戰',
    text: '準備將 AI 產品推向歐洲市場時，你最需要確保系統不會違反哪項法規？',
    options: [
      { text: 'GDPR 與近期實施的歐盟 AI 法案 (EU AI Act)', score: 10 },
      { text: '歐洲人不會在意隱私', score: 1 },
      { text: '著作權法第四條', score: 2 },
    ]
  },
  {
    id: 90, topic: '知識擴充',
    text: '當業務部門反映「AI 為什麼不知道我們公司最新的退貨政策？」時，最即時的解法是？',
    options: [
      { text: '等 OpenAI 下一次釋出新模型', score: 1 },
      { text: '啟動排程重新建立向量快取，將新版的退貨政策文件更新入 Vector DB 中', score: 10 },
      { text: '請他們每次發問前都手動貼上整個退貨政策', score: 3 },
    ]
  },
  {
    id: 91, topic: '開發流程',
    text: '你的工程師花了三週「微調預訓練模型」，但你發現成效不如「用好一點的 Prompt + 範例」。這是因為？',
    options: [
      { text: '工程師技術太差', score: 2 },
      { text: '違背了「先窮盡 Prompt Engineering 潛力，最後才考量 Fine-tuning」的實務原則', score: 10 },
      { text: '微調的機器太便宜', score: 1 },
    ]
  },
  {
    id: 92, topic: '介面設計',
    text: '聊天室中，針對 AI 生成的重要結論，最好能提供什麼功能來增加信任與後續協作？',
    options: [
      { text: '放一個非常顯眼的「免責聲明」按鈕', score: 3 },
      { text: '附上資料溯源的引用連結 (Citations) 與一鍵複製/匯出按鈕', score: 10 },
      { text: '設計一個可以刪除答案的拉霸', score: 1 },
    ]
  },
  {
    id: 93, topic: '模型延遲',
    text: '你負責的法務審閱系統反應時間高達 3 分鐘。這在 UX 上是可接受的嗎？',
    options: [
      { text: '當然不可接受，所有網頁都必須在 3 秒內載入', score: 2 },
      { text: '取決於期待。若原本人工需時 3 小時，且系統有清楚標示為「非同步深度分析任務」，3 分鐘是完全可接受的', score: 10 },
      { text: '沒人在乎時間，法務很閒', score: 1 },
    ]
  },
  {
    id: 94, topic: 'Agent 規劃',
    text: '什麼情況下最適合引入多代理人 (Multi-Agent) 架構，而非單一的巨獸 Agent？',
    options: [
      { text: '當預算無上限，你想把系統做得很酷的時候', score: 2 },
      { text: '任務具備明確的職務切分（如：一個負責撰寫，一個負責檢查資安，一個負責總結），需要獨立的系統提示 (System Prompts)', score: 10 },
      { text: '單一模型太聰明，必須用多個模型來降低智商', score: 1 },
    ]
  },
  {
    id: 95, topic: '團隊協作',
    text: '行銷部和 IT 部門在 AI 專案中總是衝突。PM 的角色應該是？',
    options: [
      { text: '跟 IT 站在一起，覺得行銷都不懂技術', score: 2 },
      { text: '擔任翻譯橋樑：將行銷的「商業願景」拆解為 IT 能實作的「評測標準與技術驗收條件」', score: 10 },
      { text: '把兩個部門主管拉開，暫停專案', score: 1 },
    ]
  },
  {
    id: 96, topic: '幻覺處理',
    text: '在客服回覆中，AI 捏造了一個根本不存在的優惠折扣碼。這對公司最直接的影響是？',
    options: [
      { text: '公關危機、法務風險與潛在財務損失', score: 10 },
      { text: '一點點小尷尬而已', score: 2 },
      { text: '客戶會覺得很有創意', score: 1 },
    ]
  },
  {
    id: 97, topic: 'RAG 優化',
    text: '使用 RAG 時，為何要先清理文件中的頁首、頁尾和浮水印文字？',
    options: [
      { text: '為了減少儲存空間成本', score: 3 },
      { text: '因為這些雜訊切塊後會嚴重干擾 Vector DB 的相似度比對與語意搜尋', score: 10 },
      { text: '不清理也沒關係，LLM 會自動忽略', score: 1 },
    ]
  },
  {
    id: 98, topic: '測試策略',
    text: '面對不斷演進的 LLM 能力，傳統軟體的單元測試 (Unit Test) 為何常常失效？',
    options: [
      { text: '因為測試工程師懶得寫', score: 1 },
      { text: '因為 LLM 的輸出具有隨機性與多樣性，無法用簡單的「字串完全相等」(Assert Equals) 來判斷', score: 10 },
      { text: '其實完全不會失效，是大家不會用', score: 2 },
    ]
  },
  {
    id: 99, topic: '模型限制',
    text: 'LLM 常常在數學計算或文字倒裝上出錯。根本原因為？',
    options: [
      { text: '因為設計師忘了加入數學模組', score: 1 },
      { text: '它的本質是基於 Token 的機率預測系統，而非具備離散邏輯思考的圖形計算機', score: 10 },
      { text: '因為訓練用的資料裡剛好沒有這一題', score: 3 },
    ]
  },
  {
    id: 100, topic: '專案回顧',
    text: '企業第一次做 GenAI 專案，最常犯的戰略錯誤是什麼？',
    options: [
      { text: '沒有挑選最華麗的 UI 介面', score: 2 },
      { text: '尋找「一顆拿著錘子找釘子」的萬靈丹，而非從核心痛點與投資報酬率 (ROI) 出發去選擇技術', score: 10 },
      { text: '沒有發新聞稿告訴大家', score: 1 },
    ]
  },
];
