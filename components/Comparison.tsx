"use client";

import { useTheme } from "./ThemeProvider";

const withoutItems = [
  { icon: "😤", text: "Un client mécontent publie un avis 1 étoile" },
  { icon: "📉", text: "Votre note Google chute publiquement" },
  { icon: "🕐", text: "Vous passez des heures à répondre manuellement" },
  { icon: "😶", text: "Les clients satisfaits repartent sans rien laisser" },
];

const withItems = [
  { icon: "🛡️", text: "Le client mécontent remplit un formulaire privé" },
  { icon: "⭐", text: "Seuls les avis positifs arrivent sur Google" },
  { icon: "🤖", text: "L'IA répond aux avis en votre nom, 24h/24" },
  { icon: "📈", text: "Votre note grimpe naturellement chaque semaine" },
];

export default function Comparison() {
  const { theme } = useTheme();

  return (
    <section className="py-16" style={{ background: theme === "dark" ? "#1e1525" : "#F3EEFA" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="reveal text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Avant / Après Reevup&apos;Avis
        </h2>
        <p
          className="reveal-fade reveal-delay-1 text-gray-600 dark:text-gray-300 text-center mb-14 text-lg"
        >
          La différence se voit dès la première semaine.
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* SANS */}
          <div
            className="reveal-left bg-white dark:bg-[#2a2a2a] rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-red-100 dark:border-red-900/30 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-300" />
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-lg">😰</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sans Reevup&apos;Avis</h3>
            </div>
            <div className="flex flex-col gap-5">
              {withoutItems.map((item, i) => (
                <div
                  key={item.text}
                  className={`reveal-left reveal-delay-${i + 2} flex items-start gap-4`}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AVEC */}
          <div
            className="reveal-right bg-white dark:bg-[#2a2a2a] rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-green-100 dark:border-green-900/30 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#51197e] to-[#7C3AED]" />
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: theme === "dark" ? "#2a1d3a" : "#EDE5F7" }}>🚀</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Avec Reevup&apos;Avis</h3>
            </div>
            <div className="flex flex-col gap-5">
              {withItems.map((item, i) => (
                <div
                  key={item.text}
                  className={`reveal-right reveal-delay-${i + 2} flex items-start gap-4`}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA sous la comparaison */}
        <div
          className="reveal reveal-delay-3 text-center mt-12"
        >
          <a href="#tarifs" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold text-base hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group">
            Passer du côté droit
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
