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
      setTimeout(() => {
        onComplete?.();
        el.remove();
      }, 500);
    }, 1900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return null;
}
