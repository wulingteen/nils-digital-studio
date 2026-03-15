import React, { useState, useEffect } from 'react';
import { Users, Loader2 } from 'lucide-react';

interface Props {
  articleId: string;
}

export default function SocialProof({ articleId }: Props) {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    
    // First increment the view for this visit, then fetch the updated count
    fetch('/api/articles/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId })
    })
      .then(res => res.json())
      .then(data => {
        if (mounted && data.views) {
          // Add base 1200 so it looks populated immediately
          setViewCount(data.views + 1200); 
        }
      })
      .catch(err => console.error("Could not fetch views", err));

    return () => { mounted = false; };
  }, [articleId]);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mr-auto min-h-[24px]">
      <div className="flex -space-x-2">
        {/* Abstract avatar pile */}
        <div className="h-6 w-6 rounded-full border-2 border-background bg-blue-100 flex items-center justify-center text-[10px]">👨‍💻</div>
        <div className="h-6 w-6 rounded-full border-2 border-background bg-green-100 flex items-center justify-center text-[10px]">👩‍💼</div>
        <div className="h-6 w-6 rounded-full border-2 border-background bg-purple-100 flex items-center justify-center text-[10px]">🧔</div>
      </div>
      {viewCount === null ? (
        <span className="flex items-center gap-2 text-foreground/50 text-xs"><Loader2 className="w-3 h-3 animate-spin"/> 讀取中</span>
      ) : (
        <><span className="font-semibold text-foreground/80">{viewCount.toLocaleString()}</span> 人正在學此系列</>
      )}
    </div>
  );
}
