"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #51197e 0%, #7C3AED 100%)" }}>
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 400" preserveAspectRatio="none">
        <path d="M0,160 C320,300,420,100,740,160 C1060,220,1160,80,1440,160 L1440,400 L0,400Z" fill="rgba(255,255,255,0.15)" />
        <path d="M0,220 C280,340,480,140,720,220 C960,300,1200,120,1440,220 L1440,400 L0,400Z" fill="rgba(255,255,255,0.08)" />
      </svg>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6"
          style={{ color: "#ffffff" }}
        >
          Prêt à transformer vos avis Google ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-xl mb-4 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Lancez votre essai gratuit en moins de 3 minutes. Sans engagement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm mb-10"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <span>✓ 14 jours gratuits</span>
          <span>✓ Activation en 3 min</span>
          <span>✓ Résiliable en 1 clic</span>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          href="#tarifs"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#51197e] dark:text-[#c4b0e0] font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-100 transition-all shadow-xl group"
        >
          Démarrer l&apos;essai gratuit
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>
      </div>
    </section>
  );
}
