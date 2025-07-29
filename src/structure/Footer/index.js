import styles from "./style.module.scss";
import AnimatedDiv from "../../components/AnimatedDiv";

export default function Footer() {
  return (
    <>
      <div className={styles.section} id="contact">
        <div className={styles.contentcontainer}>
          <div className={styles.left}>
            <AnimatedDiv delay="200">
              <h6 className={styles.title}>
                Conectemos y trabajemos juntos para impulsar iniciativas
                renovables que marquen la diferencia en Entre Ríos.
              </h6>
            </AnimatedDiv>
          </div>
          <AnimatedDiv>
            <div className={styles.right}>

          
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
}
