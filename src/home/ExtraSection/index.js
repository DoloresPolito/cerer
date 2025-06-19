import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";

const ExtraSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.content}>
          <p className={styles.text}>
            Desde la Cámara de Energía Renovable de Entre Ríos trabajamos para
            promover el desarrollo y la implementación de tecnologías limpias en
            la provincia. Impulsamos políticas sostenibles, acompañamos a los
            actores del sector y fomentamos el crecimiento de una matriz
            energética más eficiente, descentralizada y respetuosa con el medio
            ambiente.
          </p>
          <div className={styles.bottomRow}>
            <AnimatedDiv>
              <h6 className={styles.title}>
                <span>Comprometidos </span>con el Futuro Energético de Entre
                Ríos
              </h6>
            </AnimatedDiv>
          </div>
        </div>
      </div>
            <div className={styles.titles}>
        <AnimatedDiv>
          <h6 className={styles.heading}>
            La energía se <span>transforma</span>, y nosotros te lo{" "}
            <span>contamos</span>
          </h6>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default ExtraSection;
