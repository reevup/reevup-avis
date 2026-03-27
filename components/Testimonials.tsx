"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  {
    id: "negative",
    tab: "Client mécontent",
    emoji: "😤",
    stars: 2,
    review: "Service très lent, on a attendu 45 minutes pour un plat. Déçu.",
    steps: [
      { icon: "🛡️", label: "Reevup'avis intercepte", desc: "L'avis négatif ne sera jamais publié sur Google." },
      { icon: "📩", label: "Formulaire privé envoyé", desc: "Le client remplit un formulaire de contact envoyé directement au gérant." },
      { icon: "🤝", label: "Vous réglez le problème", desc: "Vous contactez le client, proposez un geste commercial. Il revient satisfait." },
    ],
    result: "Résultat : votre note Google reste intacte, et vous gardez votre client.",
    resultColor: "#059669",
  },
  {
    id: "positive",
    tab: "Client satisfait",
    emoji: "😍",
    stars: 5,
    review: "Excellent repas ! Le serveur était aux petits soins. Je recommande !",
    steps: [
      { icon: "⭐", label: "Reevup'avis détecte la satisfaction", desc: "Note de 4 ou 5 étoiles = client satisfait." },
      { icon: "🔗", label: "Redirection Google", desc: "Le client est redirigé vers votre fiche Google pour publier son avis." },
      { icon: "🤖", label: "L'IA répond automatiquement", desc: "Une réponse personnalisée et professionnelle est publiée en votre nom." },
    ],
    result: "Résultat : +1 avis 5 étoiles sur Google avec réponse pro en 30 secondes.",
    resultColor: "#51197e",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section className="py-24" style={{ background: "#F3EAFA" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
        >
          Voyez Reevup&apos;avis en action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center mb-12 text-lg"
        >
          Simulez un scénario réel pour comprendre comment ça marche.
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-2 sm:gap-3 mb-10"
        >
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                active === i
                  ? "bg-[#51197e] text-white shadow-lg shadow-[#51197e]/20"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span className="mr-2">{s.emoji}</span>{s.tab}
            </button>
          ))}
        </motion.div>

        {/* Scenario Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Fake Review */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">
                  JD
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Jean Dupont</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`text-sm ${j < scenario.stars ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{scenario.review}&rdquo;</p>
            </div>

            {/* Steps */}
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold text-[#51197e] uppercase tracking-widest mb-6">Ce qui se passe ensuite</p>
              <div className="flex flex-col gap-5">
                {scenario.steps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.15 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="w-8 h-8 rounded-full bg-[#EDE5F7] flex items-center justify-center text-sm font-bold text-[#51197e]">
                        {i + 1}
                      </span>
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{step.label}</p>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 p-4 rounded-xl text-sm font-semibold text-center"
                style={{ background: scenario.id === "negative" ? "#ECFDF5" : "#EDE5F7", color: scenario.resultColor }}
              >
                ✓ {scenario.result}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="#tarifs" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group">
            Essayer avec mon établissement
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
