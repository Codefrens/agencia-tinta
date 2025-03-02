import Card from "@/components/ui/Card";
import React from "react";
import styles from "./Related.module.css";
import Container from "@/components/ui/Container";

const Related = ({
  related,
}: {
  related: {
    title: string;
    categories: string[];
    imageUrl: string;
    imageAlt: string;
    slug: string;
  }[];
}) => {
  return (
    <Container>
      <div className={styles.related}>
        {related.map((related, index) => (
          <Card
            key={index}
            title={related.title}
            imgSrc={related.imageUrl}
            imgAlt={related.imageAlt}
            categories={related.categories}
            link={`/portfolio/${related.slug}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Related;
