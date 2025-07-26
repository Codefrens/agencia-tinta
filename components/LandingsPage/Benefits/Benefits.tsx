"use client";
import Container from "@/components/ui/Container";
import styles from "./Benefits.module.css";
import { 
  Trophy, 
  Palette, 
  CheckCircle, 
  MapPin 
} from "@phosphor-icons/react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  benefitsList: Benefit[];
}

const Benefits = ({ title, benefitsList }: BenefitsProps) => {
  // Iconos para cada beneficio en orden
  const benefitIcons = [
    <Trophy key="trophy" size={40} weight="duotone" />,
    <Palette key="palette" size={40} weight="duotone" />,
    <CheckCircle key="check" size={40} weight="duotone" />,
    <MapPin key="map" size={40} weight="duotone" />
  ];

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefitsList.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.iconContainer}>
                {benefitIcons[index]}
              </div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits; 