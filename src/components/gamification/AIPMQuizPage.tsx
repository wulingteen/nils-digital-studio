import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Brain, Flame, Trophy, Clock, Target, BookOpen, RefreshCw, CheckCircle2, XCircle, Award, Medal } from 'lucide-react';

import { QUESTIONS, type Question } from '../../data/quizQuestions';


const TIMER_SECONDS = 30;

// Helper to shuffle array
const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/* ── Component ── */
export default function AIPMQuizPage({ lang = 'zh' }: { lang?: string }) {
  const { assessmentScore, setAssessmentScore, bestCombo, setBestCombo, unlockBadge, unlockedBadges } = useGamificationStore();

  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [activeTopics, setActiveTopics] = useState<string[]>([]);
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
          if (timerRef.current) clearInterval(timerRef.current);
          setCombo(0);
          setIsCorrectFlash(false);
          // Advance after a brief delay
          setTimeout(() => {
            setTopicScores(topics => ({ ...topics, [activeQuestions[step].topic]: (topics[activeQuestions[step].topic] || 0) + 0 }));
            if (step >= activeQuestions.length - 1) {
              setFinished(true);
            } else {
              setStep(s => s + 1);
              setTimer(TIMER_SECONDS);
              setSelectedIdx(null);
              setIsCorrectFlash(null);
            }
          }, 600);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, finished, step, activeQuestions]);
  const advanceStep = (optScore: number) => {
    const q = activeQuestions[step];
    setTopicScores(prev => ({ ...prev, [q.topic]: (prev[q.topic] || 0) + optScore }));

    if (step >= activeQuestions.length - 1) {
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
    setActiveQuestions([]);
    setActiveTopics([]);
  };

  const startQuiz = () => {
    const shuffled = shuffle(QUESTIONS).slice(0, 20); // Pick 20 questions
    
    // Randomize options for each question to avoid pattern recognition
    const preparedQuestions = shuffled.map(q => ({
      ...q,
      options: shuffle(q.options)
    }));
    
    setActiveQuestions(preparedQuestions);
    setActiveTopics([...new Set(preparedQuestions.map(q => q.topic))]);
    setStarted(true);
  };

  /* ── Intro Screen ── */
  if (!started) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
          <Brain className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {lang === 'zh' ? 'AI PM 核心能力測驗' : lang === 'de' ? 'AI PM Kompetenztest' : 'AI PM Skills Assessment'}
        </h1>
        <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
          {lang === 'zh' ? '從百大真實企業情境中隨機抽取 20 題，測驗你的 AI 產品力。每題限時 30 秒，連續答對獲得 Combo 加成！'
            : lang === 'de' ? '20 zufällige Szenarien aus 100 realen Unternehmensfragen, 30 Sekunden pro Frage.'
            : '20 random scenarios from 100 real-world enterprise situations, 30 seconds per question. Build combos for streaks!'}
        </p>
        <div className="flex flex-wrap justify-center gap-3 my-6 text-sm">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"><Clock className="w-3.5 h-3.5" /> 30s / {lang === 'zh' ? '題' : 'Q'}</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"><Flame className="w-3.5 h-3.5" /> Combo</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"><Trophy className="w-3.5 h-3.5" /> {lang === 'zh' ? '徽章解鎖' : 'Badges'}</span>
        </div>
        {unlockedBadges.length > 0 && (
          <p className="text-xs text-muted-foreground mb-4">
            {lang === 'zh' ? `已擁有 ${unlockedBadges.length} 個徽章` : `${unlockedBadges.length} badges earned`}
            {bestCombo > 0 && (lang === 'zh' ? ` ・ 歷史最佳 Combo: ${bestCombo}` : ` ・ Best combo: ${bestCombo}`)}
          </p>
        )}
        <button
          onClick={startQuiz}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(200,160,80,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(200,160,80,0.5)] cursor-pointer"
        >
          {lang === 'zh' ? '開始測驗' : lang === 'de' ? 'Test starten' : 'Start Quiz'}
        </button>
      </div>
    );
  }

  /* ── Results Screen ── */
  if (finished) {
    const pct = Math.round((score / (activeQuestions.length * 10)) * 100);
    const BadgeIcon = pct >= 100 ? Award : pct >= 70 ? Trophy : pct >= 40 ? Target : BookOpen;
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
          <BadgeIcon className="w-16 h-16 text-primary mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-1">{badgeTitle}</h2>
        <p className="text-4xl font-black text-primary my-4">{score} / {activeQuestions.length * 10}</p>
        <p className="text-muted-foreground mb-6">
          {lang === 'zh' ? `正確率 ${pct}%　|　最高 Combo ${maxCombo}` : `Accuracy ${pct}%  |  Max Combo ${maxCombo}`}
        </p>

        {/* Radar Chart (simple bar-based) */}
        <div className="max-w-md mx-auto mb-8 text-left">
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-widest">
            {lang === 'zh' ? '能力分佈' : 'Skill Breakdown'}
          </h3>
          {activeTopics.slice(0, 5).map(topic => { // Show top 5 topics for brevity
            const s = topicScores[topic] || 0;
            const maxS = activeQuestions.filter(q => q.topic === topic).length * 10;
            const w = maxS > 0 ? Math.round((s / maxS) * 100) : 0;
            return (
              <div key={topic} className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{topic}</span>
                  <span className="font-bold text-foreground">{s}/{maxS}</span>
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
            <RefreshCw className="w-4 h-4" /> {lang === 'zh' ? '再挑戰一次' : 'Try Again'}
          </button>
          <a
            href={`/${lang}/insights/`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/5"
          >
            <BookOpen className="w-4 h-4" /> {lang === 'zh' ? '閱讀更多文章' : 'Read Articles'}
          </a>
        </div>
        {/* Email Subscribe & Articles Promo */}
        <div className="mt-16 w-full max-w-3xl mx-auto rounded-3xl border border-primary/20 bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden p-8 text-left relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {lang === 'zh' ? '不要讓知識停在這裡' : 'Do not stop learning'}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {lang === 'zh' 
                  ? '想深入了解 AI PM 實務與系統架構嗎？加入電子報，每週獲取第一手企業級 GenAI 落地經驗。也可以繼續閱讀我的系列文章！'
                  : 'Want to dive deeper into AI PM and System Architecture? Subscribe to get first-hand enterprise GenAI deployment experiences, or keep reading my articles. '}
              </p>
              <form action="https://formsubmit.co/wulingteen@gmail.com" method="POST" className="flex gap-2 w-full max-w-sm">
                <input type="hidden" name="_next" value="https://nils-digital-studio.vercel.app" />
                <input type="hidden" name="_subject" value="New Subscriber from Quiz Page" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="name@example.com" 
                  required
                  className="flex-1 h-12 rounded-xl border border-border bg-background/80 px-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button type="submit" className="h-12 px-6 rounded-xl bg-primary font-bold text-primary-foreground text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                   {lang === 'zh' ? '訂閱電子報' : 'Subscribe'}
                </button>
              </form>
            </div>
            
            <div className="w-full md:w-64 shrink-0 flex flex-col gap-3">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                {lang === 'zh' ? '推薦閱讀：AI PM 系列' : 'Recommended: AI PM Series'}
              </div>
              <a href={`/${lang}/insights/ai-pm-daily-work`} className="block px-4 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-foreground">
                {lang === 'zh' ? 'AI PM 的日常：不寫程式的 PM 如何帶領 AI 團隊發展' : 'Daily Life of an AI PM'}
              </a>
              <a href={`/${lang}/insights/ai-pm-peter-deng-uber`} className="block px-4 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-foreground">
                {lang === 'zh' ? '前 OpenAI 副總 Peter Deng 的洞見：AI 產品的下一步' : "Peter Deng's AI Insights"}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Quiz Screen ── */
  const q = activeQuestions[step];
  if (!q) return null; // Safe guard
  
  const progress = ((step) / activeQuestions.length) * 100;
  const timerPct = (timer / TIMER_SECONDS) * 100;
  const timerColor = timer <= 10 ? 'bg-red-500' : timer <= 20 ? 'bg-yellow-500' : 'bg-primary';

  return (
    <div className="py-4">
      {/* Header: Progress + Combo + Timer */}
      <div className="mb-6">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            {step + 1} / {activeQuestions.length}
          </span>
          <div className="flex items-center gap-3">
            {combo > 0 && (
              <span className="inline-flex items-center gap-1 text-sm font-bold text-orange-500 animate-pulse">
                <Flame className="w-4 h-4" /> Combo x{combo}
              </span>
            )}
            <span className={`inline-flex items-center gap-1 text-sm font-mono font-bold ${timer <= 10 ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}>
              <Clock className="w-3.5 h-3.5" /> {timer}s
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
          {isCorrectFlash ? <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" /> : <XCircle className="w-16 h-16 text-red-500 animate-bounce" />}
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
