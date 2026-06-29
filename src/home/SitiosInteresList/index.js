"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const sitios = [
  {
    name: "EPRE",
    fullName: "Ente Provincial Regulador de la Energía de Entre Ríos",
    categoria: "Regulación",
    tipo: "Provincial",
    href: "https://www.epre.gob.ar",
  },
  {
    name: "ENERSA",
    fullName: "Energía de Entre Ríos S.A.",
    categoria: "Distribución",
    tipo: "Provincial",
    href: "https://www.enersa.com.ar",
  },
  {
    name: "Generación Distribuida",
    fullName: "Secretaría de Energía — Argentina",
    categoria: "Normativa",
    tipo: "Nacional",
    href: "https://www.argentina.gob.ar/economia/energia/generacion-distribuida",
  },
  {
    name: "CADER",
    fullName: "Cámara Argentina de Energías Renovables",
    categoria: "Energías Renovables",
    tipo: "Nacional",
    href: "https://www.cader.org.ar",
  },
  {
    name: "OLADE",
    fullName: "Organización Latinoamericana y Caribeña de Energía",
    categoria: "Energía Internacional",
    tipo: "Regional",
    href: "https://www.olade.org",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const SitiosInteresList = () => {
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
          Organismos y recursos de referencia en el sector energético provincial, nacional e internacional.
        </motion.p>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span className={styles.colName}>Nombre</span>
          <span className={styles.colCategoria}>Categoría</span>
          <span className={styles.colTipo}>Ámbito</span>
          <span className={styles.colArrow} />
        </div>

        <div className={styles.tableBody}>
          {sitios.map((sitio, i) => (
            <motion.a
              key={sitio.name}
              href={sitio.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.row}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={rowVariants}
            >
              <span className={styles.colName}>
                <span className={styles.rowName}>{sitio.name}</span>
                <span className={styles.rowFull}>{sitio.fullName}</span>
              </span>
              <span className={styles.colCategoria}>{sitio.categoria}</span>
              <span className={styles.colTipo}>
                <span className={`${styles.badge} ${styles[sitio.tipo.toLowerCase()]}`}>
                  {sitio.tipo}
                </span>
              </span>
              <span className={styles.colArrow}>
                <span className={styles.arrow}>→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitiosInteresList;
