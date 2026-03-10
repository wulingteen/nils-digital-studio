import { useEffect } from "react";

const BASE_URL = "https://wulingteen.github.io/nils-digital-studio";

interface OGTagsOptions {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
}

const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = attr.split("=");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
    }
    el.setAttribute("content", value);
};

export const useOGTags = ({ title, description, image, url, type = "article" }: OGTagsOptions) => {
    useEffect(() => {
        const fullImage = image
            ? image.startsWith("http")
                ? image
                : `${BASE_URL}${image}`
            : `${BASE_URL}/nils-profile.png`;

        const fullUrl = url || window.location.href;

        // Page title
        const prevTitle = document.title;
        document.title = `${title} | Nils Liu`;

        // OG tags
        setMeta('meta[property="og:title"]', 'property=og:title', title);
        setMeta('meta[property="og:description"]', 'property=og:description', description);
        setMeta('meta[property="og:image"]', 'property=og:image', fullImage);
        setMeta('meta[property="og:url"]', 'property=og:url', fullUrl);
        setMeta('meta[property="og:type"]', 'property=og:type', type);

        // Twitter card
        setMeta('meta[name="twitter:card"]', 'name=twitter:card', "summary_large_image");
        setMeta('meta[name="twitter:title"]', 'name=twitter:title', title);
        setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);
        setMeta('meta[name="twitter:image"]', 'name=twitter:image', fullImage);

        // description
        setMeta('meta[name="description"]', 'name=description', description);

        return () => {
            // Restore defaults on unmount
            document.title = prevTitle;
            setMeta('meta[property="og:title"]', 'property=og:title', "劉岦崱 Nils Liu | Enterprise GenAI Architect & RAG Product Expert");
            setMeta('meta[property="og:description"]', 'property=og:description', "Specializing in Enterprise RAG integration, GenAI Product Management, and custom AI Agents.");
            setMeta('meta[property="og:image"]', 'property=og:image', `${BASE_URL}/nils-profile.png`);
            setMeta('meta[property="og:url"]', 'property=og:url', BASE_URL);
            setMeta('meta[property="og:type"]', 'property=og:type', "website");
            setMeta('meta[name="twitter:title"]', 'name=twitter:title', "劉岦崱 Nils Liu | Enterprise GenAI Architect & RAG Product Expert");
            setMeta('meta[name="twitter:description"]', 'name=twitter:description', "Specializing in Enterprise RAG integration, GenAI Product Management, and custom AI Agents.");
            setMeta('meta[name="twitter:image"]', 'name=twitter:image', `${BASE_URL}/nils-profile.png`);
        };
    }, [title, description, image, url, type]);
};
