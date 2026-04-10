import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Gárgolas Decorativas para Fachadas | Fegamex Guadalajara",
  description: "Gárgolas funcionales y estéticas para la canalización de agua en techos y fachadas. Diseños coloniales y californianos en Guadalajara, Jalisco.",
  keywords: "gárgolas, gárgolas decorativas, canalización de agua, fachadas guadalajara, fegamex",
};

import GargolasClient from "@/components/sections/seo/GargolasClient";

export default function Home() {
  return <GargolasClient />;
}
