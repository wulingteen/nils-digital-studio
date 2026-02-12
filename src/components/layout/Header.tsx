import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "de", label: "DE" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang = lang || "en";

  const navItems = [
    { key: "home", anchor: "#hero" },
    { key: "services", anchor: "#services" },
    { key: "work", anchor: "#work" },
    { key: "about", anchor: "#about" },
    { key: "contact", anchor: "#contact" },
  ];

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    navigate(`/${code}`);
  };

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollTo = useCallback((anchor: string) => {
    setMobileOpen(false);
    const id = anchor.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If not on the main page, navigate there first
      navigate(`/${currentLang}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [currentLang, navigate]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
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
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-full border border-border px-1 py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLanguage(l.code)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${currentLang === l.code
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
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
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.anchor)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { switchLanguage(l.code); setMobileOpen(false); }}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${currentLang === l.code
                      ? "bg-foreground text-background"
                      : "text-muted-foreground"
                      }`}
                  >
                    {l.label}
                  </button>
                ))}
                <button onClick={toggleDark} className="ml-auto rounded-full p-2 text-muted-foreground">
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

export default Header;
