import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import {
    ArrowRight,
    Calendar,
    Mail,
    Linkedin,
    Target,
    FileText,
    Clock,
    ChevronDown,
    Send,
    CheckCircle,
    Youtube,
} from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

/* ── Animation Helpers ─────────────────────────────── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const sectionFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ── Interfaces ────────────────────────────────────── */
interface CaseStudy {
    title: string;
    client: string;
    tags: string[];
    problem: string;
    approach: string;
    outcome: string;
    owned: string;
}

interface Principle { title: string; desc: string; }
interface Credential { label: string; value: string; }

/* ── Icon map for Services ─────────────────────────── */
const serviceIcons = [Target, FileText, Clock];

/* ── Main Component ────────────────────────────────── */
const SinglePage = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

    /* Work state */
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    /* Contact state */
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    /* Data */
    const proofItems = [
        t("proof.patent"),
        t("proof.award"),
        t("proof.talks"),
        t("proof.certs"),
        t("proof.clients"),
    ];
    const serviceKeys = ["consulting", "prototyping", "training"] as const;
    const cases = t("work.cases", { returnObjects: true }) as CaseStudy[];
    const principles = t("about.principles", { returnObjects: true }) as Principle[];
    const skills = t("about.skills", { returnObjects: true }) as string[];
    const credibility = t("about.credibility", { returnObjects: true }) as Credential[];

    /* Contact validation */
    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = t("contact.validation.name_required");
        if (!form.email.trim()) e.email = t("contact.validation.email_required");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("contact.validation.email_invalid");
        if (!form.message.trim()) e.message = t("contact.validation.message_required");
        return e;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const v = validate();
        if (Object.keys(v).length) { setErrors(v); return; }
        setErrors({});
        setSubmitted(true);
    };

    return (
        <>
            {/* ═══════════════════════════════════════════════
          § HERO
          ═══════════════════════════════════════════════ */}
            <section id="hero" className="relative flex min-h-[90vh] items-center section-padding overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-foreground/[0.03] blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-foreground/[0.02] blur-3xl" />
                </div>

                <motion.div variants={stagger} initial="hidden" animate="visible" className="container-narrow">
                    <motion.p variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        Nils — AI Architect & Builder
                    </motion.p>
                    <motion.h1 variants={fadeUp} className="mb-2 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                        {t("hero.headline1")}
                    </motion.h1>
                    <motion.h1 variants={fadeUp} className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                        {t("hero.headline2")}
                    </motion.h1>
                    <motion.p variants={fadeUp} className="mb-12 max-w-xl text-lg text-muted-foreground leading-relaxed">
                        {t("hero.sub")}
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                        >
                            <Calendar className="h-4 w-4" />
                            {t("hero.cta_book")}
                        </a>
                        <a
                            href="mailto:hello@example.com"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
                        >
                            <Mail className="h-4 w-4" />
                            {t("hero.cta_email")}
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
                        >
                            <Linkedin className="h-4 w-4" />
                            {t("hero.cta_linkedin")}
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Proof strip */}
            <section className="border-y border-border">
                <div className="flex overflow-x-auto">
                    {proofItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-shrink-0 items-center gap-3 px-8 py-5"
                        >
                            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                            <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Prototype Demos */}
            <section className="section-padding">
                <div className="container-narrow">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
                        <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">{t("demos.title")}</h2>
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

            {/* ═══════════════════════════════════════════════
          § SERVICES
          ═══════════════════════════════════════════════ */}
            <section id="services" className="section-padding border-t border-border">
                <div className="container-narrow">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
                        <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("services.page_title")}</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">{t("services.page_sub")}</p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {serviceKeys.map((key, i) => {
                            const Icon = serviceIcons[i];
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
                                    viewport={{ once: true }}
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
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                        >
                            {t("services.cta")} <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          § WORK
          ═══════════════════════════════════════════════ */}
            <section id="work" className="section-padding border-t border-border">
                <div className="container-narrow">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
                        <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("work.page_title")}</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">{t("work.page_sub")}</p>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {cases.map((c, i) => {
                            const isOpen = expandedIndex === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
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

            {/* ═══════════════════════════════════════════════
          § ABOUT
          ═══════════════════════════════════════════════ */}
            <section id="about" className="section-padding border-t border-border">
                <div className="container-narrow">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="mb-8 text-4xl font-bold text-foreground md:text-5xl">{t("about.page_title")}</h2>
                        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("about.bio")}</p>
                    </motion.div>

                    {/* Principles */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
                        <h3 className="mb-8 text-2xl font-semibold text-foreground">{t("about.principles_title")}</h3>
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
                                    <h4 className="mb-3 text-lg font-semibold text-foreground">{p.title}</h4>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
                        <h3 className="mb-8 text-2xl font-semibold text-foreground">{t("about.skills_title")}</h3>
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
                        <h3 className="mb-8 text-2xl font-semibold text-foreground">{t("about.credibility_title")}</h3>
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

            {/* ═══════════════════════════════════════════════
          § CONTACT
          ═══════════════════════════════════════════════ */}
            <section id="contact" className="section-padding border-t border-border">
                <div className="container-narrow">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                        <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("contact.page_title")}</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">{t("contact.page_sub")}</p>
                    </motion.div>

                    <div className="grid gap-16 lg:grid-cols-2">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-6"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.name")}</label>
                                            <input
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                                            />
                                            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.email")}</label>
                                            <input
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                                            />
                                            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.message")}</label>
                                            <textarea
                                                rows={5}
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                                            />
                                            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                                        >
                                            <Send className="h-4 w-4" />
                                            {t("contact.send")}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <CheckCircle className="mb-4 h-12 w-12 text-foreground" />
                                        <p className="text-lg font-medium text-foreground">{t("contact.success")}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm">{t("contact.timezone")}</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    <Mail className="h-4 w-4" /> hello@example.com
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    <Youtube className="h-4 w-4" /> YouTube
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SinglePage;
