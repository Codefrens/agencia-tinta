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
  legalPage: {
    title: string;
    subtitle: string;
    content: {
      identificationData: {
        title: string;
        items: string[];
      };
      websiteObjective: {
        title: string;
        content: string;
      };
      intellectualProperty: {
        title: string;
        content: string;
      };
      webUsageAndResponsibility: {
        title: string;
        intro: string;
        items: string[];
      };
      informationUpdate: {
        title: string;
        content: string;
      };
      commercialCommunications: {
        title: string;
        content: string;
      };
      cookiesUsage: {
        title: string;
        content: string;
      };
      applicableLegislation: {
        title: string;
        content: string;
      };
    };
  };
  cookiesPage: {
    title: string;
    subtitle: string;
    description: string;
    content: {
      what: {
        title: string;
        content: string;
        benefits: {
          title: string;
          items: string[];
        };
        security: string;
      };
      types: {
        title: string;
        byOwner: {
          title: string;
          items: string[];
        };
        byDuration: {
          title: string;
          items: string[];
        };
        byPurpose: {
          title: string;
          items: string[];
        };
      };
      ourCookies: {
        title: string;
        technical: {
          title: string;
          content: string;
        };
        analytics: {
          title: string;
          content: string;
        };
        advertising: {
          title: string;
          content: string;
        };
      };
      manage: {
        title: string;
        content: string;
        browsers: string[];
      };
      consent: {
        title: string;
        content: string;
      };
    };
  };
  privacyPage: {
    title: string;
    subtitle: string;
    content: {
      responsible: {
        title: string;
        items: string[];
      };
      dataCollected: {
        title: string;
        intro: string;
        items: string[];
      };
      purpose: {
        title: string;
        intro: string;
        items: string[];
      };
      legitimacy: {
        title: string;
        intro: string;
        items: string[];
      };
      recipients: {
        title: string;
        intro: string;
        items: string[];
        additional: string;
      };
      internationalTransfers: {
        title: string;
        content: string;
      };
      retention: {
        title: string;
        content: string;
      };
      userRights: {
        title: string;
        intro: string;
        items: string[];
      };
      exercisingRights: {
        title: string;
        content: string;
      };
      complaints: {
        title: string;
        intro: string;
        items: string[];
      };
      policyChanges: {
        title: string;
        content: string;
      };
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
