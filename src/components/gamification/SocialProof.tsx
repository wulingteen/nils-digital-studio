import React, { useMemo } from 'react';
import { Users } from 'lucide-react';

interface Props {
  articleId: string;
}

export default function SocialProof({ articleId }: Props) {
  // Deterministic view count algorithm based on string hashing
  // So it doesn't jump wildly but provides realistic numbers.
  const viewCount = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < articleId.length; i++) {
        hash = articleId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const base = Math.abs(hash) % 8000;
    
    // Add time component so it slowly grows over time (deterministic relative to week)
    const timeGrow = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7)) % 1000;
    return base + timeGrow + 1243; // Floor of ~1k readers
  }, [articleId]);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mr-auto">
      <div className="flex -space-x-2">
        {/* Fake avatar pile */}
        <div className="h-6 w-6 rounded-full border-2 border-background bg-blue-100 flex items-center justify-center text-[10px]">👨‍💻</div>
        <div className="h-6 w-6 rounded-full border-2 border-background bg-green-100 flex items-center justify-center text-[10px]">👩‍💼</div>
        <div className="h-6 w-6 rounded-full border-2 border-background bg-purple-100 flex items-center justify-center text-[10px]">🧔</div>
      </div>
      <span className="font-semibold text-foreground/80">{viewCount.toLocaleString()}</span> 人正在學此系列
    </div>
  );
}
