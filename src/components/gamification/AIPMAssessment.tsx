import React, { useState, useEffect } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Brain, ChevronRight, RefreshCcw, Send, Loader2 } from 'lucide-react';

interface Question {
  id: number;
  topic: string;
  difficulty: string;
  text: string;
  options: { text: string; score: number }[];
}

export default function AIPMAssessment() {
  const assessmentScore = useGamificationStore((state) => state.assessmentScore);
  const setAssessmentScore = useGamificationStore((state) => state.setAssessmentScore);
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [tempScore, setTempScore] = useState(0);
  const [gaps, setGaps] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/questions/random')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load questions", err);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (option: { text: string; score: number }) => {
    const newScore = tempScore + option.score;
    
    // Identify gap if score is low
    if (option.score < 5) {
      setGaps(prev => Array.from(new Set([...prev, questions[currentStep].topic])));
    }

    if (currentStep < questions.length - 1) {
      setTempScore(newScore);
      setCurrentStep(currentStep + 1);
    } else {
      setAssessmentScore(newScore);
    }
  };

  const submitToDatabase = async (email: string) => {
    try {
      await fetch('/api/questions/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score: tempScore || assessmentScore,
          gaps,
          email
        })
      });
    } catch (e) {
      console.error("Failed to sync with DB", e);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We let the form natively trigger FormSubmit (target="_blank"), 
    // but intercept the event to simultaneously ping our own Postgres backend.
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    submitToDatabase(email);
    useGamificationStore.getState().subscribe();
  };

  if (loading) {
    return (
      <div className="my-10 rounded-2xl border border-border bg-card p-12 flex flex-col justify-center items-center shadow-sm gap-4">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <p className="text-sm text-muted-foreground animate-pulse">載入題庫中...</p>
      </div>
    );
  }

  if (questions.length === 0) return null;

  if (assessmentScore !== null) {
    let resultMessage = "你的 AI 產品力打敗了 90% 的傳統 PM！";
    let subMessage = "你已經具備帶領企業導入 GenAI 的架構思維。";
    if (assessmentScore < 20) {
      resultMessage = "你還停留在傳統軟體思維。";
      subMessage = "你需要盡快補足 RAG 與評測框架的認知，否則將被淘汰。";
    } else if (assessmentScore < 40) {
      resultMessage = "你的 AI 產品力優於 60% 的 PM。";
      subMessage = "具備基礎認知，但在複雜架構上的落地經驗還需累積。";
    }

    return (
      <div className="my-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"></div>
        <Brain className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-2xl font-bold text-foreground">{resultMessage}</h3>
        <p className="mb-6 text-muted-foreground">{subMessage}</p>
        
        <div className="flex flex-col items-center justify-center gap-4 mt-2">
          <form 
            action="https://formsubmit.co/wulingteen@gmail.com" 
            method="POST" 
            target="_blank"
            onSubmit={handleFormSubmit}
            className="flex flex-col sm:flex-row gap-2 w-full max-w-lg mx-auto"
          >
            <input type="hidden" name="_subject" value="New Newsletter Subscription (Assessment)!" />
            <input type="hidden" name="_autoresponse" value="Thank you for subscribing to Nils Digital Studio! You'll receive the latest GenAI and AI Agent architectures straight to your inbox." />
            <input 
              type="email" 
              name="email" 
              placeholder="您的電子郵件"
              required
              className="flex-1 rounded-full border border-primary/20 bg-background/80 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground"
            />
            <button 
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(200,160,80,0.3)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 whitespace-nowrap"
            >
              <Send className="h-4 w-4" /> 訂閱電子報解鎖進階指南
            </button>
          </form>
          <button onClick={() => { setTempScore(0); setCurrentStep(0); setGaps([]); setAssessmentScore(null as any); window.location.reload(); }} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all mt-2 cursor-pointer">
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
            onClick={() => handleAnswer(opt)}
            className="group flex items-center justify-between rounded-xl border border-border bg-background p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md cursor-pointer"
          >
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{opt.text}</span>
            <ChevronRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100 shrink-0 ml-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
