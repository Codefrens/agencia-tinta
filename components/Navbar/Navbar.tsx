import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { getTranslations } from "@/app/[lang]/translations";
import Container from "../ui/Container";
import BurgerMenu from "../ui/BurgerMenu";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const Navbar = async ({ lang }: { lang: "es" | "en" }) => {
  const { common } = await getTranslations(lang);

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              className="dark:invert"
              src="next.svg"
              alt="Tinta logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <a href="#">{common.navigationLinks.agency}</a>
              </li>
              <li>
                <a href="#">{common.navigationLinks.porfolio}</a>
              </li>
              <li>
                <a href="#">{common.navigationLinks.foodar}</a>
              </li>
              <li>
                <a href="#">{common.navigationLinks.contact}</a>
              </li>
              <li>
                <a href="#">
                  <WhatsappLogo size={32} weight="light" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.burgerMenu}>
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
