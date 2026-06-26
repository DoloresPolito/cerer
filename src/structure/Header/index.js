"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./styles.module.scss";
import Nav from "./Nav";

const menuVariants = {
  open: {
    x: "0%",
    transition: { duration: 0.65, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    x: "100%",
    transition: { duration: 0.65, delay: 0.3, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

const overlayVariants = {
  open: { opacity: 1, pointerEvents: "all" },
  closed: { opacity: 0, pointerEvents: "none" },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isActive]);

  return (
    <div className={styles.header}>
      {/* Overlay behind panel */}
      <motion.div
        className={styles.overlay}
        variants={overlayVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        transition={{ duration: 0.4 }}
        onClick={() => setIsActive(false)}
      />

      {/* Slide-in panel */}
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav close={() => setIsActive(false)} />}
        </AnimatePresence>
      </motion.div>

      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
  );
}
