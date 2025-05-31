import styles from "./styles.module.scss";
// import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import mail from "../../../public/icons/mail.svg"
import phone from "../../../public/icons/link.png"
import instagram from "../../../public/icons/instagram.svg"
import Image from "next/image";
export default function FixedMedia() {
  return (
    <div className={styles.section}>
      <a href="mailto:ejemplo@correo.com"target="_blank" rel="noopener noreferrer">
        <Image src={mail} alt="email"/>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.picture}>
      <Image src={phone} alt="phone" className={styles.picture}/>
      </a>
      <a href="https://www.instagram.com/cerer.camara.energias.er/">
      <Image src={instagram} alt="prueba"/>
      </a>
    </div>
  );
}