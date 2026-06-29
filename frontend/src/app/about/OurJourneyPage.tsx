"use client";

import React from "react";
import {
  Briefcase,
  TrendingUp,
  Users,
  Eye,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";

/**
 * A functional component that renders the "Our Journey" section with a premium, clean corporate aesthetic.
 * It's built with TypeScript and styled using Tailwind CSS, featuring subtle animations and a refined layout.
 * @returns {React.ReactElement} The rendered page component.
 */
const OurJourneyPage: React.FC = () => {
  // Data for the image grid, with initial transforms removed for a clean look
  const journeyImages = [
    {
      src: "./images/about/c9zy7kj6yjlh7wkyntx4.webp",
      alt: "A dedicated team collaborating on a project",
      label: "Innovation",
      Icon: Briefcase,
    },
    {
      src: "./images/about/nxsvtlyjf9zm3xt2rbhf.webp",
      alt: "Modern architecture representing corporate growth",
      label: "Growth",
      Icon: TrendingUp,
    },
    {
      src: "./images/about/xtcwwcmupe58djusophr.webp",
      alt: "Professionals in a meeting, symbolizing collaboration",
      label: "Collaboration",
      Icon: Users,
    },
    {
      src: "./images/about/dgtddgdq6jl5pbm0mtcu.webp",
      alt: "A futuristic cityscape at dusk, symbolizing a forward-looking vision",
      label: "Vision",
      Icon: Eye,
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes subtle-gradient-pan {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-background {
          background: linear-gradient(
            110deg,
            #f0f7ff,
            #e6f2ff,
            #f0f7ff
          );
          background-size: 200% 200%;
          animation: subtle-gradient-pan 15s ease-in-out infinite;
        }
        .card-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: -200%;
          width: 200%;
          height: 100%;
          transform: skewX(-25deg);
          background-image: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
        }
        .group:hover .card-shine::after {
          left: 200%;
          transition: left 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>

      <div className="w-full animated-background p-4 sm:p-8 md:p-12 flex items-center justify-center font-sans antialiased">
        <main className="relative z-10 w-full mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-100/50 border border-white/50 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <span className="font-semibold text-base text-blue-600 uppercase tracking-widest mb-4 inline-block">
              Our Journey
            </span>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-7 text-gray-900">
              Crafting Legacies, <span className="text-blue-700">Shaping Futures</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
              At Poddar Group, our journey is a testament to resilience and a relentless pursuit of creating a lasting global impact. We blend experienced leadership with modern innovation to deliver sustainable growth and meaningful outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* <button
                type="button"
                className="group flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold text-white bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 shadow-lg hover:shadow-blue-300/50 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <span>Discover More</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button> */}

              <Link href="/contact"
                type="button"
                className="group flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold bg-transparent border-2 border-blue-300 text-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <Phone size={16} className="transition-transform duration-300 group-hover:rotate-[-12deg]" />
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Aligned Image Grid */}
          <div className="relative grid grid-cols-2 gap-6 sm:gap-8 h-[400px] lg:h-auto">
            {journeyImages.map((image, index) => {
              const Icon = image.Icon;
              return (
                <figure
                  key={index}
                  className="group relative rounded-xl overflow-hidden shadow-lg h-full cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="card-shine absolute inset-0" />

                  <figcaption className="absolute left-4 bottom-4 flex items-center gap-2.5 transition-all duration-300 group-hover:bottom-5">
                    <Icon size={16} className="text-white/80 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                    <span className="text-white font-semibold text-sm">
                      {image.label}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default OurJourneyPage;
