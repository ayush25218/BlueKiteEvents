"use client";
import React from "react";
import Image from "next/image";

export default function CharityAnimatedSection() {
  return (
    <div className="bg-white border-y border-slate-100 pt-16 pb-20 xl:pt-24 xl:pb-28 2xl:pt-32 2xl:pb-36">
      <div className="mx-auto my-14 grid max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] grid-cols-1 gap-10 xl:gap-16 px-6 xl:px-10 2xl:px-12 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_640px] 2xl:grid-cols-[1fr_780px]">
        {/* ---------- Left Column ---------- */}
        <div>
          <div className="mb-3 inline-flex items-center gap-3 font-semibold uppercase text-indigo-600 tracking-wider text-sm">
            Our Mission
          </div>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 bg-clip-text text-transparent">
              Creating memories, one event at a time
            </span>
          </h2>

          <p className="mb-6 max-w-prose xl:max-w-2xl text-base xl:text-lg 2xl:text-xl leading-relaxed text-slate-600">
            At Blue Kite Events, our mission is to transform your ideas into extraordinary experiences. We blend creative vision, meticulous planning, and seamless execution to craft events that leave a lasting impression. From grand corporate galas and intimate weddings to live concerts and themed celebrations, our team of dedicated professionals works tirelessly to bring your vision to life.
          </p>

          <div className="mb-4 flex gap-3">
            <a href="/about" className="btn rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 font-bold text-white shadow-lg hover:shadow-sky-500/20 hover:-translate-y-1 transition duration-300">
              Know More
            </a>
          </div>
        </div>

        {/* ---------- Right Column ---------- */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-xl">
          <div className="relative h-[460px] xl:h-[560px] 2xl:h-[680px] w-full perspective-[1200px]">
            <div
              className="h-full w-full transform-gpu transition-transform duration-200 ease-out will-change-transform"
            >
              <Image
                src="/images/charity.jpg"
                alt="Blue Kite Events Mission"
                width={1200}
                height={760}
                className="h-full w-full rounded-2xl object-cover"
                priority
              />
            </div>

            {/* 🔵 Glowing Logo Badge */}
            <div className="absolute right-4 top-4 grid h-24 w-24 place-items-center rounded-xl bg-white border border-slate-100 shadow-md">
              <div className="relative flex h-20 w-20 items-center justify-center">
                
                <span className="absolute inset-0 rounded-full bg-sky-500 opacity-20 animate-ping" />
                
                <Image
                  src="/images/bke_logo_cropped.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="relative z-10 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
