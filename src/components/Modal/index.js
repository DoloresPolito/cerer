"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
// import { sendContactForm } from "../lib/api";

const initValues = {
  razonsocial: "",
  nombreyapellido: "",
  DNICUIT: "",
  email: "",
  telefono: "",
  localidad: "",
  mensaje: "",
};
const initState = { error: "", values: initValues, isLoading: false };

export default function Modal({ children, isOpen, onClose }) {
  const [state, setState] = useState(initState);

  const modalRoot = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // bloqueo scroll del fondo
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);

      setState(initState);

      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className="form-container">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Razón social"
              name="razonsocial"
              value={values.razonsocial}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Nombre y Apellido"
              name="nombreyapellido"
              value={values.nombreyapellido}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="DNI / CUIT"
              name="DNICUIT"
              value={values.DNICUIT}
              onChange={handleChange}
            />

            <input
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Teléfono"
              name="telefono"
              value={values.telefono}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Localidad"
              name="localidad"
              value={values.localidad}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Mensaje"
              name="mensaje"
              value={values.mensaje}
              onChange={handleChange}
            />

            <div>
              <button type="submit" disabled={state.isLoading}>
                <p>{state.isLoading ? "Enviando..." : "Enviar"}</p>
              </button>
            </div>
          </form>
        </div>

        {children}
      </div>
    </div>,
    modalRoot
  );
}
