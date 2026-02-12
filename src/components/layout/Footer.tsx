import { useTranslation } from "react-i18next";
import { Linkedin, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row lg:px-12">
        <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/nilsliu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:wulingteen@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="YouTube">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">{t("footer.built_with")}</p>
      </div>
    </footer>
  );
};

export default Footer;
