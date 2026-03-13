import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { t } from "../../i18n/utils";

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "de", label: "DE" },
];

interface Props {
  lang: string;
  currentPath: string;
}

const HeaderIsland = ({ lang, currentPath }: Props) => {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains("dark")
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang = lang || "en";
  const BASE = '/nils-digital-studio';

  const navItems = [
    { key: "home", anchor: "#hero" },
    { key: "career", anchor: "#career" },
    { key: "work", anchor: "#showcase" },
    { key: "services", anchor: "#services" },
    { key: "about", anchor: "#about" },
    { key: "contact", anchor: "#contact" },
    { key: "insights", anchor: "/insights" },
  ];

  const switchLanguage = (code: string) => {
    // Replace current lang in path with new lang
    const newPath = currentPath.replace(/^\/(en|zh|de)(\/|$)/, `/${code}$2`);
    window.location.href = `${BASE}${newPath || `/${code}`}`;
  };

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollTo = useCallback((anchor: string) => {
    setMobileOpen(false);
    if (anchor.startsWith("/")) {
      window.location.href = `${BASE}/${currentLang}${anchor}`;
      return;
    }

    const id = anchor.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If not on the main page, navigate there first
      window.location.href = `${BASE}/${currentLang}`;
    }
  }, [currentLang]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/10 bg-background/60"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <button
          onClick={() => scrollTo("#hero")}
          className="text-lg font-semibold tracking-tight text-foreground"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Nils.
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.anchor)}
              className="text-sm tracking-wide text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            >
              {t(currentLang, `nav.${item.key}`)}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-1 py-1 shadow-sm">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLanguage(l.code)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${currentLang === l.code
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(200,160,80,0.2)]"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="rounded-full border border-transparent p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-primary/10 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.anchor)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t(currentLang, `nav.${item.key}`)}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-primary/10 mt-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { switchLanguage(l.code); setMobileOpen(false); }}
                    className={`rounded-full px-3 py-1 text-xs font-medium mt-2 ${currentLang === l.code
                      ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(200,160,80,0.2)]"
                      : "text-muted-foreground"
                      }`}
                  >
                    {l.label}
                  </button>
                ))}
                <button onClick={toggleDark} className="ml-auto mt-2 rounded-full p-2 text-muted-foreground hover:bg-primary/5 hover:text-primary">
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderIsland;
