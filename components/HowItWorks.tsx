"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Créez votre compte",
    desc: "Inscrivez-vous et connectez votre fiche Google My Business en quelques clics.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: "Partagez votre lien",
    desc: "Envoyez votre lien personnalisé ou affichez le QR code dans votre établissement.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Les avis se trient tout seuls",
    desc: "Les clients satisfaits publient sur Google, les mécontents vous contactent en privé.",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function HowItWorks() {
  const { theme } = useTheme();

  return (
    <section className="py-16" style={{ background: theme === "dark" ? "linear-gradient(to bottom, #222222, #1e1525 25%)" : "linear-gradient(to bottom, #F9F7FC, #F3EAFA 25%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          En 3 minutes, c&apos;est en place
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-center mb-16 text-lg"
        >
          Simple comme bonjour.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((s) => (
            <motion.div key={s.num} variants={item} className="relative p-8 bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-sm border border-white dark:border-[#3a3a3a] hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6" style={{ background: "#51197e" }}>
                {s.icon}
              </div>
              <span className="text-[#51197e] dark:text-[#c4b0e0] font-bold text-xs tracking-widest mb-3 block uppercase">
                Étape {s.num}
              </span>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
