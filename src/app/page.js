"use client";
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
// import ColorChangeOnScrollGsap from "@/components/ChangeColor";
import { HeaderBar } from "@/structure/HeaderBar";
import FixedMedia from "@/components/FixedMedia";
import Description from "@/components/Description";
import NewsHome from "@/home/NewsHome";
import NewSection from "@/home/NewSection";
import LogosMoving from "@/home/LogosMoving";
import LandingV3 from "@/components/LandingV3";
import ExtraSection from "@/home/ExtraSection";
import Footer from "@/structure/Footer";
import Benefits from "@/home/BenefitsSectionV2";

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
      <AnimatePresence mode="wait">
        <div key="content">
          <HeaderBar />
          <FixedMedia />
          {width > 600 ? <Cursor /> : <></>}

          {/* <ColorChangeOnScrollGsap /> */}

          <LandingV3 />
          <Description />

          <NewsHome />
       
          <Benefits />
          <ExtraSection />
          <LogosMoving />
          {/* {width > 600 ?   : <></>} */}
         
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}
