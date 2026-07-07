"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Slide = { title: string; subtitle: string; mobBg: string; bg: string; logo: string, linkData: string, classForSize: string, classForTop: string };

const slidesData: Slide[] = [
  {
    title: "Creating Unforgettable <br/>Wedding Experiences.",
    subtitle:
      "From intimate ceremonies to lavish affairs, we specialize in turning your vision of the perfect wedding into a breathtaking reality.",
    mobBg: "/images/wedding_event.png",
    bg: "/images/wedding_event.png",
    logo: "/images/blue_kite_logo_cropped.png",
    linkData: "/#services",
    classForSize: "w-28 sm:w-36 h-auto sm:h-auto",
    classForTop: "top-28 sm:top-24",
  },
  {
    title: "Corporate Events That Make <br/>Lasting Impressions.",
    subtitle:
      "Impeccably organized corporate gatherings, conferences, product launches and team-building events that elevate your brand.",
    mobBg: "/images/corporate_event.png",
    bg: "/images/corporate_event.png",
    logo: "/images/blue_kite_logo_cropped.png",
    linkData: "/#services",
    classForSize: "w-28 sm:w-36 h-auto sm:h-auto",
    classForTop: "top-24 sm:top-20",
  },
  {
    title: "Live Music Concerts That <br/>Move Souls.",
    subtitle:
      "From intimate gigs to large-scale concerts, we produce electrifying live music experiences that captivate audiences.",
    mobBg: "/images/hero_concert.png",
    bg: "/images/hero_concert.png",
    logo: "/images/blue_kite_logo_cropped.png",
    linkData: "/#services",
    classForSize: "w-28 sm:w-36 h-auto sm:h-auto",
    classForTop: "top-24 sm:top-20",
  },
  {
    title: "Comedy Shows — Where Laughter <br/>Takes Centre Stage.",
    subtitle:
      "Uproarious comedy events that leave you in stitches. Explore our line-up, book your tickets, and prepare for a night of side-splitting humour!",
    mobBg: "/images/hero_comedy.png",
    bg: "/images/hero_comedy.png",
    logo: "/images/blue_kite_logo_cropped.png",
    linkData: "/#services",
    classForSize: "w-20 sm:w-34 h-auto sm:h-auto",
    classForTop: "top-28 sm:top-24",
  },
  {
    title: "Stage Shows & Performances <br/>Like Never Before.",
    subtitle:
      "Performers who captivate audiences through acting, singing, and dancing. Bringing stories and emotions to life on stage.",
    mobBg: "/images/hero_stage.png",
    bg: "/images/hero_stage.png",
    logo: "/images/blue_kite_logo_cropped.png",
    linkData: "/#services",
    classForSize: "w-28 sm:w-36 h-auto sm:h-auto",
    classForTop: "top-24 sm:top-20",
  },
  {
    title: "Themed Events That Transport <br/>You to Another World.",
    subtitle:
      "Let your imagination run wild! Our creative team crafts captivating themed events that immerse your guests in extraordinary experiences.",
    mobBg: "/images/themed_party.png",
    bg: "/images/themed_party.png",
    logo: "/images/blue_kite_logo_cropped.png",
    linkData: "/#services",
    classForSize: "w-20 sm:w-34 h-auto sm:h-auto",
    classForTop: "top-28 sm:top-24",
  },
];

const interval = 7000; // 7 sec

