import React from "react";
import styles from "./Navbar.module.css";
import { getTranslations } from "@/app/[lang]/translations";
import Container from "../ui/Container";
import BurgerMenu from "../ui/BurgerMenu";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

const Navbar = async ({ lang }: { lang: "es" | "en" }) => {
  const { common } = await getTranslations(lang);

  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.container}>
          <Link href="/" aria-label="go to home page" className={styles.logo}>
            <Image
              src="https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg"
              alt="Tinta logo"
              width={120}
              height={38}
              priority
            />
          </Link>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href="/agency">{common.navigationLinks.agency}</Link>
              </li>
              <li>
                <Link href="/portfolio">
                  {common.navigationLinks.portfolio}
                </Link>
              </li>
              <li>
                <Link href="foodar">{common.navigationLinks.foodar}</Link>
              </li>
              <li>
                <Link href="/contact">{common.navigationLinks.contact}</Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/+34611149862?text=${common.whatsappMessage}`}
                  target="_blank"
                >
                  <WhatsappLogo size={32} weight="light" />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.burgerMenu}>
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
