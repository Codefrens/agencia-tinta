import Container from "@/components/ui/Container";
import LandingForm from "@/components/LandingsPage/LandingForm";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  lang: "es" | "en";
  titleLight: string;
  titleBold: string;
  subtitle: string;
  formTranslations: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    projectType: string;
    message: string;
    buttonLabel: string;
    buttonLabelSending: string;
    successMessage: string;
    errorMessage: string;
    recaptchaError: string;
    projectTypes: {
      video: string;
      event: string;
      photography: string;
      reels: string;
      other: string;
    };
  };
}

const ContactSection = ({ 
  lang,
  titleLight,
  titleBold,
  subtitle,
  formTranslations 
}: ContactSectionProps) => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className={styles.titleLight}>{titleLight} </span>
              <span className={styles.titleBold}>{titleBold}</span>
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          
          <LandingForm lang={lang} formTranslations={formTranslations} />
        </div>
      </Container>
    </section>
  );
};

export default ContactSection; 