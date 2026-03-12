import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import {
    ArrowRight,
    Bot,
    Calendar,
    Mail,
    Linkedin,
    Target,
    FileText,
    FileBarChart,
    FileOutput,
    Clock,
    ChevronDown,
    Globe,
    MessageSquare,
    Send,
    CheckCircle,
    Youtube,
    Users,
    ScanSearch,
    ShieldCheck,
} from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Globe as GlobeComponent } from "@/components/ui/Globe";

/* ── Animation Helpers ─────────────────────────────── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const sectionFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const hoverScale = {
    y: -4, 
    transition: { duration: 0.4, ease: "easeOut" as const }
};


interface Principle { title: string; desc: string; }
interface Credential { label: string; value: string; }

/* ── Icon map for Services ─────────────────────────── */
const serviceIcons = [Target, FileText, Clock];

/* ── Main Component ────────────────────────────────── */
const SinglePage = () => {
    const { t } = useTranslation();
    const { lang } = useParams();



    /* Contact state */
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    /* Data */
    const proofItems = t("proof", { returnObjects: true }) as string[];
    const serviceKeys = ["consulting", "prototyping", "training"] as const;

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
            <section id="hero" className="relative min-h-screen overflow-hidden">
                {/* Tech Blueprint Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none -z-20" />
                {/* Right half — profile photo with elegant fade */}
                <div className="absolute inset-y-0 right-0 w-full md:w-1/2 -z-10">
                    <img
                        src={`${import.meta.env.BASE_URL}nils-profile.png`}
                        alt="Nils — GenAI Solution Architect"
                        className="h-full w-full object-cover object-top opacity-90"
                    />
                    {/* Deep navy fade-out to the left */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background" />
                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    {/* Overall subtle elegant tint */}
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                </div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="container-narrow relative flex min-h-screen items-center"
                >
                    <div className="mr-auto w-full md:w-2/3 md:pr-8 px-2 sm:px-0">
                        <motion.p variants={fadeUp} className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            劉岦崱 · Nils — GenAI Solution Architect
                        </motion.p>
                        <motion.h1 variants={fadeUp} className="mb-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight text-foreground break-words">
                            {t("hero.headline1")}
                        </motion.h1>
                        <motion.h1 variants={fadeUp} className="mb-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight text-gradient break-words">
                            {t("hero.headline2")}
                        </motion.h1>
                        <motion.h1 variants={fadeUp} className="mb-6 sm:mb-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight text-gradient break-words">
                            {t("hero.headline3")}
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mb-8 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
                            {t("hero.sub")}
                        </motion.p>
                        <motion.div variants={fadeUp} className="mb-10 sm:mb-14 max-w-lg border-l-2 border-primary/30 pl-4 py-1">
                            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
                                {t("about.bio")}
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={hoverScale}
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(200,160,80,0.3)] transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(200,160,80,0.5)]"
                            >
                                <Calendar className="h-4 w-4" />
                                {t("hero.cta_book")}
                            </motion.a>
                            <motion.a
                                whileHover={hoverScale}
                                href="mailto:wulingteen@gmail.com"
                                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/50"
                            >
                                <Mail className="h-4 w-4" />
                                {t("hero.cta_email")}
                            </motion.a>
                            <motion.a
                                whileHover={hoverScale}
                                href="https://www.linkedin.com/in/nilsliu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
                            >
                                <Linkedin className="h-4 w-4" />
                                {t("hero.cta_linkedin")}
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════
          § EXPERTISE STRIP
          ═══════════════════════════════════════════════ */}
            <section className="border-y border-primary/20 bg-secondary/30 py-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-6 relative z-10">
                    {proofItems.map((item, i) => (
                        <span
                            key={i}
                            className="text-xs font-medium text-muted-foreground/70 whitespace-nowrap"
                        >
                            {i > 0 && <span className="mr-6 opacity-30">·</span>}
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          § CAREER JOURNEY GLOBE SECTION
          ═══════════════════════════════════════════════ */}
            <section className="section-padding border-t border-border relative overflow-hidden bg-background">
                <div className="container-narrow relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        
                        {/* Right Column (Foreground): The Timeline Timeline */}
                        <div className="order-2 lg:order-1 flex flex-col justify-center space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <h2 className="mb-4 text-3xl font-bold text-gradient md:text-4xl">
                                    {t("career.title")}
                                </h2>
                            </motion.div>

                            <div className="relative border-l border-primary/20 pl-8 ml-4 space-y-12">
                                {(() => {
                                    const journeyData = t("career.journey", { returnObjects: true });
                                    const safeJourney = Array.isArray(journeyData) ? journeyData : [];
                                    
                                    return (safeJourney as { age: string; title: string; desc: string }[]).map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            className="relative group"
                                        >
                                            {/* Timeline Node */}
                                            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(200,160,80,0.5)] group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />
                                            
                                            <span className="text-sm font-bold text-primary mb-1 block tracking-wider uppercase">
                                                {step.age}
                                            </span>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </motion.div>
                                    ));
                                })()}
                            </div>
                        </div>

                        {/* Left Column (Background): The Interactive Globe */}
                        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
                            {/* We use negative margins and absolute positioning to let the globe bleed out of bounds smoothly */}
                            <div className="absolute inset-0 scale-125 lg:scale-150 pointer-events-auto">
                                <Globe />
                            </div>
                            {/* Vignette fade over the globe to blend it into the background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,hsl(var(--background))_70%)] pointer-events-none" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          § FEATURED SHOWCASE
          ═══════════════════════════════════════════════ */}
            <section id="showcase" className="section-padding border-t border-border relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="container-narrow relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }} className="mb-12">
                        <h2 className="mb-3 text-3xl font-bold text-gradient md:text-4xl">{t("demos.title")}</h2>
                        <p className="max-w-xl text-muted-foreground">{t("demos.sub")}</p>
                    </motion.div>

                    {(t("demos.items", { returnObjects: true }) as { video_title: string; video_desc: string; features: { title: string; desc: string }[] }[]).map((item, idx) => {
                        const videoIds = ["JIEdLStSAzs", "f6VQxvXim-c", "qNg3ThoFShI", "S79LP9Ex18g"];
                        const iconSets = [
                            [Bot, ScanSearch, FileBarChart, ShieldCheck],
                            [Users, Globe, MessageSquare, FileOutput],
                            [Target, FileBarChart, Clock, Users],
                            [Globe, Target, FileOutput, Users],
                        ];
                        const icons = iconSets[idx] || iconSets[0];
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={idx} className={idx > 0 ? "mt-16 border-t border-border pt-16" : ""}>
                                <div className={`grid gap-10 lg:grid-cols-5 ${!isEven ? "direction-rtl" : ""}`}>
                                    {/* Video */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className={`lg:col-span-3 ${!isEven ? "lg:order-2" : ""}`}
                                    >
                                        <YouTubeEmbed
                                            videoId={videoIds[idx]}
                                            title={item.video_title}
                                            customThumbnail={videoIds[idx] === "S79LP9Ex18g" ? `${import.meta.env.BASE_URL}demos/interview_assistant.jpg` : undefined}
                                        />
                                        <p className="mt-3 text-sm text-muted-foreground">{item.video_desc}</p>
                                    </motion.div>

                                    {/* Feature Highlights */}
                                    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1 ${!isEven ? "lg:order-1" : ""}`}>
                                        {item.features.map((feat, i) => {
                                            const Icon = icons[i] || Bot;
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    whileHover={hoverScale}
                                                    transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    className="group flex items-start gap-4 rounded-xl border border-border p-4 transition-colors hover:border-foreground/20 hover:bg-secondary/40"
                                                >
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors group-hover:text-foreground">
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-foreground">{feat.title}</h4>
                                                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feat.desc}</p>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mt-12 text-center"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                        >
                            {t("demos.cta")} <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          § SERVICES
          ═══════════════════════════════════════════════ */}
            <section id="services" className="section-padding relative">
                {/* Tech Blueprint Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none -z-20" />
                <div className="container-narrow relative z-10">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gradient md:text-5xl">{t("services.page_title")}</h2>
                        <p className="mx-auto max-w-xl text-lg text-muted-foreground">{t("services.page_sub")}</p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {serviceKeys.map((key, i) => {
                            const Icon = serviceIcons[i];
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={hoverScale}
                                    transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="glass-card group rounded-xl p-8 border-t-2 border-t-primary/20 transition-colors hover:bg-secondary/40 shadow-sm"
                                >
                                    <Icon className="mb-4 h-8 w-8 text-primary/70 transition-colors group-hover:text-primary" />
                                    <h3 className="mb-2 text-xl font-semibold text-foreground">{t(`services.${key}.title`)}</h3>
                                    <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary shadow-sm">
                                        {t(`services.${key}.timeline`)}
                                    </div>
                                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t(`services.${key}.desc`)}</p>
                                    <p className="mb-3 text-xs font-semibold text-foreground tracking-wide uppercase">{t(`services.${key}.best_for`)}</p>
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
          § ABOUT
          ═══════════════════════════════════════════════ */}
            <section id="about" className="section-padding bg-secondary/30 relative border-t border-border">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mask-image-linear-gradient"></div>
                <div className="container-narrow relative z-10">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="mb-8 text-4xl font-bold text-gradient md:text-5xl">{t("about.page_title")}</h2>
                        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground font-medium">{t("about.bio")}</p>
                    </motion.div>

                    {/* Principles */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }} className="mb-20">
                        <h3 className="mb-8 text-2xl font-semibold text-foreground">{t("about.principles_title")}</h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            {principles.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="rounded-xl border border-border p-6"
                                >
                                    <h4 className="mb-3 text-lg font-semibold text-foreground">{p.title}</h4>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }} className="mb-20">
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
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }}>
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
            <section id="contact" className="section-padding border-t border-border relative overflow-hidden">
                <div className="absolute -top-[300px] -right-[300px] h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-[300px] -left-[300px] h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"></div>
                <div className="container-narrow relative z-10">
                    <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mb-12">
                        <h2 className="mb-4 text-4xl font-bold text-gradient md:text-5xl">{t("contact.page_title")}</h2>
                        <p className="max-w-xl text-lg text-muted-foreground">{t("contact.page_sub")}</p>
                    </motion.div>

                    <div className="grid gap-16 lg:grid-cols-2">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true, margin: "-50px" }}>
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
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(200,160,80,0.3)]"
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
                                        className="flex flex-col items-center justify-center py-16 text-center border border-primary/20 bg-primary/5 rounded-2xl"
                                    >
                                        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                                        <p className="text-lg font-medium text-foreground">{t("contact.success")}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm">{t("contact.timezone")}</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:wulingteen@gmail.com" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    <Mail className="h-4 w-4" /> wulingteen@gmail.com
                                </a>
                                <a href="https://www.linkedin.com/in/nilsliu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    <Linkedin className="h-4 w-4" /> LinkedIn
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
