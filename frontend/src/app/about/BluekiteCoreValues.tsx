"use client";
import React, { useEffect, useRef, useCallback } from "react";

type CardItem = {
  title: string;
  desc: string;
  icon: string;
};

const SvgIcon = ({ icon }: { icon: string }): React.JSX.Element | null => {
  const commonProps = {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className: "stroke-white",
    strokeWidth: "1.5",
  };

  switch (icon) {
    case "bulb":
      return (
        <svg {...commonProps} strokeLinecap="round">
          <path d="M12 2v6" />
          <circle cx="12" cy="14" r="6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...commonProps} strokeLinecap="round">
          <path d="M12 3v18" />
          <path d="M5 8h14" />
        </svg>
      );
    case "circle":
      return (
        <svg {...commonProps} strokeLinecap="round">
          <path d="M2 12h20" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "drop":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-6-4-8-8 2-7 8-7 8 3 8 7-8 8-8 8z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function BluekiteCoreValues(): React.JSX.Element {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  const items: CardItem[] = [
    { title: "Creative Innovation", desc: "Unleashing creativity and designing bespoke event themes, we constantly redefine the boundaries of event planning.", icon: "bulb" },
    { title: "Excellence in Execution", desc: "From concept to the final applause, we ensure every detail is meticulously planned and flawlessly executed.", icon: "plus" },
    { title: "Vendor Collaboration", desc: "Partnering with the best decorators, caterers, and artists to deliver a seamless, high-end experience.", icon: "circle" },
    { title: "Social Responsibility", desc: "Crafting sustainable and eco-friendly events while supporting local artists and communities.", icon: "drop" },
  ];

  useEffect(() => {
    const elementsToReveal = revealRefs.current.filter((el): el is HTMLElement => el !== null);
    if (elementsToReveal.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = elementsToReveal.indexOf(el);
            setTimeout(() => el.classList.add("visible"), idx * 100);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToReveal.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRevealRef = useCallback((el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  return (
    <div className="min-h-screen text-white p-4 sm:p-10 antialiased mx-2">
      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: transform .8s cubic-bezier(.2,.9,.2,1), opacity .7s; }
        .reveal.visible { opacity: 1; transform: none; }

        .card-glow { position: relative; overflow: hidden; }
        .card-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, #007bff, #3aa0ff);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
        }
        .card-glow:hover::before { opacity: 1; }
      `}</style>

      <main className="relative z-10 w-full mx-auto backdrop-blur-lg rounded-3xl" role="main">
        <header className="text-center mb-16">
          <div ref={setRevealRef} className="reveal text-[#0a3f63] font-semibold text-base tracking-wider uppercase mb-3">
            Bluekite Events Pro
          </div>
          <h1 ref={setRevealRef} className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#156397]">
            Dream, Create & Celebrate
          </h1>
          <p ref={setRevealRef} className="reveal mt-4 max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            Our mindset drives creativity, elegance, and spectacular results. Together, we push boundaries and deliver exceptional celebrations.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4" aria-label="Core focus areas">
          {items.map((item) => (
            <article
              key={item.title}
              ref={setRevealRef}
              className="card-glow reveal bg-slate-800 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="icon w-16 h-16 rounded-2xl inline-grid place-items-center bg-gradient-to-br from-blue-500 to-blue-700 mb-6 shadow-lg shadow-blue-500/20">
                <SvgIcon icon={item.icon} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300/70 leading-relaxed text-base flex-grow">{item.desc}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
