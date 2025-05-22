import styles from "./styles.module.scss";
// import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import mail from "../../../public/icons/mail.svg"
import phone from "../../../public/icons/phone.svg"
import prueba from "../../../public/icons/prueba.svg"
import Image from "next/image";
export default function FixedMedia() {
  return (
    <div className={styles.section}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Image src={mail} alt="email"/>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <Image src={phone} alt="phone"/>
      </a>
      <a href="mailto:ejemplo@correo.com">
      <Image src={prueba} alt="prueba"/>
      </a>
    </div>
  );
}