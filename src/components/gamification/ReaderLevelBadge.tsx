import React, { useEffect, useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Medal } from 'lucide-react';

export default function ReaderLevelBadge() {
  const readArticles = useGamificationStore((state) => state.readArticles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const count = readArticles.length;
  let title = 'GenAI 新手';
  let colorClass = 'text-slate-500 border-slate-500/30 bg-slate-500/10';

  if (count >= 21) {
    title = 'AI PM';
    colorClass = 'text-purple-500 border-purple-500/30 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]';
  } else if (count >= 11) {
    title = '架構師';
    colorClass = 'text-blue-500 border-blue-500/30 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
  } else if (count >= 4) {
    title = '實踐者';
    colorClass = 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10';
  }

  return (
    <div className={`mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-bold backdrop-blur-sm transition-all ${colorClass}`}>
      <Medal className="h-4 w-4" />
      <span>讀者段位：{title}</span>
      <span className="ml-1 text-xs opacity-70 font-normal">({count} 篇)</span>
    </div>
  );
}
