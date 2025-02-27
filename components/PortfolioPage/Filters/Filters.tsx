"use client";
import { Categories } from "@/translations/types";
import classNames from "classnames";
import React from "react";
import styles from "./Filters.module.css";

const Filters = ({
  activeCategory,
  setActiveCategory,
  categories,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: Categories;
}) => {
  return (
    <ul className={styles.filters}>
      {categories.map((category) => (
        <li key={category}>
          <button
            onClick={() => setActiveCategory(category)}
            className={classNames({
              [styles.category]: true,
              [styles.active]: activeCategory === category,
            })}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
