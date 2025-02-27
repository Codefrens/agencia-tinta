export type Categories = string[];

type Porfolio = {
  title: string;
  categories: Categories;
  ImageUrl: string;
  ImageAlt: string;
  slug: string;
};

type Service = {
  title: string;
  description: string;
  tags: string[];
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
  };
  homePage: {
    hero: {
      title: string;
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
      successMessage: string;
      errorMessage: string;
      requiredError: string;
    };
  };
};
