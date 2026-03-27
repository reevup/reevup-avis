"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const negativeSteps = [
  { icon: "🛡️", title: "Avis intercepté", desc: "L'avis négatif ne sera jamais publié sur Google." },
  { icon: "📩", title: "Formulaire privé", desc: "Le client reçoit un formulaire de contact envoyé directement au gérant." },
  { icon: "🤝", title: "Résolution en privé", desc: "Vous réglez le problème et gardez votre client. Votre note reste intacte." },
];

const positiveSteps = [
  { icon: "✅", title: "Client satisfait détecté", desc: "Note de 4 ou 5 étoiles = redirection automatique." },
  { icon: "🔗", title: "Redirection Google", desc: "Le client est envoyé sur votre fiche Google pour publier son avis." },
  { icon: "🤖", title: "Réponse IA publiée", desc: "En moins de 30 secondes, une réponse personnalisée est publiée en votre nom." },
];

export default function InteractiveDemo() {
  const [stars, setStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const isPositive = stars >= 4;
  const isNegative = stars > 0 && stars < 4;
  const steps = isPositive ? positiveSteps : negativeSteps;

  return (
    <section id="simulation" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-bold text-[#51197e] uppercase tracking-widest mb-4 block">Démo interactive</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testez par vous-même
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Imaginez qu&apos;un client vient de manger dans votre restaurant. Quelle note donnerait-il ?
          </p>
        </motion.div>

        {/* Star selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center gap-4 my-12"
        >
          <p className="text-sm font-semibold text-gray-500">Cliquez sur une note :</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                onClick={() => setStars(i)}
                onMouseEnter={() => setHoveredStar(i)}
                onMouseLeave={() => setHoveredStar(0)}
                className="transition-all duration-150 hover:scale-125"
              >
                <span className={`text-5xl cursor-pointer ${
                  i <= (hoveredStar || stars) ? "text-yellow-400" : "text-gray-200"
                } transition-colors`}>
                  ★
                </span>
              </button>
            ))}
          </div>
          {stars > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium"
              style={{ color: isPositive ? "#059669" : "#DC2626" }}
            >
              {isPositive ? "Client satisfait !" : "Client mécontent..."}
            </motion.p>
          )}
        </motion.div>

        {/* Result */}
        <AnimatePresence mode="wait">
          {stars > 0 && (
            <motion.div
              key={isPositive ? "positive" : "negative"}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring", damping: 20 }}
            >
              {/* Header */}
              <div className={`rounded-t-2xl p-4 sm:p-5 text-center text-white font-bold text-sm sm:text-base ${
                isPositive ? "bg-gradient-to-r from-[#51197e] to-[#7C3AED]" : "bg-gradient-to-r from-red-500 to-red-400"
              }`}>
                {isPositive
                  ? "⭐ Reevup'Avis redirige ce client vers Google"
                  : "🛡️ Reevup'Avis protège votre note Google"
                }
              </div>

              {/* Steps */}
              <div className="bg-white rounded-b-2xl border-2 border-t-0 p-4 sm:p-6 md:p-8 shadow-xl"
                style={{ borderColor: isPositive ? "#51197e" : "#FCA5A5" }}>
                <div className="flex flex-col gap-6">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ background: isPositive ? "#51197e" : "#EF4444" }}>
                          {i + 1}
                        </span>
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{step.title}</p>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Result banner */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-8 p-4 rounded-xl text-center"
                  style={{
                    background: isPositive ? "#EDE5F7" : "#FEF2F2",
                    color: isPositive ? "#51197e" : "#DC2626",
                  }}
                >
                  <p className="font-bold text-sm">
                    {isPositive
                      ? "✓ Résultat : +1 avis 5 étoiles sur Google avec réponse pro automatique"
                      : "✓ Résultat : votre note Google reste intacte, le problème est réglé en privé"
                    }
                  </p>
                </motion.div>

                {/* CTA */}
                <div className="text-center mt-6">
                  <a href="#tarifs" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-lg shadow-[#51197e]/20 group text-xs sm:text-sm">
                    <span className="hidden sm:inline">Mettre ça en place pour mon établissement</span>
                    <span className="sm:hidden">Essayer maintenant</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {stars === 0 && (
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-center py-16 rounded-2xl border-2 border-dashed border-gray-200"
          >
            <p className="text-gray-400 text-lg">👆 Cliquez sur une étoile pour lancer la simulation</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
