"use client";

import { useEffect } from "react";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  useEffect(() => {
    const el = document.getElementById("__loading-screen");
    if (!el) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      el.classList.add("fade-out");
      window.scrollTo(0, 0);
      // Reveal content slightly before the fade finishes so it feels seamless
      setTimeout(() => {
        onComplete?.();
      }, 100);
      setTimeout(() => {
        el.remove();
      }, 600);
    }, 1900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return null;
}
