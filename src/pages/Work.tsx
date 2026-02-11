import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";

interface CaseStudy {
  title: string;
  client: string;
  tags: string[];
  problem: string;
  approach: string;
  outcome: string;
  owned: string;
}

const Work = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cases = t("work.cases", { returnObjects: true }) as CaseStudy[];

  return (
    <PageTransition>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("work.page_title")}</h1>
            <p className="max-w-xl text-lg text-muted-foreground">{t("work.page_sub")}</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {cases.map((c, i) => {
              const isOpen = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card hover-lift cursor-pointer rounded-xl p-8"
                  onClick={() => setExpandedIndex(isOpen ? null : i)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">{c.client}</p>
                      <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 grid gap-4 border-t border-border pt-6 md:grid-cols-3">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Problem</p>
                            <p className="text-sm leading-relaxed text-foreground">{c.problem}</p>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Approach</p>
                            <p className="text-sm leading-relaxed text-foreground">{c.approach}</p>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Outcome</p>
                            <p className="text-sm leading-relaxed text-foreground">{c.outcome}</p>
                          </div>
                        </div>
                        <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What I Owned</p>
                          <p className="mt-1 text-sm text-foreground">{c.owned}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Work;
