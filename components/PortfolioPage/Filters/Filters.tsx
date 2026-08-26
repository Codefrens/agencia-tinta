"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { PortfolioFilters } from "@/translations/types";
import styles from "./Filters.module.css";

type FiltersProps = {
  lang: "es" | "en";
  filters: PortfolioFilters;
  activeCategory: string | null;
  activeSubcategory: string | null;
};

const Filters = ({
  lang,
  filters,
  activeCategory,
  activeSubcategory,
}: FiltersProps) => {
  const allLabel = lang === "es" ? "Todos" : "All";
  const activeCat = filters.categories.find((c) => c.slug === activeCategory);

  return (
    <div className={styles.filtersWrapper}>
      <ul className={styles.filters}>
        <li>
          <Link
            href={`/${lang}/portfolio`}
            className={classNames({
              [styles.category]: true,
              [styles.active]: activeCategory === null,
            })}
          >
            {allLabel}
          </Link>
        </li>
        {filters.categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/${lang}/portfolio/${category.slug}`}
              className={classNames({
                [styles.category]: true,
                [styles.active]: activeCategory === category.slug,
              })}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
      {activeCat && activeCat.subcategories.length > 0 && (
        <ul className={styles.subfilters}>
          {activeCat.subcategories.map((sub) => (
            <li key={sub.slug}>
              <Link
                href={`/${lang}/portfolio/${activeCat.slug}/${sub.slug}`}
                className={classNames({
                  [styles.subcategory]: true,
                  [styles.active]: activeSubcategory === sub.slug,
                })}
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filters;
