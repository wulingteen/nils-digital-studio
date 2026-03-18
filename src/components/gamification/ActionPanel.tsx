import React, { useEffect, useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Bookmark, Linkedin, Share2, Facebook, Twitter, MessageCircle, AtSign } from 'lucide-react';
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
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setMounted(true);
    setCurrentUrl(window.location.href);
  }, []);

  if (!mounted) return null;

  const isBookmarked = bookmarkedArticles.includes(articleId);

  const shareLinks = [
    {
      id: 'facebook',
      icon: <Facebook className="w-4 h-4" />,
      color: 'bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border-[#1877F2]/20 text-[#1877F2]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      id: 'x',
      icon: <Twitter className="w-4 h-4" />,
      color: 'bg-zinc-500/10 hover:bg-zinc-500/20 border-zinc-500/20 text-zinc-600 dark:text-zinc-300',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`
    },
    {
      id: 'threads',
      icon: <AtSign className="w-4 h-4" />,
      color: 'bg-zinc-500/10 hover:bg-zinc-500/20 border-zinc-500/20 text-zinc-600 dark:text-zinc-300',
      url: `https://threads.net/intent/post?text=${encodeURIComponent(title + " " + currentUrl)}`
    },
    {
      id: 'line',
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'bg-[#06C755]/10 hover:bg-[#06C755]/20 border-[#06C755]/20 text-[#06C755]',
      url: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}`
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-4 h-4" />,
      color: 'bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border-[#0A66C2]/20 text-[#0A66C2]',
      url: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`閱讀一篇文章：${title}\n\n${currentUrl}`)}`
    }
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full p-4 rounded-2xl bg-secondary/20 border border-primary/10">
      <SocialProof articleId={articleId} />
      
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => toggleBookmark(articleId)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all mr-2 ${
            isBookmarked 
              ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(200,160,80,0.3)]' 
              : 'bg-background hover:bg-primary/10 border border-border hover:border-primary/30 text-foreground'
          }`}
        >
          <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          {isBookmarked ? '已加入學習路徑' : '存到我的學習路徑'}
        </button>

        <div className="flex items-center gap-2">
          {shareLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => window.open(link.url, '_blank')}
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all ${link.color}`}
              aria-label={`Share on ${link.id}`}
            >
              {link.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
