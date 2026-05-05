"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const slotSymbols = ["🍒", "🍋", "🍇", "⭐", "🍀", "🔔", "💎"];
const slotPrizes = [
  { emoji: "🍒", label: "-10% sur l'addition" },
  { emoji: "🍋", label: "Café offert" },
  { emoji: "🍇", label: "Apéritif offert" },
  { emoji: "⭐", label: "Repas offert" },
  { emoji: "🍀", label: "Dessert offert" },
  { emoji: "🔔", label: "-20% sur la table" },
  { emoji: "💎", label: "Bouteille offerte" },
];

const ITEM_HEIGHT = 80;

function Reel({ spinning, finalIdx }: { spinning: boolean; finalIdx: number }) {
  return (
    <div className="w-16 sm:w-20 h-20 rounded-xl bg-white dark:bg-[#0d0d0d] overflow-hidden flex items-center justify-center text-4xl sm:text-5xl shadow-inner relative">
      {spinning ? (
        <motion.div
          animate={{ y: [0, -slotSymbols.length * ITEM_HEIGHT] }}
          transition={{
            duration: 0.45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 flex flex-col"
        >
          {[...slotSymbols, ...slotSymbols].map((s, k) => (
            <div
              key={k}
              className="flex items-center justify-center"
              style={{ height: ITEM_HEIGHT }}
            >
              {s}
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.span
          key={finalIdx}
          initial={{ scale: 1.5, y: -24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 14 }}
        >
          {slotSymbols[finalIdx]}
        </motion.span>
      )}
    </div>
  );
}

export default function SlotMachineGame() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [reels, setReels] = useState([0, 1, 2]);
  const [spinning, setSpinning] = useState([false, false, false]);
  const [result, setResult] = useState<(typeof slotPrizes)[0] | null>(null);

  const isAnySpinning = spinning.some(Boolean);

  const spin = () => {
    if (isAnySpinning) return;
    setResult(null);
    setSpinning([true, true, true]);

    const winningIdx = Math.floor(Math.random() * slotSymbols.length);
    const finals = [winningIdx, winningIdx, winningIdx];

    const stops = [1300, 2000, 2700];
    stops.forEach((delay, i) => {
      setTimeout(() => {
        setReels((prev) => {
          const next = [...prev];
          next[i] = finals[i];
          return next;
        });
        setSpinning((prev) => {
          const next = [...prev];
          next[i] = false;
          return next;
        });
        if (i === 2) {
          setResult(slotPrizes[winningIdx]);
        }
      }, delay);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-gray-800 dark:text-gray-100 font-semibold mb-1">
        Merci pour votre avis ! 🎉
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
        Tirez et tentez votre chance
      </p>

      <div
        className="rounded-3xl p-3 sm:p-5 mb-6 shadow-2xl border-4 relative"
        style={{
          background: isDark
            ? "linear-gradient(180deg, #2a1d3a, #1e1525)"
            : "linear-gradient(180deg, #51197e, #6B21A8)",
          borderColor: isDark ? "#9371d1" : "#7C3AED",
        }}
      >
        <div className="flex gap-2 sm:gap-3">
          {reels.map((idx, i) => (
            <Reel key={i} spinning={spinning[i]} finalIdx={idx} />
          ))}
        </div>
        <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-yellow-300 shadow-md" />
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-300 shadow-md" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-yellow-300 shadow-md" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-yellow-300 shadow-md" />
      </div>

      <button
        onClick={spin}
        disabled={isAnySpinning}
        className="px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg disabled:opacity-60"
        style={{ background: isAnySpinning ? "#9371D1" : "#51197e" }}
      >
        {isAnySpinning ? "Ça tourne..." : "🎰 Tirer la machine"}
      </button>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-5 px-6 py-3 rounded-2xl text-center"
            style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}
          >
            <p className="text-[#51197e] dark:text-[#c4b0e0] font-bold text-lg">
              🎉 Bravo !
            </p>
            <p className="text-[#51197e] dark:text-[#c4b0e0] font-semibold">
              Vous avez gagné : <span className="underline">{result.label}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
