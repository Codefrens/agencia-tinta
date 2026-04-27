const BASE_URL = process.env.BASE_URL || "https://agenciatinta.com";


const homePage = {
  es: {
    title: "Agencia de producción audiovisual que transforma ideas en experiencias",
    description: "Creamos narrativas visuales que conectan con tu público como agencia de producción audiovisual enfocada en diseño, fotografía y soluciones auténticas",
    keywords: "agencia digital, filmmaking, diseño gráfico, diseño web",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Agencia de Publicidad",
      description: "Transformamos marcas con innovación y creatividad.",
      url: `${BASE_URL}/es`,
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
      title: "Tinta | Agencia de Publicidad",
      description: "Transformamos marcas con innovación y creatividad.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
      ],
    },
    alternates: {
      canonical: `${BASE_URL}/es`,
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
      url: `${BASE_URL}/en`,
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
      canonical: `${BASE_URL}/en`,
    },
  },
};

const agencyPage = {
  es: {
    title: "Contenido, estrategia y vídeo profesional en nuestra agencia creativa",
    description:
      "En nuestra agencia creativa diseñamos estrategias y producciones de video profesional que convierten mensajes en experiencias visuales. ",
    keywords:
      "agencia creativa, producción audiovisual, fotografía profesional, marketing digital, branding, diseño web",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | Nuestra agencia",
      description:
        "Estrategia, creatividad y producción audiovisual para marcas que buscan diferenciarse.",
      url: `${process.env.BASE_URL}/es/agency`,
      siteName: "Agencia Tinta",
      images: [
        {
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
          width: 1200,
          height: 630,
          alt: "Vista previa de la página de agencia",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinta | Nuestra agencia",
      description:
        "Estrategia, creatividad y producción audiovisual para marcas que buscan diferenciarse.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
      ],
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/es/agency`,
    },
  },
  en: {
    title: "Tinta | About the agency",
    description:
      "Meet Tinta: strategy, creativity and audiovisual production to build brands with identity and results.",
    keywords:
      "creative agency, audiovisual production, professional photography, digital marketing, branding, web design",
    robots: "index, follow",
    openGraph: {
      title: "Tinta | About the agency",
      description:
        "Strategy, creativity and audiovisual production for brands that want to stand out.",
      url: `${process.env.BASE_URL}/en/agency`,
      siteName: "Tinta Agency",
      images: [
        {
          url: "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
          width: 1200,
          height: 630,
          alt: "Preview of the agency page",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tinta | About the agency",
      description:
        "Strategy, creativity and audiovisual production for brands that want to stand out.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg",
      ],
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/en/agency`,
    },
  },
};

