import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";

const LlmPage = () => {
    const [content, setContent] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}llm.txt`)
            .then((r) => r.text())
            .then(setContent)
            .catch(() => setContent("Failed to load llm.txt"));
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Parse markdown-ish content into styled sections
    const renderContent = () => {
        if (!content) return null;

        const lines = content.split("\n");
        const elements: JSX.Element[] = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];

            if (line.startsWith("# ")) {
                // Main title — skip, we render it separately
                i++;
                continue;
            }

            if (line.startsWith("> ")) {
                elements.push(
                    <p key={i} className="mb-6 border-l-2 border-muted-foreground/30 pl-4 text-muted-foreground italic">
                        {line.replace(/^>\s*/, "")}
                    </p>
                );
                i++;
                continue;
            }

            if (line.startsWith("## ")) {
                elements.push(
                    <h2 key={i} className="mb-4 mt-10 text-xl font-semibold text-foreground font-['Space_Grotesk']">
                        {line.replace("## ", "")}
                    </h2>
                );
                i++;
                continue;
            }

            if (line.startsWith("- ")) {
                const listItems: string[] = [];
                while (i < lines.length && lines[i].startsWith("- ")) {
                    listItems.push(lines[i].replace(/^-\s*/, ""));
                    i++;
                }
                elements.push(
                    <ul key={`list-${i}`} className="mb-4 space-y-2">
                        {listItems.map((item, j) => {
                            // Bold the part before the first colon
                            const colonIdx = item.indexOf(":");
                            if (colonIdx > 0 && colonIdx < 40) {
                                return (
                                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                        <span>
                                            <span className="font-medium text-foreground">{item.slice(0, colonIdx)}</span>
                                            {item.slice(colonIdx)}
                                        </span>
                                    </li>
                                );
                            }
                            return (
                                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                );
                continue;
            }

            if (line.trim() === "") {
                i++;
                continue;
            }

            // Regular paragraph
            elements.push(
                <p key={i} className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {line}
                </p>
            );
            i++;
        }

        return elements;
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to={`/${navigator.language?.startsWith("zh") ? "zh" : navigator.language?.startsWith("de") ? "de" : "en"}`}
                        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to site
                    </Link>

                    <div className="mb-8 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                                <Bot className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-foreground font-['Space_Grotesk']">llm.txt</h1>
                                <p className="text-xs text-muted-foreground">AI-agent-friendly site summary</p>
                            </div>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                            {copied ? "Copied" : "Copy raw"}
                        </button>
                    </div>

                    <div className="mb-6 rounded-lg border border-border bg-card/50 p-3">
                        <p className="text-xs text-muted-foreground">
                            Raw file: <a href={`${import.meta.env.BASE_URL}llm.txt`} className="underline hover:text-foreground" target="_blank" rel="noopener">{`${window.location.origin}${import.meta.env.BASE_URL}llm.txt`}</a>
                        </p>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="prose-sm"
                >
                    {renderContent()}
                </motion.div>
            </div>
        </div>
    );
};

export default LlmPage;
