import React from "react";
import { getTranslations } from "@/app/[lang]/translations";
import NavbarClient from "./NavBarClient";

const Navbar = async ({ lang }: { lang: "es" | "en" }) => {
  const { common } = await getTranslations(lang);

  return <NavbarClient lang={lang} translations={common} />;
};

export default Navbar;
