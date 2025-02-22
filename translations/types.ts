type Categories = string[];

type Porfolio = {
  title: string;
  categories: Categories;
  ImageUrl: string;
  ImageAlt: string;
};

export type Translations = {
  common: {
    navigationLinks: {
      agency: string;
      porfolio: string;
      foodar: string;
      contact: string;
    };
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
      portfolioGrid: Porfolio[];
      morePortfolio: string;
    };
  };
};
