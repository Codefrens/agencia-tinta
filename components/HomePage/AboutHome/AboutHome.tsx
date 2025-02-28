import React from "react";
import { Translations } from "@/translations/types";
import styles from "./AboutHome.module.css";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Blob from "@/components/ui/Blob";

const AboutHome = ({
  translations,
}: {
  translations: Translations["homePage"]["about"];
}) => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <Blob
          width="50vw"
          height="80vh"
          path={"polygon(0 18%, 34% 35%, 85% 58%, 36% 78%, 0 91%)"}
          top="0"
          left="-20%"
        />
        <h2 className={styles.title}>{translations.title}</h2>
        <div className={styles.content}>
          <p className="font-color font-bold">{translations.paragraph1}</p>
          <p className="font-color-gray">{translations.paragraph2}</p>
          <Link href="/agency">
            <Button className={styles.button}>
              {translations.buttonLabel}
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default AboutHome;
