"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Image from "next/image";

import { NavbarDark } from "./components/NavbarDark";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
    </div>
  );
}

{
  /* <NavbarDark title="CryptoGraf" /> */
}

{
  /* <Hero /> */
}
