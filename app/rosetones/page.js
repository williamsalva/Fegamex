import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Rosetones Decorativos para Techos | Fegamex Guadalajara",
  description: "Añade elegancia a tus techos con nuestros rosetones decorativos de alta densidad. Ideales para resaltar luminarias en Guadalajara, Jalisco.",
  keywords: "rosetones, rosetones decorativos, decoración de techos, rosetones guadalajara, fegamex",
};

import RosetonesClient from "@/components/sections/seo/RosetonesClient";

export default function Home() {
  return <RosetonesClient />;
}
