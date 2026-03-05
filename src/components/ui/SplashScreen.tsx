import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
    onComplete: () => void;
}

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    born: number;
    hue: number;
}

const SERVICES = [
    { en: "Enterprise RAG", zh: "企業知識庫 RAG" },
    { en: "AI Agent Systems", zh: "AI 多智能體系統" },
    { en: "GenAI Consulting", zh: "GenAI 導入顧問" },
    { en: "LLM Fine-tuning", zh: "大語言模型微調" },
    { en: "Agentic Workflows", zh: "自動化 AI 工作流" },
    { en: "AI Product Design", zh: "AI 產品設計" },
];

const TOTAL_DURATION = 5000;  // ms
const TEXT_DELAY = 900;   // text appears
const OUTRO_START = 4100;  // fade-out starts
const MAX_NODES = 320;
const CONNECT_DIST = 140;

export function SplashScreen({ onComplete }: SplashScreenProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const rafRef = useRef<number>(0);
    const startRef = useRef<number>(0);
    const lastSpawnRef = useRef<number>(0);
    const phaseRef = useRef<"building" | "text" | "outro">("building");
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    const [uiPhase, setUiPhase] = useState<"building" | "text" | "outro">("building");

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const render = (now: number) => {
            // ── Initialise start time ──────────────────────────────
            if (startRef.current === 0) startRef.current = now;
            const elapsed = now - startRef.current;

            const ctx = canvas.getContext("2d", { alpha: false });
            if (!ctx) return;
            const W = canvas.width;
            const H = canvas.height;
            const cx = W / 2;
            const cy = H / 2;
            // Farthest corner distance determines the required speed
            const diagonal = Math.sqrt(cx * cx + cy * cy);

            // ── Phase transitions (all ref-based, no React re-render side-effects) ─
            if (elapsed > TEXT_DELAY && phaseRef.current === "building") {
                phaseRef.current = "text";
                setUiPhase("text");
            }
            if (elapsed > OUTRO_START && phaseRef.current === "text") {
                phaseRef.current = "outro";
                setUiPhase("outro");
                setTimeout(() => onCompleteRef.current(), 920);
            }
            if (elapsed > TOTAL_DURATION) {
                // Safety valve: ensure unmount even if outro missed
                onCompleteRef.current();
                return;
            }

            // ── Spawn outward-flying nodes ─────────────────────────
            // Over the first OUTRO_START ms, nodes should completely cover the screen.
            // Required per-frame speed = diagonal / (OUTRO_START / 16.67ms per frame)
            const spawnGap = elapsed < 400 ? 16 : elapsed < 1500 ? 35 : 60;
            if (nodesRef.current.length < MAX_NODES && now - lastSpawnRef.current > spawnGap) {
                lastSpawnRef.current = now;
                const burst = elapsed < 200 ? 12 : elapsed < 800 ? 5 : 2;
                for (let i = 0; i < burst; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    // Speed: must travel `diagonal` px in ~OUTRO_START ms
                    // px/frame ≈ diagonal / (OUTRO_START / 16.67) — with random spread
                    const speed = (diagonal / (OUTRO_START / 16.67)) * (0.5 + Math.random() * 1.2);
                    nodesRef.current.push({
                        x: cx + (Math.random() - 0.5) * 20,
                        y: cy + (Math.random() - 0.5) * 20,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        radius: 0.7 + Math.random() * 1.8,
                        born: now,
                        hue: 200 + Math.floor(Math.random() * 55),
                    });
                }
            }

            // ── Update positions ────────────────────────────────────
            nodesRef.current.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
            });

            // ── Clear ───────────────────────────────────────────────
            ctx.fillStyle = "#090909";
            ctx.fillRect(0, 0, W, H);

            // ── Draw edges & triangulated faces ─────────────────────
            const nodes = nodesRef.current;
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                const ageA = Math.min(1, (now - a.born) / 350);
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist > CONNECT_DIST) continue;

                    const ageB = Math.min(1, (now - b.born) / 350);
                    const t = 1 - dist / CONNECT_DIST;

                    // Edge line
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(155,170,200,${t * Math.min(ageA, ageB) * 0.55})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();

                    // Triangle face (first valid third node per pair)
                    for (let k = j + 1; k < nodes.length; k++) {
                        const c = nodes[k];
                        const d1 = Math.hypot(a.x - c.x, a.y - c.y);
                        const d2 = Math.hypot(b.x - c.x, b.y - c.y);
                        if (d1 > CONNECT_DIST || d2 > CONNECT_DIST) continue;
                        const ageC = Math.min(1, (now - c.born) / 350);

                        const faceAlpha = t
                            * (1 - d1 / CONNECT_DIST)
                            * (1 - d2 / CONNECT_DIST)
                            * Math.min(ageA, ageB, ageC)
                            * 0.22;

                        // Non-monotonous tone per triplet
                        const tone = 10 + ((i * 3 + j * 7 + k * 13) % 24);
                        const hue = (a.hue + b.hue + c.hue) / 3;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.lineTo(c.x, c.y);
                        ctx.closePath();
                        ctx.fillStyle = `hsla(${hue},18%,${tone}%,${faceAlpha + 0.055})`;
                        ctx.fill();
                        break;
                    }
                }
            }

            // ── Draw glowing node dots ──────────────────────────────
            nodes.forEach(n => {
                const alpha = Math.min(1, (now - n.born) / 300);
                if (alpha < 0.01) return;
                // Glow
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5);
                g.addColorStop(0, `hsla(${n.hue},25%,92%,${alpha * 0.75})`);
                g.addColorStop(0.5, `hsla(${n.hue},15%,70%,${alpha * 0.25})`);
                g.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius * 5, 0, Math.PI * 2);
                ctx.fillStyle = g;
                ctx.fill();
                // Core
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${n.hue},15%,97%,${alpha})`;
                ctx.fill();
            });

            rafRef.current = requestAnimationFrame(render);
        };

        rafRef.current = requestAnimationFrame(render);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafRef.current);
        };
    }, []); // runs only once — no stale closure risk

    return (
        <motion.div
            className="fixed inset-0 z-[100] overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: uiPhase === "outro" ? 0 : 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

            {/* ── Centered text overlay ─────────────────────────────── */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center pointer-events-none select-none px-6">
                <AnimatePresence>
                    {uiPhase !== "building" && (
                        <motion.div
                            key="text-block"
                            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                            transition={{ duration: 1.0, ease: "easeOut" }}
                            className="relative flex flex-col items-center gap-4"
                        >
                            {/* Dark radial backdrop so text is legible over the mesh */}
                            <div
                                className="absolute -z-10"
                                style={{
                                    width: "600px",
                                    height: "280px",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)",
                                    background:
                                        "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(9,9,9,0.88) 30%, rgba(9,9,9,0.55) 65%, transparent 100%)",
                                }}
                            />

                            {/* Pulse beacon */}
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_14px_5px_rgba(200,160,80,0.35)] mb-1" />

                            {/* Name — Chinese · English */}
                            <h1
                                className="text-4xl font-bold text-white/90 md:text-6xl"
                                style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.025em" }}
                            >
                                劉岦崱 · Nils Liu
                            </h1>

                            {/* Title — stacked bilingual */}
                            <div className="flex flex-col items-center gap-0.5">
                                <p
                                    className="text-sm font-semibold text-primary/90"
                                    style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "0.05em" }}
                                >
                                    企業級 GenAI 架構師
                                </p>
                                <p
                                    className="text-[11px] font-medium uppercase text-primary/60"
                                    style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "0.2em" }}
                                >
                                    Enterprise GenAI Architect
                                </p>
                            </div>

                            {/* Cycling service labels — bilingual */}
                            <div className="mt-1 h-6 overflow-hidden flex items-center justify-center">
                                <p
                                    className="text-[11px] font-medium text-primary/60"
                                    style={{ fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "0.14em" }}
                                >
                                    ✦ RAG &nbsp;·&nbsp; AI Agents &nbsp;·&nbsp; GenAI 企業導入
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
