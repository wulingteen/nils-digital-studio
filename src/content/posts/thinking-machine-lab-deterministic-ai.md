---
title: "Mira Murati 的 Thinking Machine Lab：AI 確定性推理的突破"
titleEn: "Mira Murati's Thinking Machine Lab: A Breakthrough in Deterministic AI Reasoning"
titleDe: "Mira Muratis Thinking Machine Lab: Ein Durchbruch im deterministischen KI-Schlussfolgern"
excerpt: "把 AI 模型的 temperature 設為 0 就能得到完全一致的結果嗎？答案是否，Thinking Machine Lab 的研究揭示了根本性的原因。"
excerptEn: "Does setting temperature to 0 give perfectly consistent AI outputs? No — and Thinking Machine Lab found out why. Batch processing is the culprit, and they built a fix."
excerptDe: "Erhält man absolut konsistente Ergebnisse, wenn man die Temperatur des KI-Modells auf 0 setzt? Die Antwort ist nein, und eine Studie von Thinking Machine Lab deckt die grundlegenden Gründe auf."
date: "2025-09-13"
author: "Nils Liu"
tags:
  - "News"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/thinking-machine-lab.jpg"
---

Thinking Machine Lab (Mira Murati創立的startup，在還沒有任何產品和工作方向時，光是Mira Murati的號召即獲得20億美元融資，估值百億美元）最近（9/10）發表了一篇文章，探討一個我們已知的問題：

「把AI模型的temperature設為0就能得到完全一致的結果嗎？答案是否，但根本性的原因是什麼？」

當用同樣的提示詞對所謂「確定性」的AI模型跑1000次測試時，會驚訝地發現竟然會得到數十種不同的輸出結果，這不是因為模型本身的隨機性，而是因為伺服器在處理批次請求時的方式會影響最終結果

這個問題的影響比想像中嚴重，在進行AI模型評估時，基準測試的分數會因為伺服器負載不同而產生高達5%的變化，這讓我們很難準確判斷模型的真實表現，對企業來說更麻煩的是，當客戶回報某個特定問題時，開發團隊往往無法重現相同的情況，因為批次處理的配置已經改變了

對於需要符合法規要求的行業來說，這種不一致性更是致命的，他們無法保證AI系統在審計時會表現出相同的行為模式，此外，許多公司投入大量資源進行A/B測試和模型比較，但這些結果現在看來都可能被這種隱藏的變異性所汙染

前OpenAI技術長Mira Murati創立的Thinking Machines Lab深入研究了這個問題，他們發現關鍵在於三個核心運算：標準化、矩陣乘法和注意力機制，當批次大小發生變化時，這些運算的數值計算就會產生微小但關鍵的差異，最終導致輸出結果的不同

他們的解決方案是開發出批次不變的版本，能夠確保無論批次如何組合，運算結果都保持一致，經過測試，這個方法確實能讓同樣的輸入產生完全相同的輸出，實現真正的確定性推理

當然，這個解決方案也有代價，確定性推理的速度大約比現有方法慢了60%，但對於那些需要絕對一致性的應用場景來說，這個效能損失是值得的

想要知道系統是否受到影響，可以做個簡單測試：用同一個提示詞跑100次，看看會得到多少種不同的結果，對於關鍵性應用，值得考慮採用這種批次不變的核心技術，儘管會有效能成本，對於一般使用者，也應該開始要求AI服務提供商提供確定性模式的選項

我們一直把這種不穩定的行為當作AI系統無法避免的特性，但現在看來這其實是可以解決的技術問題，隨著技術的持續優化，相信這60%的效能成本在不久的將來也會進一步降低，對於需要可靠性勝過速度的應用場景來說，這個發現可能會改變遊戲規則
