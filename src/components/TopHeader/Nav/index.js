'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';


const links = [
  {
    title: "Inicio",
    href: "home",
    src: "decimal.jpg",
    offset:0
  },
  {
    title: "Sobre nosotros",
    href: "description",
    src: "background3.png",
    offset:-150
  },
  {
    title: "Noticias",
    href: "work",
    src: "decimal.jpg",
    offset:-60
  },

  {
    title: "Contacto",
    href: "contact",
    src: "decimal.jpg",
    offset:-100
  }
]

export default function Index({setIsActive}) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive} />
          <Footer />
        </div>
        {/* <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} alt="image"/> */}
      </div>
    </motion.div>
  )
}