export default function Hero(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [index]);

  function startAutoplay(): void {
    if (timerRef.current) window.clearTimeout(timerRef.current);

    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      progressRef.current.offsetHeight; // force reflow
      progressRef.current.style.transition = `width ${interval}ms linear`;
      progressRef.current.style.width = "100%";
    }

    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, interval);
  }

  function stopAutoplay(): void {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
    }
  }

  const visibleThumbs = [
    index,
    (index + 1) % slidesData.length,
    (index + 2) % slidesData.length,
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Slides */}
      {slidesData.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            // Note the quotes inside url() for paths with spaces
            '--mob-bg-image': `url("${s.mobBg}")`,
            '--bg-image': `url("${s.bg}")`,
          } as React.CSSProperties}
        >
          {/* Unified Background Div */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 animate-zoom-slow bg-[image:var(--mob-bg-image)] sm:bg-[image:var(--bg-image)]"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Logo absolute left */}
          {i === index && (
            <div className={`absolute ${s.classForTop} left-0 z-30 px-4 sm:px-10 md:px-24 xl:px-32 2xl:px-48 sm:mt-28`}>
              <div className="bg-white p-2 rounded-2xl shadow-xl inline-block border border-white/10">
                <Image
                  src={s.logo}
                  alt="Logo"
                  width={120}
                  height={40}
                  className={`${s.classForSize} xl:!w-44 xl:!h-auto 2xl:!w-52 object-contain`}
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="relative z-20 flex h-full items-center px-4 sm:px-10 md:px-24 xl:px-32 2xl:px-48 w-full sm:mt-20">
            <div
              className={`max-w-2xl xl:max-w-3xl 2xl:max-w-4xl transform transition-all duration-1000 ${
                i === index
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h1
                className="mb-4 text-3xl font-bold leading-none text-white md:text-4xl xl:text-5xl 2xl:text-6xl"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <p className="mb-6 text-lg/tight text-gray-200 md:text-xl/normal xl:text-2xl/normal 2xl:text-3xl/normal max-w-2xl">
                {s.subtitle}
              </p>
              <Link href={s.linkData} target="_blank" className="inline-block rounded-md bg-white px-6 py-3 xl:px-8 xl:py-4 text-base xl:text-lg font-semibold text-gray-900 shadow hover:bg-gray-100 transition"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Thumbnail Container with Progress Bar */}
      <div className="absolute bottom-5 sm:bottom-20 right-2 md:right-6 xl:right-10 2xl:right-16 z-30 bg-black/40 p-3 rounded-lg backdrop-blur-sm flex flex-col gap-3 max-w-[500px] xl:max-w-[640px] 2xl:max-w-[780px] w-[95vw] xl:w-auto">
        {/* Arrows + Thumbnails */}
        <div className="flex items-center justify-around gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-white/30 w-full min-w-0 overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={() => {
              stopAutoplay();
              setIndex(
                (idx) => (idx - 1 + slidesData.length) % slidesData.length
              );
            }}
            className="group relative rounded-full bg-white/20 p-2 text-white hover:bg-white/10 transition flex-shrink-0"
          >
            <ArrowLeft className="h-5 w-5 relative z-10" />
          </button>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {visibleThumbs.map((i, idx) => (
              <button
                key={i}
                onClick={() => {
                  stopAutoplay();
                  setIndex(i);
                }}
                className={`h-16 w-24 sm:h-20 sm:w-28 xl:h-24 xl:w-36 2xl:h-28 2xl:w-40 overflow-hidden rounded-md border-2 transition-all hover:scale-105 hover:shadow-lg duration-300 flex-shrink-0 ${
                  i === index
                    ? "border-white"
                    : "border-transparent opacity-70 hover:opacity-100"
                } ${idx > 1 ? "hidden sm:block" : ""}`}
              >
                <Image
                  src={slidesData[i].bg}
                  alt={slidesData[i].subtitle}
                  width={280}
                  height={160}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => {
              stopAutoplay();
              setIndex((idx) => (idx + 1) % slidesData.length);
            }}
            className="group relative rounded-full bg-white/20 p-2 text-white hover:bg-white/10 transition flex-shrink-0"
          >
            <ArrowRight className="h-5 w-5 relative z-10" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full"
            style={{
              transition: `width ${interval}ms linear`,
              background: "linear-gradient(90deg, #114e80, #176097, #2a9df4)",
              backgroundSize: "200% auto",
              animation: "gradientMove 4s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes zoom-slow {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-zoom-slow {
          animation: zoom-slow 15s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Optional: thin scrollbar */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
