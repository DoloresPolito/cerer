"use client";
import { AnimatePresence } from "framer-motion";
import TopHeader from "../components/TopHeader";
import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
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
      {/* {width > 600 ? <Cursor /> : <></>} */}

      <AnimatePresence mode="wait">
        {/* {isLoading ? (
          <Preloader key="preloader" />
        ) : ( */}
          <div key="content">
            <TopHeader />
            {/* <LandingV2 /> */}
            {/* <Description /> */}
            <ColorChangeOnScrollGsap />
            {/* <ProjectsV2 /> */}
            {/* <CardsSection /> */}

            {/* {width > 800 && <GridScroll />} */}

            {/* <Contact /> */}
          </div>
        {/* )} */}
      </AnimatePresence>
    </>
  );
}
