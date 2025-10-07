"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
// import { sendContactForm } from "../lib/api";
import ContactForm from "../ContactForm";
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
<ContactForm/>
     
        {children}
      </div>
    </div>,
    modalRoot
  );
}
