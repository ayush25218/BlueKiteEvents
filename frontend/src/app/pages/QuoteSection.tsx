"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import founderImage from "../../../public/images/AnilMehra.png";

export default function QuoteSection() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const blob1Ref = useRef<HTMLDivElement | null>(null);
  const blob2Ref = useRef<HTMLDivElement | null>(null);
  const blob3Ref = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);

  // Quote fade-in
  useEffect(() => {
    if (!contentRef.current) return;

    const el = contentRef.current;
    el.classList.add("opacity-0", "translate-y-6");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-6");
          el.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-1000"
          );
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Background blobs animation + parallax
  useEffect(() => {
    if (blob1Ref.current && blob2Ref.current && blob3Ref.current) {
      gsap.to(blob1Ref.current, {
        x: 60,
        y: 40,
        scale: 1.2,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        x: -80,
        y: -50,
        scale: 1.3,
        duration: 10,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(blob3Ref.current, {
        x: 40,
        y: -30,
        scale: 1.5,
        duration: 12,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 100;
        const y = (e.clientY / innerHeight - 0.5) * 100;

        gsap.to(blob1Ref.current, {
          x: x / 2,
          y: y / 2,
          duration: 1.2,
          ease: "power2.out",
        });
        gsap.to(blob2Ref.current, {
          x: -x / 2,
          y: -y / 2,
          duration: 1.5,
          ease: "power2.out",
        });
        gsap.to(blob3Ref.current, {
          x: x / 3,
          y: -y / 3,
          duration: 1.8,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Premium button GSAP
  useEffect(() => {
    if (!btnRef.current) return;
    const btn = btnRef.current;

    const handleEnter = () => {
      gsap.to(btn, {
        scale: 1.08,
        rotateX: 10,
        rotateY: -10,
        boxShadow: "0px 20px 40px rgba(59, 179, 227, 0.5)",
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(btn, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleClick = () => {
      gsap.to(btn, {
        scale: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);
    btn.addEventListener("mousedown", handleClick);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
      btn.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-slate-50 border-y border-slate-100">
      {/* Animated blurred blobs (brand colors, soft opacity for light theme) */}
      <div
        ref={blob1Ref}
        className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-sky-500/5 blur-3xl"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-3xl"
      />
      <div
        ref={blob3Ref}
        className="absolute top-[30%] left-[45%] w-[220px] h-[220px] rounded-full bg-purple-500/5 blur-2xl opacity-60"
      />

      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] opacity-60 pointer-events-none" />

      {/* Main content card */}
      <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200/60 flex flex-col md:flex-row items-center md:items-stretch z-10">
        {/* Left Image (Desktop Only) */}
        <div className="relative hidden md:block w-1/2 min-h-[500px] overflow-hidden">
          <Image
            src={founderImage}
            alt="Founder"
            fill
            priority
            className="object-cover scale-102 hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-full md:w-1/2 items-center justify-center p-8 sm:p-10 md:p-12">
          <div ref={contentRef} className="w-full max-w-md transform">
            <blockquote className="relative text-slate-700 text-sm sm:text-base leading-relaxed font-medium pl-2">
              <span className="text-4xl text-sky-500 absolute -left-4 -top-3 font-serif">
                “
              </span>
              <span>
                At Bluekite Events Pro, our mission is simple — to turn your vision into an unforgettable experience. Whether it&apos;s a wedding that takes your breath away, a corporate event that leaves a lasting impression, or a comedy show that has everyone in stitches, we pour our heart into every detail. With years of experience and a passion for creating memories, we bring creativity, precision, and joy to every event we touch.
              </span>
              <span className="text-4xl text-sky-500 ml-1 font-serif">
                ”
              </span>
            </blockquote>

            {/* Accent Line */}
            <div className="relative mt-6 mb-6">
              <div className="h-[2.5px] w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"></div>
            </div>

            {/* Name, Title & Avatar */}
            <div className="flex items-center gap-4 mb-8">
              {/* Circular Avatar (Mobile Only) */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 md:hidden flex-shrink-0 bg-slate-100">
                <Image
                  src={founderImage}
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base tracking-wide">
                  Anil Mehra
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-0.5">
                  Founder & CEO, Bluekite Events Pro
                </p>
              </div>
            </div>

            {/* Premium Button */}
            <a
              ref={btnRef}
              href="/about"
              className="relative inline-flex items-center justify-center px-8 py-3 text-xs font-bold uppercase tracking-wider text-white rounded-full 
             bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700
             shadow-lg shadow-sky-500/20
             border border-white/10 
             overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">About Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import deepak_poddar from "../../../public/images/deepakpoddar.png";
// // import deepak_poddar from "../../../public/images/deepak_poddar.jpg";

// export default function QuoteSection() {
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!contentRef.current) return;

//     const el = contentRef.current;
//     el.classList.add("opacity-0", "translate-y-6");

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.remove("opacity-0", "translate-y-6");
//           el.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-1000");
//         }
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row items-center md:items-stretch w-full bg-white">
//       {/* Left Image */}
//       <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden rounded-br-2xl">
//         <Image
//           src={deepak_poddar}
//           alt="Leader"
//           fill
//           priority
//           className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out rounded"
//         />
//       </div>

//       {/* Right Content */}
//       <div className="flex w-full md:w-1/2 items-center justify-center p-6 md:p-12 bg-gradient-to-br from-white to-gray-50">
//         <div ref={contentRef} className="max-w-lg transform">
//           <blockquote className="relative text-gray-800 text-xl md:text-2xl leading-relaxed font-light italic">
//             <span className="text-6xl text-yellow-400 absolute -left-8 -top-8">“</span>
//             <span className="font-serif">
//               Universities should drive the frontiers of research, while corporations should excel in execution.
//               Together, we can create meaningful impact — not just in the marketplace, but within the very fabric of Indian society.
//             </span>
//             <span className="text-6xl text-yellow-400 absolute -right-6 bottom-0">”</span>
//           </blockquote>

//           {/* Accent Line */}
//           <div className="relative mt-8 mb-6">
//             <div className="h-[3px] w-2/3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
//           </div>

//           {/* Name & Title */}
//           <div className="mb-8">
//             <p className="font-semibold text-gray-900 text-lg tracking-wide">Deepak Poddar</p>
//             <p className="text-sm text-gray-500 uppercase tracking-widest">Founder / CEO, Poddar Group</p>
//           </div>

//           {/* Premium Button */}
//           <a
//             href="#"
//             className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
//           >
//             View Profile
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
