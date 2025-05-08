"use client";
import styles from "./style.module.scss";
import { slideUp, slideUp2} from "./animation";
import {
  motion,
} from "framer-motion";
import React from "react";
import Image from "next/image";
import completelogo from "../../../public/logo/logo-completo.png" 

export default function LandingV3() {


  return (
    <>
      <div className={styles.section}  id="home">

     
          <div className={styles.topcontainer}>
            <motion.div variants={slideUp2} initial="initial" animate="enter">
            
              <Image src={completelogo} alt="logo camara"/>
            </motion.div>
          </div>

          <div className={styles.bottomcontainer}>


            <motion.div
              variants={slideUp}
              initial="initial"
              animate="enter"
              className={styles.textcontainer}
            >

            </motion.div>
    
          </div>
   
      </div>
    </>
  );
}
