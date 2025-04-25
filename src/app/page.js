"use client";

import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Description from "../components/Description";
import Contact from "../components/Contact";
import GridScroll from "../components/GridScroll";
import "./page.module.scss";
import TopHeader from "../components/TopHeader";
import CardsSection from "@/components/CardsSection";
import ProjectsV2 from "@/components/ProjectsV2";
import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
import LandingV3 from "@/components/LandingV3";
import LandingV2 from "@/components/LandingV2";
import ColorChangeOnScrollGsap from "@/components/ChangeColor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);



  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

        {width > 600 ? <Cursor /> : <></>}

 



        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <div key="content">
              <TopHeader />
              {/* <LandingV2 /> */}
              {/* <Description /> */}
              <ColorChangeOnScrollGsap/>
              {/* <ProjectsV2 /> */}
              {/* <CardsSection /> */}
     
              {/* {width > 800 && <GridScroll />} */}

              {/* <Contact /> */}

            </div>
        )}
        </AnimatePresence>

    </>
  );
}
