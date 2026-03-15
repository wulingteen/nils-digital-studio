import React from 'react';
import { Dices } from 'lucide-react';

interface Props {
  lang: string;
  articleIds: string[];
}

export default function RandomArticleButton({ lang, articleIds }: Props) {
  const handleRandomNavigation = () => {
    if (articleIds.length === 0) return;
    const randomIndex = Math.floor(Math.random() * articleIds.length);
    const randomId = articleIds[randomIndex];
    window.location.href = `/${lang}/insights/${randomId}`;
  };

  return (
    <button
      onClick={handleRandomNavigation}
      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm transition-all hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(200,160,80,0.3)]"
    >
      <Dices className="h-4 w-4" />
      隨機帶我讀一篇
    </button>
  );
}
