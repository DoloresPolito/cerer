"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./Nav";

import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/logo/logo-blanco.png"
export default function Index() {
  const [isActive, setIsActive] = useState(false);

  const navdesktop = [
    { id: "1.", title: "INICIO", url: "/", href: "home" },
    { id: "2.", title: "NOSOTROS", url: "/nosotros", href: "projects" },
    { id: "3.", title: "NOTICIAS", url: "/noticias", href: "projects" },
    { id: "4.", title: "CONTACTO", url: "/contacto", href: "contact" },
  ];
  const underlineVariants = {
    initial: {
      width: 0,
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">
          <div className={styles.logocontainer}>
           
              <div className={styles.logo}>
         <Image src={logo} alt="logo"/>
              </div>
         
          </div>
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>

        <div>
          <div className={styles.navcontainerdesktop}>
            {navdesktop.map((link, i) => {
              return (
                <>
                  <Link key={i} href={link.url}>
                    <motion.div className={styles.navitem} whileHover="hover">
                      <p class="styled-paragraph">
                        <span class="highlighted">{link.id} </span> {link.title}
                      </p>
                      <motion.div
                        className={styles.underline}
                        variants={underlineVariants}
                      />
                    </motion.div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}
