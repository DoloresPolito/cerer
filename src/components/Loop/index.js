import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop = ({ reverse }) => {
  const logos1 = [
    { src: "/logos/calvo.png", alt: "Calvo", size: "small" },
    { src: "/logos/cersolar2.png", alt: "Cersolar", size: "default" },
    { src: "/logos/chico.svg", alt: "Coenergy", size: "large" },
    { src: "/logos/reenerger.png", alt: "ReEnerger", size: "default" },
    { src: "/logos/ser.png", alt: "Ser", size: "tiny" },
    { src: "/logos/LG.png", alt: "LG", size: "default" },
    { src: "/logos/time.png", alt: "Time Solar", size: "small" },
    { src: "/logos/ecoenergy.png", alt: "EcoEnergy", size: "default" }, // ejemplo de agrandado
    { src: "/logos/enova.png", alt: "eNova", size: "small" },
    { src: "/logos/dexaco.png", alt: "Dexaco", size: "default" },

    // { src: "/logos/rigelec.png", alt: "Rigelec", size: "small" },
  ];

  const logos2 = [
    { src: "/logos/amperio.jpeg", alt: "Amperio", size: "tiny" },
    { src: "/logos/biosolares.jpeg", alt: "Biosolares", size: "small" },
    { src: "/logos/estener2.png", alt: "Estener", size: "small" },
    { src: "/logos/meyco2.png", alt: "Meyco", size: "tiny" },
    { src: "/logos/tecnos.png", alt: "Tecnos", size: "default" },
    { src: "/logos/infinito.jpeg", alt: "Infinito", size: "small" },
    { src: "/logos/crespo.jpeg", alt: "Crespo", size: "small" },
    { src: "/logos/lyc.png", alt: "L&C", size: "small" },
    { src: "/logos/tryodo2.png", alt: "Tryodo", size: "small" },
    { src: "/logos/energiu.png", alt: "Energiu", size: "default" },
  ];

  const allLogos1 = [
    ...logos1,
    ...logos2,
    ...logos1,
    ...logos2,
    ...logos1,
    ...logos2,
    ...logos1,
    ...logos2,
    ...logos1,
  ];
  const allLogos2 = [
    ...logos2,
    ...logos1,
    ...logos2,
    ...logos1,
    ...logos2,
    ...logos1,
    ...logos2,
    ...logos1,
    ...logos2,
  ];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {allLogos1.map((logo, index) => (
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
        {allLogos2.map((logo, index) => (
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
