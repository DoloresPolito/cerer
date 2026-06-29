"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";

const stats = [

  { number: "496", label: "Usuarios generadores" },
  { number: "19MW", label: "Potencia instalada" },
  { number: "191", label: "Proyectos en trámite" }
];

export default function DescriptionNew() {
  return (
    <div className={styles.section} id="description">
      {/* Editorial two-column body */}
      <div className={styles.inner}>
        <motion.div
          className={styles.topRule}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1], transformOrigin: "left" }}
        />

        <div className={styles.body}>
          <div className={styles.left}>
            <motion.h2
              className={styles.statement}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Conectando empresas, <br />conocimiento y desarrollo.
              {/* Somos la voz del
              sector renovable<br />
              en <span>Entre Ríos.</span> */}
            </motion.h2>
          </div>

          <div className={styles.right}>
            <motion.p
              className={styles.text}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Una organización comprometida con el desarrollo y la promoción de las energías renovables en la provincia. Impulsamos iniciativas sustentables, conectamos actores del sector y trabajamos para una transición energética justa y responsable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Link href="/nosotros" className={styles.cta}>
                <span className={styles.ctaFancy}>↳</span>
                <span>Conocer más</span>
                <span className={styles.ctaArrow}>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {stats.map((item, i) => (
          <motion.div
            key={item.number}
            className={styles.statItem}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className={styles.statNumber}>{item.number}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
