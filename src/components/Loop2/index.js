import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop2 = ({ reverse }) => {
  const logos = [
    { src: "/logos/calvo.png", alt: "Calvo" },
    { src: "/logos/cersolar2.png", alt: "Cersolar" },
    { src: "/logos/chico.svg", alt: "Coenergy" },
    { src: "/logos/ser.png", alt: "Ser" },
    { src: "/logos/tryodo2.png", alt: "Tryodo" },
    { src: "/logos/calvo.png", alt: "Calvo" },
    { src: "/logos/cersolar2.png", alt: "Cersolar" },
    { src: "/logos/chico.svg", alt: "Coenergy"},
    { src: "/logos/ser.png", alt: "Ser" },
    { src: "/logos/tryodo2.png", alt: "Tryodo" },
    { src: "/logos/calvo.png", alt: "Calvo" },
    { src: "/logos/cersolar2.png", alt: "Cersolar" },
    { src: "/logos/chico.svg", alt: "Coenergy"},
    { src: "/logos/ser.png", alt: "Ser" },
    { src: "/logos/tryodo2.png", alt: "Tryodo" },
  ];

  return (


    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
    <div className={styles.marquee}>
      {logos.map((logo, index) => (
        <div className={styles.logoWrapper} key={`loop-${index}`}>
          <p>{logo.text}</p>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={120}
            className={styles.logo}
          />

         
        </div>
      ))}
    </div>
  </div>
  );
};

export default Loop2;