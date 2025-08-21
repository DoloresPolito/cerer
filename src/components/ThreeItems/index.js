import React from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../../components/AnimatedDiv";
import { motion } from "framer-motion";

export default function ThreeItems() {
  const items = [
    {
      id: 1,
      title: "Cantidad de Asociados",
      number: "26",
      delay: 0.3,
    },
    {
      id: 2,
      title: "Usuarios Generadores",
      number: "423",
      delay: 0.9,
    },
    {
      id: 3,
      title: "Potencia Instalada",
      number: "17MW",
   
      delay: 2,
    },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {items.map((item) => {
          return (
            <motion.div
              className={styles.item}
              initial={{ backgroundSize: "100%", opacity: 1 }}
              animate={{ backgroundSize: "100%", opacity: 1 }}
            >
              <div className={styles.textcontainer}>
                <AnimatedDiv delay={item.delay}>
                  <h5>{item.number}</h5>
                  <p>{item.title}</p>
                </AnimatedDiv>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
