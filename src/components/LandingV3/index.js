"use client";
import styles from "./style.module.scss";
import { slideUp, slideLeft, fadeInScale } from "./animation";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import completelogo from "../../../public/logo/logo-completo.png";
import image1 from "../../../public/images/newhero/1.png";
import image2 from "../../../public/images/newhero/fondopanel.png";
import image3 from "../../../public/images/newhero/3.png";
import image4 from "../../../public/images/newhero/atardecer.png";
import image5 from "../../../public/images/newhero/panel-pasto.png";

export default function LandingV3() {
  return (
    <div className={styles.section} id="home">
      <div className={styles.gridContainer}>
        <motion.div
          className={styles.gridItem}
          variants={slideLeft}
          initial="initial"
          animate="enter"
          transition={{ delay: 0.2 }}
          style={{ gridArea: "img1" }}
        >
          <Image src={image1} alt="Eólica" layout="responsive" />
        </motion.div>

        <motion.div
          className={styles.gridItem}
          variants={slideUp}
          initial="initial"
          animate="enter"
          transition={{ delay: 0.4 }}
          style={{ gridArea: "img2" }}
        >
          <Image src={image2} alt="Paneles solares" layout="responsive" />
        </motion.div>

        <motion.div
          className={styles.gridItem}
          variants={fadeInScale}
          initial="initial"
          animate="enter"
          transition={{ delay: 0.6 }}
          style={{ gridArea: "img3" }}
        >
          <Image src={image3} alt="Panel vertical" layout="responsive" />
        </motion.div>

        <motion.div
          className={styles.gridItem}
          variants={slideUp}
          initial="initial"
          animate="enter"
          transition={{ delay: 0.8 }}
          style={{ gridArea: "img4" }}
        >
          <Image src={image4} alt="Atardecer con paneles" layout="responsive" />
        </motion.div>

        <motion.div
          className={styles.gridItem}
          variants={slideUp}
          initial="initial"
          animate="enter"
          transition={{ delay: 1 }}
          style={{ gridArea: "img5" }}
        >
          <Image src={image5} alt="Turbina al amanecer" layout="responsive" />
        </motion.div>

        <motion.div
          className={styles.logo}
          variants={slideUp}
          initial="initial"
          animate="enter"
          transition={{ delay: 1.2 }}
        >
          <Image src={completelogo} alt="Logo CERER" />
        </motion.div>
      </div>
    </div>
  );
}
