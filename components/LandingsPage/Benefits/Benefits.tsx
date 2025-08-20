"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
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
  titleLight: string;
  titleBold: string;
  benefitsList: Benefit[];
}

const Benefits = ({ titleLight, titleBold, benefitsList }: BenefitsProps) => {
  // Iconos para cada beneficio en orden
  const benefitIcons = [
    <Trophy key="trophy" size={40} weight="duotone" />,
    <Palette key="palette" size={40} weight="duotone" />,
    <CheckCircle key="check" size={40} weight="duotone" />,
    <MapPin key="map" size={40} weight="duotone" />
  ];

  // Imágenes estáticas (las mismas del ImageCarrousel)
  const images = [
    {
      imageUrl: "https://res.cloudinary.com/nicojoystin/image/upload/v1754416790/agencia-tinta/agencia/produccio%CC%81n_audiovisual_no9vm5.png",
      imageAlt: "Agencia Tinta - Imagen 1",
    },
    {
      imageUrl: "https://res.cloudinary.com/nicojoystin/image/upload/v1755348589/agencia-tinta/landings/production/video_corporativo_z1krvs.webp",
      imageAlt: "Agencia Tinta - Imagen 2",
    },
    {
      imageUrl: "https://res.cloudinary.com/nicojoystin/image/upload/v1755348589/agencia-tinta/landings/production/contenido_redes_sociales_s1wvoh.webp",
      imageAlt: "Agencia Tinta - Imagen 3",
    },
  ];

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleLight}>{titleLight} </span>
            <span className={styles.titleBold}>{titleBold}</span>
          </h2>
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

        {/* Sección de imágenes horizontales */}
        <div className={styles.imagesSection}>
          <div className={styles.imagesContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <Image
                  src={image.imageUrl}
                  alt={image.imageAlt}
                  width={400}
                  height={400}
                  className={styles.image}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits; 