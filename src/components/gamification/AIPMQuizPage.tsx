import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';

/* ── Questions (hardcoded, no API) ── */
interface Question {
  id: number;
  topic: string;
  text: string;
  options: { text: string; score: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1, topic: 'RAG 架構',
    text: '客戶要求「用 AI 搜尋內部知識庫」。你的第一步是什麼？',
    options: [
      { text: '直接串接 ChatGPT API，把文件丟進 system prompt', score: 2 },
      { text: '評估文件量與格式，設計 Embedding + Vector DB 的 RAG pipeline', score: 10 },
      { text: '先用 Google 搜尋看有沒有現成方案', score: 4 },
    ],
  },
  {
    id: 2, topic: 'Prompt Engineering',
    text: 'LLM 輸出結果不穩定、格式時好時壞，你的做法是？',
    options: [
      { text: '換一個更大的模型', score: 3 },
      { text: '加上 Few-shot Examples + Output Schema 約束', score: 10 },
      { text: '多呼叫幾次，取最好的結果', score: 2 },
    ],
  },
  {
    id: 3, topic: 'AI Agent',
    text: '老闆說「我要一個能自動處理客訴的 AI Agent」，你如何拆解？',
    options: [
      { text: '定義 Agent 的工具清單、決策邊界與 Human-in-the-loop 機制', score: 10 },
      { text: '直接買一個客服 SaaS 平台', score: 4 },
      { text: '先做一版全自動的 demo 給老闆看', score: 3 },
    ],
  },
  {
    id: 4, topic: '評測框架',
    text: '你的 GenAI 產品上線後，如何衡量「AI 回答品質」？',
    options: [
      { text: '看使用者有沒有抱怨', score: 2 },
      { text: '建立 Golden Dataset + 自動化評測 Pipeline (Accuracy / Faithfulness / Relevance)', score: 10 },
      { text: '每週人工抽查 10 筆', score: 5 },
    ],
  },
  {
    id: 5, topic: '企業落地',
    text: '金融業客戶擔心資料外洩，不想用公有雲 LLM。你建議？',
    options: [
      { text: '說服客戶「OpenAI 很安全」', score: 1 },
      { text: '評估 On-premise 部署方案 (vLLM/Ollama) + PII 過濾機制', score: 10 },
      { text: '改用 Apple Intelligence', score: 2 },
    ],
  },
  {
    id: 6, topic: '產品設計',
    text: '使用者回饋「AI 回答太長看不完」，你的第一反應是？',
    options: [
      { text: '在 prompt 裡加「請簡短回答」', score: 4 },
      { text: '重新思考 UX：分段式輸出、摘要 + 展開、Action buttons', score: 10 },
      { text: '限制 max_tokens 參數', score: 3 },
    ],
  },
  {
    id: 7, topic: 'LLM 選型',
    text: '新專案需選擇 LLM，預算有限但要求中文能力強。你如何評估？',
    options: [
      { text: '直接選最便宜的', score: 2 },
      { text: '用專案真實用例做 A/B Benchmark，比較 Latency / Quality / Cost', score: 10 },
      { text: '選最新最紅的模型', score: 3 },
    ],
  },
  {
    id: 8, topic: '資料治理',
    text: '內部數據散落在 30 個不同系統，要做 AI 知識庫，你先做什麼？',
    options: [
      { text: '全部匯入一個大資料庫', score: 3 },
      { text: '建立 Data Inventory → 優先處理高頻使用的 Top 5 資料源', score: 10 },
      { text: '等 IT 部門整理好再開始', score: 1 },
    ],
  },
  {
    id: 9, topic: 'ROI 量化',
    text: '老闆問「導入 GenAI 到底省了多少錢？」你如何回答？',
    options: [
      { text: '說「AI 的價值無法量化」', score: 1 },
      { text: '設計 Before/After 對照實驗，追蹤處理時間、人力成本、錯誤率', score: 10 },
      { text: '引用 McKinsey 報告的數據', score: 4 },
    ],
  },
  {
    id: 10, topic: '團隊建設',
    text: '你需要在 3 個月內組建企業 AI 團隊，你的策略是？',
    options: [
      { text: '先招 10 個 ML Engineer', score: 3 },
      { text: '定義 AI PM + Prompt Engineer + MLOps 三角核心，從 1 個垂直場景做起', score: 10 },
      { text: '全部外包給顧問公司', score: 2 },
    ],
  },
];

