"use client";

import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components to prevent server-side rendering mismatch
const AboutHero = dynamic(() => import("./AboutHero"), { ssr: false });
const OurJourneyPage = dynamic(() => import("./OurJourneyPage"), { ssr: false });
const GuidingPrinciplesDark = dynamic(() => import("./GuidingPrinciplesDark"), { ssr: false });
const PoddarCream = dynamic(() => import("./PoddarCream"), { ssr: false });
const PoddarLeadership = dynamic(() => import("./PoddarLeadership"), { ssr: false });

export default function About() {
  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>("video[data-autoplay]");
    
    videos.forEach((video) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video autoplay was prevented:", error);
        });
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Poddar Group — Driving Innovation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Hero - Server Rendered for Fast Load */}
      {/* <AboutHero /> */}

      {/* Client Only Rendering of Other Sections */}
      <PoddarLeadership />
      <OurJourneyPage />
      <GuidingPrinciplesDark />
      <PoddarCream />

      <style jsx>{`
        .filter-brightness {
          filter: brightness(0.55);
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1.5s ease-in-out;
        }
        button > span {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          transition: left 0.4s ease-in-out;
        }
        button:hover > span {
          left: 100%;
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
