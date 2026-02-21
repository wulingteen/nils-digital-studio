import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function SEO() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const title = t("seo.title");
    const description = t("seo.desc");

    // Construct the canonical URL based on the current path
    const canonicalBaseUrl = "https://wulingteen.github.io/nils-digital-studio";
    // Usually location.pathname contains the language e.g., "/en" or "/zh"
    const canonicalUrl = `${canonicalBaseUrl}${location.pathname === "/" ? "" : location.pathname}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <html lang={i18n.language} />

            {/* Application JSON-LD Structural Data (Person) */}
            <script type="application/ld+json">
                {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Person",
                      "name": "Nils Liu",
                      "jobTitle": "GenAI Solution Architect",
                      "url": "${canonicalBaseUrl}",
                      "image": "${canonicalBaseUrl}/nils-profile.png",
                      "sameAs": [
                        "https://www.linkedin.com/in/nils-t-liu/"
                      ]
                    }
                `}
            </script>

            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
}
