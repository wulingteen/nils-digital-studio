import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SinglePage from "./pages/SinglePage";
import NotFound from "./pages/NotFound";
import LlmPage from "./pages/LlmPage";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import "./i18n";

import { HelmetProvider } from "react-helmet-async";
import { SplashScreen } from "./components/ui/SplashScreen";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const getDefaultLang = () => {
  const nav = navigator.language?.toLowerCase() || "";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("de")) return "de";
  return "en";
};

const App = () => {
  // Check session storage so we only show splash once per session
  const [showSplash, setShowSplash] = useState(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    return !hasSeenSplash;
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <AnimatePresence>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          </AnimatePresence>

          <div
            style={{
              opacity: showSplash ? 0 : 1,
              transition: "opacity 0.8s ease-in-out",
              pointerEvents: showSplash ? "none" : "auto",
              height: showSplash ? "100vh" : "auto",
              overflow: showSplash ? "hidden" : "visible"
            }}
          >
            <BrowserRouter basename="/nils-digital-studio">
              <Routes>
                <Route path="/" element={<Navigate to={`/${getDefaultLang()}`} replace />} />
                <Route path="/:lang" element={<Layout />}>
                  <Route index element={<SinglePage />} />
                  <Route path="insights" element={<Insights />} />
                  <Route path="insights/:id" element={<BlogPost />} />
                </Route>
                <Route path="/llm" element={<LlmPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
