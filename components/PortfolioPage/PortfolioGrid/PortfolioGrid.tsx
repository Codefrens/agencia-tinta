"use client";

import { Translations } from "@/translations/types";
import styles from "./PortfolioGrid.module.css";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Filters from "../Filters";

type PortfolioGridProps = {
  lang: "es" | "en";
  projects: Translations["common"]["portfolioGrid"];
  filters: Translations["common"]["portfolioFilters"];
  activeCategory: string | null;
  activeSubcategory: string | null;
};

const PortfolioGrid = ({
  lang,
  projects,
  filters,
  activeCategory,
  activeSubcategory,
}: PortfolioGridProps) => {
  return (
    <Container>
      <div className={styles.filters}>
        <Filters
          lang={lang}
          filters={filters}
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
        />
      </div>
      <div className={styles.portfolioGrid}>
        {projects.length > 0 ? (
          projects.map((port) => (
            <Card
              key={port.title}
              lang={lang}
              link={`/portfolio/${port.slug}`}
              imgAlt={port.imageAlt}
              imgSrc={port.imageUrl}
              title={port.title}
              categories={port.categories}
            />
          ))
        ) : (
          <p className={styles.empty}>
            {lang === "es"
              ? "No hay proyectos en esta categoría todavía."
              : "No projects in this category yet."}
          </p>
        )}
      </div>
    </Container>
  );
};

export default PortfolioGrid;
