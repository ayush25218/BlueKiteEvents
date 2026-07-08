"use client";

import React, { useEffect, useRef } from "react";

type Company = { name: string; sub: string };

const companies: Company[] = [
  {
    name: "Gradient Security",
    sub: "Services",
  },
  {
    name: "SAMC Enterprises",
    sub: "Corporate Services",
  },
  {
    name: "AAkash Travels",
    sub: "Travel House",
  },
  {
    name: "Meetali Fabric",
    sub: "Textile & Design",
  },
];

export default function ClientShowcase() {
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const showcaseEl = showcaseRef.current;
    const marqueeEl = marqueeRef.current;
    if (!showcaseEl || !marqueeEl) return;

    let pos = 0;
    let lastTime: number | null = null;
    const speed = 80; // px / sec

    const makeCard = (c: Company) => {
      const d = document.createElement("div");
      d.className ="flex-shrink-0 w-[210px] h-[82px] rounded-xl p-4 flex flex-col items-center justify-center text-center bg-[#d1e0eb] border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-lg hover:z-10";
      
      d.innerHTML = `<span class="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">${c.name}</span><span class="mt-1 text-[11px] font-medium text-slate-600">${c.sub}</span>`;
      return d;
    };

    const populateMarquee = () => {
      marqueeEl.innerHTML = "";
      // duplicate list so we can seamlessly scroll
      [...companies, ...companies].forEach((c) =>
        marqueeEl.appendChild(makeCard(c))
      );
      marqueeEl.style.willChange = "transform";
    };

    const animateMarquee = (timestamp: number) => {
      if (lastTime === null) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
      pos -= speed * dt;
      const resetWidth = marqueeEl.scrollWidth / 2;
      if (Math.abs(pos) > resetWidth) pos += resetWidth;
      marqueeEl.style.transform = `translateX(${pos}px)`;
      rafRef.current = requestAnimationFrame(animateMarquee);
    };

    const startAnimation = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      lastTime = null;
      if (rafRef.current == null)
        rafRef.current = requestAnimationFrame(animateMarquee);
    };

    const stopAnimation = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    populateMarquee();
    startAnimation();

    const onMouseEnter = () => stopAnimation();
    const onMouseLeave = () => startAnimation();

    showcaseEl.addEventListener("mouseenter", onMouseEnter);
    showcaseEl.addEventListener("mouseleave", onMouseLeave);

    return () => {
      stopAnimation();
      showcaseEl.removeEventListener("mouseenter", onMouseEnter);
      showcaseEl.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="p-5">
      <div
        ref={showcaseRef}
        className="w-full max-w-screen h-[160px] rounded-2xl relative bg-white border border-gray-200 shadow-xl flex items-center gap-6 p-6
                  max-lg:flex-col max-lg:h-auto max-lg:max-w-[90vw]"
      >
        <div
          className="flex-none basis-1/4 min-w-[250px] flex flex-col justify-center gap-2 max-lg:basis-auto max-lg:text-center max-lg:items-center"
          role="region"
          aria-label="About collaboration"
        >
          <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-gray-800">
            Trusted by the <span className="text-[#16619A]">Best.</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Our clients who trusted us with their special moments.
          </p>
        </div>

        <div
          className="flex-1 min-w-0 h-full flex items-center max-lg:w-full max-lg:mt-4"
          role="region"
          aria-label="Clients carousel"
        >
          <div
            className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
          >
            <div
              ref={marqueeRef}
              className="flex items-center gap-4 will-change-transform"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
