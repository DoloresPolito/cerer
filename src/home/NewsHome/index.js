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
      name: "Noticia 1",
      title: "Partipación en la Mesa Provincial de Energía Sostenible",
      subtitle:
        "Conformación del Plan Provincial para el Desarrollo de las Energías Renovables, Planificación a mediano y largo plazo de la incorporación de las energías renovables en la matriz energética provincial, Implementación de esquemas de promoción de las energías renovables permitidos en la presente ley.",
      text: ".",
      image: "new1.png",
      locationtext: "",
      link:"https://www.instagram.com/p/DHbu4YiPKdJ/?img_index=1"
    },
    {
      name: "Noticia 3",
      title:
        "ENERSA se suma a la Cámara de Energías Renovables de Entre Ríos (CERER)",
      subtitle:
        "Nos complace anunciar que ENERSA (Energía de Entre Ríos S.A.), la empresa distribuidora de energía eléctrica de la provincia, ya forma parte de nuestra Cámara. Se concretó una reunión entre representantes de CERER y @enersaarg en la que se formalizó la incorporación de la empresa energética a nuestra Cámara.",
      text: ".",
      image: "new2.png",
      locationtext: "",
      link:"https://www.instagram.com/cerer.camara.energias.er/p/DJow4QYOCnU/?img_index=1"
      
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
      link:"https://www.instagram.com/p/DJaEHFtPfj4/?img_index=1"
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
      link:""
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
        <p className={styles.text}>{subtitle}</p>

        <div className={styles.buttonContainer}>
          <a href={link} className={styles.button}>
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
