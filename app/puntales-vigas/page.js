import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Puntales y Vigas de Poliestireno Estilo Madera | Fegamex Guadalajara",
  description: "Vigas decorativas que replican la madera con acabado antiguo. Ligeras, económicas y fáciles de instalar en Guadalajara, Jalisco.",
  keywords: "vigas decorativas, puntales, vigas tipo madera, decoración colonial, guadalajara, fegamex",
};

import PuntalesVigasClient from "@/components/sections/seo/PuntalesVigasClient";

export default function Home() {
  return <PuntalesVigasClient />;
}
