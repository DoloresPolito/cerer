import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          key={1}
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>EMAIL:</span> cerer@gmail.com
        </motion.li>
      </ul>
    </div>
  );
}
