"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import styles from "./Benefits.module.css";
import { 
  Medal, 
  Lightbulb, 
  HandHeart, 
  Package, 
  Palette,
  CheckCircle,
  MapPin
} from "@phosphor-icons/react";
import { Trophy } from "@phosphor-icons/react/dist/ssr/Trophy";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  titleLight: string;
  titleBold: string;
  subtitle: string;
  benefitsList: Benefit[];
  source: string;
}

const aestheticBenefitIcons = [
  <Medal key="experience" size={40} weight="duotone" />,
  <Lightbulb key="creativity" size={40} weight="duotone" />,
  <HandHeart key="personal-attention" size={40} weight="duotone" />,
  <Package key="complete-service" size={40} weight="duotone" />
];

const productionBenefitIcons = [
  <Trophy key="trophy" size={40} weight="duotone" />,
  <Palette key="palette" size={40} weight="duotone" />,
  <CheckCircle key="check" size={40} weight="duotone" />,
  <MapPin key="map" size={40} weight="duotone" />
];

const dentalBenefitIcons = [
  <Trophy key="trophy" size={40} weight="duotone" />,
  <Palette key="palette" size={40} weight="duotone" />,
  <CheckCircle key="check" size={40} weight="duotone" />,
  <MapPin key="map" size={40} weight="duotone" />
];
  

const Benefits = ({ titleLight, titleBold, subtitle, benefitsList, source}: BenefitsProps) => {

  const benefitIcons = {
    "landing-aesthetic": aestheticBenefitIcons,
    "landing-production": productionBenefitIcons,
    "landing-photography": productionBenefitIcons,
    "landing-dental": dentalBenefitIcons
  }

  const currentIcons = benefitIcons[source] || benefitIcons["landing-production"] || [];  

  const images = {
    "landing-aesthetic": [
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757617286/agencia-tinta/agencia/EQUIPO_wilzd3.webp",
        imageAlt: "Equipo fundador de Tinta",
      },
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757616331/agencia-tinta/landings/aesthetic/CLINICA_ESTE%CC%81TICA_OP1_otpcdu.webp",
        imageAlt: "",
      },
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757616332/agencia-tinta/landings/aesthetic/CLINICA_ESTE%CC%81TICA_TRABAJANDO_wkxlnd.webp",
        imageAlt: "",
      },
    ],
    "landing-production": [
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757617286/agencia-tinta/agencia/EQUIPO_wilzd3.webp",
        imageAlt: "Equipo fundador de Tinta",
      },
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1741969636/agencia-tinta/agencia/Agencia_3_yfv04z.png",
          imageAlt: "Persona filmando",
      },
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1741969636/agencia-tinta/agencia/Agencia_2_jioyvh.png",
        imageAlt: "Persona trabajando en escritorio con ordenador",
      },
    ],
    "landing-dental": [
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757617286/agencia-tinta/agencia/EQUIPO_wilzd3.webp",
        imageAlt: "Equipo fundador de Tinta",
      },
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757616308/agencia-tinta/landings/dental/CLINICA_DENTISTA_OP1_nmnkwf.webp",
        imageAlt: "Persona filmando",
      },
      {
        imageUrl:
          "https://res.cloudinary.com/nicojoystin/image/upload/v1757616308/agencia-tinta/landings/dental/CLINICA_DENTAL_TRABAJANDO_edqamd.webp",
        imageAlt: "Persona trabajando en escritorio con ordenador",
      },
    ]
  };

  const currentImages = images[source] || images["landing-production"] || [];

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleLight}>{titleLight} </span>
            <span className={styles.titleBold}>{titleBold}</span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefitsList.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.iconContainer}>
                {currentIcons[index] || null}
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
            {currentImages.map((image, index) => (
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