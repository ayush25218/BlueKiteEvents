"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from './HomeAbout.module.css';

export default function HomeAbout() {
  const [reduced, setReduced] = useState<boolean>(() => typeof window !== 'undefined' && localStorage.getItem('bluekite-reduced') === '1');

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem('bluekite-reduced', reduced ? '1' : '0');
  }, [reduced]);

  useEffect(() => {
    document.body.classList.toggle('motion-reduced', reduced);
    if (reduced) {
      document.querySelectorAll(`.${styles.reveal}`).forEach((el) => el.classList.add(styles.show));
      return;
    }
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(`.${styles.reveal}`));
    reveals.forEach((el, i) => {
      const delay = (parseInt(el.dataset.delay || '0', 10) || 0) + 120 + i * 60;
      setTimeout(() => el.classList.add(styles.show), delay);
    });
  }, [reduced, styles.reveal, styles.show]);

  return (
    <main className="relative w-full bg-white border-y border-slate-100 text-slate-900 min-h-screen flex flex-col items-center justify-center p-6 md:p-8">
      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-4 text-indigo-600 text-center uppercase text-sm font-semibold tracking-wider" data-delay="120">
          About Bluekite Events Pro
        </div>
        <h2 className={`${styles.reveal} text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 mb-6`} data-delay="220">
          Turning Visions Into Unforgettable Experiences.
        </h2>
        <p className={`${styles.reveal} text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-600`} data-delay="340">
          A passionate event management company delivering world-class weddings, corporate events, music concerts, comedy shows, and themed celebrations across India.
        </p>
      </div>

      {/* Video in Landscape Mode */}
      <div className={`${styles.reveal} w-full max-w-4xl mx-auto mt-12`} data-delay="420">
        <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onContextMenu={(e) => e.preventDefault()}
            controlsList="nodownload"
          >
            <source src="/Vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
