const homePage = {
  es: {
    title: "Tinta | Agencia Creativa",
    description: "Transformamos marcas con innovación y creatividad.",
    keywords: "agencia digital, filmmaking, diseño gráfico, diseño web",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Agencia Creativa",
      description: "Transformamos marcas con innovación y creatividad.",
      url: process.env.BASE_URL,
      siteName: "Agencia Tinta",
      images: [
        {
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
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
      title: "Tinta | Agencia Creativa",
      description: "Transformamos marcas con innovación y creatividad.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
      ],
    },
    alternates: {
      canonical: process.env.BASE_URL,
    },
  },
  en: {
    title: "Tinta | Creative Agency",
    description: "Transforming brands with innovation and creativity.",
    keywords: "Creative Agency, filmmaking, graphic design, web design",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Creative Agency",
      description: "Transforming brands with innovation and creativity.",
      url: process.env.BASE_URL,
      siteName: "Tinta Agency",
      images: [
        {
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
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
      title: "Tinta | Creative Agency",
      description: "Transforming brands with innovation and creativity.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
      ],
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
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742127383/agencia-tinta/portfolio_page_ynlvdx.jpg",
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
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127383/agencia-tinta/portfolio_page_ynlvdx.jpg",
      ],
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
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742127383/agencia-tinta/portfolio_page_ynlvdx.jpg",
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
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127383/agencia-tinta/portfolio_page_ynlvdx.jpg",
      ],
    },
    alternates: {
      canonical: process.env.BASE_URL,
    },
  },
};

