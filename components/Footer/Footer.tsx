import React from "react";
import styles from "./Footer.module.css";
import Container from "../ui/Container";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const Location = ({
  country,
  city,
  address,
}: {
  country: string;
  city: string;
  address: string;
}) => {
  return (
    <div className={styles.location}>
      <p className={styles.country}>{country}</p>
      <p className={styles.city}>{city}</p>
      <p className={styles.address}>{address}</p>
    </div>
  );
};

const SocialLink = ({ name, url }: { name: string; url: string }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className={styles.socialLink}>
        {name} <ArrowUpRight size={24} weight="bold" />
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.upFooter}>
          <div className={styles.locations}>
            <Location
              country="España"
              city="Málaga"
              address="Plaza de la Merced 16, P1 Izquierda 29012, Málaga"
            />
            <Location
              country="Argentina"
              city="Buenos Aires"
              address="Santos Dumont 2719 1426, CABA"
            />
          </div>
          <div className={styles.socialLinks}>
            <SocialLink
              name="Facebook"
              url="https://www.facebook.com/agenciatinta"
            />
            <SocialLink
              name="Instagram"
              url="https://www.instagram.com/agenciatinta"
            />
            <SocialLink
              name="Twitter"
              url="https://www.twitter.com/agenciatinta"
            />
          </div>
        </div>
        <div className={styles.downFooter}>
          <div className={styles.logo}>
            <Image
              src="https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg"
              alt="Tinta logo"
              width={100}
              height={38}
              priority
            />
          </div>
          <div className={styles.info}>
            <a href="mailto:agenciadigitaltinta@gmail.com">
              agenciadigitaltinta@gmail.com
            </a>
            <a href="tel:611149862">611 149 862</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
