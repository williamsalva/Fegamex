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
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://fegamex.com/molduras-decorativas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://fegamex.com/rosetones",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/gargolas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/puntales-vigas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/pegamolduras",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fegamex.com/nosotros",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://fegamex.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://fegamex.com/instrucciones",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...molduras,
  ];
}
