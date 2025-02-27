import React from "react";
import styles from "./Clients.module.css";
import Image from "next/image";

const clients = [
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg",
    logoAlt: "Logo de Tinta",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg",
    logoAlt: "Logo de dd",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg",
    logoAlt: "Logo de asd",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg",
    logoAlt: "Logo de assd",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg",
    logoAlt: "Logo de aasd",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg",
    logoAlt: "Logo de asssd",
  },
];

const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {[...clients, ...clients].map((client, index) => (
            <div className={styles.clientCard} key={index}>
              <Image
                src={client.logoUrl}
                alt={client.logoAlt}
                width={120}
                height={38}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
