"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import Link from "next/link";

export default function Navbar({ close }) {
  return (
    <div className={styles.nav}>

      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} className={styles.link} onClick={close}>
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              key={`f_${i}`}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerlink}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>

    </div>
  );
}
