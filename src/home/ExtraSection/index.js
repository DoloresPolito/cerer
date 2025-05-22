import styles from "./styles.module.scss";
// import { FaArrowRight } from "react-icons/fa";

const ExtraSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Comprometidos con el Futuro Energético de Entre Ríos</h2>
          <div className={styles.bottomRow}>
            <p className={styles.text}>Desde la Cámara de Energía Renovable de Entre Ríos trabajamos para promover el desarrollo y la implementación de tecnologías limpias en la provincia. Impulsamos políticas sostenibles, acompañamos a los actores del sector y fomentamos el crecimiento de una matriz energética más eficiente, descentralizada y respetuosa con el medio ambiente.</p>
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