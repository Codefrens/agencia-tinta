export type Categories = string[];

type Porfolio = {
  title: string;
  categories: Categories;
  imageUrl: string;
  imageAlt: string;
  slug: string;
};

type Service = {
  title: string;
  description: string;
  tags: string[];
};

type PricingPlan = {
  title: string;
  price: string;
  period: string;
  isFeatured?: boolean;
  features: { text: string }[];
  ctaText?: string;
};

export type Translations = {
  common: {
    navigationLinks: {
      agency: string;
      portfolio: string;
      foodar: string;
      contact: string;
    };
    cta: {
      title: string;
      buttonLabel: string;
    };
    portfolioGrid: Porfolio[];
    filters: Categories;
    whatsappMessage: string;
    client: string;
    year: string;
    sector: string;
  };
  homePage: {
    hero: {
      title: string;
      highlightWords: string[];
      subtitle: string;
      reelLabel: string;
    };
    about: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      buttonLabel: string;
    };
    portfolio: {
      morePortfolio: string;
    };
    aiSection: {
      title: string;
      paragraph: string;
      buttonLabel: string;
    };
    realitySection: {
      title: string;
      paragraph: string;
      buttonLabel: string;
      imgSrc: string;
      imgAlt: string;
    };
  };
  portfolioPage: {
    hero: {
      title: string;
    };
  };
  agencyPage: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    serviceTitle: string;
    services: Service[];
  };
  contactPage: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      buttonLabel: string;
      buttonLabelSending: string;
      successMessage: string;
      errorMessage: string;
      requiredError: string;
    };
  };
  foodarPage: {
    hero: {
      name: string;
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
    howItWorks: {
      title: string;
      cards: {
        id: string;
        title: string;
        imageUrl: string;
        imageAlt: string;
      }[];
    };
    benefits: {
      title: string;
      imageUrl: string;
      imageAlt: string;
      features: {
        title: string;
        description: string;
        iconUrl: string;
      }[];
    };
    pricing: PricingPlan[];
    contactForm: {
      title: string;
    };
  };
};
