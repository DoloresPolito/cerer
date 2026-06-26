"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeaderBar } from "@/structure/HeaderBar";
import LogosMoving from "@/home/LogosMoving";
import Footer from "@/structure/Footer";
import styles from "./styles.module.scss";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
};

const objetivos = [
  {
    num: "01",
    titulo: "Promover la transición energética",
    texto:
      "Impulsar el uso de energías provenientes de recursos renovables y sostenibles, junto con sistemas de almacenamiento y tecnologías de eficiencia energética, con el fin de mitigar los efectos del cambio climático y proteger el ambiente.",
  },
  {
    num: "02",
    titulo: "Representar y defender a los asociados",
    texto:
      "Ejercer la representación y defensa de sus asociados toda vez que ello sea necesario para el desarrollo de sus actividades, actuando como interlocutor ante organismos públicos y privados del sector energético.",
  },
  {
    num: "03",
    titulo: "Fomentar la investigación y el desarrollo",
    texto:
      "Promover la investigación, el estudio y el desarrollo de la ciencia y la tecnología relacionadas con el ambiente y la aplicación de energías renovables, fortaleciendo el ecosistema de conocimiento en la provincia.",
  },
];

export default function Nosotros() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderBar />

      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Nosotros
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Desarrollo de las<br />
            <span>Energías Renovables</span><br />
            en Entre Ríos
          </motion.h1>
          <motion.div
            className={styles.heroRule}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          />
        </section>

        {/* Declaración principal */}
        <section className={styles.statement}>
          <motion.div className={styles.statementInner} {...fadeUp}>
            <span className={styles.statementLabel}>Nuestra misión</span>
            <blockquote className={styles.quote}>
              Promover el uso de las energías provenientes de recursos renovables
              y sostenibles, y de los sistemas de almacenamiento de energía, las
              tecnologías y los procesos que aumenten la eficiencia energética,
              con el fin de{" "}
              <em>mitigar los efectos del cambio climático</em> y la protección
              del ambiente.
            </blockquote>
          </motion.div>
        </section>

        {/* Objetivos */}
        <section className={styles.objetivos}>
          <motion.div className={styles.objetivosHeader} {...fadeUp}>
            <span className={styles.label}>Lo que hacemos</span>
            <h2 className={styles.objetivosTitle}>
              Tres ejes que guían<br />el trabajo de la Cámara
            </h2>
          </motion.div>

          <div className={styles.objetivosList}>
            {objetivos.map((obj, i) => (
              <motion.div
                key={obj.num}
                className={styles.objetivo}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                <span className={styles.objetivoNum}>{obj.num}</span>
                <div className={styles.objetivoBody}>
                  <h3>{obj.titulo}</h3>
                  <p>{obj.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Valores */}
        <section className={styles.valores}>
          <motion.div className={styles.valoresInner} {...fadeUp}>
            <div className={styles.valoresLeft}>
              <span className={styles.label}>Valores</span>
              <h2>
                Una Cámara construida<br />sobre principios sólidos
              </h2>
            </div>
            <div className={styles.valoresRight}>
              {[
                { v: "Compromiso", d: "Con el ambiente, la energía limpia y el desarrollo sustentable de Entre Ríos." },
                { v: "Colaboración", d: "Trabajamos articulando el sector privado con organismos públicos e instituciones." },
                { v: "Transparencia", d: "Actuamos con integridad en la representación de nuestros asociados." },
                { v: "Innovación", d: "Fomentamos la tecnología y el conocimiento como motores del cambio energético." },
              ].map(({ v, d }) => (
                <div key={v} className={styles.valor}>
                  <span className={styles.valorName}>{v}</span>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

      </main>

      <LogosMoving />
      <Footer />
    </>
  );
}
