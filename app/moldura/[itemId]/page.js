import Layout from "@/components/layout/Layout";
import itemsMolduras from "@/data/itemsMolduras";
import Link from "next/link";

export async function generateStaticParams() {
  return itemsMolduras.map((moldura) => {
    return {
      itemId: String(moldura.id),
    };
  });
}

export async function generateMetadata({ params }) {
  const moldura = itemsMolduras.find(
    (moldura) => moldura.id === parseInt(params.itemId)
  );

  if (!moldura) {
    return {
      title: "Producto no encontrado | Fegamex",
    };
  }

  return {
    title: `${moldura.title} | Molduras Decorativas Fegamex Guadalajara`,
    description: `Descubre el ${moldura.title}. Moldura decorativa de poliestireno de alta densidad. Dimensiones: ${moldura.height}x${moldura.width} cm. Calidad premium en Guadalajara, Jalisco.`,
    openGraph: {
      title: `${moldura.title} | Fegamex`,
      description: `Moldura decorativa de alta calidad ${moldura.title}. Envíos personalizados desde Guadalajara.`,
      images: [moldura.imgMed],
    },
  };
}

import ProductDetailClient from "@/components/sections/seo/ProductDetailClient";

const ProductDetail = ({ params }) => {
  const moldura = itemsMolduras.find(
    (moldura) => moldura.id === parseInt(params.itemId)
  );

  if (!moldura) return null;

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": moldura.title,
    "image": `https://fegamex.com${moldura.imgMed}`,
    "description": `Moldura decorativa de poliestireno de alta densidad, modelo ${moldura.title}. Ideal para interiores y exteriores.`,
    "brand": {
      "@type": "Brand",
      "name": "Fegamex"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://fegamex.com/moldura/${moldura.id}`,
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Fegamex"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient moldura={moldura} />
    </>
  );
};

export default ProductDetail;
