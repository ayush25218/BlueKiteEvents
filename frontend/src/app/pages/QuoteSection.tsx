"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import founderImage from "../../../public/images/deepakpoddar.png";

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
    <section className="relative w-full py-16 px-6 overflow-hidden bg-gradient-to-br from-[#156298] via-[#1c7ab2] to-[#0d3a58]">
      {/* Animated blurred blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#ffffff22] blur-3xl"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#3bb3e322] blur-3xl"
      />
      <div
        ref={blob3Ref}
        className="absolute top-[30%] left-[45%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-yellow-400/60 to-yellow-600/60 blur-2xl opacity-70 mix-blend-screen"
      />

      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-60" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "url('./images/asfalt-dark.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      {/* Main content card */}
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 flex flex-col md:flex-row items-center md:items-stretch">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden">
          <Image
            src={founderImage}
            alt="Leader"
            fill
            priority
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-full md:w-1/2 items-center justify-center p-6 md:p-12">
          <div ref={contentRef} className="max-w-lg transform">
            <blockquote className="relative text-gray-800 text-base md:text-base leading-relaxed font-medium">
              <span className="text-4xl text-yellow-400 absolute -left-4 -top-1">
                “
              </span>
              <span>
                At Bluekite Events Pro, our mission is simple — to turn your vision into an unforgettable experience. Whether it&apos;s a wedding that takes your breath away, a corporate event that leaves a lasting impression, or a comedy show that has everyone in stitches, we pour our heart into every detail. With years of experience and a passion for creating memories, we bring creativity, precision, and joy to every event we touch.
              </span>
              <span className="text-4xl text-yellow-400 absolute ">
                ”
              </span>
            </blockquote>

            {/* Accent Line */}
            <div className="relative mt-8 mb-6">
              <div className="h-[3px] w-2/3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>

            {/* Name & Title */}
            <div className="mb-8">
              <p className="font-semibold text-gray-900 text-lg tracking-wide">
                Founder, Bluekite Events Pro
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Visionary | Event Curator | Experience Architect
              </p>
            </div>

            {/* Premium GSAP Button */}
            <a
              ref={btnRef}
              href="/about"
              className="relative inline-block px-8 py-3 text-sm font-medium text-white rounded-full 
             bg-gradient-to-r from-[#166296] to-[#0d3a58]
             shadow-lg border border-[#166296]/40 
             overflow-hidden transition-all duration-300"
            >
              {/* Glow border layer */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3bb3e3] to-[#166296] opacity-30 blur-xl"></span>

              {/* Text */}
              <span className="relative z-10">About Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
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
