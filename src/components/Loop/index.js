import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop = ({ reverse }) => {


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

  const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {allLogos.map((logo, index) => (
          <div className={styles.logoWrapper} key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={250}
              height={120}
           
         
              className={`${styles.logo} ${
                logo.size === "tiny"
                  ? styles.tinyLogo
                  : logo.size === "small"
                  ? styles.smallLogo
                  : logo.size === "large"
                  ? styles.largeLogo
                  : ""
              }`}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={`loop-${index}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={250}
              height={120}
           
              className={`${styles.logo} ${
                logo.size === "tiny"
                  ? styles.tinyLogo
                  : logo.size === "small"
                  ? styles.smallLogo
                  : logo.size === "large"
                  ? styles.largeLogo
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loop;