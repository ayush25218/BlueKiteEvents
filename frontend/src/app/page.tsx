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

      // Mobile + Tablet (Pin only Hero and QuoteSection)
      "(max-width: 1023px)": () => {
        const sections = gsap.utils.toArray<HTMLElement>(".stack-section");

        sections.forEach((section) => {
          if (section.classList.contains("pin-mobile")) {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              pin: true,
              pinSpacing: false,
            });
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative z-0 bg-[#030712]">
        <section className="stack-section pin-mobile h-screen relative z-10">
          <HeroSwiper />
        </section>
        <section className="stack-section pin-mobile sm:h-screen bg-slate-50 relative z-20">
          <QuoteSection />
        </section>
        <section className="stack-section no-pin sm:min-h-screen relative z-30 bg-[#030712]">
          <Ventures />
        </section>
        <section className="stack-section no-pin sm:min-h-screen relative z-40 bg-white">
          <HomeAbout />
        </section>
        <section className="stack-section sm:min-h-screen relative z-50 bg-[#030712]">
          <DiscoverSection/>
        </section>
        <section className="stack-section sm:min-h-screen relative z-60 bg-white">
          <CharityAnimatedSection/>
        </section>
        <section className="stack-section relative z-70 bg-[#030712]">
          <ClientShowcase/>
        </section>
      </div>
    </>
  );
}
