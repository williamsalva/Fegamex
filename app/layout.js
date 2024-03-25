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
  title: "Fegamex",
  description: "Fegamex Molduras decorativas",
  keywords: `Fegamex Molduras de unicel,Pechos de paloma molduras,Decoración de interiores,Mejora del 
    hogar con molduras de unicel,Estilos de molduras de unicel,Mexicano molduras de 
    unicel,Molduras de unicel personalizadas,Molduras de unicel calidad,
    Mejores precios en molduras de unicel,Compra molduras de unicel online,
    Molduras de unicel para tu hogar,Molduras de unicel para oficina`,

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
