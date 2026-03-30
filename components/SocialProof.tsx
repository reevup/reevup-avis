"use client";

const badges = [
  { icon: "🛡️", text: "Conforme RGPD" },
  { icon: "🚀", text: "Installation en 3 min" },
  { icon: "💳", text: "14 jours d'essai gratuit" },
  { icon: "🔄", text: "Sans engagement" },
  { icon: "🇫🇷", text: "Support 100% français" },
];

export default function SocialProof() {
  return (
    <section className="py-5 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 reveal-fade">
          {badges.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <span className="text-base">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
