"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import styles from "./BurgerMenu.module.css";
import { AnimatePresence, motion } from "motion/react";
import { Translations } from "@/translations/types";

const BurgerMenu = ({
  translations,
}: {
  translations: Translations["common"]["navigationLinks"];
}) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/agency", label: translations.agency },
    { href: "/portfolio", label: translations.portfolio },
    { href: "/foodar", label: translations.foodar },
    { href: "/contact", label: translations.contact },
    {
      href: `https://wa.me/+34611149862?text=Hola`,
      label: "Whatsapp",
      external: true,
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    closed: {
      y: 0,
      x: "50%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delay: 0.5 },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className={styles.burgerIcon}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.burgerMenu}
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {links.map(({ href, label, external }) => (
                <motion.li
                  key={href}
                  variants={itemVariants}
                  className={styles.link}
                  onClick={() => setOpen(false)}
                >
                  <Link href={href} target={external ? "_blank" : "_self"}>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
