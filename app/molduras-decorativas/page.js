import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ItemMolduras from "@/components/elements/ItemMolduras";
import itemsMolduras from "@/data/itemsMolduras";

export const metadata = {
  title: "Molduras Decorativas de Poliestireno | Fegamex Guadalajara",
  description: "Amplio catálogo de molduras decorativas para interiores y exteriores en Guadalajara, Jalisco. Pechos de paloma y diseños personalizados de alta densidad.",
  keywords: "molduras decorativas, pechos de paloma, molduras guadalajara, molduras de poliestireno, fegamex",
};

import MoldurasCatalogClient from "@/components/sections/seo/MoldurasCatalogClient";

export default function Home() {
  return <MoldurasCatalogClient />;
}
