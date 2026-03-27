"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const stats = [
  { value: "72%", label: "des consommateurs", desc: "lisent les avis en ligne avant d'acheter un produit ou un service.", source: "Consumer Survey 2024" },
  { value: "93%", label: "des consommateurs", desc: "déclarent que les avis influencent leurs décisions d'achat.", source: "Chatmeter" },
  { value: "52%", label: "des consommateurs", desc: "recherchent une note moyenne d'au moins 4/5 quand ils évaluent un commerce local.", source: "Chatmeter" },
  { value: "+270%", label: "de chances d'achat", desc: "avec 5 avis client, les probabilités qu'un client achète sont 270% supérieures qu'avec 0 avis.", source: "Medill Spiegel Research Center" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Stats() {
  const { theme } = useTheme();
  return (
    <section className="py-16" style={{ background: theme === "dark" ? "linear-gradient(to bottom, #1a1a1a, #222222 30%)" : "linear-gradient(to bottom, #ffffff, #F9F7FC 30%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style={{ background: theme === "dark" ? "#2a1d3a" : "#EDE5F7", color: theme === "dark" ? "#c4b0e0" : "#51197e" }}>
            👤 Et vous ?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white max-w-3xl mx-auto"
        >
          Vous faites du bon travail, vos clients sont satisfaits, mais...
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-center mb-14 text-lg"
        >
          ...ils ne pensent pas toujours à vous laisser un avis ?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white dark:bg-[#2a2a2a] rounded-3xl shadow-xl border border-gray-100 dark:border-[#3a3a3a] p-8 md:p-12"
        >
          <p className="text-center text-gray-800 dark:text-gray-100 font-semibold text-lg mb-10">
            Résultat : vous vous retrouvez avec trop peu d&apos;avis Google, alors que :
          </p>

          <motion.div variants={container} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-8 md:gap-10"
          >
            {stats.map((s) => (
              <motion.div key={s.value} variants={item}>
                <p className="text-gray-900 dark:text-white mb-1">
                  <span className="text-2xl font-extrabold" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{s.value}</span>{" "}
                  <span className="font-bold">{s.label}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-1">{s.desc}</p>
                <p className="text-[#51197e] dark:text-[#c4b0e0] text-xs font-medium">{s.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="#tarifs" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group">
            Changer la donne maintenant
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
