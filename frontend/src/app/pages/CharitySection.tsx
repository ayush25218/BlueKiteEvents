"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function CharityAnimatedSection() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-5">
      <div className="mx-auto my-14 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_520px]">
        {/* ---------- Left Column (unchanged) ---------- */}
        <div>
          <div className="mb-3 inline-flex items-center gap-3 font-medium uppercase text-[#519133]">
            About Us
          </div>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            <span className="bg-gradient-to-r from-[#519133] to-[#71c34b] bg-clip-text text-transparent">
              Creating memories, one event at a time
            </span>
          </h1>

          <p className="mb-6 max-w-prose text-base leading-relaxed text-black">
            Bluekite Events Pro is your one-stop solution for all event-related needs. With a passion for perfection and an eye for detail, we have been crafting unforgettable experiences for weddings, corporate events, music concerts, comedy shows, and more. Our team of dedicated professionals works tirelessly to bring your vision to life.
          </p>

          <div className="mb-4 flex gap-3">
            <a href="/about" className="btn rounded-full bg-gradient-to-r from-[#71c34b] to-[#519133] px-5 py-3 font-bold text-white shadow hover:-translate-y-1 hover:shadow-xl transition">
              Know More
            </a>
          </div>
        </div>

        {/* ---------- Right Column ---------- */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="relative h-[460px] w-full perspective-[1200px]">
            <div
              className="h-full w-full transform-gpu transition-transform duration-200 ease-out will-change-transform"
            >
              <Image
                src="/images/charity/asdkjsdkjdn565sdjkksdfsdf.webp"
                alt="Charity"
                width={1200}
                height={760}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            {/* 🔵 Glowing Logo Badge */}
            <div className="absolute right-4 top-4 grid h-24 w-24 place-items-center rounded-xl bg-white/70 shadow-lg">
              <div className="relative flex h-20 w-20 items-center justify-center">
                
                <span className="absolute inset-0 rounded-full bg-[#519133] opacity-30 animate-ping" />
                
                <Image
                  src="/images/PG logo green.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="relative z-10 object-contain"
                  priority
                />
              </div>
            </div>


            {/* Glass bottom info card */}
            {/* <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-xl border border-white/60 bg-white/90 p-4 backdrop-blur-md shadow-lg">
              <div className="text-[#519133] font-semibold">
                3,000+ children since 2015
              </div>
              <div className="ml-auto rounded-md border border-[#d6f7c7] bg-white px-3 py-1 font-semibold text-[#519133] shadow-sm">
                Programs
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
