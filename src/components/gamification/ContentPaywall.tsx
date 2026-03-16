import React, { useState } from 'react';
import { useGamificationStore } from '../../store/gamificationStore';
import { Lock, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const translations: Record<string, Record<string, string>> = {
  zh: {
    title: '解鎖完整深度架構解析',
    desc: '這是一篇硬核技術文章。加入內部通訊，即可立即閱讀剩餘內容以及未來所有進階架構指南，讓你永不落後。',
    cta: '解鎖文章',
    note: '* 點擊解鎖即代表已加入學習路徑，進度將會為你保存',
  },
  en: {
    title: 'Unlock the Full Architecture Deep Dive',
    desc: 'This is an in-depth technical article. Subscribe to read the rest and get access to all future advanced architecture guides.',
    cta: 'Unlock Article',
    note: '* By unlocking, you join the learning path and your progress will be saved.',
  },
  de: {
    title: 'Vollständige Architekturanalyse freischalten',
    desc: 'Dies ist ein tiefgehender technischer Artikel. Abonnieren Sie, um den Rest zu lesen und Zugang zu allen zukünftigen Architektur-Guides zu erhalten.',
    cta: 'Artikel freischalten',
    note: '* Durch das Freischalten treten Sie dem Lernpfad bei und Ihr Fortschritt wird gespeichert.',
  },
};

export default function ContentPaywall({ children, lang = 'zh' }: { children: React.ReactNode; lang?: string }) {
  const isSubscribed = useGamificationStore((state) => state.isSubscribed);
  const subscribe = useGamificationStore((state) => state.subscribe);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const t = translations[lang] || translations.zh;

  if (isSubscribed) {
    return <>{children}</>;
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/wulingteen@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Premium Content Unlock: ${email}`,
          email: email,
          _replyto: email,
          context: "Unlocked via Content Paywall"
        })
      });
      subscribe();
    } catch (error) {
      console.error("FormSubmit error:", error);
      subscribe();
    }
    setSubmitting(false);
  };

  return (
    <div className="relative w-full">
      <div className="max-h-[600px] overflow-hidden mask-image-linear-gradient-bottom">
        {children}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full pt-32 pb-12 flex flex-col items-center justify-center bg-gradient-to-t from-background via-background to-transparent z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md w-full rounded-3xl border border-primary/20 bg-background/50 backdrop-blur-xl shadow-2xl p-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
            <Lock className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-foreground">{t.title}</h3>
          <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
            {t.desc}
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="h-12 w-full rounded-xl border border-border bg-background/80 pl-11 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-[0_0_15px_rgba(200,160,80,0.3)] transition-all hover:shadow-[0_0_25px_rgba(200,160,80,0.5)] disabled:opacity-70"
            >
              {submitting ? (
                 <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4 transition-transform group-hover:scale-110" />
                  {t.cta}
                </>
              )}
            </button>
            <p className="mt-2 text-xs text-muted-foreground opacity-70">
              {t.note}
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
