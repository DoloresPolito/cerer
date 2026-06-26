"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HeaderBar } from "@/structure/HeaderBar";
import Footer from "@/structure/Footer";
import newnews from "@/home/NewsHomeCar/newnews";
import styles from "./styles.module.scss";

const allNews = [...newnews].reverse();

const FILTERS = [
  { key: "todas", label: "Todas" },
  { key: "Noticia", label: "Noticias" },
  { key: "Perspectiva", label: "Perspectivas" },
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getCount(key) {
  if (key === "todas") return allNews.length;
  return allNews.filter((n) => n.type === key).length;
}

function NewsCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.75,
        delay: (index % 2) * 0.12,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      <div
        className={styles.imageWrap}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={`/images/news/${item.image}`}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <span className={styles.badge}>{item.type}</span>
        <div
          className={`${styles.cursor} ${hovered ? styles.cursorVisible : ""}`}
          style={{ left: cursor.x, top: cursor.y }}
        >
          Ver →
        </div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.date}>{formatDate(item.date)}</p>
        <h2 className={`${styles.title} ${hovered ? styles.titleHovered : ""}`}>
          {item.title}
        </h2>
      </div>
    </motion.article>
  );
}

export default function Noticias() {
  const [activeFilter, setActiveFilter] = useState("todas");

  const filtered =
    activeFilter === "todas"
      ? allNews
      : allNews.filter((n) => n.type === activeFilter);

  return (
    <>
      <HeaderBar />
      <main className={styles.main}>
        {/* Filter bar */}
        <div className={styles.filterBar}>
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${activeFilter === key ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
              <sup>{getCount(key)}</sup>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
