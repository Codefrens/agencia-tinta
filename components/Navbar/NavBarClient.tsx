"use client";
import React, { useEffect, useRef } from "react";
import styles from "./NavbarClient.module.css";
import Container from "../ui/Container";
import BurgerMenu from "../ui/BurgerMenu";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { Translations } from "@/translations/types";

const NavbarClient = ({
  translations,
}: {
  translations: Translations["common"];
}) => {
  const navbar = useRef(null);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navbar}
      className={
        scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar
      }
    >
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
                <Link href="/agency">
                  {translations.navigationLinks.agency}
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  {translations.navigationLinks.portfolio}
                </Link>
              </li>
              <li>
                <Link href="foodar">{translations.navigationLinks.foodar}</Link>
              </li>
              <li>
                <Link href="/contact">
                  {translations.navigationLinks.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/+34611149862?text=${translations.whatsappMessage}`}
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

export default NavbarClient;
