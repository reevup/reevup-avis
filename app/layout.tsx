import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Reevup'Avis | Boostez vos avis Google automatiquement",
  description:
    "Reevup'Avis redirige vos clients satisfaits vers Google, intercepte les avis négatifs et répond automatiquement via IA. Essai gratuit 14 jours.",
  keywords: [
    "avis Google",
    "gestion avis Google",
    "booster avis Google",
    "avis restaurant",
    "réponse automatique avis",
    "réputation en ligne",
    "e-réputation restaurant",
    "collecte avis clients",
    "avis Google automatique",
    "Reevup",
  ],
  openGraph: {
    title: "Reevup'Avis | Obtenez plus d'avis positifs pour votre entreprise",
    description:
      "Reevup'Avis vous aide à optimiser votre note Google et renforcer votre crédibilité en ligne avec des avis positifs.",
    type: "website",
    locale: "fr_FR",
    siteName: "Reevup'Avis",
    url: "https://reevup-avis.fr",
    images: [
      {
        url: "https://reevup-avis.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reevup'Avis - Boostez vos avis Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reevup'Avis | Obtenez plus d'avis positifs pour votre entreprise",
    description:
      "Reevup'Avis vous aide à optimiser votre note Google et renforcer votre crédibilité en ligne avec des avis positifs.",
    images: ["https://reevup-avis.fr/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://reevup-avis.fr",
  },
  other: {
    "geo.region": "FR-91",
    "geo.placename": "Ris-Orangis, France",
    "geo.position": "48.6536;2.4153",
    "ICBM": "48.6536, 2.4153",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reevup'Avis",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://reevup-avis.fr",
    description:
      "Solution SaaS de gestion automatique des avis Google pour restaurants et commerces locaux en France.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "31",
      highPrice: "79",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      offerCount: "2",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reevup",
    url: "https://reevup-avis.fr",
    logo: "https://reevup-avis.fr/og-image.png",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceArea: {
      "@type": "GeoShape",
      addressCountry: "FR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce légal de filtrer les avis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, absolument. Vous ne supprimez aucun avis. Vous proposez simplement un formulaire de contact aux clients mécontents. Les clients satisfaits sont libres de publier (ou non) un avis sur Google.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour l'installation ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3 minutes chrono. Créez votre compte, connectez votre fiche Google, et vous recevez immédiatement votre lien et QR code personnalisé.",
        },
      },
      {
        "@type": "Question",
        name: "Y a-t-il un essai gratuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, 14 jours d'essai gratuit. Vous avez accès à toutes les fonctionnalités pour tester en conditions réelles.",
        },
      },
      {
        "@type": "Question",
        name: "Comment l'IA répond-elle aux avis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Notre agent IA analyse le contenu de l'avis et génère une réponse professionnelle et personnalisée. Vous pouvez choisir le mode automatique ou le mode validation.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il une tablette dédiée ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, le mode kiosque fonctionne sur n'importe quelle tablette ou smartphone. Il suffit d'ouvrir le lien dans un navigateur. Pas d'application à installer.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://api.fontshare.com/v2/css?f[]=neue-machina@700,800&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" as="style" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent flash of wrong theme + scroll to top on load */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            } catch(e) {}
            if (history.scrollRestoration) { history.scrollRestoration = 'manual'; }
            window.scrollTo(0, 0);
          })();
        `}} />
        <style dangerouslySetInnerHTML={{ __html: `
          #__loading-screen {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            overflow: hidden;
          }
          .dark #__loading-screen {
            background: #1a1a1a;
          }
          #__loading-screen.fade-out {
            animation: __loadExit 0.6s cubic-bezier(0.76,0,0.24,1) forwards;
          }

          /* Floating orbs */
          .__load-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            pointer-events: none;
          }
          .__load-orb-1 {
            width: 300px; height: 300px;
            background: rgba(81,25,126,0.12);
            top: 10%; left: 15%;
            animation: __orbFloat1 3s ease-in-out infinite;
          }
          .__load-orb-2 {
            width: 250px; height: 250px;
            background: rgba(147,113,209,0.1);
            bottom: 15%; right: 10%;
            animation: __orbFloat2 3.5s ease-in-out infinite;
          }
          .__load-orb-3 {
            width: 180px; height: 180px;
            background: rgba(124,58,237,0.08);
            top: 50%; left: 60%;
            animation: __orbFloat3 4s ease-in-out infinite;
          }
          .dark .__load-orb-1 { background: rgba(81,25,126,0.25); }
          .dark .__load-orb-2 { background: rgba(147,113,209,0.2); }
          .dark .__load-orb-3 { background: rgba(124,58,237,0.15); }

          /* Logo container */
          #__loading-center {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
          }

          /* Logo icon with glow ring */
          #__loading-logo-icon {
            width: 72px;
            height: 72px;
            border-radius: 22px;
            background: linear-gradient(135deg, #51197e 0%, #7C3AED 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            animation: __loadIconEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
            box-shadow: 0 0 0 0 rgba(81,25,126,0.3), 0 20px 60px rgba(81,25,126,0.2);
          }
          #__loading-logo-icon::before {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 26px;
            background: linear-gradient(135deg, rgba(81,25,126,0.4), rgba(147,113,209,0.2), rgba(81,25,126,0.4));
            z-index: -1;
            animation: __loadGlowPulse 2s ease-in-out infinite;
          }
          #__loading-logo-icon span {
            font-family: 'Neue Machina', sans-serif;
            font-weight: 800;
            font-size: 28px;
            color: #fff;
            letter-spacing: -0.02em;
          }

          /* Brand text */
          #__loading-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          #__loading-logo-text {
            font-family: 'Neue Machina', sans-serif;
            font-weight: 800;
            font-size: 28px;
            color: #111827;
            letter-spacing: -0.02em;
            animation: __loadTextEntry 0.5s ease-out 0.3s both;
          }
          .dark #__loading-logo-text {
            color: #f5f5f5;
          }
          #__loading-logo-text .accent {
            color: #9371d1;
          }
          #__loading-tagline {
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            color: #9ca3af;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            animation: __loadTextEntry 0.5s ease-out 0.45s both;
          }
          .dark #__loading-tagline {
            color: #777777;
          }

          /* Progress bar */
          #__loading-bar-wrap {
            width: 160px;
            height: 3px;
            border-radius: 3px;
            background: rgba(81,25,126,0.1);
            overflow: hidden;
            animation: __loadFadeIn 0.3s ease-out 0.5s both;
          }
          .dark #__loading-bar-wrap {
            background: rgba(147,113,209,0.15);
          }
          #__loading-bar {
            height: 100%;
            border-radius: 3px;
            background: linear-gradient(90deg, #51197e, #9371d1, #51197e);
            background-size: 200% 100%;
            animation: __loadBar 1.3s cubic-bezier(0.25,0.46,0.45,0.94) 0.55s both, __loadBarShimmer 1.5s ease-in-out infinite;
          }

          /* Floating dots */
          .__load-dot {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(81,25,126,0.2);
          }
          .dark .__load-dot { background: rgba(147,113,209,0.3); }
          .__load-dot-1 { top: 25%; left: 20%; animation: __dotFloat 3s ease-in-out infinite; }
          .__load-dot-2 { top: 70%; left: 75%; animation: __dotFloat 3.5s ease-in-out 0.5s infinite; }
          .__load-dot-3 { top: 40%; right: 15%; animation: __dotFloat 2.8s ease-in-out 1s infinite; width: 3px; height: 3px; }
          .__load-dot-4 { bottom: 30%; left: 35%; animation: __dotFloat 3.2s ease-in-out 0.7s infinite; width: 5px; height: 5px; }
          .__load-dot-5 { top: 15%; right: 30%; animation: __dotFloat 3.8s ease-in-out 0.3s infinite; width: 3px; height: 3px; }

          @keyframes __loadIconEntry {
            from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
            to { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          @keyframes __loadGlowPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes __loadTextEntry {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes __loadFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes __loadBar {
            from { width: 0%; }
            to { width: 100%; }
          }
          @keyframes __loadBarShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes __loadExit {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.02); pointer-events: none; }
          }
          @keyframes __orbFloat1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -20px); }
          }
          @keyframes __orbFloat2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-25px, 15px); }
          }
          @keyframes __orbFloat3 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(15px, 25px); }
          }
          @keyframes __dotFloat {
            0%, 100% { opacity: 0.3; transform: translateY(0); }
            50% { opacity: 0.8; transform: translateY(-10px); }
          }

        `}} />
      </head>
      <body>
        {/* Inline loading screen — renders before React hydration */}
        <div id="__loading-screen">
          <div className="__load-orb __load-orb-1" />
          <div className="__load-orb __load-orb-2" />
          <div className="__load-orb __load-orb-3" />
          <div className="__load-dot __load-dot-1" />
          <div className="__load-dot __load-dot-2" />
          <div className="__load-dot __load-dot-3" />
          <div className="__load-dot __load-dot-4" />
          <div className="__load-dot __load-dot-5" />
          <div id="__loading-center">
            <div id="__loading-logo-icon"><span>R</span></div>
            <div id="__loading-brand">
              <div id="__loading-logo-text">Reevup&apos;Avis<span className="accent">*</span></div>
              <div id="__loading-tagline">Vos avis, automatisés</div>
            </div>
            <div id="__loading-bar-wrap">
              <div id="__loading-bar" />
            </div>
          </div>
        </div>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
