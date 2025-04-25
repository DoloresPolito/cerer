"use client";
import styles from "./style.module.scss";
import { slideUp, opacity, slideUp2 } from "./animation";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";

export default function LandingV2() {
  const home = useRef(null);
  const isInView = useInView(home);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <>
      <div className={styles.section} ref={home} id="home">
        <motion.div style={{ y }} className={styles.motionDiv}>
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="enter"
            className={styles.textcontainer}
          >
            {/* <p className={styles.title}>
              Camara de Energias Renovables de Entre Rios
            </p> */}

            <div className={styles.bottombuttons}></div>
          </motion.div>
        </motion.div>{" "}
      </div>
    </>
  );
}
