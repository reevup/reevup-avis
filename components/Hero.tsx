"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const trustItems = [
  { icon: "🔒", text: "Données sécurisées" },
  { icon: "⚡", text: "Prêt en 3 minutes" },
  { icon: "🇫🇷", text: "Données hébergées en France" },
];

const floatingCards = [
  { icon: "⭐", value: "+9x", label: "plus d'avis récoltés", delay: 0 },
  { icon: "🤖", value: "< 30s", label: "réponse IA automatique", delay: 0.12 },
  { icon: "📈", value: "+0.8★", label: "en moyenne à 6 mois", delay: 0.24 },
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative flex items-center pt-24 pb-10 lg:pb-16 overflow-hidden">
      {/* Blobs */}
      <div
        className="blob-animate absolute -bottom-40 -left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(81,25,126,0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(81,25,126,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="blob-animate absolute -top-20 -right-40 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(147,113,209,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(147,113,209,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />

      {/* Bottom fade to blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-main))" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-7">
            {/* Badge hero - border style en dark */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full w-fit text-xs sm:text-sm font-semibold"
              style={{
                background: isDark ? "transparent" : "#EDE5F7",
                color: isDark ? "#c4b0e0" : "#51197e",
                border: isDark ? "1px solid rgba(147,113,209,0.35)" : "none",
              }}
            >
              <span>✦</span> Agent IA inclus, réponse automatique sur Google
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
            >
              Vos clients satisfaits méritent d&apos;être entendus{" "}
              <span className="text-[#51197e] dark:text-[#c4b0e0]">sur Google.</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              Reevup&apos;Avis redirige vos clients satisfaits vers Google,
              intercepte les avis négatifs, et laisse l&apos;IA répondre à votre
              place, automatiquement.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4 pt-2">
              <a href="#tarifs" className="group px-7 py-3.5 rounded-full bg-[#51197e] text-white font-semibold hover:bg-[#6B21A8] transition-all text-base shadow-xl shadow-[#51197e]/25 flex items-center gap-2">
                Essayer gratuitement 14 jours
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="https://calendly.com/reevup/reevup-avis-reservez-votre-consultation-gratuite" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full border-2 border-[#51197e]/20 dark:border-[#9371d1]/30 text-[#51197e] dark:text-[#c4b0e0] font-semibold hover:bg-[#51197e]/5 transition-all text-base flex items-center gap-2">
                Demander une démo <span>→</span>
              </a>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-5 pt-4">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
            <div id="demo" className="aspect-video rounded-2xl flex flex-col items-center justify-center gap-4 p-8"
              style={{ background: isDark ? "#251a35" : "#F3EEFA", border: isDark ? "2px dashed #4a3060" : "2px dashed #c4b0e0" }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#51197e" }}>
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center font-medium">
                Emplacement vidéo motion design
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Dépose ton fichier dans /public/demo.mp4</p>
            </div>
          </motion.div>
        </div>

        {/* Floating stat cards - comble le vide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mt-12 lg:mt-16 max-w-3xl mx-auto"
        >
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: card.delay }}
              className="text-center p-4 sm:p-5 rounded-2xl border transition-all hover:-translate-y-1"
              style={{
                background: isDark ? "#2a2a2a" : "#ffffff",
                borderColor: isDark ? "#3a3a3a" : "#e9e2f5",
                boxShadow: isDark
                  ? "0 4px 20px rgba(81,25,126,0.15)"
                  : "0 4px 20px rgba(81,25,126,0.08)",
              }}
            >
              <span className="text-xl sm:text-2xl mb-1 block">{card.icon}</span>
              <p
                className="text-xl sm:text-2xl font-extrabold mb-0.5"
                style={{ fontFamily: "'Neue Machina', sans-serif", color: isDark ? "#c4b0e0" : "#51197e" }}
              >
                {card.value}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">{card.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
