---
title: "GPT-5.5 正式發布：14 項基準測試奪冠，黃仁勳砸百億美元押注算力"
titleEn: "GPT-5.5 Is Here: Tops 14 Benchmarks, and Jensen Huang Is Betting $100B on the Infrastructure"
titleDe: "GPT-5.5 offiziell veröffentlicht: 14 Benchmark-Siege und Jensen Huangs 100-Milliarden-Dollar-Wette"
excerpt: "GPT-5.5 昨天（4 月 23 日）正式發布，在 14 項基準測試拿下第一，效率提升 40%。而黃仁勳與 NVIDIA 在這背後的算力押注，規模同樣驚人——10 GW、最高 1000 億美元。"
excerptEn: "GPT-5.5 launched April 23, topping 14 benchmarks and cutting token usage 40%. Behind the scenes, Jensen Huang and NVIDIA are betting up to $100B on the compute infrastructure that makes it run."
excerptDe: "GPT-5.5 erschien am 23. April und führt 14 Benchmarks an. Dahinter steckt Jensen Huangs NVIDIA-Wette: 10 Gigawatt Infrastruktur, bis zu 100 Milliarden Dollar Investition."
date: "2026-04-24"
author: "Nils Liu"
tags:
  - "GenAI 實戰"
  - "Blog"
  - "OpenAI"
  - "NVIDIA"
coverImage: "/images/blog/gpt-5-5-nvidia-compute.webp"
---

**GPT-5.5** 在昨天（4 月 23 日）正式推送給 ChatGPT Plus、Pro、Business 和 Enterprise 用戶。

這個版本在技術數字上很有說服力：Expert-SWE 基準測試拿下 73.1%（GPT-5.4 是 68.5%），在所有參與比較的前沿模型中同時領先 14 項基準——Claude Opus 4.7 在相同條件下拿下 4 項，Google Gemini 3.1 Pro 拿下 2 項。

但更值得注意的，是 NVIDIA 黃仁勳在這背後押下的算力賭注。

## GPT-5.5 的核心改進

**效率是這個版本最明顯的進步。**

和 GPT-5.4 相比，GPT-5.5 在相同任務下使用的 output tokens 少了約 40%，但 per-token latency 維持不變。換句話說，同樣的算力，能做更多事。

在能力面，GPT-5.5 強化的方向是工程和研究場景：

- 程式碼改動能更有效率地在整個 codebase 延伸追蹤
- 對模糊的失敗場景有更強的推理能力
- 跨大型系統的上下文維持有明顯改善
- 資料分析和研究任務的表現同步提升

這個進步方向跟目前 AI Agent 的主流使用情境高度吻合——長時間、多步驟的自動化任務，而不是單次問答。

有一個插曲值得一提：4 月 22 日，GPT-5.5 因為一個路由錯誤，意外提前暴露了大約 47 分鐘。這段時間流出的截圖顯示推理速度提升 18%、幻覺率下降 40%。OpenAI 的正式發布比預期早了一天，外界普遍認為這是因為資訊已經擴散、難以繼續保密。

## 黃仁勳與 NVIDIA 的押注

在 GPT-5.5 的背後，是一場更大規模的基礎設施賭局。

2016 年，黃仁勳親自把 NVIDIA 第一台 DGX-1 AI 超級電腦送到 OpenAI 的舊金山總部。十年後，這個關係在規模上已經完全不同了。

NVIDIA 和 OpenAI 宣布了一項戰略合作意向：**部署至少 10 GW 的 NVIDIA 系統**，NVIDIA 承諾的投資規模最高達 **1000 億美元**，隨著每個 GW 上線而逐步釋放。第一個 GW 預計在 2026 年下半年在 NVIDIA Vera Rubin 平台上線。

黃仁勳的說法是：「這次投資和基礎設施合作，標誌著下一個躍進——部署 10 GW 來驅動下一個智慧時代。」

**GPT-5.5 目前跑在 NVIDIA GB200 NVL72 機架式系統上**，和前代系統相比：

- 每百萬 token 成本降低 **35 倍**
- 每百萬瓦每秒 token 輸出提升 **50 倍**

這個效率數字背後的意義是：同樣的電費和硬體投入，OpenAI 能跑的推理量大幅提升。對一個每天服務數億用戶的服務來說，這個差距很直接地轉化成利潤。

## 算力、模型、生意

NVIDIA 在這次合作的角色不只是硬體供應商。

超過 **10,000 名 NVIDIA 員工**目前正在使用由 GPT-5.5 驅動的 Codex。從黃仁勳的角度看，這既是對 OpenAI 的信任背書，也是 NVIDIA 內部工程效率的工具。

值得注意的是，黃仁勳在 2026 年 3 月也表示，NVIDIA 正在從與 OpenAI 和 Anthropic 的「獨家安排」中退後一步——這不是關係破裂，而是算力基礎設施走向更中立、更平台化的信號。NVIDIA 的生意邏輯從來不是押注哪個模型會贏，而是確保跑模型的 GPU 是自己的。

從訓練的角度看，GPT-5 和 GPT-5.4 主要使用 H100 和 H200 芯片。GPT-5.5 的推理環境已移到 GB200 NVL72，但大規模 Blackwell 訓練仍在成熟中——H100 和 H200 依然是前沿規模訓練的主力。下一個轉折點是 Vera Rubin 平台正式上線後，屆時訓練和推理的算力格局都會再次重整。

## AI Agent 基礎設施的視角

從企業 AI 的角度，GPT-5.5 的改進方向非常清楚：這是一個設計給 Agent 場景的模型。

40% 的 token 效率提升，在多步驟 Agent 任務中的節省效果是乘積式的——一個需要 20 次 LLM call 的任務，每次省 40%，整體成本和延遲都大幅下降。這讓過去因為 token 成本而難以商業化的 Agent 場景，開始變得可行。

這也呼應了我在 [Harness Engineering](/zh/insights/harness-engineering-ai-agent) 和 [Hermes Agent](/zh/insights/hermes-agent-self-improving-framework) 這兩篇文章裡提到的方向：底層模型的效率改善，會直接放大 Agent 執行層的設計空間。當每次 LLM call 變便宜，你願意設計的 Agent 步驟就更多，容錯機制就更完整。

---

*這是「GenAI 產品實戰筆記」系列文章之一。*

💬 **延伸閱讀：**
- [Harness Engineering：替你的 AI Agent 打造執行底盤](/zh/insights/harness-engineering-ai-agent)
- [Hermes Agent：越用越聰明的開源 AI Agent 框架](/zh/insights/hermes-agent-self-improving-framework)
