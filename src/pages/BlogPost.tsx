import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import { blogPosts } from "@/data/posts";
import { postsEn, titleEn, excerptEn } from "@/data/posts-en";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useOGTags } from "@/hooks/useOGTags";

const BlogPost = () => {
    const { lang, id } = useParams();
    const { t } = useTranslation();
    const currentLang = lang || "en";

    const post = blogPosts.find((p) => p.id === id);
    const content = (currentLang === "en" && post && postsEn[post.id])
        ? postsEn[post.id]
        : post?.content ?? "";

    useOGTags(post ? {
        title: (currentLang === "en" && titleEn[post.id]) ? titleEn[post.id] : post.title,
        description: (currentLang === "en" && excerptEn[post.id]) ? excerptEn[post.id] : post.excerpt,
        image: post.coverImage,
        url: window.location.href,
    } : { title: "GenAI 分享 | Nils Liu", description: "" });

    if (!post) {
        return <Navigate to={`/${currentLang}/insights`} replace />;
    }

    // To cleanly render basic markdown as HTML since we couldn't install react-markdown due to EPERM
    // Only supports basic headers, paragraphs, lists, and bold text for now.
    const formatMarkdownToHTML = (text: string) => {
        // Extract YouTube video ID from various URL formats
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

        let html = text
            .replace(/^### (.*$)/gim, '<h3 class="mt-8 mb-4 text-2xl font-bold text-foreground">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="mt-10 mb-5 text-3xl font-bold text-primary/90">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="mt-12 mb-6 text-4xl font-extrabold text-foreground">$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<strong class="text-foreground">$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/^- (.*$)/gim, '<li class="ml-6 list-disc mb-2 text-muted-foreground">$1</li>')
            // YouTube embed: a bare YouTube URL on its own line becomes an iframe
            .replace(
                new RegExp(`(https?://(?:www\\.)?(?:youtube\\.com/watch\\?v=|youtu\\.be/)([a-zA-Z0-9_-]{11})[^\\s]*)`, 'gim'),
                (match, url, videoId) =>
                    `<div class="my-8 overflow-hidden rounded-2xl border border-primary/20 shadow-lg" style="position:relative;padding-bottom:56.25%;height:0;"><iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen loading="lazy" title="YouTube video"></iframe></div>`
            )
            // Markdown links [text](url) → <a> tags (supports mailto: and https:)
            .replace(
                /\[([^\]]+)\]\(((?:https?|mailto):[^\)]+)\)/gim,
                '<a href="$2" class="text-primary underline hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
            )
            .replace(/\n\n/gim, '</p><p class="mb-6 leading-relaxed text-muted-foreground text-lg">')
            .trim();

        // Wrap in initial p tags if not already wrapped
        if (!html.startsWith('<h') && !html.startsWith('<li')) {
            html = `<p class="mb-6 leading-relaxed text-muted-foreground text-lg">${html}</p>`;
        }
        return html;
    };

    return (
        <PageTransition>
            <article className="min-h-screen pb-20 pt-32">
                <div className="container-narrow mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to={`/${currentLang}/insights`}
                            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary/80 transition-colors hover:text-primary"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t("blog.back_to_insights", "Back to Insights")}
                        </Link>

                        <header className="mb-12">
                            <h1 className="mb-6 text-4xl font-bold leading-tight text-gradient md:text-5xl lg:leading-[1.1]">
                                {currentLang === 'en' && titleEn[post.id] ? titleEn[post.id] : post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-primary/20 pb-8">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString(
                                            currentLang === "de" ? "de-DE" : currentLang === "zh" ? "zh-TW" : "en-US",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </time>
                                </div>
                            </div>
                        </header>

                        {post.coverImage && (
                            <div className="mb-12 overflow-hidden rounded-2xl border border-primary/20 shadow-lg">
                                <img src={`${import.meta.env.BASE_URL}${post.coverImage.replace(/^\//, '')}`} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                            </div>
                        )}

                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: formatMarkdownToHTML(content) }}
                        />
                    </motion.div>
                </div>
            </article>
        </PageTransition>
    );
};

export default BlogPost;
