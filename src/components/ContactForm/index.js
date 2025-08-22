"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";
import styles from "./styles.module.scss";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit(data) {
    // sendEmail(data);
    console.log("data form", data);
    setMessageSent(true);
  }

  return (
    <div className={styles.formcontainer}>
      {messageSent ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputcontainer}>
              <input
                type="text"
                placeholder="Razón Social"
                className={styles.input}
                {...register("razonsocial", { required: true })}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className={styles.input}
                {...register("nombreyapellido", { required: true })}
              />
            </div>

            <div className={styles.inputcontainer}>
              <input
                type="number"
                placeholder="DNI / CUIT"
                className={styles.input}
                {...register("dnicuit", { required: true })}
              />
            </div>

            <div className={styles.inputcontainer}>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.input}
                {...register("email", { required: true })}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="tel"
                placeholder="Número de teléfono"
                className={styles.input}
                {...register("telefono", { required: true })}
              />
            </div>

            <div className={styles.inputcontainer}>
              <input
                type="text"
                placeholder="Localidad"
                className={styles.input}
                {...register("localidad", { required: true })}
              />
            </div>

            <div className={styles.inputcontainertextarea}>
              <textarea
                placeholder="Mensaje"
                className={`${styles.input} ${styles.textarea}`}
                {...register("mensaje", { required: true })}
              ></textarea>
            </div>
            <div className={styles.buttoncontainer}>
              {/* <Button text="Send" color="#AAA9A9"/> */}
              <button className={styles.button}> Enviar</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
