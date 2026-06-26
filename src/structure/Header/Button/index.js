"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Button({ isActive, toggleMenu }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setPastHero(window.scrollY >= window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const color = !isActive && isHome && !pastHero ? "white" : "#555";

  return (
    <div className={styles.button} onClick={toggleMenu}>
      <motion.div
        className={styles.line}
        style={{ backgroundColor: color }}
        animate={{ rotate: isActive ? 45 : 0, translateY: isActive ? "1vh" : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={styles.line}
        style={{ backgroundColor: color }}
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={styles.line}
        style={{ backgroundColor: color }}
        animate={{ rotate: isActive ? -45 : 0, translateY: isActive ? "-1.8vh" : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
