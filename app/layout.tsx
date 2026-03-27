import type { Metadata } from "next";
import "./globals.css";

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
    "geo.region": "FR",
    "geo.placename": "France",
    "geo.position": "46.603354;1.888334",
    "ICBM": "46.603354, 1.888334",
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
    <html lang="fr" className="scroll-smooth">
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
      </head>
      <body className="bg-white text-[#1a1a2e]">{children}</body>
    </html>
  );
}
