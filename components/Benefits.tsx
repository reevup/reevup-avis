"use client";

import { useTheme } from "./ThemeProvider";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Récoltez 9x plus d'avis",
    desc: "En sollicitant vos clients au bon moment, vous multipliez naturellement le nombre d'avis récoltés sur Google.",
    color: "#FEF3C7",
    darkColor: "#332810",
    iconColor: "#D97706",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Améliorez votre référencement",
    desc: "Les moteurs de recherche valorisent les contenus générés par les utilisateurs. Plus d'avis = meilleur SEO local.",
    color: "#EDE9FE",
    darkColor: "#2a1d3a",
    iconColor: "#7C3AED",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Augmentez votre chiffre d'affaires",
    desc: "Selon Harvard Business School, une étoile supplémentaire sur Google peut générer jusqu'à +9% de CA.",
    color: "#DBEAFE",
    darkColor: "#1a2540",
    iconColor: "#2563EB",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Arrêtez de vous épuiser",
    desc: "Reevup'Avis s'occupe de tout : collecte, filtrage, réponse IA. Concentrez-vous sur votre coeur de métier.",
    color: "#FEE2E2",
    darkColor: "#331a1a",
    iconColor: "#DC2626",
  },
];

export default function Benefits() {
  const { theme } = useTheme();

  return (
    <section className="py-16" style={{ background: theme === "dark" ? "#1e1525" : "#F3EEFA" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span className="text-xs font-bold text-[#51197e] dark:text-[#c4b0e0] uppercase tracking-widest mb-4 block">Bénéfices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              Un investissement{" "}
              <span className="text-[#51197e] dark:text-[#c4b0e0]">rentable et intelligent</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href="#tarifs" className="px-7 py-3.5 rounded-full bg-[#51197e] text-white font-semibold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/25 group flex items-center gap-2">
                Essayer gratuitement
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#demo" className="px-7 py-3.5 rounded-full border-2 border-[#51197e]/20 dark:border-[#9371d1]/30 text-[#51197e] dark:text-[#c4b0e0] font-semibold hover:bg-white dark:hover:bg-[#2a2a2a] transition-all flex items-center gap-2">
                Demander une démo
              </a>
            </div>
          </div>

          {/* Right - Grid */}
          <div className="stagger-container reveal-fade grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title}
                className="stagger-item bg-white dark:bg-[#2a2a2a] rounded-2xl p-7 shadow-sm border border-gray-100 dark:border-[#3a3a3a] hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: theme === "dark" ? b.darkColor : b.color, color: b.iconColor }}>
                  {b.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