const foodarPage = {
  es: {
    title: "Foodar | Agencia Tinta",
    description:
      "El futuro de los menús ya está aquí. Muestra tus platos como nunca antes",
    keywords:
      "menu 3d, realidad, aumentanda, creatividad, agencia, fotografia 3d",
    robots: "index, follow",
    openGraph: {
      title: "Foodar | Agencia Tinta",
      description:
        "El futuro de los menús ya está aquí. Muestra tus platos como nunca antes",
      url: `${process.env.BASE_URL}/es/foodar`,
      siteName: "Agencia Tinta",
      images: [
        {
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742050708/agencia-tinta/foodar/1_u1fzpp.png",
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
      title: "Foodar | Agencia Tinta",
      description:
        "El futuro de los menús ya está aquí. Muestra tus platos como nunca antes",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742050708/agencia-tinta/foodar/1_u1fzpp.png",
      ],
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/es/foodar`,
    },
  },
  en: {
    title: "Tinta | Works",
    description:
      "The future of menus is here. Show your dishes as never before",
    keywords: "works, filmmaking, graphic design, web design",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Works",
      description:
        "The future of menus is here. Show your dishes as never before",
      url: `${process.env.BASE_URL}/en/foodar`,
      siteName: "Tinta Agency",
      images: [
        {
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742050708/agencia-tinta/foodar/1_u1fzpp.png",
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
      description:
        "The future of menus is here. Show your dishes as never before",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742050708/agencia-tinta/foodar/1_u1fzpp.png",
      ],
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/en/foodar`,
    },
  },
};

// PORTFOLIOS PAGE

export const generateSEOMetadataPortfolioDetailPage = (slug: string) => {
  return {
    es: {
      title: `${CLIENTS[slug]} | Agencia Tinta`,
      description: `${CLIENTS_DESCRIPTIONS_ES[slug]}`,
      keywords: "agencia digital, filmmaking, diseño gráfico, diseño web",
      robots: "index, follow",
      openGraph: {
        title: `${CLIENTS[slug]} | Agencia Tinta`,
        description: `${CLIENTS_DESCRIPTIONS_ES[slug]}`,
        url: process.env.BASE_URL,
        siteName: "Agencia Tinta",
        images: [
          {
            url: `${CLIENTS_IMAGES[slug]}`,
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
        title: `${CLIENTS[slug]} | Agencia Tinta`,
        description: `${CLIENTS_DESCRIPTIONS_ES[slug]}`,
        site: "@agenciatinta",
        creator: "@agenciatinta",
        images: [`${CLIENTS_IMAGES[slug]}`],
      },
      alternates: {
        canonical: `${process.env.BASE_URL}/es/portfolio/${slug}`,
      },
    },
    en: {
      title: `${CLIENTS[slug]} | Agencia Tinta`,
      description: `${CLIENTS_DESCRIPTIONS_EN[slug]}`,
      keywords: "works, filmmaking, graphic design, web design",
      robots: "index, follow",
      openGraph: {
        title: `${CLIENTS[slug]} | Agencia Tinta`,
        description: `${CLIENTS_DESCRIPTIONS_EN[slug]}`,
        url: process.env.BASE_URL,
        siteName: "Tinta Agency",
        images: [
          {
            url: `${CLIENTS_IMAGES[slug]}`,
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
        description: `${CLIENTS_DESCRIPTIONS_EN[slug]}`,
        site: "@agenciatinta",
        creator: "@agenciatinta",
        images: [`${CLIENTS_IMAGES[slug]}`],
      },
      alternates: {
        canonical: `${process.env.BASE_URL}/en/portfolio/${slug}`,
      },
    },
  };
};

const CLIENTS = {
  "cantina-canalla": "Cantina Canalla",
  "black-label": "Black Label",
  "remax-coast": "Remax Coast",
  "smash-burger": "Smash Burger",
  malavida: "Malavida",
  agape: "Agape",
  "grupo-amigos": "Grupo Amigos",
};

const CLIENTS_DESCRIPTIONS_ES = {
  "cantina-canalla": "Autenticidad mexicana con un giro sofisticado.",
  "black-label": "El street food americano elevado al máximo nivel",
  "remax-coast":
    "Transforma la compra y venta de propiedades en una experiencia visualmente impactante",
  "smash-burger": "La esencia de la smash burger: rápida, intensa y sin rodeos",
  malavida:
    "Malavida es un punto de encuentro donde la buena comida, los cócteles y la diversión se viven sin reglas",
  agape: "Captura la esencia del Mediterráneo en cada joya",
  "grupo-amigos": "Autenticidad mexicana con un giro sofisticado",
};

const CLIENTS_DESCRIPTIONS_EN = {
  "cantina-canalla": "Mexican authenticity with a sophisticated twist.",
  "black-label": "American street food elevated to the highest level",
  "remax-coast":
    "Transforms buying and selling properties into a visually impactful experience",
  "smash-burger":
    "The essence of the smash burger: fast, intense, and straightforward",
  malavida:
    "Malavida is a meeting point where good food, cocktails, and fun are experienced without rules",
  agape: "Captures the essence of the Mediterranean in every jewel",
  "grupo-amigos": "Mexican authenticity with a sophisticated twist",
};

const CLIENTS_IMAGES = {
  "cantina-canalla":
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742034986/agencia-tinta/portfolio/cantina-canalla/fotos/14_cuhl2h.jpg",
  "black-label":
    "https://res.cloudinary.com/nicojoystin/image/upload/v1741464948/agencia-tinta/portfolio/black-label/fotos/10_tdlgz7.jpg",
  "remax-coast":
    "https://res.cloudinary.com/nicojoystin/image/upload/v1741465701/agencia-tinta/portfolio/remax/fotos/12_e3dyyt.jpg",
  "smash-burger":
    "https://res.cloudinary.com/nicojoystin/image/upload/v1741710136/agencia-tinta/portfolio/smash/fotos/portada_wpgxls.jpg",
  malavida:
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742033888/agencia-tinta/portfolio/malavida/fotos/portada_ameg6i.jpg",
  agape:
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742035848/agencia-tinta/portfolio/agape/portada_agape%CC%81e_mbbgo9.jpg",
  "grupo-amigos":
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742036453/agencia-tinta/portfolio/grupo-amigos/portada_z2th7v.jpg",
};

// LANDINGS PAGE
const productionPage = {
  es: {
    title: "Tinta | Producción audiovisual y fotografía en la Costa del Sol.",
    description: "Somos una agencia de creación de contenido, experta en videos corporativos, coberturas de eventos, reels y sesiones fotográficas de alta calidad.",
    keywords: "Videos corporativos, producción audiovisual, fotografía profesional, reels para redes sociales, cobertura de eventos, fotografía de producto",
    robots: "index, follow",
  },
  en: {
    title: "Tinta | Production of audiovisual and photography in the Costa del Sol.",
    description: "We are a content creation agency, expert in corporate videos, event coverage, reels and professional photography sessions.",
    keywords: "Corporate videos, audiovisual production, professional photography, reels for social media, event coverage, product photography",
    robots: "index, follow",
  },
};

export const SEO_METADATA = {
  homePage,
  portfolioPage,
  foodarPage,
  productionPage,
};
