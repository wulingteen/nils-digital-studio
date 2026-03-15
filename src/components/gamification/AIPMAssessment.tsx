import React, { useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Brain, ChevronRight, RefreshCcw, Send } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "當客戶提出『我要一個能寫公文的 AI』時，你的第一步是？",
    options: [
      { text: "立刻挑選開源 LLM 並開始微調 (Fine-tuning)。", score: 0 },
      { text: "尋找現成的 SaaS 服務，買帳號給他們用。", score: 3 },
      { text: "拆解『寫公文』的流程，釐清退件率最高的情境，再決定 AI 介入點。", score: 10 },
    ]
  },
  {
    id: 2,
    text: "AI 在正式上線前，你如何評估系統的可用性？",
    options: [
      { text: "自己測試 10 個 Prompts，看起來沒問題就上。", score: 0 },
      { text: "請 QA 團隊人工盲測 100 題。", score: 5 },
      { text: "建立 Golden Dataset，使用 LLM-as-a-Judge 進行自動化批量評測。", score: 10 },
    ]
  },
  {
    id: 3,
    text: "專案預算有限，但需要高精準度的知識問答，你會選擇？",
    options: [
      { text: "堅持微調 (Fine-tuning) 7B 模型，因為資料不能外流。", score: 2 },
      { text: "砸錢用 GPT-4o 解決一切問題。", score: 5 },
      { text: "建置 RAG 架構，搭配具備良好 Chunking 策略的向量庫與平價模型。", score: 10 },
    ]
  }
];

export default function AIPMAssessment() {
  const assessmentScore = useGamificationStore((state) => state.assessmentScore);
  const setAssessmentScore = useGamificationStore((state) => state.setAssessmentScore);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [tempScore, setTempScore] = useState(0);

  const handleAnswer = (score: number) => {
    const newScore = tempScore + score;
    if (currentStep < questions.length - 1) {
      setTempScore(newScore);
      setCurrentStep(currentStep + 1);
    } else {
      setAssessmentScore(newScore);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setTempScore(0);
    setAssessmentScore(null); // Assuming null reset isn't strictly defined, but 0 works
  };

  if (assessmentScore !== null) {
    let resultMessage = "你的 AI 產品力打敗了 90% 的傳統 PM！";
    let subMessage = "你已經具備帶領企業導入 GenAI 的架構思維。";
    if (assessmentScore < 15) {
      resultMessage = "你還停留在傳統軟體思維。";
      subMessage = "你需要盡快補足 RAG 與評測框架的認知，否則將被淘汰。";
    } else if (assessmentScore < 25) {
      resultMessage = "你的 AI 產品力優於 60% 的 PM。";
      subMessage = "具備基礎認知，但在複雜架構上的落地經驗還需累積。";
    }

    return (
      <div className="my-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"></div>
        <Brain className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-2xl font-bold text-foreground">{resultMessage}</h3>
        <p className="mb-6 text-muted-foreground">{subMessage}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#newsletter" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(200,160,80,0.3)] transition-all hover:-translate-y-1">
            <Send className="h-4 w-4" /> 訂閱電子報解鎖進階指南
          </a>
          <button onClick={() => { setTempScore(0); setCurrentStep(0); setAssessmentScore(null as any); }} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            <RefreshCcw className="h-4 w-4" /> 重新測驗
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentStep];

  return (
    <div className="my-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          測驗你的AI PM核心能力
        </h3>
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {currentStep + 1} / {questions.length}
        </span>
      </div>
      
      <p className="mb-8 text-lg font-medium text-foreground/90">{q.text}</p>
      
      <div className="flex flex-col gap-3">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.score)}
            className="group flex items-center justify-between rounded-xl border border-border bg-background p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md"
          >
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{opt.text}</span>
            <ChevronRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100 shrink-0 ml-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
