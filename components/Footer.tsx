export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top: Logo + Links */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#51197e" }}>
                <span className="font-bold text-white text-base" style={{ fontFamily: "'Neue Machina', sans-serif" }}>R</span>
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
                Reevup&apos;Avis<span className="text-[#9371d1]">*</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              La solution pour booster vos avis Google automatiquement.
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Produit</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#fonctionnalites" className="text-sm text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#tarifs" className="text-sm text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#simulation" className="text-sm text-gray-400 hover:text-white transition-colors">Démo interactive</a></li>
                <li><a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Légal</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="mailto:contact-avis@reevup.fr" className="text-sm text-gray-400 hover:text-white transition-colors">contact-avis@reevup.fr</a></li>
                <li><span className="text-sm text-gray-400">91130 Ris-Orangis, France</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© 2026 Reevup&apos;Avis. Tous droits réservés.</p>
          <a href="#tarifs" className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-xs font-semibold hover:bg-[#6B21A8] transition-all" style={{ background: "#51197e" }}>
            Essai gratuit 14 jours →
          </a>
        </div>
      </div>
    </footer>
  );
}
