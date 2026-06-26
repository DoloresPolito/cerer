"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import newnews from "./newnews";

// Más reciente primero: invertimos el array (el último del archivo = el más nuevo)
const displayNews = [...newnews].reverse();

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({ item, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const label = item.type === "Perspectiva" ? "Ver perspectiva" : "Ver noticia";

  return (
    <article className={styles.card} onClick={() => onSelect(item)}>
      <div
        className={styles.imagecontainer}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={`/images/news/${item.image}`} alt={item.title} fill />
        <span className={styles.badge}>{item.type}</span>
        <div
          className={`${styles.viewbutton} ${hovered ? styles.viewbuttonvisible : ""}`}
          style={{ left: cursor.x, top: cursor.y }}
        >
          ↳ {label}
        </div>
      </div>

      <div className={styles.cardtext}>
        <p className={styles.carddate}>{formatDate(item.date)}</p>
        <h3 className={hovered ? styles.titlehovered : ""}>{item.title}</h3>
      </div>
    </article>
  );
}

export default function NewsHomeCar() {
  const [selectedNews, setSelectedNews] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!selectedNews) return;

    const prevent = (e) => {
      if (drawerRef.current && drawerRef.current.contains(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener("wheel", prevent, { passive: false });
    document.addEventListener("touchmove", prevent, { passive: false });

    return () => {
      document.removeEventListener("wheel", prevent);
      document.removeEventListener("touchmove", prevent);
    };
  }, [selectedNews]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Noticias & Perspectivas
          </motion.h2>
          <div className={styles.actions}>
            <div className={styles.customprev}>←</div>
            <div className={styles.customnext}>→</div>
            <Link href="/noticias" className={styles.viewall}>
              <span className={styles.arrow}>↳</span>
              <span>Ver todas</span>
            </Link>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${styles.customprev}`,
            nextEl: `.${styles.customnext}`,
          }}
          spaceBetween={24}
          style={{ paddingLeft: "5vw" }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2.5 },
          }}
        >
          {displayNews.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} onSelect={setSelectedNews} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Overlay */}
      <div
        className={`${styles.draweroverlay} ${selectedNews ? styles.draweroverlayvisible : ""}`}
        onClick={() => setSelectedNews(null)}
      />

      {/* Drawer */}
      <div ref={drawerRef} className={`${styles.drawer} ${selectedNews ? styles.draweropen : ""}`}>
        {selectedNews && (
          <>
            <div className={styles.drawerheader}>
              <button className={styles.close} onClick={() => setSelectedNews(null)}>✕</button>
            </div>

            <div className={styles.modalimage}>
                <Image
                  src={`/images/news/${selectedNews.image}`}
                  alt={selectedNews.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.drawercontent}>
                <div className={styles.drawermeta}>
                  <span className={styles.drawerbadge}>{selectedNews.type}</span>
                  <span className={styles.date}>{formatDate(selectedNews.date)}</span>
                </div>

                <h2>{selectedNews.title}</h2>

                {selectedNews.subtitle && (
                  <p className={styles.drawersubtitle}>{selectedNews.subtitle}</p>
                )}

                <div className={styles.drawerbody}>
                  {selectedNews.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {selectedNews.instagramUrl && (
                  <a
                    href={selectedNews.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iglink}
                  >
                    Ver en Instagram →
                  </a>
                )}
              </div>
          </>
        )}
      </div>
    </>
  );
}
