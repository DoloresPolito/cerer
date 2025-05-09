import React from "react";
import Loop2 from "../../components/Loop2";
import styles from "./styles.module.scss";
const LogosMoving = () => {
  return (
    <div className={styles.section}>
      <h6>Miembros de la Cámara de Energías Renovables de Entre Ríos</h6>
      <div className={styles.container}>
        <Loop2 reverse="true" />
      </div>
    </div>
  );
};

export default LogosMoving;