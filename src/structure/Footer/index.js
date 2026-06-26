import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo/logo-color.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>
          <div className={styles.left}>
            <Image src={logo} alt="CERER" className={styles.logo} />
            <p className={styles.orgName}>
              Cámara de Energías<br />Renovables de Entre Ríos
            </p>
            <p className={styles.tagline}>
              Asociación civil comprometida con el desarrollo,<br />
              la promoción y la transición energética justa<br />
              en la provincia de Entre Ríos.
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.label}>Contacto</p>
            <div className={styles.links}>
              <a href="https://www.instagram.com/cerer.camara.energias.er/" target="_blank" rel="noopener noreferrer">
                Instagram ↗
              </a>
              <a href="https://www.facebook.com/cerer.camara.energias.er" target="_blank" rel="noopener noreferrer">
                Facebook ↗
              </a>
              <a href="mailto:camaraerer@gmail.com">
                Email ↗
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} CERER. Todos los derechos reservados.</p>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/noticias">Noticias</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
