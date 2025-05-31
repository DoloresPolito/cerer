import styles from "./style.module.scss";
import AnimatedDiv from "../AnimatedDiv";
import ThreeItems from "../ThreeItems";


export default function Index() {


  return (
    <>
      <div className={styles.description} id="description" >
        <AnimatedDiv>
          <div className={styles.body}>
            <h6 class="styled-paragraph">
              {/* <span class="highlighted">quienes somos </span> */}
               Somos una
              organización comprometida con el desarrollo y la promoción de las
              energías renovables en Entre Ríos. Impulsamos iniciativas
              sustentables, conectamos actores del sector y trabajamos para
              fomentar una transición energética justa y responsable en la
              región.
            </h6>
          </div>
        </AnimatedDiv>
      
        <ThreeItems />
      </div>
    </>
  );
}
