import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Clock, Target, FileText } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";

const icons = [Target, FileText, Clock];

const Services = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const serviceKeys = ["consulting", "prototyping", "training"] as const;

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
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("services.page_title")}</h1>
            <p className="max-w-xl text-lg text-muted-foreground">{t("services.page_sub")}</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceKeys.map((key, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="glass-card hover-lift group rounded-xl p-8"
                >
                  <Icon className="mb-4 h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{t(`services.${key}.title`)}</h3>
                  <div className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {t(`services.${key}.timeline`)}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t(`services.${key}.desc`)}</p>
                  <p className="mb-3 text-xs font-medium text-foreground">{t(`services.${key}.best_for`)}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{t(`services.${key}.deliverables`)}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Link
              to={`/${lang || "en"}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              {t("services.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
