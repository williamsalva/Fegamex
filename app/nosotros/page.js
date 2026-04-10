import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Nosotros | Expertos en Molduras Decorativas | Fegamex Guadalajara",
  description: "Conoce a Fegamex, líderes en la producción y comercialización de molduras decorativas en Zapopan, Jalisco. Más de 10 años transformando espacios.",
  keywords: "fegamex, molduras decorativas, zapopan, jalisco, expertos en fachadas, decoración artesanal",
};

import NosotrosClient from "@/components/sections/seo/NosotrosClient";

export default function Home() {
  return <NosotrosClient />;
}
