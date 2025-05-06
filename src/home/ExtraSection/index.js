import styles from "./styles.module.scss";
// import { FaArrowRight } from "react-icons/fa";

const ExtraSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Tu título aquí</h2>
          <div className={styles.bottomRow}>
            <p className={styles.text}>Texto descriptivo que acompaña a la imagen.</p>
            <div className={styles.circleButton}>
              {/* <FaArrowRight /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;