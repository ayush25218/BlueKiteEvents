// components/other-ventures/VentureCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Venture } from "./index";

type VentureCardProps = {
  venture: Venture;
  index: number;
};

export default function VentureCard({ venture, index }: VentureCardProps) {
  return (
    <li className="group relative">
      <Link href={venture.href} target="_blank" className="block h-full w-full">
        {/* Surface with aspect ratio for responsive height */}
        <div className="relative isolate h-full min-h-[480px] overflow-hidden rounded-[36px] bg-neutral-900/60 ring-1 ring-white/10 shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-[1.03]">
          {/* BG image using Next.js Image for optimization */}
          <Image
            src={venture.img}
            alt={venture.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
          />

          {/* Gradient overlay appears on hover */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#000000a6_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Top-left tag */}
          {venture.tag && (
            <div className="absolute left-4 top-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 [transform:translateX(-1rem)] md:left-6 md:top-6 [clip-path:polygon(0%_0%,_calc(100%_-_0.75rem)_0%,_100%_50%,_calc(100%_-_0.75rem)_100%,_0%_100%)] [opacity:0] bg-white/10 px-3 py-1.5">
              {venture.tag}
            </div>
          )}

          {/* Bottom details */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
            <h3 className="text-2xl font-bold text-white md:text-3xl">{venture.title}</h3>

            {/* Content that appears on hover */}
            <div className="mt-4 space-y-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {/* Multi-paragraph desc */}
              <div className="space-y-2">
                {venture.desc.map((d, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-snug text-white/85 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 [transform:translateY(1rem)]"
                    style={{ transitionDelay: `${100 + idx * 50}ms` }}
                  >
                    {d}
                  </p>
                ))}
              </div>

              {/* Bullets (Key offerings) */}
              {venture.bullets && (
                <ul className="mt-4 space-y-1.5">
                  {venture.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="relative pl-5 text-[15px] text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 [transform:translateY(1rem)]"
                      style={{ transitionDelay: `${200 + bi * 60}ms` }}
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-white/90" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}