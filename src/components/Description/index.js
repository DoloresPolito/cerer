import styles from "./style.module.scss";

// import { slideUp } from "./animation";
import AnimatedDiv from "../AnimatedDiv";



export default function Index() {


  // const phrase =
  //   "Vinte is a professional website design and development studio based in Argentina. We create human experience in a digital world; using the best practices and latest web standards guidelines.";
  // const description = useRef(null);
  // const isInView = useInView(description);

  return (
    <>
      <div 
      // ref={description} 
      className={styles.description} id="description">
        <AnimatedDiv>
        <div className={styles.body}>


          <p class="styled-paragraph">
            <span class="highlighted">quienes somos </span> Somos una organización comprometida con el desarrollo y la promoción de las energías renovables en Entre Ríos. Impulsamos iniciativas sustentables, conectamos actores del sector y trabajamos para fomentar una transición energética justa y responsable en la región.
          </p>

       
        </div>
        </AnimatedDiv>


      </div>


    </>
  );
}
