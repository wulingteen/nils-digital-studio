import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "@/components/SEO";

const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const l = lang || "en";
    if (i18n.language !== l) i18n.changeLanguage(l);
    document.documentElement.lang = l === "zh" ? "zh-TW" : l;
  }, [lang, i18n]);

  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <SEO />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
