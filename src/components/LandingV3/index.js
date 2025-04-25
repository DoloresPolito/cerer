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
import { Link } from "react-scroll";
// import image from "../../../public/images/ines.png"
// import Image from "next/image";
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
      {/* <Image src={image} alt="background"/> */}
        <motion.div style={{ y }} className={styles.motionDiv}>
      
          <div className={styles.topcontainer}>
            <motion.div variants={slideUp2} initial="initial" animate="enter">
              <h1>cerer</h1>
            </motion.div>
          </div>

          <div className={styles.bottomcontainer}>
            <motion.div
              variants={slideUp}
              initial="initial"
              animate="enter"
              className={styles.textcontainer}
            >
              <p className={styles.results}>
               Impulsamos la energia del futuro. Sumate a la transición energética.
              </p>

              <div className={styles.bottombuttons}>
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
              </div>
            </motion.div>
    
          </div>
        </motion.div>{" "}
      </div>
    </>
  );
}
