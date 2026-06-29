"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroSwiper from "./components/Hero";
import QuoteSection from "./pages/QuoteSection";
// import Header from "./components/Header";
import Ventures from "./pages/Ventures";
import HomeAbout from "./pages/HomeAbout";
import DiscoverSection from "./pages/DiscoverSection";
import CharityAnimatedSection from "./pages/CharitySection";
import ClientShowcase from "./components/ClientShowcase";
// import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.matchMedia({
      // Desktop only
      "(min-width: 1024px)": () => {
        const sections = gsap.utils.toArray<HTMLElement>(".stack-section");

        sections.forEach((section) => {
          // Skip pinning Ventures
          if (!section.classList.contains("no-pin")) {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              pin: true,
              pinSpacing: false,
            });
          }
        });
      },

      // Mobile + Tablet
      "(max-width: 1023px)": () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative z-0">
        <section className="stack-section h-screen relative z-10">
          <HeroSwiper />
        </section>
        <section className="stack-section sm:h-screen bg-white relative z-20">
          <QuoteSection />
        </section>
        <section className="stack-section no-pin sm:min-h-screen relative z-30 bg-white">
          <Ventures />
        </section>
        <section className="stack-section no-pin sm:min-h-screen relative z-40 bg-white">
          <HomeAbout />
        </section>
        <section className="stack-section sm:min-h-screen relative z-50 bg-white">
          <DiscoverSection/>
        </section>
        <section className="stack-section sm:min-h-screen relative z-60 bg-white">
          <CharityAnimatedSection/>
        </section>
        <section className="stack-section relative z-70 bg-white">
          <ClientShowcase/>
        </section>
      </div>
    </>
  );
}
