import React from "react";
import styles from "./Clients.module.css";
import Image from "next/image";

const clients = [
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741895736/agencia-tinta/clientes/1_AC_HOTELES_POR_AHORA_DEJAR_OCULTO_yhqj5x.png",
    logoAlt: "AC Hoteles logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741895737/agencia-tinta/clientes/2_BACARDI_oubtxw.png",
    logoAlt: "Bacardi Logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741897583/agencia-tinta/clientes/remax_logo_gmqncx.png",
    logoAlt: "Remax Coast Logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741897584/agencia-tinta/clientes/cantina_logo_y61iam.png",
    logoAlt: "Cantina Canalla Logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741897584/agencia-tinta/clientes/black_logo_nh3gls.png",
    logoAlt: "Black Label Logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741895736/agencia-tinta/clientes/6_AGAPE_atxgsc.png",
    logoAlt: "Agape Logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741897586/agencia-tinta/clientes/smash_logo_cejb3o.png",
    logoAlt: "Smash Burger Logo",
  },
  {
    logoUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741897585/agencia-tinta/clientes/barberiaM_logo_rqyts9.png",
    logoAlt: "Barberia M Logo",
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
