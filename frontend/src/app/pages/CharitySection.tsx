"use client";
import React from "react";
import Image from "next/image";

export default function CharityAnimatedSection() {
  return (
    <div className="bg-white border-y border-slate-100 pt-16 pb-20">
      <div className="mx-auto my-14 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_520px]">
        {/* ---------- Left Column ---------- */}
        <div>
          <div className="mb-3 inline-flex items-center gap-3 font-semibold uppercase text-indigo-600 tracking-wider text-sm">
            Our Mission
          </div>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 bg-clip-text text-transparent">
              Creating memories, one event at a time
            </span>
          </h2>

          <p className="mb-6 max-w-prose text-base leading-relaxed text-slate-600">
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
          <div className="relative h-[460px] w-full perspective-[1200px]">
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

            {/* Brand text tag */}
            <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-slate-950/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-lg backdrop-blur-md">
              Bluekite Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
