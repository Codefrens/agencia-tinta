const homePage = {
  es: {
    title: "Tinta | Agencia de Medio Digitales",
    description: "Transformamos marcas con innovación y creatividad.",
    keywords: "agencia digital, filmmaking, diseño gráfico, diseño web",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Agencia de Medio Digitales",
      description: "Transformamos marcas con innovación y creatividad.",
      url: process.env.BASE_URL,
      siteName: "Agencia Tinta",
      images: [
        {
          url: "", // FALTA IMAGEN
          width: 1200,
          height: 630,
          alt: "Vista previa de la web",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinta | Agencia de Medio Digitales",
      description: "Transformamos marcas con innovación y creatividad.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [""], // FALTA IMAGEN
    },
    alternates: {
      canonical: process.env.BASE_URL,
    },
  },
  en: {
    title: "Tinta | Digital Agency",
    description: "Transforming brands with innovation and creativity.",
    keywords: "digital agency, filmmaking, graphic design, web design",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Digital Agency",
      description: "Transforming brands with innovation and creativity.",
      url: process.env.BASE_URL,
      siteName: "Tinta Agency",
      images: [
        {
          url: "", // FALTA IMAGEN
          width: 1200,
          height: 630,
          alt: "Preview of the web",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinta | Digital Agency",
      description: "Transforming brands with innovation and creativity.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [""], // FALTA IMAGEN
    },
    alternates: {
      canonical: process.env.BASE_URL,
    },
  },
};

const portfolioPage = {
  es: {
    title: "Tinta | Nuestros trabajos",
    description: "Transformamos marcas con innovación y creatividad.",
    keywords: "agencia digital, filmmaking, diseño gráfico, diseño web",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Nuestros trabajos",
      description: "Transformamos marcas con innovación y creatividad.",
      url: process.env.BASE_URL,
      siteName: "Agencia Tinta",
      images: [
        {
          url: "", // FALTA IMAGEN
          width: 1200,
          height: 630,
          alt: "Vista previa de la web",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinta | Nuestros trabajos",
      description: "Transformamos marcas con innovación y creatividad.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [""], // FALTA IMAGEN
    },
    alternates: {
      canonical: process.env.BASE_URL,
    },
  },
  en: {
    title: "Tinta | Works",
    description: "Transforming brands with innovation and creativity.",
    keywords: "works, filmmaking, graphic design, web design",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Works",
      description: "Transforming brands with innovation and creativity.",
      url: process.env.BASE_URL,
      siteName: "Tinta Agency",
      images: [
        {
          url: "", // FALTA IMAGEN
          width: 1200,
          height: 630,
          alt: "Preview of the web",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinta | Works",
      description: "Transforming brands with innovation and creativity.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [""], // FALTA IMAGEN
    },
    alternates: {
      canonical: process.env.BASE_URL,
    },
  },
};

export const SEO_METADATA = {
  homePage,
  portfolioPage,
};
