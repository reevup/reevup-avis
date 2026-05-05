"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const useCases = [
  {
    icon: "🙏",
    title: "Remerciement post-visite",
    desc: "Un message le lendemain pour fidéliser à chaud, juste après leur passage.",
  },
  {
    icon: "🎂",
    title: "Anniversaire client",
    desc: "Une promo personnalisée le jour J, en automatique chaque année.",
  },
  {
    icon: "📅",
    title: "Promo saisonnière",
    desc: "Saint-Valentin, Fête des mères, été. Programmez en quelques clics.",
  },
  {
    icon: "🔁",
    title: "Relance des inactifs",
    desc: "Réveillez les clients qui ne sont pas revenus depuis 60 jours.",
  },
];

export default function Campaigns() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<"email" | "sms">("email");

  const stats =
    activeTab === "email"
      ? [
          { value: "489", label: "Emails collectés", icon: "📧" },
          { value: "12", label: "Campagnes envoyées", icon: "🚀" },
          { value: "5 847", label: "Emails délivrés", icon: "✉️" },
        ]
      : [
          { value: "362", label: "Téléphones collectés", icon: "📱" },
          { value: "8", label: "Campagnes envoyées", icon: "🚀" },
          { value: "3 201", label: "SMS délivrés", icon: "💬" },
        ];

  return (
    <section
      id="campagnes"
      className="py-16 bg-white dark:bg-[#1a1a1a]"
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
            📨 Campagnes marketing
          </span>
        </div>

        <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          Transformez vos avis en clients fidèles
        </h2>
        <p className="reveal-fade reveal-delay-1 text-gray-600 dark:text-gray-300 text-center mb-10 text-lg max-w-2xl mx-auto">
          Récupérez emails et téléphones via vos formulaires d&apos;avis, puis
          envoyez promos, remerciements et relances en quelques clics.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-full p-1"
            style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}
          >
            <button
              onClick={() => setActiveTab("email")}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all outline-none focus:outline-none"
              style={
                activeTab === "email"
                  ? { background: "#51197e", color: "#fff" }
                  : { color: isDark ? "#c4b0e0" : "#51197e" }
              }
            >
              📧 Email
            </button>
            <button
              onClick={() => setActiveTab("sms")}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all outline-none focus:outline-none"
              style={
                activeTab === "sms"
                  ? { background: "#51197e", color: "#fff" }
                  : { color: isDark ? "#c4b0e0" : "#51197e" }
              }
            >
              💬 SMS
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: device mockup with template */}
          <div className="reveal-left flex justify-center">
            <AnimatePresence mode="wait">
              {activeTab === "email" ? (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-[#3a3a3a]"
                >
                  <div className="bg-gray-100 dark:bg-[#222222] p-3 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      📧 Boîte de réception
                    </span>
                  </div>
                  <div className="bg-white dark:bg-[#2a2a2a] p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, #51197e 0%, #7C3AED 100%)",
                        }}
                      >
                        B
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold dark:text-white">
                          Bistrot Saint-Germain
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          contact@bistrot-sg.fr → vous
                        </p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg font-bold mb-3 dark:text-white">
                      Merci Marie, profitez de -10% 🎉
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
                      <p>Bonjour Marie,</p>
                      <p>
                        Merci pour votre visite chez Bistrot Saint-Germain !
                        Nous avons été ravis de vous accueillir.
                      </p>
                      <p>
                        En cadeau, voici un code promo de <b>-10%</b> sur votre
                        prochaine venue, valable jusqu&apos;au 30 mai.
                      </p>
                      <div
                        className="rounded-xl p-4 text-center"
                        style={{
                          background: isDark ? "#2a1d3a" : "#EDE5F7",
                        }}
                      >
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Votre code
                        </p>
                        <p className="font-mono font-bold text-[#51197e] dark:text-[#c4b0e0] text-lg tracking-wider">
                          MERCI10
                        </p>
                      </div>
                      <p>À très bientôt,</p>
                      <p className="font-medium">L&apos;équipe Bistrot Saint-Germain</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="sms"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phone mockup */}
                  <div
                    className="w-72 h-[480px] rounded-[40px] p-3 shadow-2xl border-[6px]"
                    style={{
                      background: isDark ? "#0d0d0d" : "#1a1a1a",
                      borderColor: isDark ? "#222222" : "#2a2a2a",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-[28px] overflow-hidden p-4 relative flex flex-col"
                      style={{
                        background: isDark
                          ? "linear-gradient(180deg, #1a1a1a, #0d0d0d)"
                          : "linear-gradient(180deg, #f3f4f6, #e5e7eb)",
                      }}
                    >
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black" />
                      <div className="text-center pt-6 mb-4">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                          Bistrot SG
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500">
                          il y a 2 min · SMS
                        </p>
                      </div>
                      <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl rounded-tl-md p-3.5 shadow-md mb-2">
                        <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">
                          Marie, merci pour votre visite chez Bistrot
                          Saint-Germain ! 🍷 Profitez de <b>-10%</b> sur votre
                          prochaine venue avec le code{" "}
                          <span className="font-mono font-bold text-[#51197e] dark:text-[#c4b0e0]">
                            MERCI10
                          </span>{" "}
                          → reev.up/p/m10
                        </p>
                      </div>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 ml-1">
                        148 caractères · 1 SMS
                      </p>
                      <div className="flex-1" />
                      <div className="flex items-center gap-2 bg-white dark:bg-[#2a2a2a] rounded-full px-3 py-2 shadow-sm">
                        <div className="flex-1 text-[11px] text-gray-400 dark:text-gray-500">
                          Message
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#51197e] flex items-center justify-center text-white text-xs">
                          ↑
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: stats + use cases */}
          <div className="reveal-right reveal-delay-1 flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-3 sm:p-4 border border-gray-100 dark:border-[#3a3a3a] shadow-sm text-center"
                >
                  <p className="text-lg sm:text-xl">{s.icon}</p>
                  <p
                    className="text-xl sm:text-2xl font-extrabold mt-1 text-[#51197e] dark:text-[#c4b0e0]"
                    style={{ fontFamily: "'Neue Machina', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Vos contacts, en pilote automatique
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Un système complet de campagnes email et SMS, alimenté
              automatiquement par vos formulaires d&apos;avis. Crédits prépayés,
              templates prêts à l&apos;emploi, statistiques en temps réel.
            </p>

            <div className="flex flex-col gap-3">
              {useCases.map((u) => (
                <div
                  key={u.title}
                  className="flex gap-3 p-4 rounded-2xl bg-white dark:bg-[#2a2a2a] border border-gray-100 dark:border-[#3a3a3a] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: isDark ? "#2a1d3a" : "#EDE5F7",
                    }}
                  >
                    {u.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-0.5">
                      {u.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {u.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group w-fit"
            >
              Lancer ma première campagne
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
