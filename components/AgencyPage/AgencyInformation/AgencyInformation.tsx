import React from "react";
import Container from "@/components/ui/Container";
import styles from "./AgencyInformation.module.css";

const AgencyInformation = ({
  translations,
}: {
  translations: Translations["agencyPage"];
}) => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{translations.title}</h2>
        <div className={styles.content}>
          <p className="font-color font-medium">{translations.paragraph1}</p>
          <p className="font-color-gray">{translations.paragraph2}</p>
        </div>
      </section>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{translations.serviceTitle}</h2>
        <div className={styles.serviceContent}>
          {translations.services.map((service, index) => (
            <div key={index}>
              <h3 className="font-color font-bold">{service.title}</h3>
              <p className="font-color-gray">{service.description}</p>
              <ul className="font-color-gray">
                {service.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default AgencyInformation;
