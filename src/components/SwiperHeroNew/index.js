"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Link from "next/link";
// import BookButton from "../BookButton";
import Image from "next/image";

import completelogo from "../../../public/logo/logo-completo.png";
export default function SwiperHeroNew() {
  const slides = [
    {
      title: "",
      text: "",
      src: "1...jpg",
      link: "/",
    },
    {
      title: "",
      text: "",
      src: "2...jpg",
      link: "/",
    },
    {
      title: "",
      text: "",
      src: "3...jpg",
      link: "/",
    },
    {
      title: "",
      text: "",
      src: "4...jpg",
      link: "/",
    },
    {
      title: "",
      text: "",
      src: "5...jpg",
      link: "/",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.carouselcontainer}>
        <div className={styles.carouselcontent}>
          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className={styles.mySwiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const Slide = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.videocontainer}>
        <Image
          src={`/images/paneles/${slide.src}`}
          alt="image"
          className={styles.video}
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.textcontainer}>

        <div className={styles.textcontent}>
        <div className={styles.logocontainer}>
            <Image src={completelogo} alt="logo camara" />
          </div>
          <div className={styles.title} data-swiper-parallax="-300">
            {slide.title}
          </div>
          <div className={styles.text} data-swiper-parallax="-100">
            <p>{slide.text}</p>
          </div>

          {/* <Link href={slide.link}>
            <BookButton text="Ver tratamientos" color="#fdfdf1" background="transparent" border="#fdfdf1" hoverB="#f8fb9c" hoverC="#39442b" />

          </Link> */}
        </div>
      </div>
    </div>
  );
};
