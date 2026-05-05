"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

type Sector = "restaurant" | "hotel" | "salon" | "spa";

type Competitor = {
  name: string;
  rating: number;
  reviews: number;
  position: number;
  isYou?: boolean;
};

type SectorEntry = {
  competitors: Competitor[];
  objective: {
    gap: string;
    competitor: string;
    duration: string;
    weekly: string;
  };
};

const sectorData: Record<Sector, SectorEntry> = {
  restaurant: {
    competitors: [
      { name: "Café de Flore", rating: 4.5, reviews: 4120, position: 1 },
      { name: "Le Comptoir du Marais", rating: 4.6, reviews: 1240, position: 2 },
      { name: "Brasserie Lipp", rating: 4.4, reviews: 3850, position: 3 },
      { name: "Le Procope", rating: 4.3, reviews: 2190, position: 4 },
      { name: "Bistrot Saint-Germain (vous)", rating: 4.2, reviews: 487, position: 5, isYou: true },
    ],
    objective: { gap: "+312 avis 5★", competitor: "Café de Flore", duration: "8 semaines", weekly: "~40 avis/semaine" },
  },
  hotel: {
    competitors: [
      { name: "Hôtel Lutetia", rating: 4.4, reviews: 2840, position: 1 },
      { name: "Hôtel Bel Ami", rating: 4.5, reviews: 1840, position: 2 },
      { name: "L'Hôtel Saint-Germain", rating: 4.7, reviews: 920, position: 3 },
      { name: "Hôtel d'Angleterre", rating: 4.6, reviews: 720, position: 4 },
      { name: "Hôtel des Saints-Pères (vous)", rating: 4.2, reviews: 287, position: 5, isYou: true },
    ],
    objective: { gap: "+186 avis 5★", competitor: "Hôtel Lutetia", duration: "6 semaines", weekly: "~32 avis/semaine" },
  },
  salon: {
    competitors: [
      { name: "David Lucas Saint-Germain", rating: 4.6, reviews: 1240, position: 1 },
      { name: "L'Atelier Coiffure Rive Gauche", rating: 4.5, reviews: 850, position: 2 },
      { name: "Christophe-Nicolas Biot", rating: 4.7, reviews: 540, position: 3 },
      { name: "Studio Saint-Sulpice", rating: 4.4, reviews: 380, position: 4 },
      { name: "Salon La Coupe (vous)", rating: 4.2, reviews: 156, position: 5, isYou: true },
    ],
    objective: { gap: "+148 avis 5★", competitor: "David Lucas", duration: "5 semaines", weekly: "~30 avis/semaine" },
  },
  spa: {
    competitors: [
      { name: "Spa du Lutetia", rating: 4.6, reviews: 980, position: 1 },
      { name: "Anne Sémonin Institut", rating: 4.5, reviews: 720, position: 2 },
      { name: "L'Apothicaire Saint-Germain", rating: 4.7, reviews: 410, position: 3 },
      { name: "La Sultane de Saba", rating: 4.4, reviews: 320, position: 4 },
      { name: "Spa Évasion (vous)", rating: 4.2, reviews: 142, position: 5, isYou: true },
    ],
    objective: { gap: "+124 avis 5★", competitor: "Spa du Lutetia", duration: "5 semaines", weekly: "~25 avis/semaine" },
  },
};

