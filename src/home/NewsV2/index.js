"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const news = [
  {
    id: 1,
    date: "25 Mayo 2026",
    title: "ABB electromovilidad",
    image: "abb.jpg",
    content:
      "La Cámara de Energías Renovables de Entre Ríos invita a una jornada sobre electromovilidad y sostenibilidad en el transporte...",
  },

  {
    id: 2,
    date: "22 Abril 2026",
    title: "Día mundial de la tierra",
    image: "planeta.png",
    content:
      "El Día de la Tierra invita a reflexionar sobre el impacto de nuestras decisiones...",
  },
  {
    id: 1,
    date: "25 Mayo 2026",
    title: "ABB electromovilidad",
    image: "abb.jpg",
    content:
      "La Cámara de Energías Renovables de Entre Ríos invita a una jornada sobre electromovilidad y sostenibilidad en el transporte...",
  },

  {
    id: 2,
    date: "22 Abril 2026",
    title: "Día mundial de la tierra",
    image: "planeta.png",
    content:
      "El Día de la Tierra invita a reflexionar sobre el impacto de nuestras decisiones...",
  },
];

export default function NewsV2() {
    const [selectedNews, setSelectedNews] = useState(null);


// useEffect(() => {
//   if (selectedNews) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }

//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, [selectedNews]);

useEffect(() => {
    document.body.classList.toggle(
      styles.noScroll,
      !!selectedNews
    );
  
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [selectedNews]);
  
    return (
      <>
        <section className={styles.section}>
          <div className={styles.grid}>
            {news.map((item) => (
              <article
                key={item.id}
                className={styles.card}
                onClick={() => setSelectedNews(item)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={`/images/news/${item.image}`}
                    alt={item.title}
                    fill
                    className={styles.image}
                  />
  
                  <div className={styles.overlay}>
                    <span>Ver más</span>
                  </div>
                </div>
  
                <p className={styles.date}>{item.date}</p>
  
                <h3 className={styles.title}>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>
  
        <Drawer
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      </>
    );
  }

  function Drawer({ news, onClose }) {
    if (!news) return null;
  
    return (
      <>
        <div
          className={styles.backdrop}
          onClick={onClose}
        />
  
        <div className={styles.drawer}>
          <button
            className={styles.close}
            onClick={onClose}
          >
            ✕
          </button>
  
          <p className={styles.drawerDate}>
  {news.date}
</p>

<h2 className={styles.drawerTitle}>
  {news.title}
</h2>

<div className={styles.drawerImage}>
  <Image
    src={`/images/news/${news.image}`}
    alt={news.title}
    fill
    className={styles.drawerImageTag}
  />
</div>

<div className={styles.drawerContent}>
  {news.content}
</div>
        </div>
      </>
    );
  }