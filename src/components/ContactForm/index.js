"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import styles from "./styles.module.scss";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data) {
    setStatus("loading");
    setErrorMessage("");

    try {
      await sendEmail(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Error al enviar el mensaje.");
    }
  }

  return (
    <div className={styles.formcontainer}>
      {status === "success" ? (
        <h6>El mensaje se envió correctamente.</h6>
      ) : status === "error" ? (
        <h6>Error al enviar el mensaje.<br/> Por favor intentelo más tarde.</h6>
      ) : (
        // {messageSent ? (
        //   <><h6>El mensaje se envió correctamente</h6></>
        // ) : (
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
              {/* <button className={styles.button}> Enviar</button> */}

              <button className={styles.button} disabled={status === "loading"}>
                {/* {status === "loading" ? (
                  <span className={styles.spinner}></span>
                ) : ( */}
                  Enviar
                {/* )} */}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
