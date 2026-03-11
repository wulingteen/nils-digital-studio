import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Calendar, Mail, Linkedin } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { blogPosts } from "@/data/posts";
import { titleEn, excerptEn } from "@/data/posts-en";
import { titleDe, excerptDe } from "@/data/posts-de";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const proofItems = [
    t("proof.patent"),
    t("proof.award"),
    t("proof.talks"),
    t("proof.certs"),
    t("proof.clients"),
  ];

  const patents = blogPosts.filter(post => post.id.startsWith("patent-"));

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center section-padding overflow-hidden">
        {/* Elegant gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="container-narrow"
        >
          <motion.p variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Nils — AI Architect & Builder
          </motion.p>
          <motion.h1 variants={fadeUp} className="mb-2 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-7xl xl:text-8xl break-words">
            {t("hero.headline1")}
          </motion.h1>
          <motion.h1 variants={fadeUp} className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-gradient md:text-7xl lg:text-7xl xl:text-8xl break-words">
            {t("hero.headline2")}
          </motion.h1>
          <motion.p variants={fadeUp} className="mb-12 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t("hero.sub")}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(200,160,80,0.3)] transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(200,160,80,0.5)]"
            >
              <Calendar className="h-4 w-4" />
              {t("hero.cta_book")}
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/50"
            >
              <Mail className="h-4 w-4" />
              {t("hero.cta_email")}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/50"
            >
              <Linkedin className="h-4 w-4" />
              {t("hero.cta_linkedin")}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-primary/20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="flex overflow-x-auto relative z-10">
          {proofItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-shrink-0 items-center gap-3 px-8 py-5"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/profile-placeholder.png`} 
                alt="Nils Liu" 
                className="h-full w-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-xl font-bold text-foreground">Nils (劉岦崱)</p>
                <p className="text-sm font-medium text-primary">GenAI Solution Architect</p>
              </div>
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 text-3xl font-bold text-gradient md:text-4xl">{t("about.page_title")}</h2>
              
              <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-medium dark:prose-invert">
                <p>{t("about.bio")}</p>
              </div>

              <div className="mt-8">
                <Link
                  to={`/${lang || "en"}/about`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:border-primary/50"
                >
                  {t("about.principles_title")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prototype Demos */}
      <section className="section-padding relative border-t border-border">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-3 text-3xl font-bold text-gradient md:text-4xl">{t("demos.title")}</h2>
            <p className="text-muted-foreground">{t("demos.sub")}</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <YouTubeEmbed videoId="VIDEO_ID_1" title="AI Agent Prototype — Document Processing" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <YouTubeEmbed videoId="VIDEO_ID_2" title="RAG Research Assistant — Live Demo" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="section-padding border-t border-border relative bg-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50"></div>
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-3 text-3xl font-bold text-gradient md:text-4xl">{t("patents.title")}</h2>
            <p className="mb-6 text-muted-foreground">{t("patents.sub")}</p>
            <div className="inline-flex flex-col gap-1.5 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm px-5 py-4 text-sm shadow-sm">
              <span className="font-semibold text-primary">{t("patents.inventor")}</span>
              <span className="text-muted-foreground">{t("patents.assignee")}</span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {patents.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/${lang || "en"}/insights/${post.id}`}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(200,160,80,0.1)]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 md:line-clamp-none">
                      {lang === "de" ? (titleDe[post.id] || post.title) : lang === "en" ? (titleEn[post.id] || post.title) : post.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {lang === "de" ? (excerptDe[post.id] || post.excerpt) : lang === "en" ? (excerptEn[post.id] || post.excerpt) : post.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section-padding border-t border-border relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mask-image-linear-gradient"></div>
        <div className="container-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 text-3xl font-bold text-gradient md:text-4xl">{t("services_teaser.title")}</h2>
            <p className="mb-8 text-muted-foreground">{t("services_teaser.sub")}</p>
            <Link
              to={`/${lang || "en"}/services`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3 hover:text-primary/80"
            >
              {t("services_teaser.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
