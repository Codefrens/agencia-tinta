import React from "react";
import styles from "./ContentText.module.css";
import Container from "@/components/ui/Container";

const ContentText = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{title} /</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </section>
    </Container>
  );
};

export default ContentText;
