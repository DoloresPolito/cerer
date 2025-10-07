import styles from "./style.module.scss";
import AnimatedDiv from "../../components/AnimatedDiv";

export default function Footer() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.contentcontainer}>
          <div className={styles.top}>
            <div className={styles.left}>
              <AnimatedDiv delay="200">
                <h6 className={styles.title}>
                Impulsando la energía <br/>renovable en Entre Ríos.
                </h6>
              </AnimatedDiv>
            </div>
            <AnimatedDiv>
              <div className={styles.right}>
                <h5>Contacto</h5>
                <div className={styles.options}>
                  <a          href="https://www.instagram.com/cerer.camara.energias.er/"
              target="_blank"
              rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a    href="mailto:camaraerer@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
                    Email
                  </a>

              

                </div>
              </div>
            </AnimatedDiv>
          </div>

          <div className={styles.bottom}>
            <p className={styles.rights}>Todos los derechos reservados ©</p>
          </div>
        </div>
      </div>
    </>
  );
}
