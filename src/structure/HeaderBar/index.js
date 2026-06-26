"use client";
import styles from "./styles.module.scss";
import Header from "@/structure/Header";
import Link from "next/link";
import logo2 from "../../../public/logo/logo-color.png";
import Image from "next/image";

export function HeaderBar() {

  return (
    <div className={styles.navsection}>
      <div className={styles.navcontainer}>
        <Link href="/">
          <div className={styles.headerBrand}>
            <Image src={logo2} alt="logo" />
          </div>
        </Link>

        <div className={styles.headerOptions}>
          <Header />
        </div>
      </div>
    </div>
  );
}
