"use client";

import { motion } from "framer-motion";

const assistants = [
  { name: "Hugo", active: true, color: "#3B82F6" },
  { name: "Yannick", active: false, color: "#8B5CF6" },
  { name: "Tom", active: false, color: "#10B981" },
  { name: "Marion", active: false, color: "#F59E0B" },
  { name: "Sophia", active: false, color: "#EC4899" },
  { name: "Lise", active: false, color: "#14B8A6" },
];

const colors = ["#3B82F6", "#10B981", "#8B5CF6", "#EF4444", "#F97316", "#EC4899", "#06B6D4", "#F59E0B", "#6366F1"];

export default function AssistantPreview() {
  return (
    <section className="py-24" style={{ background: "#F3EAFA" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser bar */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-[10px] sm:text-xs text-gray-400 w-40 sm:w-64 text-center truncate">
                    app.reevup-avis.fr/assistant
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Gestion de l&apos;assistant</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500">Modifiez les paramètres de votre assistant IA.</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 text-[10px] sm:text-xs font-medium text-gray-600">Prévisualiser</button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium text-white" style={{ background: "#51197e" }}>Enregistrer</button>
                  </div>
                </div>

                {/* Assistant selection */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-900 mb-3 block">Choix de l&apos;assistant</label>
                  <div className="flex gap-3 flex-wrap">
                    {assistants.map(a => (
                      <div key={a.name} className={`flex flex-col items-center gap-1 sm:gap-1.5 p-2 sm:p-3 rounded-xl border-2 cursor-pointer transition-all ${a.active ? "border-[#51197e] bg-[#F3EAFA]" : "border-gray-100 hover:border-gray-200"}`}>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ background: `${a.color}20` }}>
                          <svg className="w-5 h-5" fill={a.color} viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{a.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color selection */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-900 mb-3 block">Couleur de l&apos;entreprise</label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {colors.map((c, i) => (
                      <div key={c} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all ${i === 0 ? "ring-2 ring-offset-2 ring-[#51197e]" : "hover:scale-110"}`} style={{ background: `${c}15` }}>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full" style={{ background: c }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tone */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-900 mb-3 block">Ton des réponses</label>
                  <div className="flex gap-2">
                    {["Professionnel", "Amical", "Décontracté"].map((t, i) => (
                      <span key={t} className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${i === 0 ? "bg-[#51197e] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Auto-response toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Réponse automatique</p>
                    <p className="text-xs text-gray-500">L&apos;assistant répond automatiquement aux nouveaux avis</p>
                  </div>
                  <div className="w-11 h-6 rounded-full relative cursor-pointer" style={{ background: "#51197e" }}>
                    <div className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(81,25,126,0.08), rgba(124,58,237,0.05))" }} />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold text-[#51197e] dark:text-[#c4b0e0] uppercase tracking-widest mb-4 block">Assistant IA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Un assistant qui répond{" "}
              <span className="text-[#51197e] dark:text-[#c4b0e0]">comme vous le feriez</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Choisissez la personnalité, le ton et les couleurs de votre assistant. Il apprend le contexte de votre établissement et rédige des réponses personnalisées à chaque avis.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: "🎨", text: "6 personnalités d'assistant au choix" },
                { icon: "🎯", text: "Ton professionnel, amical ou décontracté" },
                { icon: "⚡", text: "Réponse automatique ou avec validation" },
                { icon: "🏷️", text: "Couleurs et branding à votre image" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a href="#tarifs" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group">
              Configurer mon assistant
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