const TIMER_SECONDS = 30;
const TOPICS = [...new Set(QUESTIONS.map(q => q.topic))];

/* ── Component ── */
export default function AIPMQuizPage({ lang = 'zh' }: { lang?: string }) {
  const { assessmentScore, setAssessmentScore, bestCombo, setBestCombo, unlockBadge, unlockedBadges } = useGamificationStore();

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [topicScores, setTopicScores] = useState<Record<string, number>>({});
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isCorrectFlash, setIsCorrectFlash] = useState<boolean | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!started || finished) return;
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          // Time's up — auto advance
          handleTimeout();
          return TIMER_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, finished, step]);

  const handleTimeout = useCallback(() => {
    setCombo(0);
    setIsCorrectFlash(false);
    setTimeout(() => advanceStep(0), 600);
  }, [step]);

  const advanceStep = (optScore: number) => {
    const q = QUESTIONS[step];
    setTopicScores(prev => ({ ...prev, [q.topic]: (prev[q.topic] || 0) + optScore }));

    if (step >= QUESTIONS.length - 1) {
      const finalScore = score + optScore;
      setScore(finalScore);
      setFinished(true);
      if (timerRef.current) clearInterval(timerRef.current);
      // Persist
      setAssessmentScore(finalScore);
      setBestCombo(maxCombo);
      // Badges
      unlockBadge('quiz-completed');
      if (finalScore >= 100) unlockBadge('genai-master');
      else if (finalScore >= 70) unlockBadge('ai-strategist');
      else if (finalScore >= 40) unlockBadge('ai-rookie');
    } else {
      setScore(prev => prev + optScore);
      setStep(prev => prev + 1);
      setTimer(TIMER_SECONDS);
      setSelectedIdx(null);
      setIsCorrectFlash(null);
    }
  };

  const handleAnswer = (optScore: number, idx: number) => {
    if (selectedIdx !== null) return; // prevent double click
    setSelectedIdx(idx);
    const isGood = optScore >= 8;
    setIsCorrectFlash(isGood);

    if (isGood) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
    } else {
      setCombo(0);
    }

    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => advanceStep(optScore), 700);
  };

  const resetQuiz = () => {
    setStep(0); setScore(0); setCombo(0); setMaxCombo(0);
    setTimer(TIMER_SECONDS); setStarted(false); setFinished(false);
    setTopicScores({}); setSelectedIdx(null); setIsCorrectFlash(null);
  };

  /* ── Intro Screen ── */
  if (!started) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
          <span className="text-4xl">🧠</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {lang === 'zh' ? 'AI PM 核心能力測驗' : lang === 'de' ? 'AI PM Kompetenztest' : 'AI PM Skills Assessment'}
        </h1>
        <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
          {lang === 'zh' ? '10 道真實企業情境題，測驗你的 AI 產品力。每題限時 30 秒，連續答對獲得 Combo 加成！'
            : lang === 'de' ? '10 reale Unternehmensfragen, 30 Sekunden pro Frage.'
            : '10 real-world enterprise scenarios, 30 seconds per question. Build combos for streaks!'}
        </p>
        <div className="flex flex-wrap justify-center gap-3 my-6 text-sm">
          <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">⏱ 30s / {lang === 'zh' ? '題' : 'Q'}</span>
          <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">🔥 Combo</span>
          <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">🏆 {lang === 'zh' ? '徽章解鎖' : 'Badges'}</span>
        </div>
        {unlockedBadges.length > 0 && (
          <p className="text-xs text-muted-foreground mb-4">
            {lang === 'zh' ? `🎖 你已擁有 ${unlockedBadges.length} 個徽章` : `🎖 ${unlockedBadges.length} badges earned`}
            {bestCombo > 0 && (lang === 'zh' ? ` ・ 🔥 歷史最佳 Combo: ${bestCombo}` : ` ・ 🔥 Best combo: ${bestCombo}`)}
          </p>
        )}
        <button
          onClick={() => setStarted(true)}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(200,160,80,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(200,160,80,0.5)] cursor-pointer"
        >
          {lang === 'zh' ? '🚀 開始測驗' : lang === 'de' ? '🚀 Test starten' : '🚀 Start Quiz'}
        </button>
      </div>
    );
  }

  /* ── Results Screen ── */
  if (finished) {
    const pct = Math.round((score / (QUESTIONS.length * 10)) * 100);
    const badgeEmoji = pct >= 100 ? '👑' : pct >= 70 ? '🏆' : pct >= 40 ? '🎯' : '📘';
    const badgeTitle = pct >= 100
      ? (lang === 'zh' ? 'GenAI 大師' : 'GenAI Master')
      : pct >= 70
      ? (lang === 'zh' ? 'AI 策略師' : 'AI Strategist')
      : pct >= 40
      ? (lang === 'zh' ? 'AI 新手' : 'AI Rookie')
      : (lang === 'zh' ? 'AI 探索者' : 'AI Explorer');

    return (
      <div className="text-center py-8">
        {/* Badge Animation */}
        <div className="mb-6 animate-bounce">
          <span className="text-6xl">{badgeEmoji}</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-1">{badgeTitle}</h2>
        <p className="text-4xl font-black text-primary my-4">{score} / {QUESTIONS.length * 10}</p>
        <p className="text-muted-foreground mb-6">
          {lang === 'zh' ? `正確率 ${pct}%　|　最高 Combo 🔥${maxCombo}` : `Accuracy ${pct}%  |  Max Combo 🔥${maxCombo}`}
        </p>

        {/* Radar Chart (simple bar-based) */}
        <div className="max-w-md mx-auto mb-8 text-left">
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-widest">
            {lang === 'zh' ? '能力分佈' : 'Skill Breakdown'}
          </h3>
          {TOPICS.map(topic => {
            const s = topicScores[topic] || 0;
            const w = Math.round((s / 10) * 100);
            return (
              <div key={topic} className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{topic}</span>
                  <span className="font-bold text-foreground">{s}/10</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-700"
                    style={{ width: `${w}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            🔄 {lang === 'zh' ? '再挑戰一次' : 'Try Again'}
          </button>
          <a
            href={`/${lang}/insights/`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/5"
          >
            📚 {lang === 'zh' ? '閱讀更多文章' : 'Read Articles'}
          </a>
        </div>
      </div>
    );
  }

  /* ── Quiz Screen ── */
  const q = QUESTIONS[step];
  const progress = ((step) / QUESTIONS.length) * 100;
  const timerPct = (timer / TIMER_SECONDS) * 100;
  const timerColor = timer <= 10 ? 'bg-red-500' : timer <= 20 ? 'bg-yellow-500' : 'bg-primary';

  return (
    <div className="py-4">
      {/* Header: Progress + Combo + Timer */}
      <div className="mb-6">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            {step + 1} / {QUESTIONS.length}
          </span>
          <div className="flex items-center gap-3">
            {combo > 0 && (
              <span className="text-sm font-bold text-orange-500 animate-pulse">
                🔥 Combo x{combo}
              </span>
            )}
            <span className={`text-sm font-mono font-bold ${timer <= 10 ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}>
              ⏱ {timer}s
            </span>
          </div>
        </div>
        {/* Progress track */}
        <div className="h-2 rounded-full bg-muted overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Timer track */}
        <div className="h-1 rounded-full bg-muted/50 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 linear ${timerColor}`}
            style={{ width: `${timerPct}%` }}
          />
        </div>
      </div>

      {/* Topic Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-primary/10 text-primary">
          {q.topic}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 leading-relaxed">{q.text}</h2>

      {/* Flash feedback overlay */}
      {isCorrectFlash !== null && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isCorrectFlash ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          <span className="text-6xl animate-bounce">{isCorrectFlash ? '✅' : '❌'}</span>
        </div>
      )}

      {/* Options */}
      <div className="flex flex-col gap-3">
        {q.options.map((opt, idx) => {
          const isSelected = selectedIdx === idx;
          const isGood = opt.score >= 8;
          let borderClass = 'border-border hover:border-primary/50 hover:bg-primary/5';
          if (isSelected) {
            borderClass = isGood
              ? 'border-green-500 bg-green-500/10 scale-[1.02]'
              : 'border-red-500 bg-red-500/10';
          }
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.score, idx)}
              disabled={selectedIdx !== null}
              className={`group flex items-center justify-between rounded-xl border p-4 md:p-5 text-left transition-all duration-200 cursor-pointer disabled:cursor-default ${borderClass}`}
            >
              <span className={`text-sm md:text-base font-medium ${isSelected ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                {opt.text}
              </span>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3">→</span>
            </button>
          );
        })}
      </div>

      {/* Score tracker */}
      <div className="mt-6 text-center">
        <span className="text-sm text-muted-foreground">
          {lang === 'zh' ? '目前得分' : 'Score'}: <strong className="text-foreground">{score}</strong>
        </span>
      </div>
    </div>
  );
}
