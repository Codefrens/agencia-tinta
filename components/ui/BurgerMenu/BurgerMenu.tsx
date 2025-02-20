"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default BurgerMenu;
