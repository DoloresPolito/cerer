"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const ExtraSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.backgroundImage} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Nuestra misión
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <span className={styles.titleDesktop}>
            Comprometidos <span className={styles.dim}>con el</span><br />
            Futuro Energético<br />
            <span className={styles.dim}>de Entre Ríos</span>
          </span>
          <span className={styles.titleMobile}>
            Comprometidos<br />
            <span className={styles.dim}>con el</span><br />
            Futuro Energético<br />
            <span className={styles.dim}>de Entre Ríos</span>
          </span>
        </motion.h2>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Impulsamos la transición energética justa y responsable en la región.
        </motion.p>
      </div>
    </div>
  );
};

export default ExtraSection;