const portfolioPage = {
  es: {
    title: "Explora nuestros proyectos audiovisuales aplicados en diferentes formatos",
    description: "Nuestro portfolio reúne diversos trabajos creados para marcas de distintos sectores. Proyectos audiovisuales aplicados a producto y contenidos digitales.",
    keywords: "agencia digital, filmmaking, diseño gráfico, diseño web",
    robots: "index, follow",
    openGraph: {
      title: "Explora nuestros proyectos audiovisuales aplicados en diferentes formatos",
      description: "Nuestro portfolio reúne diversos trabajos creados para marcas de distintos sectores. Proyectos audiovisuales aplicados a producto y contenidos digitales.",
      url: `${BASE_URL}/es/portfolio`,
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
      title: "Explora nuestros proyectos audiovisuales aplicados en diferentes formatos",
      description: "Nuestro portfolio reúne diversos trabajos creados para marcas de distintos sectores. Proyectos audiovisuales aplicados a producto y contenidos digitales.",
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [
        "https://res.cloudinary.com/nicojoystin/image/upload/v1742127383/agencia-tinta/portfolio_page_ynlvdx.jpg",
      ],
    },
    alternates: {
      canonical: `${BASE_URL}/es`,
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
      url: `${BASE_URL}/en/portfolio`,
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
      canonical: `${BASE_URL}/en`,
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
        url: `${BASE_URL}/es/portfolio/${slug}`,
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
        canonical: `${BASE_URL}/es/portfolio/${slug}`,
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
        url: `${BASE_URL}/en/portfolio/${slug}`,
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
        canonical: `${BASE_URL}/en/portfolio/${slug}`,
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
  bacardi: "Bacardi",
  "ac-hotel": "AC Hotel",
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
  bacardi: "Acompañamos el lanzamiento de la nueva línea caribeña de Bacardi, en colaboración con la agencia BigBadWolf",
  "ac-hotel": "Elevamos la experiencia de The Suite Bar, el rooftop más exclusivo del Hotel AC by Marriott Málaga Palacio.",
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
  bacardi: "We accompany the launch of the new Caribbean line of Bacardi, in collaboration with the BigBadWolf agency",
  "ac-hotel": "We elevate the experience of The Suite Bar, the most exclusive rooftop at the AC Hotel by Marriott Málaga Palacio.",
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
  bacardi:
    "https://res.cloudinary.com/nicojoystin/image/upload/v1757616386/agencia-tinta/portfolio/bacardi/PORTADA_HOME_BACARDI_ckxzub.webp",
  "ac-hotel":
    "https://res.cloudinary.com/nicojoystin/image/upload/v1757616411/agencia-tinta/portfolio/ac-hoteles/PORTADA_HOME_AC_HOTEL._m1tetv.webp",
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

const videoPage = {
  es: {
    title: "Producción de video para empresas | Videos corporativos y contenido audiovisual",
    description:
      "Producción de video para empresas: videos corporativos, contenido para redes sociales, cobertura de eventos y videos promocionales. Creamos contenido audiovisual estratégico para marcas que buscan visibilidad y crecimiento.",
    keywords:
      "producción audiovisual, videos corporativos, cobertura de eventos, reels, video marketing, contenido para redes sociales",
    robots: "index, follow",
  },
  en: {
    title: "Tinta | Audiovisual production on the Costa del Sol.",
    description:
      "Video production for brands: corporate videos, event coverage, reels and social media content with a strategic approach.",
    keywords:
      "audiovisual production, corporate videos, event coverage, reels, video marketing, social media content",
    robots: "index, follow",
  },
};

const fotografiaPage = {
  es: {
    title: "Servicios de fotografía profesional para empresas | Agencia Tinta",
    description:
      "Fotografía profesional para empresas: fotografía corporativa, producto, eventos, gastronomía e inmobiliaria. Creamos imágenes estratégicas para marcas, redes sociales y marketing digital.",
    keywords:
      "fotografía profesional, fotografía de producto, fotografía gastronómica, fotografía corporativa, fotografía de espacios, contenido para marcas",
    robots: "index, follow",
  },
  en: {
    title: "Tinta | Professional photography on the Costa del Sol.",
    description:
      "Professional photography for businesses: product, food, interiors and corporate shoots to project a consistent, attractive image.",
    keywords:
      "professional photography, product photography, food photography, corporate photography, interior photography, brand content",
    robots: "index, follow",
  },
};

const aestheticPage = {
  es: {
    title: "Tinta | Marketing digital y redes sociales para clínicas estéticas en España",
    description: "Especialistas en videos profesionales, fotografía de tratamientos, publicidad efectiva y gestión de redes sociales para potenciar clínicas estéticas.",
    keywords: "marketing digital clínicas estéticas, videos para centros de belleza, fotografía tratamientos estéticos, gestión redes sociales dental estética, publicidad Google Ads clínicas",
    robots: "index, follow",
  },
  en: {
    title: "Tinta | Digital marketing and social media for aesthetic clinics in Spain",
    description: "Specialists in professional videos, treatment photography, effective advertising and social media management to boost aesthetic clinics.",
    keywords: "digital marketing aesthetic clinics, videos for beauty centers, aesthetic treatment photography, social media management aesthetic medicine, Google Ads advertising clinics",
    robots: "index, follow",
  },
};

const dentalPage = {
  es: {
    title: "Tinta | Marketing digital y redes sociales para clínicas dentales en España",
    description: "Especialistas en videos profesionales, fotografía de tratamientos dentales, publicidad efectiva y gestión de redes sociales para potenciar clínicas dentales.",
    keywords: "marketing digital clínicas dentales, videos para clínicas dentales, fotografía tratamientos dentales, gestión redes sociales odontología, publicidad Google Ads dentistas",
    robots: "index, follow",
  },
  en: {
    title: "Tinta | Digital marketing and social media for dental clinics in Spain",
    description: "Specialists in professional videos, dental treatment photography, effective advertising and social media management to boost dental clinics.",
    keywords: "digital marketing dental clinics, videos for dental clinics, dental treatment photography, social media management dentistry, Google Ads advertising dentists",
    robots: "index, follow",
  },
};

const thankYouPage = {
  es: {
    title: "Gracias por tu mensaje | Agencia Tinta",
    description: "Hemos recibido tu solicitud correctamente. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.",
    keywords: "contacto, mensaje enviado, agencia, servicios audiovisuales",
    robots: "noindex, follow",
  },
  en: {
    title: "Thank you for your message | Tinta Agency",
    description: "We have received your request successfully. Our team will contact you within the next 24 hours.",
    keywords: "contact, message sent, agency, audiovisual services",
    robots: "noindex, follow",
  },
};

export const SEO_METADATA = {
  homePage,
  agencyPage,
  portfolioPage,
  foodarPage,
  productionPage,
  videoPage,
  fotografiaPage,
  aestheticPage,
  dentalPage,
  thankYouPage,
};
