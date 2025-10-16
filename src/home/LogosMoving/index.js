import React from "react";
import styles from "./styles.module.scss";
import Loop from "@/components/Loop";
import Image from "next/image";

const logos = [
  { src: "/logos/calvo.png", alt: "Calvo", size: "small" },
  { src: "/logos/cersolar2.png", alt: "Cersolar", size: "default" },
  { src: "/logos/chico.svg", alt: "Coenergy", size: "large" },
  { src: "/logos/reenerger.png", alt: "ReEnerger", size: "default" },
  { src: "/logos/SER.png", alt: "Ser", size: "tiny" },
  { src: "/logos/LG.png", alt: "LG", size: "default" },
  { src: "/logos/time.png", alt: "Time Solar", size: "small" },
  { src: "/logos/ecoenergy.png", alt: "EcoEnergy", size: "default" }, // ejemplo de agrandado
  { src: "/logos/enova.png", alt: "eNova", size: "small" },

];

const LogosMoving = () => {
  return (
    <div className={styles.section}>
      <div className={styles.fullcontainer}>
        <h6 className={styles.title}>
          Miembros de la Cámara de <span>Energías Renovables</span> de Entre Ríos
        </h6>

        {/* Desktop version */}
        <div className={styles.movingContainer}>
          <Loop reverse={true} />
          <Loop reverse={false} />
        </div>

        {/* Mobile version */}
        <div className={styles.staticContainer}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <Image
                src={logo.src}
                alt={`Logo ${index + 1}`}
                fill
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosMoving;
