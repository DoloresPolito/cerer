import React from "react";
import styles from "./styles.module.scss";
import Loop from "@/components/Loop";
const LogosMoving = () => {
  return (
    <div className={styles.section}>
      <div className={styles.fullcontainer}>
      <h6 className={styles.title}>
        Miembros de la Cámara de <span>Energías Renovables</span> de Entre Ríos
      </h6>
      <div className={styles.container}>
        <Loop reverse={true} />
        <Loop reverse={false} />
      </div>
      {/* <button className={styles.button}>
        <p>Quiero ser parte →</p>{" "}
      </button> */}
      </div>
      
    </div>
  );
};

export default LogosMoving;
