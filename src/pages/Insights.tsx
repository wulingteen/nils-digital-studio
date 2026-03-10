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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/10 bg-secondary/20 transition-all hover:bg-secondary/50 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(200,160,80,0.05)]"
              >
                {post.coverImage && (
                  <Link to={`/${currentLang}/insights/${post.id}`} className="block relative h-52 w-full overflow-hidden bg-muted">
                    <img src={`${import.meta.env.BASE_URL}${post.coverImage.replace(/^\//, '')}`} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString(currentLang === 'de' ? 'de-DE' : currentLang === 'zh' ? 'zh-TW' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h2 className="mb-3 text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      <Link to={`/${currentLang}/insights/${post.id}`}>
                        {currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title}
                      </Link>
                    </h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      {currentLang === 'en' && excerptEn[post.id] ? excerptEn[post.id] : post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/${currentLang}/insights/${post.id}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/70"
                  >
                    Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
