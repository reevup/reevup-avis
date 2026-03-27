"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-sm ${i <= rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
      ))}
    </div>
  );
}

const aiResponse = "Merci beaucoup Sophie pour ce retour chaleureux ! Toute l'équipe du Petit Bistrot est ravie que vous ayez passé un excellent moment. Votre recommandation nous touche sincèrement. Au plaisir de vous revoir très bientôt !";

function TypeWriter({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(interval);
        onDoneRef.current?.();
      }
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-4 bg-[#51197e] ml-0.5 animate-pulse align-text-bottom" />
      )}
    </span>
  );
}

export default function AppPreview() {
  const [tab, setTab] = useState<"dashboard" | "assistant">("dashboard");
  const [demoStep, setDemoStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const handleTypingDone = useCallback(() => setTyping(false), []);

  useEffect(() => {
    if (tab === "assistant") {
      setDemoStep(0);
      setTyping(false);
      const t1 = setTimeout(() => setDemoStep(1), 800);
      const t2 = setTimeout(() => { setDemoStep(2); setTyping(true); }, 2500);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [tab]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold text-[#51197e] uppercase tracking-widest mb-4 block">Aperçu de l&apos;application</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tout se gère depuis votre dashboard
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Suivez vos avis en temps réel et laissez l&apos;IA répondre à votre place.
          </p>

          <div className="inline-flex rounded-full p-1" style={{ background: "#EDE5F7" }}>
            <button
              onClick={() => setTab("dashboard")}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all outline-none focus:outline-none"
              style={tab === "dashboard" ? { background: "#51197e", color: "#fff" } : { color: "#51197e" }}
            >
              📊 Tableau de bord
            </button>
            <button
              onClick={() => setTab("assistant")}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all outline-none focus:outline-none"
              style={tab === "assistant" ? { background: "#51197e", color: "#fff" } : { color: "#51197e" }}
            >
              🤖 Assistant IA
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {tab === "dashboard" ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl mx-auto overflow-hidden"
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
                      app.reevup-avis.fr/dashboard
                    </div>
                  </div>
                </div>

                <div className="flex">
                  {/* Sidebar */}
                  <div className="hidden lg:flex flex-col w-52 border-r border-gray-100 bg-gray-50/50 p-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#51197e" }}>
                        <span className="text-white text-xs font-bold">R</span>
                      </div>
                      <span className="font-bold text-sm text-gray-900">Reevup</span>
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">Établissement</div>
                    <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 text-xs font-medium text-gray-700 mb-5">
                      Restaurant Le Petit Bistrot
                    </div>
                    <nav className="flex flex-col gap-1 text-xs">
                      <div className="px-3 py-2 rounded-lg font-semibold text-[#51197e]" style={{ background: "#EDE5F7" }}>Tableau de bord</div>
                      <div className="px-3 py-2 rounded-lg text-gray-600">Ma signature</div>
                      <div className="px-3 py-2 rounded-lg text-gray-600">Mon QR Code</div>
                      <div className="px-3 py-2 rounded-lg text-gray-600">Mon assistant IA</div>
                      <div className="px-3 py-2 rounded-lg text-gray-600">Mes avis</div>
                    </nav>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 sm:p-5 md:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg">Tableau de bord</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500">Vue d&apos;ensemble de votre réputation</p>
                      </div>
                      <span className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white" style={{ background: "#10B981" }}>
                        Performance du mois
                      </span>
                    </div>

                    {/* Google Rating Badge */}
                    <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-gray-200 bg-white mb-5">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" className="w-8 h-8">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-900">Google Business Profile</span>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-green-700 bg-green-100">Connecté</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-lg font-extrabold text-gray-900" style={{ fontFamily: "'Neue Machina', sans-serif" }}>4.2</span>
                          <div className="flex gap-0.5">
                            {[1,2,3,4].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                            <span className="text-gray-200 text-xs">★</span>
                          </div>
                          <span className="text-[10px] text-gray-400">sur Google</span>
                        </div>
                      </div>
                    </div>

                    {/* Score + Distribution */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-5">
                      <div className="text-center flex-shrink-0">
                        <p className="text-3xl sm:text-4xl font-extrabold text-[#10B981]" style={{ fontFamily: "'Neue Machina', sans-serif" }}>4.2</p>
                        <div className="flex gap-0.5 justify-center my-1">
                          {[1,2,3,4].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                          <span className="text-gray-200 text-xs">★</span>
                        </div>
                        <p className="text-xs font-semibold text-[#10B981]">Excellent</p>
                        <p className="text-[10px] text-gray-400 mt-1">Basé sur 36 avis</p>
                      </div>
                      <div className="flex-1 w-full flex flex-col gap-1.5 text-xs">
                        {[
                          { stars: 5, pct: 22, color: "#10B981" },
                          { stars: 4, pct: 22, color: "#10B981" },
                          { stars: 3, pct: 6, color: "#F59E0B" },
                          { stars: 2, pct: 3, color: "#EF4444" },
                          { stars: 1, pct: 0, color: "#EF4444" },
                        ].map(r => (
                          <div key={r.stars} className="flex items-center gap-1.5 sm:gap-2">
                            <span className="text-gray-500 w-3 sm:w-4 text-right text-[10px] sm:text-xs">{r.stars}</span>
                            <span className="text-yellow-400 text-[10px]">★</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KPIs */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5">
                      {[
                        { label: "Total des avis", value: "36", sub: "+10 ce mois", color: "#3B82F6" },
                        { label: "Avis positifs", value: "26", sub: "72%", color: "#10B981" },
                        { label: "Taux de réponse", value: "87%", sub: "6 réponses", color: "#10B981" },
                        { label: "Évolution note", value: "+3.10", sub: "vs 30j", color: "#10B981" },
                      ].map(kpi => (
                        <div key={kpi.label} className="bg-gray-50 rounded-xl p-2.5 sm:p-3">
                          <p className="text-[9px] sm:text-[10px] text-gray-500 mb-1">{kpi.label}</p>
                          <p className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: "'Neue Machina', sans-serif" }}>{kpi.value}</p>
                          <p className="text-[9px] sm:text-[10px] font-medium" style={{ color: kpi.color }}>{kpi.sub}</p>
                        </div>
                      ))}
                    </div>

                    {/* Recent reviews */}
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-3">Derniers avis reçus</h4>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "Sophie Martin", date: "26 mars 2026", text: "Parfait du début à la fin. Belle découverte, je le recommande.", stars: 5, status: "Répondu", statusColor: "#10B981" },
                          { name: "Antoine Simon", date: "24 mars 2026", text: "Correct sans plus. Le service était moyen.", stars: 3, status: "Répondu", statusColor: "#10B981" },
                          { name: "Marie Laurent", date: "22 mars 2026", text: "Meilleur restaurant du quartier !", stars: 5, status: "En attente", statusColor: "#F59E0B" },
                        ].map(review => (
                          <div key={review.name} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0" style={{ background: "#51197e" }}>
                              {review.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-0.5">
                                <span className="font-semibold text-[10px] sm:text-xs text-gray-900">{review.name}</span>
                                <span className="text-[9px] sm:text-[10px] text-gray-400">{review.date}</span>
                              </div>
                              <p className="text-[10px] sm:text-xs text-gray-600 truncate">{review.text}</p>
                              <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: `${review.statusColor}15`, color: review.statusColor }}>
                                ● {review.status}
                              </span>
                            </div>
                            <div className="hidden sm:block flex-shrink-0">
                              <StarRating rating={review.stars} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="assistant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl mx-auto overflow-hidden"
            >
              {/* AI Demo: Review + Real-time response */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-[10px] sm:text-xs text-gray-400 w-40 sm:w-64 text-center truncate">
                      app.reevup-avis.fr/avis
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">Nouvel avis reçu</h3>
                      <p className="text-[10px] sm:text-xs text-gray-500">Il y a quelques secondes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#51197e" }}>
                        <span className="text-white text-[10px] font-bold">R</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">Assistant Hugo</span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-green-700 bg-green-100">Actif</span>
                    </div>
                  </div>

                  {/* Customer review */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">S</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm text-gray-900">Sophie Martin</span>
                          <div className="flex gap-0.5">
                            {[1,2,3,4].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                            <span className="text-gray-200 text-xs">★</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          Parfait du début à la fin ! L&apos;accueil est chaleureux, les plats sont délicieux et le cadre est magnifique. Une belle découverte, je le recommande à tous mes amis.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] text-gray-400">via Google</span>
                          <span className="text-[10px] text-gray-400">Il y a 2 min</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* AI Analysis step */}
                  <AnimatePresence>
                    {demoStep >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 overflow-hidden"
                      >
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ background: "#EDE5F7" }}>
                          <span className="text-sm">🔍</span>
                          <span className="text-xs font-semibold text-[#51197e]">Analyse en cours...</span>
                          <span className="text-[10px] text-[#51197e]/70">Avis positif (5★) detecté, ton : amical</span>
                          {demoStep >= 2 && (
                            <span className="ml-auto text-[10px] font-bold text-green-600">✓ Analysé</span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* AI Response */}
                  <AnimatePresence>
                    {demoStep >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#F9F7FC] rounded-xl p-4 sm:p-5 border border-[#EDE5F7]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#51197e" }}>
                              <span className="text-white text-xs font-bold">IA</span>
                            </div>
                            <div>
                              <span className="font-semibold text-sm text-gray-900">Réponse de l&apos;assistant Hugo</span>
                              {typing && <span className="text-[10px] text-[#51197e] ml-2">rédige en cours...</span>}
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 text-sm text-gray-700 leading-relaxed min-h-[60px]">
                            {typing ? (
                              <TypeWriter text={aiResponse} onDone={handleTypingDone} />
                            ) : (
                              <span>{aiResponse}</span>
                            )}
                          </div>
                          {!typing && demoStep >= 2 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="flex items-center gap-3 mt-3"
                            >
                              <button className="px-4 py-2 rounded-lg text-xs font-semibold text-white" style={{ background: "#51197e" }}>
                                ✓ Publier la réponse
                              </button>
                              <button className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 border border-gray-200 bg-white">
                                Modifier
                              </button>
                              <span className="text-[10px] text-gray-400 ml-auto">Mode : validation manuelle</span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Features below */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "⚡", title: "Réponse en quelques secondes", desc: "L'IA analyse le ton et le contenu de l'avis pour rédiger une réponse adaptée." },
                  { icon: "🎯", title: "Ton personnalisable", desc: "Professionnel, amical ou décontracté. Vous choisissez le style de réponse." },
                  { icon: "✅", title: "Validation ou automatique", desc: "Publiez automatiquement ou validez chaque réponse avant publication." },
                  { icon: "🎨", title: "6 assistants au choix", desc: "Choisissez la personnalité et les couleurs de votre assistant." },
                ].map(f => (
                  <div key={f.title} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-0.5">{f.title}</h4>
                      <p className="text-xs text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
