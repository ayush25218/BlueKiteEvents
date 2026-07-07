"use client";

import React, { useEffect, useState, useRef, JSX } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { venturesData } from "./data/Services";

export default function PortfolioShowcase(): JSX.Element {
  const [activeId, setActiveId] = useState<string | null>(
    venturesData[0]?.id ?? null
  );
  const [hovering, setHovering] = useState(false);

  const activeItem =
    venturesData.find((v) => v.id === activeId) ?? venturesData[0];

  return (
    <section className="relative bg-[#156195] py-16 px-4 md:px-6">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-50"
        src="/Vid1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#04050a]/65 z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-yellow-500/6 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 text-center">
          <span className="text-white uppercase tracking-wide text-base">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
              Services
            </span>
          </h2>
        </div>

        {/* Using Flexbox for responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT Column */}
          <div className="w-full lg:w-1/3">
            {/* Desktop: Vertical scroll */}
            <div className="hidden lg:block">
              <div
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="space-y-4 max-h-[560px] overflow-y-auto pr-2"
              >
                {venturesData.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setActiveId(item.id)}
                      onFocus={() => setActiveId(item.id)}
                      className={`w-full group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 focus:outline-none transform hover:translate-x-2 relative overflow-hidden ${
                        isActive
                          ? "bg-white/[0.08] border-sky-500/30 shadow-[0_4px_20px_rgba(56,189,248,0.12)]"
                          : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20"
                      }`}
                      aria-pressed={isActive}
                    >
                      {/* Left Accent Indicator */}
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-r-full transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-b from-sky-400 to-indigo-500 h-2/3" 
                          : "bg-transparent h-0 group-hover:bg-white/20 group-hover:h-1/3"
                      }`} />

                      <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#f0f2f5] pl-1">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="80px"
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-left pl-1">
                        <h3 className={`text-sm md:text-base font-bold transition-all duration-300 ${
                          isActive 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400" 
                            : "text-white group-hover:text-sky-400"
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-xs mt-1 line-clamp-2 transition-all duration-300 ${
                          isActive ? "text-white/80" : "text-white/45 group-hover:text-white/70"
                        }`}>
                          {item.desc?.[0]}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile & Tablet: Horizontal Swiper */}
            <div className="lg:hidden">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={12}
                slidesPerView={"auto"}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className="!overflow-hidden"
              >
                {venturesData.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    style={{ width: "80%", maxWidth: "300px" }}
                  >
                    <button
                      onClick={() => setActiveId(item.id)}
                      className={`group w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 ${
                        item.id === activeId ? "bg-white/10" : "bg-white/5"
                      }`}
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-white/60 mt-1 line-clamp-2">
                          {item.desc?.[0]}
                        </p>
                      </div>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT Column */}
          <div className="w-full lg:w-2/3">
            <div className="relative rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-[480px] md:h-[560px] bg-black rounded-3xl"
                >
                  <Image
                    src={activeItem.fimg}
                    alt={activeItem.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 z-10"
                  >
                    <div className="backdrop-blur-[1px] bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6 shadow-lg">
                      <h3 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
                        {activeItem.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 mt-2">
                        {activeItem.desc?.[0]}
                      </p>
                      {activeItem.bullets && (
                        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/70">
                          {activeItem.bullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#5ea9df] flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Render social links */}
                      {activeItem.links && (
                        <div className="flex mt-5 gap-4">
                          {activeItem.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={link.label}
                              className="text-white hover:text-[#5ea9df] transition-colors text-2xl"
                            >
                              {link.icon}
                            </a>
                          ))}
                        </div>
                      )}
                      <div className="mt-6">
                        <a
                          href={activeItem.href || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                        >
                          Explore
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Custom scrollbar for desktop vertical list */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
