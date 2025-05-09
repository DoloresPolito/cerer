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
      title: "Energía Limpia: El camino hacia un futuro con menos emisiones",
      text: ".",
      image:"new1.png"
    },
    {
      name: "Noticia 2",
      title:
        "Argentina Energy Week 2025: encuentro sobre el futuro energético del país",
      text: ".",
      image:"new2.png"
    },
    {
      name: "Noticia 3",
      title: "7ma reunión de la mesa provincial de energía sostenible",
      text: ".",
      image:"new3.png"
    },
    {
      name: "Noticia 4",
      title:
        "Entre Ríos - Evolución de la generación distribuida a partir de fuentes renovables",
      text: ".",      image:"new4.png"
    },
    {
      name: "Noticia 5",
      title:
        "Empresas argentinas deben incorporar 20% de energías renovables desde enero 2025",
      text: ".",      image:"new1.png"
    },
    {
      name: "Noticia 6",
      title:
        "Récord en energía renovable: Argentina marca un hito a fines del 2024",
      text: ".",      image:"new2.png"
    },
  ];

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.titles}>
        <AnimatedDiv>
          <h6 className={styles.heading}>La energía se transforma, y nosotros te lo contamos</h6>
        </AnimatedDiv>
        {/* <h3 className={styles.reviewstitle}>subtitulo de novedades</h3> */}
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
      <p className={styles.topText}>{name}</p>
      <h6 className={styles.bottomText}>{title}</h6>
    </div>

    <div className={styles.cardright}>
      <Image
        src={`/images/news/${image}`}
        alt="image"
        fill
        style={{ objectFit: "cover" }}
      />
      <a href="#noticia" className={styles.circleButton}>
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
  );
};
