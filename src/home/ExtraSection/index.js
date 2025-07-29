import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";

const ExtraSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.content}>
          <div className={styles.bottomRow}>
            <AnimatedDiv>
              <h6 className={styles.title}>
                <span>Comprometidos </span>con el Futuro Energético de Entre
                Ríos
              </h6>
            </AnimatedDiv>
          </div>

          <h4 className={styles.subtitle}>
            Desde la Cámara de Energía Renovable de Entre Ríos promovemos el uso
            de energías provenientes de fuentes renovables y sostenibles, así
            como tecnologías y sistemas de almacenamiento que mejoran la
            eficiencia energética. Nuestro objetivo es contribuir a la
            mitigación del cambio climático y la protección del ambiente.
            Representamos y defendemos los intereses de nuestros asociados y
            fomentamos la investigación, el estudio y el desarrollo científico y
            tecnológico vinculado a las energías renovables y al cuidado
            ambiental.
          </h4>
        </div>
      </div>
      {/* <div className={styles.titles}>
        <AnimatedDiv>
          <h6 className={styles.heading}>
            La energía se <span>transforma</span>, y nosotros te lo{" "}
            <span>contamos</span>
          </h6>
        </AnimatedDiv>
      </div> */}
    </div>
  );
};

export default ExtraSection;
