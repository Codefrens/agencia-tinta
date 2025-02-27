import { Translations } from "@/translations/types";
import React from "react";
import styles from "./Cta.module.css";
import Container from "../ui/Container";
import Link from "next/link";

const Cta = ({
  translations,
}: {
  translations: Translations["common"]["cta"];
}) => {
  return (
    <Container>
      <div className={styles.cta}>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: translations.title }}
        />
        <Link href="/contact" className={styles.button}>
          {translations.buttonLabel}
        </Link>
      </div>
    </Container>
  );
};

export default Cta;
