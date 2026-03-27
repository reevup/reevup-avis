export default function Footer() {
  return (
    <footer className="bg-gray-900">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#51197e" }}>
                <span className="font-bold text-white text-base" style={{ fontFamily: "'Neue Machina', sans-serif" }}>R</span>
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
                Reevup<span className="text-[#9371d1]">*</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">La solution pour booster vos avis Google automatiquement.</p>
            <a href="#tarifs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:bg-[#6B21A8] transition-all" style={{ background: "#51197e" }}>
              Essai gratuit 14 jours →
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Produit</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#fonctionnalites" className="text-sm text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#tarifs" className="text-sm text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#simulation" className="text-sm text-gray-400 hover:text-white transition-colors">Démo interactive</a></li>
              <li><a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Compte</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Connexion</a></li>
              <li><a href="#tarifs" className="text-sm text-gray-400 hover:text-white transition-colors">Essai gratuit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Légal</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">CGU</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">© 2025 Reevup&apos;avis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
