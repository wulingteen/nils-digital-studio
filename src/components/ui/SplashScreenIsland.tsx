import { SplashScreen } from "./SplashScreen";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

/**
 * Wrapper for SplashScreen that handles session storage
 * and fades out the splash to reveal the main content.
 * Used as a React island in Astro.
 */
const SplashScreenIsland = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof sessionStorage === 'undefined') return false;
    return !sessionStorage.getItem("hasSeenSplash");
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </AnimatePresence>
  );
};

export default SplashScreenIsland;
