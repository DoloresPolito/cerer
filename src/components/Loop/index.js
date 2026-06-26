import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop = ({ reverse, logos }) => {
  const doubled = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {doubled.map((logo, index) => (
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
      </div>
    </div>
  );
};

export default Loop;
