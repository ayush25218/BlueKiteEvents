"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEM_IMAGE = "/images/gold.jpg";

const discoverItems = [
  {
    name: "Weddings",
    copy: "Elegant decor, rituals, and guest journeys.",
    link: "/services/weddings",
    image: "/images/discover_wedding.jpg",
    tone: "text-sky-300 border-sky-300/40 shadow-sky-500/20",
  },
  {
    name: "Corporate Events",
    copy: "Conferences, launches, and brand gatherings.",
    link: "/services/corporate-events",
    image: "/images/discover_corporate.jpg",
    tone: "text-indigo-300 border-indigo-300/40 shadow-indigo-500/20",
  },
  {
    name: "Music Concerts",
    copy: "Live stages, sound, lights, and crowd energy.",
    link: "/services/music-concerts",
    image: "/images/discover_concert.png",
    tone: "text-pink-300 border-pink-300/40 shadow-pink-500/20",
  },
  {
    name: "Comedy Shows",
    copy: "Clean audience flow for memorable live nights.",
    link: "/services/comedy-shows",
    image: "/images/discover_comedy.jpg",
    tone: "text-purple-300 border-purple-300/40 shadow-purple-500/20",
  },
  {
    name: "Social Celebrations",
    copy: "Personal milestones with premium detailing.",
    link: "/services/social-celebrations",
    image: "/images/discover_social.jpg",
    tone: "text-violet-300 border-violet-300/40 shadow-violet-500/20",
  },
  {
    name: "Themed Parties",
    copy: "Immersive concepts, styling, and production.",
    link: "/services/themed-parties",
    image: "/images/themed_party.jpg",
    tone: "text-blue-300 border-blue-300/40 shadow-blue-500/20",
  },
  {
    name: "Stage Shows",
    copy: "Performances built with lighting and precision.",
    link: "/services/stage-shows",
    image: "/images/stage_show.jpg",
    tone: "text-emerald-300 border-emerald-300/40 shadow-emerald-500/20",
  },
];

const DiscoverSection = () => {
  const [bgImage, setBgImage] = useState(DEFAULT_ITEM_IMAGE);

  const GridItem = ({ item }: { item: (typeof discoverItems)[0] }) => {
    const isActive = bgImage === item.image;

    return (
      <Link
        href={item.link}
        onMouseEnter={() => setBgImage(item.image)}
        onMouseLeave={() => setBgImage(DEFAULT_ITEM_IMAGE)}
        className={`
          group relative z-20 flex h-36 overflow-hidden border border-white/10 bg-slate-950/55 text-white
          shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 md:h-44 xl:h-56 2xl:h-64
          hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl ${isActive ? item.tone : ""}
        `}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-65 transition duration-700 group-hover:scale-110 group-hover:opacity-85"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/42 to-black/18" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 xl:p-6">
          <span className="mb-2 block text-lg font-bold leading-tight md:text-xl xl:text-2xl">
            {item.name}
          </span>
          <p className="max-w-xs text-sm leading-5 text-white/80 md:text-[15px]">
            {item.copy}
          </p>
        </div>
        <div
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 ${item.tone}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>
    );
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-20 text-white sm:py-24 lg:py-28">
      <Image
        key={bgImage}
        src={bgImage}
        alt="BlueKite event categories"
        fill
        sizes="100vw"
        className="z-0 object-cover transition-opacity duration-700 ease-in-out"
        quality={100}
        priority
      />
      <div className="absolute inset-0 z-10 bg-black/58" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_35%),linear-gradient(180deg,rgba(3,7,18,0.2),rgba(3,7,18,0.78))]" />

      <div className="relative z-20 flex w-full flex-col items-center justify-center px-4 md:px-8 xl:px-12 2xl:px-16">
        <div className="mb-10 flex w-full max-w-6xl flex-col items-start justify-between gap-7 px-1 text-left md:mb-12 md:flex-row xl:max-w-[1500px] 2xl:max-w-[1680px]">
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <span className="mb-2 block h-1 w-12 bg-blue-200" />
              <p className="text-base font-semibold uppercase tracking-wider text-blue-200 md:text-lg">
                Our Event Categories
              </p>
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              All types of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                events
              </span>{" "}
              covered.
            </h1>
          </div>
          <div className="w-full md:w-2/5 md:pt-12">
            <p className="text-base leading-8 text-gray-100 md:text-lg xl:text-xl">
              Our expertise spans across events like weddings, corporate gatherings,
              music concerts, comedy shows, themed parties, and stage performances.
            </p>
          </div>
        </div>

        <div className="hidden w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.38)] lg:block xl:max-w-[1500px] 2xl:max-w-[1680px]">
          <div className="grid grid-cols-3">
            {discoverItems.slice(0, 3).map((item) => (
              <GridItem key={item.name} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-4">
            {discoverItems.slice(3, 7).map((item) => (
              <GridItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="block w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.38)] lg:hidden xl:max-w-[1500px] 2xl:max-w-[1680px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {discoverItems.map((item) => (
              <GridItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
