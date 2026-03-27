"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="py-16" style={{ background: "#F3EEFA" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
        >
          Avant / Après Reevup&apos;Avis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-600 text-center mb-14 text-lg"
        >
          La différence se voit dès la première semaine.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* SANS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-red-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-300" />
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-lg">😰</span>
              <h3 className="text-xl font-bold text-gray-900">Sans Reevup&apos;Avis</h3>
            </div>
            <div className="flex flex-col gap-5">
              {withoutItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AVEC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-green-100 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#51197e] to-[#7C3AED]" />
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: "#EDE5F7" }}>🚀</span>
              <h3 className="text-xl font-bold text-gray-900">Avec Reevup&apos;Avis</h3>
            </div>
            <div className="flex flex-col gap-5">
              {withItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA sous la comparaison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#tarifs" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold text-base hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group">
            Passer du côté droit
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