export default function CompetitiveWatch() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  const [sector, setSector] = useState<Sector>("restaurant");

  const current = sectorData[sector];

  const handleSearch = () => {
    if (searching) return;
    setSearching(true);
    setSearched(false);
    setTimeout(() => {
      setSearching(false);
      setSearched(true);
    }, 1100);
  };

  return (
    <section
      id="veille"
      className="py-16"
      style={{ background: isDark ? "#1e1525" : "#F3EEFA" }}
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
            📊 Veille concurrentielle
          </span>
        </div>

        <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          Suivez votre note Google face aux concurrents locaux
        </h2>
        <p className="reveal-fade reveal-delay-1 text-gray-600 dark:text-gray-300 text-center mb-14 text-lg max-w-2xl mx-auto">
          Comparez votre établissement aux acteurs de votre secteur autour de
          vous, et obtenez un objectif chiffré pour les dépasser.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT: form + ranking */}
          <div className="reveal-left bg-white dark:bg-[#2a2a2a] rounded-3xl shadow-xl border border-gray-100 dark:border-[#3a3a3a] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-5 h-5 text-[#51197e] dark:text-[#c4b0e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Configurez votre établissement
              </h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Entrez l&apos;adresse de votre établissement pour trouver vos
              concurrents à proximité.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value="12 Rue de Buci, 75006 Paris"
                readOnly
                className="flex-1 px-4 py-3 rounded-2xl bg-gray-50 dark:bg-[#222222] border border-gray-200 dark:border-[#3a3a3a] text-sm text-gray-700 dark:text-gray-200 outline-none cursor-not-allowed"
                aria-label="Adresse de votre établissement (aperçu démo)"
              />
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value as Sector)}
                className="px-4 py-3 rounded-2xl bg-gray-50 dark:bg-[#222222] border border-gray-200 dark:border-[#3a3a3a] text-sm text-gray-700 dark:text-gray-200 outline-none focus:border-[#51197e] dark:focus:border-[#9371d1] transition cursor-pointer"
                aria-label="Type d'établissement"
              >
                <option value="restaurant">Restaurant</option>
                <option value="hotel">Hôtel</option>
                <option value="salon">Salon de coiffure</option>
                <option value="spa">Spa</option>
              </select>
            </div>

            <button
              onClick={handleSearch}
              disabled={searching}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#51197e] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 hover:bg-[#6B21A8] transition shadow-md"
            >
              {searching ? (
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              )}
              {searching ? "Localisation en cours..." : "Localiser et rechercher"}
            </button>

            <AnimatePresence>
              {searched && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-7 pt-6 border-t border-gray-100 dark:border-[#3a3a3a]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Classement local · Paris 6<sup>e</sup>
                    </p>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      5 concurrents trouvés
                    </span>
                  </div>
                  <div key={sector} className="flex flex-col gap-2.5">
                    {current.competitors.map((c, i) => (
                      <motion.div
                        key={c.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * i + 0.15, duration: 0.4 }}
                        className={`flex items-center gap-3 p-3 rounded-xl ${
                          c.isYou
                            ? "border-2 border-[#51197e] dark:border-[#9371d1]"
                            : "border border-gray-100 dark:border-[#3a3a3a]"
                        }`}
                        style={{
                          background: c.isYou
                            ? isDark
                              ? "#2a1d3a"
                              : "#EDE5F7"
                            : isDark
                            ? "#222222"
                            : "#F9F7FC",
                        }}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            c.isYou
                              ? "bg-[#51197e] text-white"
                              : "bg-white dark:bg-[#2a2a2a] text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-[#3a3a3a]"
                          }`}
                        >
                          {c.position}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-semibold truncate ${
                              c.isYou
                                ? "text-[#51197e] dark:text-[#c4b0e0]"
                                : "text-gray-800 dark:text-gray-100"
                            }`}
                          >
                            {c.name}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              {c.rating}
                            </span>
                            <span>•</span>
                            <span>
                              {c.reviews.toLocaleString("fr-FR")} avis
                            </span>
                          </div>
                        </div>
                        <div className="hidden sm:block w-24 h-2 rounded-full bg-gray-200 dark:bg-[#3a3a3a] overflow-hidden flex-shrink-0">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(c.rating / 5) * 100}%` }}
                            transition={{
                              duration: 0.7,
                              delay: 0.08 * i + 0.4,
                              ease: "easeOut",
                            }}
                            className="h-full"
                            style={{
                              background: c.isYou
                                ? "#51197e"
                                : "linear-gradient(90deg, #9371d1, #7C3AED)",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: objective */}
          <div className="reveal-right reveal-delay-1 flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold w-fit"
              style={{
                background: isDark ? "#2a1d3a" : "#EDE5F7",
                color: isDark ? "#c4b0e0" : "#51197e",
              }}
            >
              🎯 Objectif personnalisé
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Combien d&apos;avis pour passer en tête de votre quartier ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Reevup&apos;Avis calcule l&apos;écart exact qui vous sépare du
              leader local, et estime la durée pour le rattraper en s&apos;appuyant
              sur votre fréquentation.
            </p>

            <div
              className="rounded-3xl p-6 md:p-8 text-white shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #51197e 0%, #7C3AED 100%)",
              }}
            >
              <p className="text-sm text-white/70 mb-2">
                Pour atteindre la 1<sup>re</sup> position locale :
              </p>
              <p
                className="text-4xl md:text-5xl font-extrabold mb-1 leading-none"
                style={{ fontFamily: "'Neue Machina', sans-serif" }}
              >
                {current.objective.gap}
              </p>
              <p className="text-sm text-white/80 mb-6">
                à collecter pour dépasser <b>{current.objective.competitor}</b>
              </p>
              <div className="border-t border-white/20 pt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/70 mb-0.5">Estimation</p>
                  <p className="text-lg font-bold">{current.objective.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-0.5">
                    Avec Reevup&apos;Avis
                  </p>
                  <p className="text-lg font-bold">{current.objective.weekly}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "+9×", label: "plus d'avis collectés" },
                { value: "+0,4★", label: "en moyenne en 6 mois" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-4 border border-gray-100 dark:border-[#3a3a3a] shadow-sm"
                >
                  <p
                    className="text-2xl font-extrabold text-[#51197e] dark:text-[#c4b0e0]"
                    style={{ fontFamily: "'Neue Machina', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group w-fit"
            >
              Activer la veille concurrentielle
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
