import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquareText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  articleId: string;
  scenarioQuestion?: string;
}

export default function InteractiveScenarioForm({ 
  articleId, 
  scenarioQuestion = "如果是你，你會如何改善這個架構設計？留言與我交流！" 
}: Props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/wulingteen@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Scenario Architecture Feedback: ${articleId}`,
          email: email,
          message: message,
          _replyto: email,
          source_article: articleId
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error("FormSubmit error:", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="my-16 rounded-3xl border border-primary/20 bg-gradient-to-br from-background to-secondary/30 p-8 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <MessageSquareText className="h-48 w-48 text-primary" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <MessageSquareText className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">實戰演練交流</h3>
        </div>
        
        <p className="mb-8 font-medium text-foreground">{scenarioQuestion}</p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit} 
              className="flex flex-col gap-4"
            >
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">你的信箱</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com (只用於回覆你，不會挪作他用)"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">你的架構想法 / 遇到的坑</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="我認為這時候用 RAG 反而不好，因為..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex w-max items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_15px_rgba(200,160,80,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(200,160,80,0.4)] disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
                送出想法與 Nils 討論
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="rounded-2xl border border-primary/20 bg-primary/10 p-6 flex flex-col items-center justify-center text-center"
            >
              <CheckCircle2 className="mb-3 h-10 w-10 text-primary" />
              <p className="text-lg font-bold text-foreground mb-1">已成功送出！</p>
              <p className="text-sm text-muted-foreground">我會盡快閱讀你的架構想法並回覆至你的信箱。</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
