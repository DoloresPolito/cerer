"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import MovingTitle from "../MovingTitle";
import Link from "next/link";

const projects = [
  {
    title: "N1U",
    src: "/paneles/hero.png",
    color: "#706D63",
    link: "/",
    text: "Development",
  },
  {
    title: "INES MIGUENS PHOTO",
    src: "/paneles/hero.png",
    color: "black",
    link: "/",
    text: "Development & Design",
  },
  {
    title: "KOIBANX",
    src: "/paneles/hero.png",
    color: "#8C8C8C",
    link: "/",
    text: "Development",
  },
  {
    title: "CAPILLARIE",
    src: "/paneles/hero.png",
    color: "#8C8C8C",
    link: "/",
    text: "Development & Design",
  },
];

export default function ProjectsV2() {
  return (
    <div className={styles.section} id="projects">
      <MovingTitle title="FEATURED PROJECTS" />
      <div className={styles.projectscontainer}>
        {projects.map((project, i) => (
          <Item key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

const Item = ({ project }) => {
  const underlineVariants = {
    initial: {
      width: 0,
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (

    <div className={styles.project}>
          <Link href={project.link} target="_blank">
      <motion.div
        className={styles.imagecontainer}
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image src={project.src} alt="project image" width={460} height={300} />
      </motion.div>
      <div className={styles.textcontainer}>
        <div className={styles.left}>
          <p>{project.text}</p>
          <h4>{project.title}</h4>
        </div>
 
      </div>
      </Link>
    </div>
 
  );
};
