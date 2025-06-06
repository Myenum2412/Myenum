import React from "react";
import Hero from "@/app/Pages/Hero";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import { HeroScrollDemo } from "@/app/Pages/Addons/HomeAddons/HeroScrollDemo";
import { WobbleCardDemo } from "@/app/Pages/Addons/HomeAddons/WobbleCardDemo";
import { HeroParallaxDemo } from "./Pages/Addons/HomeAddons/HeroParallax";
import AboutUs from "@/app/Pages/Addons/HomeAddons/AboutUs";
import Testimonials from "./Pages/Addons/HomeAddons/Testimonials";

import { getMetadata } from "@/app/Pages/utils/metadata";

export const generateMetadata = async () => {
  return getMetadata("home");
};

export default function Home() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4 overflow-auto scrollbar-hide">
      <NavBar />
      <Hero />
      <WobbleCardDemo />
      <HeroScrollDemo />
      <div className="w-full">
        <HeroParallaxDemo />
      </div>
      <div className="w-full">
      <AboutUs />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}
