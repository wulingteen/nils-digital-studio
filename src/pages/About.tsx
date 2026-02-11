import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";

interface Principle { title: string; desc: string; }
interface Credential { label: string; value: string; }

const About = () => {
  const { t } = useTranslation();
  const principles = t("about.principles", { returnObjects: true }) as Principle[];
  const skills = t("about.skills", { returnObjects: true }) as string[];
  const credibility = t("about.credibility", { returnObjects: true }) as Credential[];

  return (
    <PageTransition>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-8 text-4xl font-bold text-foreground md:text-5xl">{t("about.page_title")}</h1>
            <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("about.bio")}</p>
          </motion.div>

          {/* Principles */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">{t("about.principles_title")}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border p-6"
                >
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">{t("about.skills_title")}</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="mb-8 text-2xl font-semibold text-foreground">{t("about.credibility_title")}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {credibility.map((c, i) => (
                <div key={i} className="rounded-xl border border-border p-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium text-foreground">{c.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
