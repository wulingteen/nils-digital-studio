import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Auto theme based on Taiwan time (GMT+8)
// Daytime: 6:00–18:00 → light mode, otherwise → dark mode
function applyTaiwanTimeTheme() {
    const now = new Date();
    // Get current hour in GMT+8 (Taiwan)
    const utcHour = now.getUTCHours();
    const taiwanHour = (utcHour + 8) % 24;
    const isDark = taiwanHour < 6 || taiwanHour >= 18;

    if (isDark) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

applyTaiwanTimeTheme();

// Re-check every minute so the theme transitions live
setInterval(applyTaiwanTimeTheme, 60_000);

createRoot(document.getElementById("root")!).render(<App />);
