import { Translations } from "@/translations/types";
import styles from "./CtaCall.module.css";
import Container from "../../ui/Container";
import Link from "next/link";

const CtaCall = ({
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
        <Link href="https://calendar.app.google/EuWs5SfLFcWazatP7" className={styles.button} target="_blank">
          {translations.buttonLabel}
        </Link>
      </div>
    </Container>
  );
};

export default CtaCall;
