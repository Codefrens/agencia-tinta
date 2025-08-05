"use client";
import { Translations } from "@/translations/types";
import styles from "./CtaCall.module.css";
import Container from "../../ui/Container";
import Link from "next/link";
import { gtmEvent } from "@/utils/gtm";
import { usePathname } from "next/navigation";

const CtaCall = ({
  translations,
}: {
  translations: Translations["common"]["cta"];
}) => {
  const pathname = usePathname();
  return (
    <Container>
      <div className={styles.cta}>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: translations.title }}
        />
        <Link href="https://calendar.app.google/EuWs5SfLFcWazatP7" onClick={() => {
          gtmEvent("cta_click", {
            landing_page: pathname,
            section: "cta_bottom",
            page_destination: "https://calendar.app.google/EuWs5SfLFcWazatP7",
          });
        }} className={styles.button} target="_blank">
          {translations.buttonLabel}
        </Link>
      </div>
    </Container>
  );
};

export default CtaCall;
