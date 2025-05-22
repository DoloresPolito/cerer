import styles from "./styles.module.scss";
import logo from "../../../public/icons/prueba.svg"
import Image from "next/image";
const BenefitSection = () => {
  return (
    <div className={styles.section}>
      {/* Top Section */}
      <div className={styles.top}>
        <div className={styles.left}>
          <h6>Beneficios de ser miembro</h6>
        </div>
        <div className={styles.right}>
          <p>
          Ser parte de la Cámara de Energías Renovables de Entre Ríos te brinda acceso a una red de profesionales, empresas e instituciones comprometidas con el desarrollo sostenible y la transición energética en la provincia. 
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className={styles.grid}>
        <div className={styles.row}>
          <div className={`${styles.card} ${styles.large}`}   
        //   style={{ backgroundImage: `url('/images/paneles/2...jpg')` }}
          >
            <Image src={logo} alt="logo" className={styles.logo} />
            <h6 className={styles.cardTitle}>Representación sectorial</h6>
            <p>Formá parte de una organización que representa los intereses del sector ante organismos públicos y privados, impulsando políticas que favorezcan el desarrollo de las energías renovables.</p>
          </div>
          <div className={`${styles.card} ${styles.small}`} 
        //   style={{ backgroundImage: `url('/images/paneles/3...jpg')` }}
          >
            <Image src={logo}  alt="logo" className={styles.logo} />
            <h6 className={styles.cardTitle}>Acceso a eventos y networking</h6>
            <p>Participá de encuentros, capacitaciones y espacios de vinculación con otros actores del sector para generar nuevas oportunidades de colaboración y negocio.</p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.card} ${styles.small}` } 
        //   style={{ backgroundImage: `url('/images/paneles/4...jpg')` }}
          >
            <Image src={logo}  alt="logo" className={styles.logo} />
            <h6 className={styles.cardTitle}>Difusión y apoyo institucional</h6>
            <p>Amplificamos tu actividad a través de nuestros canales y brindamos respaldo institucional en iniciativas, proyectos o propuestas relevantes.</p>
          </div>
          <div className={`${styles.card} ${styles.large}`} 
        //   style={{ backgroundImage: `url('/images/paneles/5...jpg')` }}
          >
            {/* <Image src={logo}  alt="logo" className={styles.logo} />
            <h6 className={styles.cardTitle}>Actualizaciones normativas y técnicas</h6> */}
            <button>Quiero unirme </button>
            {/* <h6 className={styles.cardTitle}></h6> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;