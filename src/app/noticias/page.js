"use client"
import { useEffect, useState } from "react";
import ExtraSection from "@/home/ExtraSection";
import Footer from "@/structure/Footer";
import { HeaderBar } from "@/structure/HeaderBar";
import FixedMedia from "@/components/FixedMedia";
import NewsHome from "@/home/NewsHome";

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
 

        <NewsHome />

        <ExtraSection />

        <Footer />
      </div>
    </>
  );
}
