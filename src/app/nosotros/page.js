"use client";
import { useEffect, useState } from "react";
import ExtraSection from "@/home/ExtraSection";
import Footer from "@/structure/Footer";
import { HeaderBar } from "@/structure/HeaderBar";
import FixedMedia from "@/components/FixedMedia";
import NewsHome from "@/home/NewsHome";

import Description from "@/components/Description";

import LogosMoving from "@/home/LogosMoving";

export default function Noticias() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <div>
        <HeaderBar />
        <FixedMedia />

        <Description />

        <ExtraSection />
        <LogosMoving />
        <Footer />
      </div>
    </>
  );
}
