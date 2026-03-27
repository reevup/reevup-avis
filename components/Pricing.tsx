"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const plans = [
  {
    name: "Essentiel",
    monthly: 39,
    yearly: 31,
    desc: "1 établissement inclus",
    popular: false,
    saved: 96,
    features: [
      { text: "Dashboard Reevup'Avis", desc: "Pilotez votre e-réputation en un coup d'œil" },
      { text: "Intégration note Google", desc: "Suivez votre note directement depuis le dashboard" },
      { text: "Récapitulatif des avis reçus", desc: "Consultez tous vos avis au même endroit" },
      { text: "Tracking clics par étoile", desc: "Comprenez le comportement de vos clients" },
      { text: "Assistant IA Reevup'Avis", desc: "Répondez à vos avis en un clic" },
      { text: "Signature e-mail personnalisée", desc: "Redirections adaptées selon la satisfaction" },
      { text: "QR code dédié", desc: "Recueillez des avis facilement" },
      { text: "Mode kiosque", desc: "Sur tablette ou smartphone, sans app" },
    ],
    cta: "Démarrer l'essai gratuit",
  },
  {
    name: "Croissance",
    monthly: 79,
    yearly: 63,
    desc: "3 établissements inclus",
    popular: true,
    saved: 192,
    features: [
      { text: "Dashboard Reevup'Avis", desc: "Pilotez votre e-réputation en un coup d'œil" },
      { text: "Intégration note Google", desc: "Suivez votre note directement depuis le dashboard" },
      { text: "Récapitulatif des avis reçus", desc: "Consultez tous vos avis au même endroit" },
      { text: "Tracking clics par étoile", desc: "Comprenez le comportement de vos clients" },
      { text: "Assistant IA Reevup'Avis", desc: "Répondez à vos avis en un clic" },
      { text: "Signature e-mail personnalisée", desc: "Redirections adaptées selon la satisfaction" },
      { text: "QR code dédié", desc: "Recueillez des avis facilement" },
      { text: "Mode kiosque", desc: "Sur tablette ou smartphone, sans app" },
      { text: "3 établissements inclus", desc: "Gérez plusieurs points de vente" },
      { text: "Chat IA stratégique", desc: "Des conseils personnalisés pour améliorer votre note" },
      { text: "Support prioritaire", desc: "Réponse en moins de 4h" },
    ],
    cta: "Démarrer l'essai gratuit",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const VISIBLE_COUNT = 4;

function PlanCard({ p, annual }: { p: typeof plans[0]; annual: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const visibleFeatures = expanded ? p.features : p.features.slice(0, VISIBLE_COUNT);
  const hasMore = p.features.length > VISIBLE_COUNT;

  return (
    <motion.div variants={item}
      className={`rounded-2xl p-6 sm:p-8 flex flex-col relative bg-white dark:bg-[#2a2a2a] border-2 transition-all ${
        p.popular ? "border-[#51197e] shadow-xl shadow-[#51197e]/10" : "border-gray-100 dark:border-[#3a3a3a] shadow-sm hover:shadow-lg"
      }`}
    >
      {p.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: "#51197e" }}>
          Le plus populaire
        </span>
      )}

      <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{p.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{p.desc}</p>

      <div className="mb-2">
        {p.monthly ? (
          <>
            <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
              {annual ? p.yearly : p.monthly}€
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">/mois TTC</span>
          </>
        ) : (
          <span className="text-3xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
            Sur devis
          </span>
        )}
      </div>

      {annual && p.saved && (
        <p className="text-xs font-semibold text-[#059669] mb-6">
          Économisez {p.saved}€ par an
        </p>
      )}
      {!annual && p.monthly && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
          ou {p.yearly}€/mois en annuel
        </p>
      )}
      {!p.monthly && <div className="mb-6" />}

      <ul className="flex flex-col gap-3 mb-4 flex-1">
        {visibleFeatures.map((f) => (
          <li key={f.text} className="flex items-start gap-2.5 text-sm">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
            <div>
              <span className="text-gray-900 dark:text-white font-medium">{f.text}</span>
              {f.desc && <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 leading-snug">{f.desc}</p>}
            </div>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#51197e] dark:text-[#c4b0e0] text-xs font-semibold mb-6 flex items-center gap-1 hover:underline outline-none focus:outline-none"
        >
          {expanded ? "Voir moins" : `Voir les ${p.features.length - VISIBLE_COUNT} autres fonctionnalités`}
          <span className="transition-transform" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}>↓</span>
        </button>
      )}

      <a href="#"
        className={`text-center py-3.5 rounded-full font-bold text-sm transition-all group flex items-center justify-center gap-2 ${
          p.popular
            ? "text-white shadow-lg shadow-[#51197e]/25 hover:shadow-xl"
            : "border-2 border-[#51197e] text-[#51197e] dark:text-[#c4b0e0] hover:bg-[#51197e] hover:text-white"
        }`}
        style={p.popular ? { background: "#51197e" } : {}}
      >
        {p.cta}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="tarifs" className="py-16" style={{ background: "linear-gradient(to bottom, var(--bg-alt), var(--bg-main) 15%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Des tarifs simples et transparents
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-center mb-10 text-lg"
        >
          14 jours d&apos;essai gratuit, annulez à tout moment.
        </motion.p>

        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-semibold ${!annual ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>Mensuel</span>
          <button onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full transition-colors outline-none focus:outline-none"
            style={{ background: annual ? "#51197e" : (isDark ? "#3a3a3a" : "#e5e7eb") }}>
            <span className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform"
              style={{ left: annual ? "calc(100% - 26px)" : "2px" }} />
          </button>
          <span className={`text-sm font-semibold ${annual ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>
            Annuel <span className="text-[#51197e] dark:text-[#c4b0e0] text-xs font-bold ml-1 px-2 py-0.5 rounded-full" style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}>-20%</span>
          </span>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 items-start gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {plans.map((p) => (
            <PlanCard key={p.name} p={p} annual={annual} />
          ))}
        </motion.div>

        {/* Pack fidélité option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 rounded-2xl border-2 border-dashed border-[#51197e]/30 dark:border-[#51197e]/20 dark:border-[#9371d1]/30 bg-[#F9F7FC] dark:bg-[#222222]">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}>
              <span className="text-2xl">🎁</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h4 className="font-bold text-gray-900 dark:text-white">Pack Fidélité</h4>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#51197e] dark:text-[#c4b0e0]" style={{ background: isDark ? "#2a1d3a" : "#EDE5F7" }}>Option</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Roulette de récompenses et bons de réduction pour fidéliser vos clients.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <span className="text-2xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: "'Neue Machina', sans-serif" }}>+10€</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">/mois</span>
            </div>
          </div>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500 dark:text-gray-400"
        >
          <span className="flex items-center gap-1.5">🔒 Paiement sécurisé Stripe</span>
          <span className="flex items-center gap-1.5">⚡ Activation en 3 min</span>
          <span className="flex items-center gap-1.5">🔄 Résiliable en 1 clic</span>
          <span className="flex items-center gap-1.5">📞 Support réactif</span>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14"
        >
          {[
            { icon: "🛡️", title: "100% conforme RGPD", desc: "Données hébergées en France. Vous restez propriétaire de tout." },
            { icon: "🎁", title: "14 jours d'essai gratuit", desc: "Testez toutes les fonctionnalités. Annulez à tout moment." },
            { icon: "🔄", title: "Résiliable en 1 clic", desc: "Aucun engagement. Arrêtez quand vous voulez." },
            { icon: "💬", title: "Support réactif", desc: "Une vraie équipe française qui répond en moins de 24h." },
          ].map(g => (
            <div key={g.title} className="text-center p-5 rounded-xl border border-gray-100 dark:border-[#3a3a3a] bg-gray-50 dark:bg-[#222222]">
              <span className="text-2xl mb-2 block">{g.icon}</span>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{g.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{g.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
