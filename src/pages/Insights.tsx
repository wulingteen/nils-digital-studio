import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import { blogPosts } from "@/data/posts";
import { titleEn, excerptEn } from "@/data/posts-en";
import { titleDe, excerptDe } from "@/data/posts-de";
import { ArrowRight, Calendar, User, Pin, Search, Tags, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Insights = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    const preferredOrder = ["AI PM 系列", "GenAI 實戰", "Patent", "GenAI", "Agent", "Architecture", "Career", "Event", "News"];
    return preferredOrder.filter(tag => tags.has(tag));
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchTag = selectedTag ? post.tags?.includes(selectedTag) : true;
      const title = currentLang === 'de' && titleDe[post.id] ? titleDe[post.id] : currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title;
      const excerpt = currentLang === 'de' && excerptDe[post.id] ? excerptDe[post.id] : currentLang === 'en' && excerptEn[post.id] ? excerptEn[post.id] : post.excerpt;
      const query = searchQuery.toLowerCase();
      const matchSearch = query === "" || 
        title.toLowerCase().includes(query) || 
        excerpt.toLowerCase().includes(query);
      return matchTag && matchSearch;
    }).sort((a, b) => {
      if (a.pinned === b.pinned) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.pinned ? -1 : 1;
    });
  }, [searchQuery, selectedTag, currentLang]);

  const pageUrl = `https://wulingteen.github.io/nils-digital-studio/${currentLang}/insights`;

  const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
          {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `https://wulingteen.github.io/nils-digital-studio/${currentLang}`
          },
          {
              "@type": "ListItem",
              "position": 2,
              "name": t("nav.insights", "Insights"),
              "item": pageUrl
          }
      ]
  };

  return (
    <PageTransition>
      <Helmet>
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
            {JSON.stringify(breadcrumbLd)}
        </script>
      </Helmet>
      <section className="section-padding min-h-screen pt-32">
        <div className="container-narrow px-6 md:px-8">
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

          {/* Search and Filter Section */}
          <div className="mb-12 flex flex-col gap-6 max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder={t("blog.search_placeholder", "Search articles...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 sm:text-sm border border-primary/20 bg-background/50 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm outline-none"
              />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedTag === null
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-primary/5 text-foreground hover:bg-primary/10 border border-primary/10"
                }`}
              >
                {t("blog.all_tags", "All")}
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-primary/5 text-foreground hover:bg-primary/10 border border-primary/10"
                  }`}
                >
                  <Tag className="h-3.5 w-3.5" />
                  {t(`blog.tags.${tag}`, tag)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 max-w-4xl mx-auto">
            {filteredPosts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="py-20 text-center flex flex-col items-center border border-primary/10 rounded-[2rem] bg-primary/5"
              >
                <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">{t("blog.no_results", "No articles found matching your criteria.")}</h3>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  {t("blog.back_to_insights", "Back to Insights")}
                </button>
              </motion.div>
            )}
            
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, transition: { duration: 0.4, ease: "easeOut" } }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group flex flex-col md:flex-row gap-6 md:gap-8 rounded-[2rem] border border-primary/5 bg-gradient-to-br from-background to-secondary/10 p-4 transition-colors duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(200,160,80,0.08)]"
              >
                {post.coverImage && (
                  <Link to={`/${currentLang}/insights/${post.id}`} className="block relative w-full md:w-[320px] lg:w-[360px] shrink-0 overflow-hidden rounded-[2rem] bg-muted aspect-video md:aspect-[16/9]">
                    <img src={`${import.meta.env.BASE_URL}${post.coverImage.replace(/^\//, '')}`} alt={currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10 mix-blend-overlay pointer-events-none"></div>
                  </Link>
                )}
                <div className="flex flex-1 flex-col justify-center py-2 md:py-4 md:pr-6">
                  <div>
                    {post.pinned && (
                      <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-full">
                        <Pin className="h-3 w-3 fill-current" />
                        {currentLang === 'zh' ? '置頂' : currentLang === 'de' ? 'Angeheftet' : 'Pinned'}
                      </div>
                    )}
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium tracking-wide text-primary/70">
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
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center flex-wrap gap-1.5">
                          {post.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider text-primary">
                              <Tag className="h-2.5 w-2.5" />
                              {t(`blog.tags.${tag}`, tag)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <h2 className="mb-4 text-2xl font-bold leading-tight text-foreground/90 transition-colors group-hover:text-primary md:text-3xl lg:leading-[1.2]">
                      <Link to={`/${currentLang}/insights/${post.id}`}>
                        {currentLang === 'de' && titleDe[post.id] ? titleDe[post.id] : currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title}
                      </Link>
                    </h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-4">
                      {currentLang === 'de' && excerptDe[post.id] ? excerptDe[post.id] : currentLang === 'en' && excerptEn[post.id] ? excerptEn[post.id] : post.excerpt}
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
