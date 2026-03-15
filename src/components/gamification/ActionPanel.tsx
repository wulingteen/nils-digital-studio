import React, { useEffect, useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Bookmark, Linkedin, Share2 } from 'lucide-react';
import SocialProof from './SocialProof';

interface Props {
  articleId: string;
  lang: string;
  title: string;
}

export default function ActionPanel({ articleId, lang, title }: Props) {
  const toggleBookmark = useGamificationStore((state) => state.toggleBookmark);
  const bookmarkedArticles = useGamificationStore((state) => state.bookmarkedArticles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isBookmarked = bookmarkedArticles.includes(articleId);



  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`閱讀一篇文章：${title}`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full p-4 rounded-2xl bg-secondary/20 border border-primary/10">
      <SocialProof articleId={articleId} />
      
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => toggleBookmark(articleId)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isBookmarked 
              ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(200,160,80,0.3)]' 
              : 'bg-background hover:bg-primary/10 border border-border hover:border-primary/30 text-foreground'
          }`}
        >
          <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          {isBookmarked ? '已加入學習路徑' : '存到我的學習路徑'}
        </button>



        <button
          onClick={handleLinkedInShare}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/20 text-[#0A66C2] transition-all"
        >
          <Linkedin className="h-4 w-4" />
          分享
        </button>
      </div>
    </div>
  );
}
