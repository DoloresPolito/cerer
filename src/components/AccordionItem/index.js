import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  const isActive = active === id;

  return (
    <div className={styles.card}>
      <div onClick={() => handleToggle(id)} className={styles.header}>
        <div className={styles.left}>
          <span className={styles.number}>{id}.</span>
          <span className={styles.question}>{header}</span>
        </div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M8.25 9L12 12.75L15.75 9"
            stroke="#155446"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.35 }}
        className={styles.motionContent}
      >
        <div className={styles.content}>{content}</div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;