import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import { blogPosts } from "@/data/posts";
import { titleEn, excerptEn } from "@/data/posts-en";
import { ArrowRight, Calendar, User } from "lucide-react";

const Insights = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || "en";

  return (
    <PageTransition>
      <section className="section-padding min-h-screen pt-32">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-gradient md:text-5xl">{t("nav.insights", "Insights")}</h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              {t("insights.sub", "Thoughts, tutorials, and perspectives on the intersection of generative AI, design, and product architecture.")}
            </p>
          </motion.div>

          <div className="flex flex-col gap-10 max-w-4xl mx-auto">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group flex flex-col md:flex-row gap-6 md:gap-8 rounded-[2rem] border border-primary/5 bg-gradient-to-br from-background to-secondary/10 p-4 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(200,160,80,0.08)]"
              >
                {post.coverImage && (
                  <Link to={`/${currentLang}/insights/${post.id}`} className="block relative w-full md:w-[280px] lg:w-[320px] shrink-0 overflow-hidden rounded-3xl bg-muted aspect-video md:aspect-[4/3]">
                    <img src={`${import.meta.env.BASE_URL}${post.coverImage.replace(/^\//, '')}`} alt={currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10 mix-blend-overlay pointer-events-none"></div>
                  </Link>
                )}
                <div className="flex flex-1 flex-col justify-center py-2 md:py-4 md:pr-6">
                  <div>
                    <div className="mb-4 flex items-center gap-4 text-xs font-medium tracking-wide text-primary/70">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString(currentLang === 'de' ? 'de-DE' : currentLang === 'zh' ? 'zh-TW' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h2 className="mb-4 text-2xl font-bold leading-tight text-foreground/90 transition-colors group-hover:text-primary md:text-3xl lg:leading-[1.2]">
                      <Link to={`/${currentLang}/insights/${post.id}`}>
                        {currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title}
                      </Link>
                    </h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-4">
                      {currentLang === 'en' && excerptEn[post.id] ? excerptEn[post.id] : post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/${currentLang}/insights/${post.id}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary transition-colors hover:text-primary/70"
                  >
                    Read Article <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Insights;
