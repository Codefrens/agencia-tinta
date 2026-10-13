"use client";
import classNames from "classnames";
import Link from "next/link";
import { useEffect } from "react";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useReducedMotion,
} from "motion/react";
import { PortfolioFilters } from "@/translations/types";
import styles from "./Filters.module.css";

type FiltersProps = {
  lang: "es" | "en";
  filters: PortfolioFilters;
  activeCategory: string | null;
  activeSubcategory: string | null;
};

const ease = cubicBezier(0.16, 1, 0.3, 1);

// Tracks the last active category across remounts (each navigation remounts
// this component) so the subcategory row reveals only when the category
// changes, not when a subcategory within the same category is selected.
let lastActiveCategory: string | null | undefined;

const Filters = ({
  lang,
  filters,
  activeCategory,
  activeSubcategory,
}: FiltersProps) => {
  const reduceMotion = useReducedMotion();
  const allLabel = lang === "es" ? "Todos" : "All";
  const allSubcategoriesLabel = lang === "es" ? "Todas" : "All";
  const navLabel = lang === "es" ? "Filtrar proyectos" : "Filter projects";
  const activeCat = filters.categories.find((c) => c.slug === activeCategory);
  const hasSubcategories = !!activeCat && activeCat.subcategories.length > 0;
  const shouldReveal =
    !reduceMotion &&
    lastActiveCategory !== undefined &&
    lastActiveCategory !== activeCategory;

  useEffect(() => {
    lastActiveCategory = activeCategory;
  }, [activeCategory]);

  return (
    <nav className={styles.filtersWrapper} aria-label={navLabel}>
      <ul className={styles.filters}>
        <li>
          <Link
            href={`/${lang}/portfolio`}
            aria-current={activeCategory === null ? "page" : undefined}
            className={classNames(styles.pill, styles.category, {
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
              aria-current={
                activeCategory === category.slug ? "page" : undefined
              }
              className={classNames(styles.pill, styles.category, {
                [styles.active]: activeCategory === category.slug,
              })}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {hasSubcategories && (
          <motion.ul
            key={activeCat.slug}
            className={styles.subfilters}
            initial={shouldReveal ? { height: 0, opacity: 0 } : false}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <li>
              <Link
                href={`/${lang}/portfolio/${activeCat.slug}`}
                aria-current={activeSubcategory === null ? "page" : undefined}
                className={classNames(styles.pill, styles.subcategory, {
                  [styles.active]: activeSubcategory === null,
                })}
              >
                {allSubcategoriesLabel}
              </Link>
            </li>
            {activeCat.subcategories.map((sub) => (
              <li key={sub.slug}>
                <Link
                  href={`/${lang}/portfolio/${activeCat.slug}/${sub.slug}`}
                  aria-current={
                    activeSubcategory === sub.slug ? "page" : undefined
                  }
                  className={classNames(styles.pill, styles.subcategory, {
                    [styles.active]: activeSubcategory === sub.slug,
                  })}
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Filters;
