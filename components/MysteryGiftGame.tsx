"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const giftPrizes = [
  { emoji: "🍰", label: "Dessert offert" },
  { emoji: "🥂", label: "Apéritif offert" },
  { emoji: "☕", label: "Café offert" },
  { emoji: "🎁", label: "-15% sur l'addition" },
  { emoji: "🍷", label: "Verre de vin offert" },
  { emoji: "🥖", label: "Entrée offerte" },
];

export default function MysteryGiftGame() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [openedIdx, setOpenedIdx] = useState<number | null>(null);
  const [prize, setPrize] = useState<(typeof giftPrizes)[0] | null>(null);
  const [opening, setOpening] = useState(false);

  const handleOpen = (idx: number) => {
    if (opening || openedIdx !== null) return;
    setOpening(true);
    setOpenedIdx(idx);
    setTimeout(() => {
      const random = giftPrizes[Math.floor(Math.random() * giftPrizes.length)];
      setPrize(random);
      setOpening(false);
    }, 1300);
  };

  const reset = () => {
    setOpenedIdx(null);
    setPrize(null);
    setOpening(false);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-gray-800 dark:text-gray-100 font-semibold mb-1">
        Merci pour votre avis ! 🎉
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
        Choisissez une boîte mystère
      </p>

      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 w-full max-w-sm">
        {[0, 1, 2].map((i) => {
          const isOpened = openedIdx === i;
          const showPrize = prize !== null && isOpened;
          return (
            <motion.button
              key={i}
              onClick={() => handleOpen(i)}
              disabled={openedIdx !== null}
              animate={
                isOpened && opening
                  ? { rotate: [0, -10, 10, -10, 10, 0], y: [0, -6, 0, -6, 0] }
                  : isOpened
                  ? { scale: [1, 1.08, 1] }
                  : {}
              }
              transition={
                isOpened && opening
                  ? { duration: 1.1, ease: "easeInOut" }
                  : { duration: 0.4 }
              }
              whileHover={openedIdx === null ? { scale: 1.05, y: -2 } : undefined}
              className="aspect-square rounded-2xl flex items-center justify-center text-4xl sm:text-5xl border-2 transition-colors disabled:cursor-default shadow-md"
              style={{
                background: isOpened
                  ? "linear-gradient(135deg, #51197e 0%, #7C3AED 100%)"
                  : isDark
                  ? "#2a1d3a"
                  : "#EDE5F7",
                borderColor: isOpened
                  ? "#51197e"
                  : isDark
                  ? "#3d2d50"
                  : "#c4b0e0",
                cursor: openedIdx === null ? "pointer" : "default",
              }}
            >
              {showPrize ? (
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 14,
                  }}
                >
                  {prize.emoji}
                </motion.span>
              ) : (
                <span className={isOpened ? "opacity-0" : "opacity-100"}>
                  🎁
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {prize && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="px-6 py-3 rounded-2xl text-center mb-4"
            style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}
          >
            <p className="text-[#51197e] dark:text-[#c4b0e0] font-bold text-lg">
              🎉 Bravo !
            </p>
            <p className="text-[#51197e] dark:text-[#c4b0e0] font-semibold">
              Vous avez gagné : <span className="underline">{prize.label}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {openedIdx === null ? (
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Une seule chance, choisissez bien !
        </p>
      ) : (
        <button
          onClick={reset}
          className="text-xs text-[#51197e] dark:text-[#c4b0e0] underline hover:opacity-80"
        >
          Rejouer la démo
        </button>
      )}
    </div>
  );
}
