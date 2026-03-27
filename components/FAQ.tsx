"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Est-ce légal de filtrer les avis ?", a: "Oui, absolument. Vous ne supprimez aucun avis. Vous proposez simplement un formulaire de contact aux clients mécontents. Les clients satisfaits sont libres de publier (ou non) un avis sur Google." },
  { q: "Comment l'IA répond-elle aux avis ?", a: "Notre agent IA analyse le contenu de l'avis et génère une réponse professionnelle et personnalisée. Vous pouvez choisir le mode automatique (publication immédiate) ou le mode validation (vous approuvez avant publication)." },
  { q: "Faut-il une tablette dédiée ?", a: "Non, le mode kiosque fonctionne sur n'importe quelle tablette ou smartphone. Il suffit d'ouvrir le lien dans un navigateur. Pas d'application à installer." },
  { q: "Combien de temps pour l'installation ?", a: "3 minutes chrono. Créez votre compte, connectez votre fiche Google, et vous recevez immédiatement votre lien et QR code personnalisé." },
  { q: "Y a-t-il un essai gratuit ?", a: "Oui, 14 jours d'essai gratuit. Vous avez accès à toutes les fonctionnalités du plan Pro pour tester en conditions réelles." },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
        <span className="font-semibold text-gray-900 pr-4 group-hover:text-[#51197e] transition-colors">{faq.q}</span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all text-sm font-bold"
          style={{ background: open ? "#51197e" : "#EDE5F7", color: open ? "#fff" : "#51197e", transform: open ? "rotate(45deg)" : "rotate(0)" }}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-gray-600 leading-relaxed pb-6">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900"
        >
          Questions fréquentes
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-10"
        >
          {faqs.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
        </motion.div>
      </div>
    </section>
  );
}
