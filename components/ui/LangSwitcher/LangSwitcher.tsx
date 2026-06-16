"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./LangSwitcher.module.css";

const locales = ["es", "en"] as const;

const LangSwitcher = ({ lang }: { lang: "es" | "en" }) => {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(es|en)/, "") || "/";

  return (
    <div className={styles.switcher}>
      {locales.map((locale, i) => (
        <span key={locale} className={styles.item}>
          {i > 0 && <span className={styles.separator}>|</span>}
          <Link
            href={`/${locale}${pathWithoutLocale}`}
            className={`${styles.link} ${locale === lang ? styles.active : ""}`}
            aria-current={locale === lang ? "page" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default LangSwitcher;
