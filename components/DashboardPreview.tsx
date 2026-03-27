"use client";

import { motion } from "framer-motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-sm ${i <= rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
      ))}
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold text-[#51197e] uppercase tracking-widest mb-4 block">Tableau de bord</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suivez vos résultats en temps réel
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un dashboard complet pour piloter votre réputation en ligne. Note moyenne, évolution, avis récents : tout est là.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto">
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

            {/* Dashboard content */}
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
                  <div className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Ma signature</div>
                  <div className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Mon QR Code</div>
                  <div className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Mon assistant IA</div>
                  <div className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Mes avis</div>
                  <div className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Chat IA</div>
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-5 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Tableau de bord</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500">Vue d&apos;ensemble de votre réputation en ligne</p>
                  </div>
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white" style={{ background: "#10B981" }}>
                    Performance du mois
                  </span>
                </div>

                {/* Score + Distribution */}
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
                      { name: "Sophie Martin", date: "26 mars 2026", text: "Parfait du début à la fin. Belle découverte, je le recommande à tous mes amis.", stars: 5, status: "Répondu", statusColor: "#10B981" },
                      { name: "Antoine Simon", date: "24 mars 2026", text: "Correct sans plus. Le service était moyen et les plats manquaient de saveur.", stars: 3, status: "Répondu", statusColor: "#10B981" },
                      { name: "Marie Laurent", date: "22 mars 2026", text: "Meilleur restaurant du quartier ! On revient chaque semaine.", stars: 5, status: "En attente", statusColor: "#F59E0B" },
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

          {/* Decorative gradient behind */}
          <div className="absolute -inset-4 -z-10 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(81,25,126,0.08), rgba(124,58,237,0.05))" }} />
        </motion.div>
      </div>
    </section>
  );
}
