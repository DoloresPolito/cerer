"use client";
import { useState } from "react";
import AccordionItem from "@/components/AccordionItem";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";
import Modal from "@/components/Modal";
export default function Benefits() {
  const [active, setActive] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  const benefits = [
    {
      id: 1,
      faq: "Ser parte de la única Cámara de Energías Renovables de Entre Ríos.",
      ans: "Sumate a la primera y única organización en la provincia con un enfoque exclusivo en el desarrollo de energías renovables. Un espacio de referencia y acción para impulsar el crecimiento del sector.",
    },
    {
      id: 2,
      faq: "Participación activa en iniciativas sectoriales",
      ans: "Formá parte de una Asociación que representa al sector ante organismos gubernamentales, instituciones educativas y otros actores estratégicos, proponiendo políticas y acciones concretas.",
    },
    {
      id: 3,
      faq: "Asesoramiento técnico y normativo",
      ans: "Accedé a orientación especializada sobre reglamentaciones, trámites y procedimientos vinculados a proyectos de generación distribuida y energías renovables.",
    },
    {
      id: 4,
      faq: "Relacionamiento con colegas de toda la provincia",
      ans: "Generá vínculos con otros profesionales, empresas y organizaciones del sector renovable en toda la geografía entrerriana. Un espacio ideal para compartir experiencias, desafíos y soluciones.",
    },
    {
      id: 5,
      faq: "Acceso a eventos y espacios de difusión",
      ans: "Participá de actividades, jornadas y encuentros que promueven el uso de energías renovables y aumentan la visibilidad de los actores que trabajan por una transición energética sustentable.",
    },
  ];

  return (
    <>
      <div className={styles.benefitsection}>
        <div className={styles.left}>
          <div>
            <AnimatedDiv>
              <h6 className={styles.title}>Beneficios <span>de ser parte</span></h6>
            </AnimatedDiv>

            <AnimatedDiv delay={150}>
              <h4 className={styles.subtitle}>
                ¿Te gustaría sumarte?{" "}
                <span>Comunicate con nosotros para más información.</span>
              </h4>
            </AnimatedDiv>
          </div>

          <div className={styles.cta}>
            <button onClick={() => setIsModalOpen(true)}>
              <p>Quiero ser parte →</p>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.faqscontainer}>
            {benefits.map((question) => (
              <AccordionItem
                key={question.id}
                active={active}
                handleToggle={() => handleToggle(question.id)}
                id={question.id}
                header={question.faq}
                content={question.ans}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        
      </Modal>
    </>
  );
}