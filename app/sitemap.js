import itemsMolduras from "@/data/itemsMolduras";

export default function sitemap() {
  const molduras = itemsMolduras.map((item) => {
    return {
      url: `https://fegamex.com/moldura/${item.id}`,
      lastModified: new Date(),
      priority: 0.8,
    };
  });

  return [
    {
      url: "https://fegamex.com/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://fegamex.com/molduras-decorativas",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://fegamex.com/rosetones",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/gargolas",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/puntales-vigas",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/pegamolduras",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/nosotros",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://fegamex.com/contacto",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://fegamex.com/instrucciones",
      lastModified: new Date(),
      priority: 0.5,
    },
    ...molduras,
  ];
}
