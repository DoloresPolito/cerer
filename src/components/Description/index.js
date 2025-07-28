import styles from "./style.module.scss";
import AnimatedDiv from "../AnimatedDiv";
import ThreeItems from "../ThreeItems";

export default function Index() {
  return (
    <>
      <div className={styles.description} id="description">
        <div className={styles.container}>

        <AnimatedDiv>
          <div className={styles.body}>
            <AnimatedDiv>
              <h6 className={styles.text}>
                Somos una organización comprometida con el desarrollo y la
                promoción de las <span>energías renovables en Entre Ríos.</span> 
              </h6>
            </AnimatedDiv>

            <AnimatedDiv>
              <h6 className={styles.text2}>
                Impulsamos
                iniciativas sustentables, conectamos actores del sector y
                trabajamos para fomentar una <span>transición energética</span> justa y
                responsable en la región.
              </h6>
            </AnimatedDiv>
          </div>
        </AnimatedDiv>

    
        </div>
        <ThreeItems />
      </div>
    </>
  );
}
