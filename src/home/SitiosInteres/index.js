"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const sitios = [
  {
    label: "Regulación",
    name: "EPRE",
    fullName: "Ente Provincial Regulador de la Energía de Entre Ríos",
    description:
      "Organismo encargado de regular el servicio público de electricidad en la provincia, velando por la protección de los usuarios, el control de tarifas y la calidad del servicio.",
    href: "https://www.epre.gob.ar",
    cta: "Visitar EPRE",
  },
  {
    label: "Distribución",
    name: "ENERSA",
    fullName: "Energía de Entre Ríos S.A.",
    description:
      "Empresa distribuidora de energía eléctrica de la provincia, responsable del suministro a hogares, comercios e industrias de Entre Ríos.",
    href: "https://www.enersa.com.ar",
    cta: "Visitar ENERSA",
  },
];

const SitiosInteres = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Recursos
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Sitios de Interés
          </motion.h2>
        </div>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Accedé a los organismos que regulan y gestionan la energía eléctrica en la provincia de Entre Ríos.
        </motion.p>
      </div>

      <div className={styles.cards}>
        {sitios.map((sitio, i) => (
          <motion.a
            key={sitio.name}
            href={sitio.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardLabel}>{sitio.label}</span>
            </div>
            <p className={styles.cardName}>{sitio.name}</p>
            <p className={styles.cardFull}>{sitio.fullName}</p>
            <p className={styles.cardDesc}>{sitio.description}</p>
            <div className={styles.cardLink}>
              <span className={styles.arrowFancy}>↳</span>
              <span className={styles.cardLinkText}>{sitio.cta}</span>
              <span className={styles.arrowSimple}>→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SitiosInteres;
