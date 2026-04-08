import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/bootstrap.css";
import "public/assets/css/style.css";
import "public/assets/css/color.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { inter, manrope, futura } from "@/lib/font";

export const metadata = {
  title: "Fegamex | Molduras Decorativas de Alta Calidad",
  description: "Expertos en molduras decorativas, gargolas, puntales, vigas y rosetones. Transforma tus espacios con productos de la mas alta calidad. Envios a toda la republica.",
  keywords: `Fegamex, Molduras decorativas, Molduras de unicel, Pechos de paloma, Decoracion de interiores, 
    Gargolas decorativas, Puntales y vigas, Rosetones, Pegamoldura, 
    Mejora del hogar, Molduras personalizadas, Molduras de calidad,
    Mejores precios en molduras, Compra molduras online,
    Molduras para hogar, Molduras para oficina, Molduras Mexico`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${futura.variable}`}
      
    >
      <body>{children}</body>
    </html>
  );
}
