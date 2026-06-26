"use client";
import React from "react";
import styles from "./styles.module.scss";
import Loop from "@/components/Loop";
import Image from "next/image";
import AnimatedDiv from "@/components/AnimatedDiv";

const logos = [
  { src: "/logos/calvo.png", alt: "Calvo", size: "small" },
  { src: "/logos/cersolar2.png", alt: "Cersolar", size: "default" },
  { src: "/logos/chico.svg", alt: "Coenergy", size: "large" },
  { src: "/logos/reenerger.png", alt: "ReEnerger", size: "default" },
  { src: "/logos/ser.png", alt: "Ser", size: "tiny" },
  { src: "/logos/LG.png", alt: "LG", size: "default" },
  { src: "/logos/time.png", alt: "Time Solar", size: "small" },
  { src: "/logos/ecoenergy.png", alt: "EcoEnergy", size: "default" },
  { src: "/logos/enova.png", alt: "eNova", size: "small" },
  { src: "/logos/amperio.jpeg", alt: "Amperio", size: "small" },
  { src: "/logos/biosolares.jpeg", alt: "Biosolares", size: "small" },
  { src: "/logos/estener2.png", alt: "Estener", size: "small" },
  { src: "/logos/meyco2.png", alt: "Meyco", size: "tiny" },
  { src: "/logos/tecnos.png", alt: "Tecnos", size: "default" },
  { src: "/logos/infinito.jpeg", alt: "Infinito", size: "small" },
  { src: "/logos/crespo.jpeg", alt: "Crespo", size: "small" },
  { src: "/logos/lyc.png", alt: "L&C", size: "small" },
  { src: "/logos/tryodo2.png", alt: "Tryodo", size: "small" },
  { src: "/logos/energiu.png", alt: "Energiu", size: "default" },
  { src: "/logos/dexaco.png", alt: "Dexaco", size: "default" },
];

const LogosMoving = () => {
  const half = Math.ceil(logos.length / 2);
  const topLogos = logos.slice(0, half);
  const bottomLogos = logos.slice(half);

  return (
    <div className={styles.section}>

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <AnimatedDiv>
            <span className={styles.label}>Nuestros miembros</span>
          </AnimatedDiv>
          <AnimatedDiv delay={100}>
            {/* <h6 className={styles.title}>
              Miembros de la Cámara de<br /><span>Energías Renovables</span> de Entre Ríos
            </h6> */}
          </AnimatedDiv>
        </div>

        <AnimatedDiv delay={200}>
          <div className={styles.headerRight}>
            <p className={styles.count}>{logos.length}+</p>
            <p className={styles.description}>
              empresas y organizaciones comprometidas con el futuro energético de la región.
            </p>
          </div>
        </AnimatedDiv>
      </div>

      {/* Desktop */}
      <div className={styles.movingContainer}>
        <Loop logos={topLogos} reverse={false} />
        <Loop logos={bottomLogos} reverse={true} />
      </div>

      {/* Mobile */}
      <div className={styles.staticContainer}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={logo.src}
              alt={`Logo ${index + 1}`}
              fill
              sizes="(max-width: 500px) 45vw, 28vw"
              className={styles.logo}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default LogosMoving;
