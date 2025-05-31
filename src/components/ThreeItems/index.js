import React, { useState } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../../components/AnimatedDiv";
import { motion } from "framer-motion";
import Link from "next/link";


export default function ThreeItems() {
  const items = [
    {
      id: 1,
      title: "Años de trabajo",
      number:"5",
      imageUrl: "/images/paneles/hero.png",
      delay: 0.3,
      link: "/c",
    },
    {
      id: 2,
      title: "Cantidad de miembros",
      number:"35",
      imageUrl: "/images/paneles/paneles.png",
      delay: 0.9,
      link: "/",
    },
    {
      id: 3,
      title: "Tramites",
      number:"+28",
      imageUrl: "/images/paneles/hero.png",
      delay: 1.5,
      link: "/",
    },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {items.map((item) => {
         

          return (
            <Link key={item.id} href={item.link} className={styles.fullLink}>
              <motion.div
                className={styles.item}
                initial={{ backgroundSize: "100%", opacity: 1 }}
              
                animate={{ backgroundSize: "100%", opacity: 1 }}
    
              >
       

                <div className={styles.textcontainer}>
                  <AnimatedDiv delay={item.delay}>
                    <h6>{item.number}</h6>
                    <h6>{item.title}</h6>
                  </AnimatedDiv>

      
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}