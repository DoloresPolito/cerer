"use client";
import styles from "./style.module.scss";
import { slideUp, slideUp2} from "./animation";
import {
  useInView,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef} from "react";
import Image from "next/image";
import completelogo from "../../../public/logo/logo-completo.png"
export default function LandingV3() {
  const home = useRef(null);
  const isInView = useInView(home);



  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <>
      <div className={styles.section} ref={home} id="home">
   
        <motion.div style={{ y }} className={styles.motionDiv}>
     
          <div className={styles.topcontainer}>
            <motion.div variants={slideUp2} initial="initial" animate="enter">
              {/* <h1>Cámara de Energías Renovables de Entre Ríos</h1> */}
              <Image src={completelogo} alt="logo camara"/>
            </motion.div>
          </div>

          <div className={styles.bottomcontainer}>

          {/* <video autoplay muted loop playsinline class="video-background">
    <source src="/video/video.mp4" type="video/mp4"/>
    Tu navegador no soporta el video.
  </video> */}

            <motion.div
              variants={slideUp}
              initial="initial"
              animate="enter"
              className={styles.textcontainer}
            >
           
              {/* <p className={styles.text}>
               Impulsamos la energia del futuro. <br/>Sumate a la transición energética.
              </p> */}

              {/* <div className={styles.bottombuttons}>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                >
                  <motion.div
                    variants={slideUp2}
                    initial="initial"
                    animate="enter"
                  >
                    <div className={styles.buttoncontainer}>
                      <h6>featured projects</h6>

      
                    </div>
                  </motion.div>
                </Link>
              </div> */}
            </motion.div>
    
          </div>
        </motion.div>{" "}
      </div>
    </>
  );
}
