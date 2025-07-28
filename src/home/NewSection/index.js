import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";

const NewSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImage1}></div>
        <div className={styles.content}>
          <h6 className={styles.title}>
            Impulsando el cambio hacia un{" "}
            <span>futuro más limpio y sustentable</span>, desde Entre Ríos al
            país, con energías renovables <span>al alcance de todos.</span>
          </h6>
        </div>
        <div className={styles.backgroundImage2}></div>
      </div>
    </div>
  );
};

export default NewSection;
