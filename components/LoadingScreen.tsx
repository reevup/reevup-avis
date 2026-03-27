"use client";

import { useEffect } from "react";

export default function LoadingScreen() {
  useEffect(() => {
    const el = document.getElementById("__loading-screen");
    if (!el) return;

    // Wait for bar animation to finish (1.3s anim + 0.55s delay = ~1.85s), then fade out
    const timer = setTimeout(() => {
      el.classList.add("fade-out");
      setTimeout(() => el.remove(), 600);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
