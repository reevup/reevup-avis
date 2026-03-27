"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wheelSegments = [
  { label: "-10%", color: "#51197e", text: "#fff" },
  { label: "Dessert offert", color: "#EDE5F7", text: "#51197e" },
  { label: "-5€", color: "#7C3AED", text: "#fff" },
  { label: "Café offert", color: "#F3EEFA", text: "#51197e" },
  { label: "-20%", color: "#51197e", text: "#fff" },
  { label: "Entrée offerte", color: "#EDE5F7", text: "#51197e" },
];

export default function LoyaltyPreview() {
  const [activeTab, setActiveTab] = useState<"roulette" | "coupon">("roulette");
  const [spinning, setSpinning] = useState(false);
  const [spinDeg, setSpinDeg] = useState(0);
  const [won, setWon] = useState<string | null>(null);
  const [couponChoice, setCouponChoice] = useState<"now" | "later" | null>(null);

  const handleSpin = () => {
    if (spinning) return;
    setWon(null);
    setSpinning(true);
    const extra = 1440 + Math.floor(Math.random() * 360);
    const newDeg = spinDeg + extra;
    setSpinDeg(newDeg);
    setTimeout(() => {
      const segAngle = 360 / wheelSegments.length;
      // Arrow is at top (270° in SVG coords). Find which segment is under the arrow.
      const rotation = newDeg % 360;
      const hitAngle = ((270 - rotation) % 360 + 360) % 360;
      const idx = Math.floor(hitAngle / segAngle);
      setWon(wheelSegments[idx].label);
      setSpinning(false);
    }, 3500);
  };

  return (
    <section className="py-16" style={{ background: "#F9F7FC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: "#EDE5F7", color: "#51197e" }}
          >
            🎁 Nouveau
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900"
        >
          Fidélisez vos clients avec des récompenses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto"
        >
          Option activable en un clic depuis votre dashboard. Offrez une roulette
          ou un bon de réduction après chaque avis, si vous le souhaitez.
        </motion.p>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1" style={{ background: "#EDE5F7" }}>
            <button
              onClick={() => { setActiveTab("roulette"); setWon(null); }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all outline-none focus:outline-none"
              style={
                activeTab === "roulette"
                  ? { background: "#51197e", color: "#fff" }
                  : { color: "#51197e" }
              }
            >
              🎰 Roulette
            </button>
            <button
              onClick={() => { setActiveTab("coupon"); setCouponChoice(null); }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all outline-none focus:outline-none"
              style={
                activeTab === "coupon"
                  ? { background: "#51197e", color: "#fff" }
                  : { color: "#51197e" }
              }
            >
              🎟️ Bon de réduction
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Interactive preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full flex-1 text-center truncate">
                app.reevup-avis.fr/recompense
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "roulette" ? (
                <motion.div
                  key="roulette"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-center text-gray-800 font-semibold mb-1">
                    Merci pour votre avis ! 🎉
                  </p>
                  <p className="text-center text-gray-500 text-sm mb-6">
                    Tentez votre chance et gagnez une récompense
                  </p>

                  {/* Wheel */}
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-6">
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-0 h-0"
                      style={{ borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "20px solid #51197e" }} />
                    <div
                      className="w-full h-full rounded-full overflow-hidden border-4 border-[#51197e] shadow-lg"
                      style={{
                        transform: `rotate(${spinDeg}deg)`,
                        transition: spinning ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
                      }}
                    >
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {wheelSegments.map((seg, i) => {
                          const segAngle = 360 / wheelSegments.length;
                          const startAngle = (i * segAngle * Math.PI) / 180;
                          const endAngle = ((i + 1) * segAngle * Math.PI) / 180;
                          const x1 = 100 + 100 * Math.cos(startAngle);
                          const y1 = 100 + 100 * Math.sin(startAngle);
                          const x2 = 100 + 100 * Math.cos(endAngle);
                          const y2 = 100 + 100 * Math.sin(endAngle);
                          const midAngle = (startAngle + endAngle) / 2;
                          const tx = 100 + 65 * Math.cos(midAngle);
                          const ty = 100 + 65 * Math.sin(midAngle);
                          const largeArc = segAngle > 180 ? 1 : 0;
                          // Place text along the segment, always readable
                          let textRotDeg = (i * segAngle) + segAngle / 2;
                          // Flip text in the bottom half so it's never upside down
                          const norm = ((textRotDeg % 360) + 360) % 360;
                          const flipped = norm > 90 && norm < 270;
                          if (flipped) textRotDeg += 180;
                          // Move text closer/further from center based on flip
                          const textR = 62;
                          const textX = 100 + textR * Math.cos(midAngle);
                          const textY = 100 + textR * Math.sin(midAngle);
                          return (
                            <g key={i}>
                              <path
                                d={`M100,100 L${x1},${y1} A100,100 0 ${largeArc},1 ${x2},${y2} Z`}
                                fill={seg.color}
                                stroke="#fff"
                                strokeWidth="1"
                              />
                              <text
                                x={textX}
                                y={textY}
                                fill={seg.text}
                                fontSize="10"
                                fontWeight="bold"
                                textAnchor="middle"
                                dominantBaseline="central"
                                transform={`rotate(${textRotDeg}, ${textX}, ${textY})`}
                              >
                                {seg.label}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                    {/* Center circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border-2 border-[#51197e] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#51197e]">GO</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSpin}
                    disabled={spinning}
                    className="px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg disabled:opacity-60"
                    style={{ background: spinning ? "#9371D1" : "#51197e" }}
                  >
                    {spinning ? "La roue tourne..." : "🎰 Tourner la roue"}
                  </button>

                  <AnimatePresence>
                    {won && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="mt-5 px-6 py-3 rounded-2xl text-center"
                        style={{ background: "#EDE5F7" }}
                      >
                        <p className="text-[#51197e] font-bold text-lg">🎉 Bravo !</p>
                        <p className="text-[#51197e] font-semibold">
                          Vous avez gagné : <span className="underline">{won}</span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="coupon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-center text-gray-800 font-semibold mb-1">
                    Merci pour votre avis ! 🎉
                  </p>
                  <p className="text-center text-gray-500 text-sm mb-6">
                    Voici votre récompense
                  </p>

                  {/* Coupon card */}
                  <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-[#51197e]/30 mb-6">
                    <div className="p-6 text-center" style={{ background: "linear-gradient(135deg, #51197e 0%, #7C3AED 100%)" }}>
                      <p className="text-white/70 text-sm font-medium mb-1">BON DE RÉDUCTION</p>
                      <p className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Neue Machina', sans-serif" }}>-15%</p>
                      <p className="text-white/80 text-sm mt-1">sur votre prochaine commande</p>
                    </div>
                    <div className="bg-white p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400">Code</p>
                          <p className="font-mono font-bold text-[#51197e] tracking-wider">MERCI15</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Validité</p>
                          <p className="text-sm font-semibold text-gray-700">30 jours</p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 text-center mb-4">Quand souhaitez-vous l&apos;utiliser ?</p>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setCouponChoice("now")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border-2 ${
                            couponChoice === "now"
                              ? "border-[#51197e] bg-[#51197e] text-white"
                              : "border-[#51197e]/20 text-[#51197e] hover:bg-[#EDE5F7]"
                          }`}
                        >
                          Maintenant
                        </button>
                        <button
                          onClick={() => setCouponChoice("later")}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border-2 ${
                            couponChoice === "later"
                              ? "border-[#51197e] bg-[#51197e] text-white"
                              : "border-[#51197e]/20 text-[#51197e] hover:bg-[#EDE5F7]"
                          }`}
                        >
                          Prochaine visite
                        </button>
                      </div>

                      <AnimatePresence>
                        {couponChoice && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 p-3 rounded-xl text-center" style={{ background: "#F0FDF4" }}>
                              {couponChoice === "now" ? (
                                <p className="text-sm text-green-700 font-semibold">
                                  ✅ Présentez ce bon en caisse ou à la réception
                                </p>
                              ) : (
                                <div className="text-sm text-green-700 font-semibold space-y-1">
                                  <p>✅ Bon envoyé par email et enregistré</p>
                                  <p className="text-xs text-green-600 font-normal">Valable 30 jours, supprimé automatiquement après expiration</p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Features & customization highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold w-fit" style={{ background: "#EDE5F7", color: "#51197e" }}>
              ⚙️ Option activable
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Un système de fidélité 100% personnalisable
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Activez cette option si vous souhaitez récompenser vos clients après un avis.
              Vous choisissez le type de récompense, le montant, la durée, tout est configurable.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "🎰",
                  title: "Roulette personnalisable",
                  desc: "Définissez les lots, les probabilités et les couleurs. Chaque segment est modifiable.",
                },
                {
                  icon: "🎟️",
                  title: "Bons de réduction",
                  desc: "Montant fixe ou pourcentage. Le client choisit : utilisation immédiate ou prochaine visite. Si reporté, le bon est envoyé par email.",
                },
                {
                  icon: "💾",
                  title: "Sauvegarde et expiration auto",
                  desc: "Les bons reportés sont enregistrés et consultables depuis votre dashboard. Une fois expirés, ils se suppriment automatiquement.",
                },
                {
                  icon: "🎨",
                  title: "Aux couleurs de votre marque",
                  desc: "Couleurs, logo, textes. Adaptez l'expérience à l'identité visuelle de votre établissement.",
                },
                {
                  icon: "🏨",
                  title: "Multi-secteur",
                  desc: "Restaurant, hôtel, salon de coiffure, spa. Le système s'adapte à votre activité.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "#EDE5F7" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">{f.title}</h4>
                    <p className="text-sm text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#51197e] text-white font-bold hover:bg-[#6B21A8] transition-all shadow-xl shadow-[#51197e]/20 group w-fit mt-2"
            >
              Essayer le système de fidélité
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
