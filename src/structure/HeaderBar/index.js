"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Importamos usePathname
import styles from "./styles.module.scss";
import Header from "@/structure/Header";
import Link from "next/link";
import logo1 from "../../../public/logo/logo-blanco.png";

import Image from "next/image";

export function HeaderBar() {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <div className={styles.navsection}>
      <div
        className={styles.navcontainer}
 
      >
        <Link href="/">
          <div className={styles.headerBrand}>
            <Image src={logo1} alt="logo" />
           
          </div>
        </Link>

        <div className={styles.headerOptions}>
          <Header />
        </div>
      </div>
    </div>
  );
}