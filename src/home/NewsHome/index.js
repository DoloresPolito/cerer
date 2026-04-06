import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";
// import location from "../../../public/icons/location-50.png";

const NewsHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const cards = [
    {
      name: "1",
      title: "Más de 800 MW en proyectos renovables en Argentina",
      subtitle:
        "El Gobierno nacional incorporó 14 nuevos proyectos de energías renovables al RENPER, superando los 800 MW de potencia instalada, con predominio de desarrollos solares, seguidos por eólicos y un proyecto de biogás. Entre Ríos también forma parte de este proceso con una iniciativa en Viale, actualmente en instancia de inscripción, marcando un nuevo avance en la planificación energética y el crecimiento del sector a nivel nacional y provincial.",
      text: ".",
      image: "incorporacion.jpg",
      locationtext: "",
      link: "https://www.instagram.com/p/DWriJwjGGPG/?igsh=ZXdycDZqYnZyMWJ0",
    },

    {
      name: "1",
      title: "Cambios en el mercado solar global: un nuevo escenario para la industria",
      subtitle:
        "La industria solar global atraviesa un proceso de reordenamiento tras un período de sobreoferta, con señales de ajuste en la capacidad productiva, principalmente en China. Este nuevo escenario podría impactar en los precios de los módulos, los márgenes del sector y la planificación de proyectos, dando lugar a una etapa de transición hacia un mayor equilibrio entre oferta y demanda a nivel internacional.",
      text: ".",
      image: "cambios.jpg",
      locationtext: "",
      link: "https://www.instagram.com/p/DWbsViFDWtj/?igsh=NnJzcDR2MGJjbjhi",
    },

    {
      name: "1",
      title: "Entre Rios escaló en el ranking de generación distribuida.",
      subtitle:
        "Destacamos el sostenido crecimiento de la generación distribuida en la provincia, que continúa ganando protagonismo a nivel nacional. Con más de 17 MW entre potencia instalada y proyectos en trámite, Entre Ríos avanza firme en la transición energética, impulsada por políticas públicas, la participación ciudadana y el compromiso del sector privado, consolidándose como referente en energías limpias y sostenibles.",
      text: ".",
      image: "ranking.png",
      locationtext: "",
      link: "https://www.instagram.com/p/DOWw9t4kQQ5/?img_index=1",
    },

    {
      name: "2",
      title: "Se inauguró el primer parque solar en Sauce Pinto",
      subtitle:
        "Se inauguró en Sauce Pinto un parque solar de 300 kW, integrado por 540 paneles y 10 inversores de 30 kW, con una generación estimada de 480 MWh anuales. Esta nueva planta, que equivale al consumo de unas 200 familias, refuerza la matriz eléctrica provincial con energía limpia y marca un nuevo avance hacia una Entre Ríos más sostenible y resiliente.",
      text: ".",
      image: "sanuce.png",
      locationtext: "",
      link: "https://www.instagram.com/p/DPhBumBjZ1N/?img_index=4",
    },

    {
      name: "3",
      title: "Entre Ríos avanza con sus primeros parques solares",
      subtitle:
        "Se avanza en la construcción de dos parques solares en Sauce Pinto y Sauce Montrull, con una potencia prevista de 300 kW cada uno. En Sauce Pinto la obra está en su etapa final, mientras que en Sauce Montrull se realizan las tareas iniciales. Ambos proyectos sumarán generación limpia a la red provincial, fortaleciendo un modelo energético más sostenible y descentralizado para Entre Ríos.",
      text: ".",
      image: "parques.png",
      locationtext: "",
      link: "https://www.instagram.com/p/DPFPHeqDakW/?img_index=1",
    },

    {
      name: "4",
      title:
        "Primer relevamiento oficial del sector solar fotovoltaico en Argentina",
      subtitle:
        "Invitamos a participar del Primer Censo del sector solar fotovoltaico en Argentina, impulsado por CADER e INTI. El relevamiento busca identificar las capacidades, ubicación y empleo del sector para fortalecer la cadena de valor y la planificación estratégica nacional. Está dirigido a empresas y profesionales vinculados a la energía solar, no a usuarios finales.",
      text: ".",
      image: "new1.png",
      locationtext: "",
      link: "https://www.instagram.com/p/DOyeA0ZjWqK/?img_index=1",
    },
    {
      name: "5",
      title: "Energías renovables en alza en Entre Ríos",
      subtitle:
        "Durante el primer semestre de 2025, Enersa incorporó 1,6 MW de nueva potencia renovable, alcanzando 3,4 MW totales y un crecimiento del 92 % respecto a 2024. Este avance impulsa la generación distribuida en Entre Ríos y refuerza el compromiso provincial con una matriz energética más limpia y eficiente.",
      text: ".",
      image: "alza.png",
      locationtext: "",
      link: "https://www.instagram.com/p/DNQzKF-R3vp/",
    },

    {
      name: "6",
      title: "Balance CERER 2024",
      subtitle:
        "Durante 2024, desde la Cámara de Energías Renovables de Entre Ríos (CERER) impulsamos mejoras técnicas, simplificación de trámites y nuevos espacios de articulación con instituciones públicas y privadas. Estas acciones fortalecieron la generación distribuida, promovieron la capacitación en energías limpias y consolidaron el crecimiento sostenible de la provincia.",
      text: ".",
      image: "balance.jpg",
      locationtext: "",
      link: "https://www.instagram.com/p/DDiEHATvvCu/",
    },

    {
      name: "Noticia 1",
      title: "Partipación en la Mesa Provincial de Energía Sostenible",
      subtitle:
        "Conformación del Plan Provincial para el Desarrollo de las Energías Renovables, Planificación a mediano y largo plazo de la incorporación de las energías renovables en la matriz energética provincial, Implementación de esquemas de promoción de las energías renovables permitidos en la presente ley.",
      text: ".",
      image: "new2.png",
      locationtext: "",
      link: "https://www.instagram.com/p/DHbu4YiPKdJ/?img_index=1",
    },
    {
      name: "Noticia 3",
      title:
        "ENERSA se suma a la Cámara de Energías Renovables de Entre Ríos (CERER)",
      subtitle:
        "Nos complace anunciar que ENERSA (Energía de Entre Ríos S.A.), la empresa distribuidora de energía eléctrica de la provincia, ya forma parte de nuestra Cámara. Se concretó una reunión entre representantes de CERER y @enersaarg en la que se formalizó la incorporación de la empresa energética a nuestra Cámara.",
      text: ".",
      image: "enersa.png",
      locationtext: "",
      link: "https://www.instagram.com/cerer.camara.energias.er/p/DJow4QYOCnU/?img_index=1",
    },
    {
      name: "Noticia 2",
      title: "Relacionamiento con Universidades",
      subtitle:
        "CERER y la Facultad de Ingeniería de la UNER trabajan por una energía sostenible en Entre Ríos. Autoridades de la Cámara de Energías Renovables de Entre Ríos (CERER) visitaron la Facultad de Ingeniería de la UNER con el objetivo de fortalecer los vínculos institucionales y construir lazos de cooperación",
      text: ".",
      image: "new2.png",
      image: "reu1.JPG",
      locationtext: "",
      link: "https://www.instagram.com/p/DJaEHFtPfj4/?img_index=1",
    },

    {
      name: "Noticia 4",
      title:
        "CERER se reúne con autoridades y docentes  de  la  UTN Facultad Regional Paraná",
      subtitle:
        "Durante el encuentro se dialogó sobre la importancia de promover el desarrollo sostenible en la provincia, y se compartieron miradas sobre el rol estratégico de la investigación, la formación técnica y la articulación con el sector productivo para avanzar en ese camino",
      text: ".",
      image: "reu2.JPG",
      locationtext: "Paraná",
      link: "",
    },
  ];

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.titles}>
        <AnimatedDiv>
          <h6 className={styles.title}>
            La energía se <span>transforma</span>, y nosotros te lo{" "}
            <span>contamos</span>
          </h6>
        </AnimatedDiv>
      </div>

      <AnimatedDiv>
        <div className={styles.container}>
          <div className={styles.carouselcontainer}>
            <div className={styles.carouselcontent}>
              <Swiper
                speed={600}
                centeredSlides={true}
                initialSlide={1}
                slidesPerView={"auto"}
                spaceBetween={10}
                navigation={{
                  nextEl: `.${styles.customnext}`,
                  prevEl: `.${styles.customprev}`,
                }}
                modules={[Navigation]}
                className={styles.swiper}
                breakpoints={{
                  800: {
                    slidesPerView: "auto",
                  },
                }}
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index} className={styles.slide}>
                    <Card
                      name={card.name}
                      title={card.title}
                      image={card.image}
                      locationtext={card.locationtext}
                      subtitle={card.subtitle}
                      link={card.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={styles.arrowscontainer}>
              <div className={styles.customprev}>←</div>
              <div className={styles.customnext}>→</div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default NewsHome;

const Card = ({ title, image, locationtext, subtitle, link }) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardleft}>
        <AnimatedDiv>
          <h6 className={styles.cardTitle}>{title}</h6>
        </AnimatedDiv>

        <p className={styles.cardDescription}>{subtitle}</p>

        <div className={styles.buttonContainer}>
          <a href={link} className={styles.button} target="_blank">
            Ver más →
          </a>
        </div>
      </div>

      <div className={styles.cardright}>
        <Image
          src={`/images/news/${image}`}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
