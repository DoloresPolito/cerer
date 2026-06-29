"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import heroImage from "../../../public/images/newhero/fondopanel.png";

const heroLines = [
  [["Cámara", 0.3], ["de", 0.42]],
  [["Energías", 0.54], ["Renovables", 0.66]],
  [["de", 0.78], ["Entre", 0.9], ["Ríos.", 1.02]],
];

export default function HeroNew() {

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <motion.div
          className={styles.bgInner}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <Image
            src={heroImage}
            alt="Energías renovables en Entre Ríos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.bottom}>
        <div className={styles.headlineArea}>
          <h1 className={styles.headline}>
            {heroLines.map((line, li) => (
              <span key={li} className={styles.line}>
                {line.map(([word, delay]) => (
                  <span key={word} className={styles.wordWrap}>
                    <motion.span
                      className={styles.word}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 1.15,
                        delay,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Impulsando la transición energética justa y responsable en Entre Ríos
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.55, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <Link href="/nosotros" className={styles.btnPrimary}>
              Conocer CERER
            </Link>
            <Link href="/noticias" className={styles.btnSecondary}>
              Ver noticias <span>→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <span className={styles.scrollText}>Scroll</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </div>
    </section>
  );
}
