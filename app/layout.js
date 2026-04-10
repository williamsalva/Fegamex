import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/bootstrap.css";
import "public/assets/css/style.css";
import "public/assets/css/color.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import { inter, manrope, futura } from "@/lib/font";

export const metadata = {
  title: "Fegamex | Molduras Decorativas y Fachadas en Guadalajara",
  description: "Expertos en molduras decorativas de poliestireno, gárgolas, puntales y rosetones en Guadalajara, Jalisco. Calidad premium y envíos a todo México. ¡Transforma tu fachada hoy!",
  keywords: "Fegamex, Molduras decorativas, Molduras de unicel, Pechos de paloma, Decoración de exteriores, Gárgolas decorativas, Puntales y vigas, Rosetones, Guadalajara, Jalisco, Zapopan",
  metadataBase: new URL("https://fegamex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fegamex | Molduras Decorativas de Alta Calidad",
    description: "Líderes en molduras y elementos decorativos para fachadas en Guadalajara. Poliestireno de alta densidad con acabados profesionales.",
    url: "https://fegamex.com",
    siteName: "Fegamex",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 800,
        height: 600,
        alt: "Fegamex Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fegamex | Molduras Decorativas en Guadalajara",
    description: "Transforma tu hogar con molduras de alta calidad. Envíos a todo México desde Guadalajara.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fegamex",
  "image": "https://fegamex.com/assets/images/logo.png",
  "@id": "https://fegamex.com",
  "url": "https://fegamex.com",
  "telephone": "+523310418179",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Villa de Guadalupe",
    "addressLocality": "Zapopan",
    "addressRegion": "Jalisco",
    "postalCode": "45180",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.7333, 
    "longitude": -103.3833
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/fegamex",
    "https://www.instagram.com/fegamex"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${inter.variable} ${futura.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
