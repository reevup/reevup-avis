"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const wheelSegments = [
  { label: "-10%", color: "#51197e", text: "#fff" },
  { label: "Dessert offert", color: "#EDE5F7", text: "#51197e" },
  { label: "-5€", color: "#7C3AED", text: "#fff" },
  { label: "Café offert", color: "#F3EEFA", text: "#51197e" },
  { label: "-20%", color: "#51197e", text: "#fff" },
  { label: "Entrée offerte", color: "#EDE5F7", text: "#51197e" },
];

export default function WheelGame() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [spinning, setSpinning] = useState(false);
  const [spinDeg, setSpinDeg] = useState(0);
  const [won, setWon] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning) return;
    setWon(null);
    setSpinning(true);
    const extra = 1440 + Math.floor(Math.random() * 360);
    const newDeg = spinDeg + extra;
    setSpinDeg(newDeg);
    setTimeout(() => {
      const segAngle = 360 / wheelSegments.length;
      const rotation = newDeg % 360;
      const hitAngle = ((270 - rotation) % 360 + 360) % 360;
      const idx = Math.floor(hitAngle / segAngle);
      setWon(wheelSegments[idx].label);
      setSpinning(false);
    }, 3500);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-gray-800 dark:text-gray-100 font-semibold mb-1">
        Merci pour votre avis ! 🎉
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
        Tentez votre chance et gagnez une récompense
      </p>

      <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-6">
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-0 h-0"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: isDark ? "20px solid #9371d1" : "20px solid #51197e",
          }}
        />
        <div
          className={`w-full h-full rounded-full overflow-hidden border-4 shadow-lg ${
            isDark ? "border-[#9371d1]" : "border-[#51197e]"
          }`}
          style={{
            transform: `rotate(${spinDeg}deg)`,
            transition: spinning
              ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
              : "none",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {wheelSegments.map((seg, i) => {
              const segAngle = 360 / wheelSegments.length;
              const startAngle = (i * segAngle * Math.PI) / 180;
              const endAngle = ((i + 1) * segAngle * Math.PI) / 180;
              const x1 = 100 + 100 * Math.cos(startAngle);
              const y1 = 100 + 100 * Math.sin(startAngle);
              const x2 = 100 + 100 * Math.cos(endAngle);
              const y2 = 100 + 100 * Math.sin(endAngle);
              const midAngle = (startAngle + endAngle) / 2;
              const largeArc = segAngle > 180 ? 1 : 0;
              let textRotDeg = i * segAngle + segAngle / 2;
              const norm = ((textRotDeg % 360) + 360) % 360;
              const flipped = norm > 90 && norm < 270;
              if (flipped) textRotDeg += 180;
              const textR = 62;
              const textX = 100 + textR * Math.cos(midAngle);
              const textY = 100 + textR * Math.sin(midAngle);
              return (
                <g key={i}>
                  <path
                    d={`M100,100 L${x1},${y1} A100,100 0 ${largeArc},1 ${x2},${y2} Z`}
                    fill={seg.color}
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <text
                    x={textX}
                    y={textY}
                    fill={seg.text}
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="central"
                    transform={`rotate(${textRotDeg}, ${textX}, ${textY})`}
                  >
                    {seg.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md border-2 flex items-center justify-center ${
            isDark
              ? "bg-[#2a2a2a] border-[#9371d1]"
              : "bg-white border-[#51197e]"
          }`}
        >
          <span className="text-xs font-bold text-[#51197e] dark:text-[#c4b0e0]">
            GO
          </span>
        </div>
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning}
        className="px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg disabled:opacity-60"
        style={{ background: spinning ? "#9371D1" : "#51197e" }}
      >
        {spinning ? "La roue tourne..." : "🎰 Tourner la roue"}
      </button>

      <AnimatePresence>
        {won && (
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
              Vous avez gagné : <span className="underline">{won}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
