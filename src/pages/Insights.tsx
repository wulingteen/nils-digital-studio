import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";

const Insights = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <section className="section-padding">
        <div className="container-narrow flex min-h-[60vh] flex-col items-center justify-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("insights.page_title")}</h1>
            <p className="mb-3 text-2xl font-medium text-muted-foreground">{t("insights.coming_soon")}</p>
            <p className="max-w-md text-muted-foreground">{t("insights.sub")}</p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Insights;
