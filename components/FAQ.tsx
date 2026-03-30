"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const faqs = [
  { q: "Est-ce légal de filtrer les avis ?", a: "Oui, absolument. Vous ne supprimez aucun avis. Vous proposez simplement un formulaire de contact aux clients mécontents. Les clients satisfaits sont libres de publier (ou non) un avis sur Google." },
  { q: "Comment l'IA répond-elle aux avis ?", a: "Notre agent IA analyse le contenu de l'avis et génère une réponse professionnelle et personnalisée. Vous pouvez choisir le mode automatique (publication immédiate) ou le mode validation (vous approuvez avant publication)." },
  { q: "Faut-il une tablette dédiée ?", a: "Non, le mode kiosque fonctionne sur n'importe quelle tablette ou smartphone. Il suffit d'ouvrir le lien dans un navigateur. Pas d'application à installer." },
  { q: "Combien de temps pour l'installation ?", a: "3 minutes chrono. Créez votre compte, connectez votre fiche Google, et vous recevez immédiatement votre lien et QR code personnalisé." },
  { q: "Y a-t-il un essai gratuit ?", a: "Oui, 14 jours d'essai gratuit. Vous avez accès à toutes les fonctionnalités du plan Pro pour tester en conditions réelles." },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="border-b border-gray-100 dark:border-[#3a3a3a] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
        <span className="font-semibold text-gray-900 dark:text-white pr-4 group-hover:text-[#51197e] dark:text-[#c4b0e0] transition-colors">{faq.q}</span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all text-sm font-bold"
          style={{ background: open ? "#51197e" : (isDark ? "#2a1d3a" : "#EDE5F7"), color: open ? "#fff" : (isDark ? "#c4b0e0" : "#51197e"), transform: open ? "rotate(45deg)" : "rotate(0)" }}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed pb-6">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Questions fréquentes
        </h2>
        <div className="reveal bg-white dark:bg-[#2a2a2a] rounded-2xl border border-gray-100 dark:border-[#3a3a3a] shadow-lg p-6 md:p-10">
          {faqs.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </section>
  );
}
