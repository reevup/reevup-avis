"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import WheelGame from "./WheelGame";
import MysteryGiftGame from "./MysteryGiftGame";
import SlotMachineGame from "./SlotMachineGame";

type GameTab = "wheel" | "gift" | "slot";

const tabs: { id: GameTab; icon: string; label: string }[] = [
  { id: "wheel", icon: "🎡", label: "Roue" },
  { id: "gift", icon: "🎁", label: "Cadeau mystère" },
  { id: "slot", icon: "🎰", label: "Machine à sous" },
];

const features = [
  {
    icon: "🎮",
    title: "3 jeux interactifs",
    desc: "Roue de la fortune, cadeau mystère, machine à sous. Choisissez celui qui colle à votre marque.",
  },
  {
    icon: "⛓️",
    title: "Choix de l'action par passage",
    desc: "Définissez l'enchaînement : avis Google, email, téléphone, follow Instagram. Le client réalise les actions pour débloquer le jeu.",
  },
  {
    icon: "🏆",
    title: "Mode 100% gagnant ou non",
    desc: "Garantissez un gain à chaque tirage, ou laissez la place à une case « Perdu ». Stocks de gains paramétrables.",
  },
  {
    icon: "🎟️",
    title: "Bons de réduction & expiration auto",
    desc: "Le client choisit : utilisation immédiate ou prochaine visite. Les bons reportés sont envoyés par email et expirent automatiquement.",
  },
  {
    icon: "🎨",
    title: "Aux couleurs de votre marque",
    desc: "Couleurs, logo, textes. Le jeu s'adapte à l'identité visuelle de votre établissement.",
  },
];

export default function LoyaltyPreview() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<GameTab>("wheel");

  return (
    <section
      id="jeux"
      className="py-16"
      style={{ background: isDark ? "#222222" : "#F9F7FC" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-6 reveal">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: isDark ? "#2a1d3a" : "#EDE5F7",
              color: isDark ? "#c4b0e0" : "#51197e",
            }}
          >
            🎁 3 jeux interactifs
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white reveal">
          Engagez vos clients avec des jeux à gagner
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-10 text-lg max-w-2xl mx-auto reveal-fade reveal-delay-1">
          Roue de la fortune, cadeau mystère, machine à sous. Le client réalise
          une action de son choix (avis Google, email, partage), puis débloque
          un jeu pour tenter sa chance.
        </p>

        {/* Tab switcher: 3 games */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-full p-1"
            style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all outline-none focus:outline-none whitespace-nowrap"
                style={
                  activeTab === t.id
                    ? { background: "#51197e", color: "#fff" }
                    : { color: isDark ? "#c4b0e0" : "#51197e" }
                }
              >
                <span className="mr-1.5">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: interactive game preview */}
          <div className="bg-white dark:bg-[#2a2a2a] rounded-3xl shadow-xl border border-gray-100 dark:border-[#3a3a3a] p-6 md:p-10 reveal-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-[#222222] px-3 py-1 rounded-full flex-1 text-center truncate">
                app.reevup-avis.fr/recompense
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {activeTab === "wheel" && <WheelGame />}
                {activeTab === "gift" && <MysteryGiftGame />}
                {activeTab === "slot" && <SlotMachineGame />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: features & customization */}
          <div className="flex flex-col gap-6 reveal-right reveal-delay-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold w-fit"
              style={{
                background: isDark ? "#2a1d3a" : "#EDE5F7",
                color: isDark ? "#c4b0e0" : "#51197e",
              }}
            >
              ⚙️ Option activable
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Un système de fidélité 100% personnalisable
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Activez cette option pour récompenser vos clients après une
              action. Vous choisissez le jeu, les gains, les probabilités et
              les actions à enchaîner. Tout est configurable.
            </p>

            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#2a2a2a] border border-gray-100 dark:border-[#3a3a3a] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-0.5">
                      {f.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group w-fit mt-2"
            >
              Activer les jeux interactifs
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
