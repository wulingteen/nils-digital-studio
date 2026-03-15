import React, { useEffect, useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Target, Trophy } from 'lucide-react';

interface Props {
  seriesName: string;
  seriesIds: string[];
}

export default function ReadingProgress({ seriesName, seriesIds }: Props) {
  const readArticles = useGamificationStore((state) => state.readArticles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || seriesIds.length === 0) return null;

  const readCount = seriesIds.filter((id) => readArticles.includes(id)).length;
  const totalCount = seriesIds.length;
  const percentage = Math.round((readCount / totalCount) * 100) || 0;
  const isComplete = readCount === totalCount;

  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-primary/20 bg-background/50 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-primary/10 bg-primary/5 px-4 py-3">
        <div className="flex items-center gap-2">
          {isComplete ? (
            <Trophy className="h-4 w-4 text-yellow-500" />
          ) : (
            <Target className="h-4 w-4 text-primary" />
          )}
          <span className="text-sm font-semibold text-foreground">
            {seriesName} <span className="text-muted-foreground font-normal">進度</span>
          </span>
        </div>
        <div className="text-sm font-bold text-primary">
          {readCount} / {totalCount} <span className="text-xs font-normal text-muted-foreground ml-1">篇</span>
        </div>
      </div>
      <div className="h-1.5 w-full bg-secondary">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
