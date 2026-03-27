"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ROICalculator() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [clients, setClients] = useState(100);
  const [currentNote, setCurrentNote] = useState(3.5);

  const avisParMois = Math.round(clients * 0.15);
  const avisPositifs = Math.round(avisParMois * 0.82);
  const noteProjetee = Math.min(5, currentNote + (avisPositifs * 0.02));
  const gainsCA = Math.round((noteProjetee - currentNote) * 9);

  const sliderTrack = isDark ? "#3a3a3a" : "#E5E7EB";

  return (
    <section className="py-16" style={{ background: isDark ? "#222222" : "#F9F7FC" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold text-[#51197e] dark:text-[#c4b0e0] uppercase tracking-widest mb-4 block">Simulateur</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Calculez votre retour sur investissement
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Estimez l&apos;impact de Reevup&apos;Avis sur votre établissement en quelques secondes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Inputs */}
          <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 dark:border-[#3a3a3a]">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6">Votre situation actuelle</h3>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Clients par mois</label>
                <span className="text-2xl font-extrabold text-[#51197e] dark:text-[#c4b0e0]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{clients}</span>
              </div>
              <input
                type="range" min={20} max={500} step={10} value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #51197e ${((clients - 20) / 480) * 100}%, ${sliderTrack} ${((clients - 20) / 480) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
                <span>20</span><span>500</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Note Google actuelle</label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-[#51197e] dark:text-[#c4b0e0]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{currentNote.toFixed(1)}</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
              <input
                type="range" min={1} max={4.9} step={0.1} value={currentNote}
                onChange={(e) => setCurrentNote(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #51197e ${((currentNote - 1) / 3.9) * 100}%, ${sliderTrack} ${((currentNote - 1) / 3.9) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
                <span>1.0</span><span>4.9</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 dark:border-[#3a3a3a] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#51197e] to-[#7C3AED]" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6">Résultats estimés avec Reevup&apos;Avis</h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="bg-[#F3EAFA] dark:bg-[#251a35] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#51197e] dark:text-[#c4b0e0]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{avisParMois}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium mt-1">avis collectés / mois</p>
              </div>
              <div className="bg-[#ECFDF5] dark:bg-[#0f2a18] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#059669]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{avisPositifs}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium mt-1">avis positifs sur Google</p>
              </div>
              <div className="bg-[#FEF3C7] dark:bg-[#332810] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D97706]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{noteProjetee.toFixed(1)} ★</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium mt-1">note projetée à 6 mois</p>
              </div>
              <div className="bg-[#DBEAFE] dark:bg-[#1a2540] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#2563EB]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>+{gainsCA}%</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium mt-1">de CA potentiel en plus</p>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-4">
              * Estimations basées sur des moyennes sectorielles (taux de réponse 15%, 82% d&apos;avis positifs filtrés, +9% CA/étoile selon Harvard Business School).
            </p>

            <a href="#tarifs" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-lg shadow-[#51197e]/20 group text-sm">
              Obtenir ces résultats
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
