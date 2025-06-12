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
import location from "../../../public/icons/location-50.png"

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
      text: ".",
      image:"new1.png"
    },
    {
      name: "Noticia 2",
      title:
        "Relacionamiento con Universidades",
      text: ".",
      image:"new2.png"
    },
    {
      name: "Noticia 3",
      title: "ENERSA se suma a la Cámara de Energías Renovables de Entre Ríos (CERER)",
      text: ".",
      image:"reu1.JPG"
    },
    {
      name: "Noticia 4",
      title:
        "CERER se reúne con autoridades y docentes  de  la  UTN Facultad Regional Paraná",
      text: ".",      image:"reu2.JPG"
    },
    {
      name: "Noticia 5",
      title:
        ".Empresas argentinas deben incorporar 20% de energías renovables desde enero 2025",
      text: ".",      image:"new1.png"
    },
    {
      name: "Noticia 6",
      title:
        ".Récord en energía renovable: Argentina marca un hito a fines del 2024",
      text: ".",      image:"new2.png"
    },
  ];

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.titles}>
        <AnimatedDiv>
          <h6 className={styles.heading}>La energía se <span>transforma</span>, y nosotros te lo <span>contamos</span></h6>
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
                spaceBetween={20}
                navigation={{
                  nextEl: `.${styles.customnext}`,
                  prevEl: `.${styles.customprev}`,
                }}
                modules={[Navigation]}
                className={styles.swiper}
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index} className={styles.slide}>
                    <Card name={card.name} title={card.title} image={card.image}/>
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

const Card = ({ name, title, image }) => {
  return (
    <div className={styles.cardcontainer}>
    <div className={styles.cardleft}>
      <div className={styles.titlediv}>
        <Image src={location} alt="ubicacion"/>
      <p className={styles.topText}>{name}</p>
      </div>
<AnimatedDiv>


      <h6 className={styles.bottomText}>{title}</h6>
      </AnimatedDiv>
    </div>

    <div className={styles.cardright}>
      <Image
        src={`/images/news/${image}`}
        alt="image"
        fill
        style={{ objectFit: "cover" }}
      />
      {/* <a href="#noticia" className={styles.circleButton}>
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a> */}
    </div>
  </div>
  );
};
