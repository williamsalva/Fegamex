import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Pegamolduras | Adhesivo Especializado para Molduras | Fegamex Guadalajara",
  description: "Adhesivo de alta adherencia diseñado para molduras de poliestireno. Fácil aplicación y máxima durabilidad para tus proyectos en Guadalajara.",
  keywords: "pegamolduras, adhesivo para molduras, pegamento molduras, instalación de molduras, guadalajara, fegamex",
};

import PegamoldurasClient from "@/components/sections/seo/PegamoldurasClient";

export default function Home() {
  return <PegamoldurasClient />;
}
