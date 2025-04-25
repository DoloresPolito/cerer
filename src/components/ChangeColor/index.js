"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

import ProjectsV2 from "../ProjectsV2";
import styles from "./styles.module.scss";
import Description from "@/components/Description";
import Contact from "@/components/Contact";
import LandingV2 from "@/components/LandingV2";

gsap.registerPlugin(ScrollTrigger);

function ColorChangeOnScrollGsap() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const scrollBar = Scrollbar.init(mainRef.current, {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });

    ScrollTrigger.defaults({
      scroller: mainRef.current,
    });

    ScrollTrigger.scrollerProxy(mainRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sectionColor = document.querySelectorAll("[data-bgcolor]");
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? "" : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor = i === 0 ? "" : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: mainRef.current,
        start: "top 100%",
        onEnter: () =>
          gsap.to(mainRef.current, {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to(mainRef.current, {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: "auto",
          }),
      });
    });

    return () => {
      scrollBar.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className={styles.main} ref={mainRef}>
      {/* Tus secciones */}
      <section className={styles.section} data-bgcolor="#001D19" data-textcolor="#d0b6c0">
        <div className={styles.container}>
          <LandingV2 />
        </div>
      </section>
      <section className={styles.section} data-bgcolor="#013D35" data-textcolor="#ffffff">
        <div className={styles.container}>
          <Description />
        </div>
      </section>
      <section className={styles.section} data-bgcolor="#ffffff" data-textcolor="black">
        <div className={styles.container}>
          <Contact />
        </div>
      </section>
      <section className={styles.section} data-bgcolor="#f4f4d6" data-textcolor="#000000">
        <div className={styles.container}>
          <ProjectsV2 />
        </div>
      </section>
    </main>
  );
}

export default ColorChangeOnScrollGsap;