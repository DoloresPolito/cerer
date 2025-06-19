import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";

const NewSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImage1}></div>
        <div className={styles.content}>
          <p className={styles.title}>Impulsando el cambio hacia un futuro más limpio y sustentable, desde Entre Ríos al país, con energías renovables al alcance de todos.</p>
        </div>
        <div className={styles.backgroundImage2}></div>
      </div>
    </div>
  );
};

export default NewSection;
