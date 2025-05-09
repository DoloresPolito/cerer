import styles from "./style.module.scss";
import Contact from "../ContactForm";
import AnimatedDiv from "../AnimatedDiv";

export default function Index() {
  return (
    <>
      <div className={styles.section} id="contact">


        <div className={styles.contentcontainer}>
          <div className={styles.left}>
            <AnimatedDiv delay="200">
              <h6 class="styled-paragraph">
                <span class="highlighted">contactanos </span>Conectemos y trabajemos juntos para impulsar iniciativas renovables que marquen la diferencia en Entre Ríos.
              </h6>
            </AnimatedDiv>

          </div>
          <AnimatedDiv>
            <div className={styles.right}>
              <Contact />
            </div>
          </AnimatedDiv>
        </div>

       
      </div>
    </>
  );
}
