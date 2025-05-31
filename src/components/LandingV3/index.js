"use client";
import styles from "./style.module.scss";
import {
  slideUp,
  slideUp2,
  slideUp3,
  slideLeft,
  fadeInScale,
} from "./animation";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import completelogo from "../../../public/logo/logo-completo.png";
import image1 from "../../../public/images/paneles/eo2.jpg";
import image2 from "../../../public/images/paneles/h4.png";
import image3 from "../../../public/images/paneles/3...jpg";
import image4 from "../../../public/images/paneles/2...jpg";

export default function LandingV3() {
  return (
    <div className={styles.section} id="home">
      <div className={styles.topcontainer}>
        <motion.div variants={slideUp2} initial="initial" animate="enter">
          <Image src={completelogo} alt="logo camara" />
        </motion.div>

        <motion.div
          className={`${styles.aroundImage} ${styles.topLeft}`}
          variants={slideLeft}
          initial="initial"
          animate="enter"
        >
          <Image src={image2} alt="Imagen 1" />
        </motion.div>

        <motion.div
          className={`${styles.aroundImage} ${styles.topRight}`}
          variants={slideUp3}
          initial="initial"
          animate="enter"
        >
          <Image src={image1} alt="Imagen 2" />
        </motion.div>

        <motion.div
          className={`${styles.aroundImage} ${styles.bottomLeft}`}
          variants={fadeInScale}
          initial="initial"
          animate="enter"
        >
          <Image src={image3} alt="Imagen 3" />
        </motion.div>

        <motion.div
          className={`${styles.aroundImage} ${styles.bottomRight}`}
          variants={{
            ...slideUp,
            enter: {
              ...slideUp.enter,
              transition: { ...slideUp.enter.transition, delay: 1.2 },
            },
          }}
          initial="initial"
          animate="enter"
       
        >
          <Image src={image4} alt="Imagen 4" />
        </motion.div>
      </div>
    </div>
  );
}
