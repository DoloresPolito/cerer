"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { HeaderBar } from "@/structure/HeaderBar";
import LogosMoving from "@/home/LogosMoving";
import HeroNew from "@/components/HeroNew";
import DescriptionNew from "@/components/DescriptionNew";
import ExtraSection from "@/home/ExtraSection";
import Footer from "@/structure/Footer";
import Benefits from "@/home/BenefitsSectionV2";
import NewsHomeCar from "@/home/NewsHomeCar";
import SitiosInteres from "@/home/SitiosInteres";

export default function Home() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.cursor = "default";
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <div key="content">
          {/* Content above ExtraSection: sits on top (zIndex 2) */}
          <div style={{ position: "relative", zIndex: 2, background: "white" }}>
            <HeaderBar />
            <HeroNew />
            <DescriptionNew />

            {/* <NewsHome /> */}
            <NewsHomeCar/>

            <Benefits />
            <SitiosInteres />
          </div>

          {/* ExtraSection: sticky behind content (zIndex 1) */}
          <ExtraSection />

          {/* Content below ExtraSection: covers it as it scrolls in (zIndex 2) */}
          <div style={{ position: "relative", zIndex: 2, background: "white" }}>
            <LogosMoving />
          </div>

          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}
