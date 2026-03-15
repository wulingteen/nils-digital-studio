import React, { useEffect, useRef, useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  articleId: string;
}

export default function BottomUnlock({ articleId }: Props) {
  const markAsRead = useGamificationStore((state) => state.markAsRead);
  const readArticles = useGamificationStore((state) => state.readArticles);
  const [showToast, setShowToast] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const hasRead = readArticles.includes(articleId);

  useEffect(() => {
    if (hasRead) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Add a slight delay to ensure they didn't just smash scroll to bottom instantly
          setTimeout(() => {
            markAsRead(articleId);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000);
          }, 1500);
          
          if (triggerRef.current) {
            observer.unobserve(triggerRef.current);
          }
        }
      },
      { threshold: 1.0 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [articleId, hasRead, markAsRead]);

  return (
    <>
      <div ref={triggerRef} className="h-4 w-full" aria-hidden="true" />
      
      {/* Achievement Unlocked Toast Overlay */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 px-8 shadow-[0_0_30px_rgba(200,160,80,0.2)] backdrop-blur-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">文章閱讀完成</p>
              <p className="text-xs text-muted-foreground">+1 經驗值已記錄至你的資料夾的學習檔案中</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
