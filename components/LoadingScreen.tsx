"use client";

import { useEffect } from "react";

export default function LoadingScreen() {
  useEffect(() => {
    const el = document.getElementById("__loading-screen");
    if (!el) return;

    // Wait for bar animation to finish (1.3s anim + 0.55s delay = ~1.85s), then fade out
    const timer = setTimeout(() => {
      el.classList.add("fade-out");
      // First scroll to top, then reveal content, then remove loading screen
      window.scrollTo(0, 0);
      document.body.classList.remove("loading");
      setTimeout(() => {
        el.remove();
        window.scrollTo(0, 0);
      }, 600);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
