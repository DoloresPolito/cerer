import styles from "./style.module.scss";
import AnimatedDiv from "../AnimatedDiv";

export default function Index() {
  return (
    <>
      <div className={styles.section} id="contact">


        <div className={styles.contentcontainer}>
          <div className={styles.left}>
            <AnimatedDiv delay="200">
              <h6 className="styled-paragraph">
             
                Conectemos y trabajemos juntos para impulsar iniciativas renovables que marquen la diferencia en Entre Ríos.
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
