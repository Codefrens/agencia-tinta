import React from "react";
import styles from "./AiSection.module.css";
import { Translations } from "@/translations/types";
import Container from "@/components/ui/Container";
import VideoComponent from "@/components/ui/VideoComponent/VideoComponent";

const AiSection = ({
  translations,
}: {
  translations: Translations["homePage"]["aiSection"];
}) => {
  return (
    <section>
      <Container className={styles.aiSection}>
        <h2 className={styles.title}>{translations.title}</h2>
        <p className={styles.paragraph}>{translations.paragraph}</p>
      </Container>
      <VideoComponent
        videoSrc="https://player.vimeo.com/video/882997319"
        posterSrc="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        videoLabelButton={translations.buttonLabel}
      />
    </section>
  );
};

export default AiSection;
