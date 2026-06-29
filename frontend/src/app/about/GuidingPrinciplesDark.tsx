"use client";
import { useEffect, useRef } from "react";

// This is a single-file Next.js component.
// In a real project, styles would typically go into a separate CSS file.
export default function GuidingPrinciples() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Effect to manage document head elements like title and meta tags
  useEffect(() => {
    document.title = "Guiding Principles — Golden Hour Tech Theme";

    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.setAttribute("name", "viewport");
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1");
  }, []);

  // Effect for the reveal-on-scroll animation
  useEffect(() => {
    if (typeof document === "undefined") return;
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = reveals.indexOf(el);
            setTimeout(
              () => el.classList.add("visible"),
              Math.min(idx * 100, 500)
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  // Effect for interactive cards (tilt, glow, keyboard)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card"));

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const card = e.currentTarget as HTMLElement;
        card.classList.add("keyboard-active");
        card.style.transform = "translateY(-12px) rotate(0deg) scale(1.02)";
        setTimeout(() => {
          card.classList.remove("keyboard-active");
          card.style.transform = "";
        }, 1600);
      }
    };

    const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const enableMotion = !motionQuery || !motionQuery.matches;

    cards.forEach((card) => {
      card.addEventListener("keydown", keyHandler as EventListener);
      if (!enableMotion) return;

      const onMove = (e: MouseEvent | TouchEvent) => {
        if (card.classList.contains("keyboard-active")) return;
        const rect = card.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const rotateX = (y / rect.height - 0.5) * -14;
        const rotateY = (x / rect.width - 0.5) * 14;
        card.style.transform = `translateY(-10px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
      };

      const onLeave = () => {
        if (card.classList.contains("keyboard-active")) return;
        card.style.transform = "";
      };

      card.addEventListener("mousemove", onMove as EventListener);
      card.addEventListener("touchmove", onMove as EventListener, {
        passive: true,
      });
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((card) => {
        // You might need a more robust way to remove these listeners if the component re-renders often
        // but for a static page component, this is generally fine.
        card.removeEventListener("keydown", keyHandler as EventListener);
      });
    };
  }, []);

  // Effect for the particle canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let particles: Particle[] = [];
    let animationFrameId = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      c: string;
      a: number;
    }

    // "Golden Hour Tech" color palette
    const colors = [
      "rgba(255, 195, 100, 0.09)", // Soft Gold
      "rgba(0, 220, 220, 0.08)", // Bright Teal
      "rgba(255, 150, 50, 0.07)", // Amber
      "rgba(100, 180, 255, 0.06)", // Sky Blue
    ];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const init = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 20 : 35;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          r: 1 + Math.random() * 2.5,
          c: colors[Math.floor(Math.random() * colors.length)],
          a: 0.1 + Math.random() * 0.1,
        });
      }
    };

    const update = (dt: number) => {
      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }
    };

    // const draw = () => {
    //     ctx.clearRect(0, 0, w, h);
    //     for (let i = 0; i < particles.length; i++) {
    //         for (let j = i + 1; j < particles.length; j++) {
    //             const a = particles[i], b = particles[j];
    //             const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    //             if (d < 120) {
    //                 const alpha = (1 - d / 120) * 0.08;
    //                 ctx.beginPath();
    //                 ctx.moveTo(a.x, a.y);
    //                 ctx.lineTo(b.x, b.y);
    //                 ctx.strokeStyle = `rgba(200, 220, 255, ${alpha});`
    //                 ctx.lineWidth = 1.2;
    //                 ctx.stroke();
    //             }
    //         }
    //     }
    //     for (const p of particles) {
    //         ctx.beginPath();
    //         const fill = p.c.slice(0, p.c.lastIndexOf(",") + 1) + (p.a + ")");
    //         ctx.fillStyle = fill;
    //         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    //         ctx.fill();
    //     }
    // };

    let lastTime = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(48, now - lastTime) / 16.6;
      lastTime = now;
      update(dt);
      // draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(animationFrameId);
      resize();
      lastTime = performance.now();
      animationFrameId = requestAnimationFrame(loop);
    };

    let resizeTimeout: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(start, 200);
    };

    window.addEventListener("resize", onResize);
    start();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#1e3a8a20] to-transparent blur-3xl animate-pulse" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />
      </div>

      <div className="w-full p-4 sm:p-8 md:p-12 flex items-center justify-center font-sans antialiased bg-gradient-to-b from-[#233a81] to-[#080b14]">
        <main
          className="relative z-20 w-full mx-auto"
          role="main"
          aria-labelledby="guiding-heading"
        >
          <header className="mb-8 flex flex-col gap-3">
            <div className="text-base font-bold uppercase tracking-wider text-white reveal">
              OUR DIRECTION
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <h1
                id="guiding-heading"
                className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 reveal"
              >
                Guiding Principles for a Brighter Future
              </h1>
              {/* <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-amber-500 via-teal-400 to-sky-500 animate-pulse reveal" /> */}
            </div>
            <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed reveal">
              Our principles guide the decisions we make — blending innovation
              with responsibility to create sustainable and measurable impact
              globally.
            </p>
          </header>

          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000"
            aria-label="Guiding principles"
          >
            <article
              className="card rounded-xl bg-white/[0.02] border border-white/10 p-6 shadow-lg transition-transform duration-300 ease-out"
              tabIndex={0}
              role="article"
              aria-labelledby="m-title"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-lg bg-white/5 transition-transform duration-300 card-icon">
                  <svg
                    className="w-7 h-7 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                  </svg>
                </div>
                <h3 id="m-title" className="text-lg font-semibold text-white">
                  Our Mission
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  To empower tomorrow through innovation, collaboration, and
                  excellence that leave a lasting global impact.
                </p>
                {/* <a href="#" className="animated-link inline-block mt-3 text-amber-400 font-semibold transition-colors">Learn more →</a> */}
              </div>
            </article>

            <article
              className="card rounded-xl bg-white/[0.02] border border-white/10 p-6 shadow-lg transition-transform duration-300 ease-out"
              tabIndex={0}
              role="article"
              aria-labelledby="v-title"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-lg bg-white/5 transition-transform duration-300 card-icon">
                  <svg
                    className="w-7 h-7 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      fill="rgba(0,220,220,0.06)"
                    ></path>
                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                  </svg>
                </div>
                <h3 id="v-title" className="text-lg font-semibold text-white">
                  Our Vision
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  To be a catalyst of change and a global trailblazer,
                  redefining possibilities and inspiring sustainable success.
                </p>
                {/* <a href="#" className="animated-link inline-block mt-3 text-teal-400 font-semibold transition-colors">Explore →</a> */}
              </div>
            </article>

            <article
              className="card rounded-xl bg-white/[0.02] border border-white/10 p-6 shadow-lg transition-transform duration-300 ease-out"
              tabIndex={0}
              role="article"
              aria-labelledby="val-title"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-lg bg-white/5 transition-transform duration-300 card-icon">
                  <svg
                    className="w-7 h-7 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M8 12h8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <h3 id="val-title" className="text-lg font-semibold text-white">
                  Our Values
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Integrity, innovation, and inclusivity guide everything we do,
                  ensuring growth that uplifts people and communities.
                </p>
                {/* <a href="#" className="animated-link inline-block mt-3 text-sky-400 font-semibold transition-colors">Read values →</a> */}
              </div>
            </article>

            <article
              className="card rounded-xl bg-white/[0.02] border border-white/10 p-6 shadow-lg transition-transform duration-300 ease-out"
              tabIndex={0}
              role="article"
              aria-labelledby="app-title"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-lg bg-white/5 transition-transform duration-300 card-icon">
                  <svg
                    className="w-7 h-7 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 12h18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M6 8v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M18 8v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <h3 id="app-title" className="text-lg font-semibold text-white">
                  Our Approach
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  We blend bold ideas with collaborative execution to create
                  transformative solutions across industries.
                </p>
                {/* <a href="#" className="animated-link inline-block mt-3 text-teal-400 font-semibold transition-colors">See approach →</a> */}
              </div>
            </article>
          </section>
        </main>
      </div>
      <style>{`
          @keyframes breathe {
            0%, 100% { border-color: rgba(255, 255, 255, 0.1); }
            50% { border-color: rgba(255, 195, 100, 0.4); }
          }

          .card:hover {
            animation: breathe 2.5s infinite ease-in-out;
          }

          .reveal {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
            transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: opacity, transform;
          }

          .reveal.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .perspective-1000 { perspective: 1000px; }

          .card {
            transform-style: preserve-3d;
            position: relative;
          }

          .card::before {
            content: "";
            position: absolute;
            left: 0; top: 0;
            width: 100%; height: 100%;
            background: radial-gradient(
              350px circle at var(--mouse-x) var(--mouse-y),
              rgba(59, 130, 246, 0.18), /* Golden glow */
              transparent 50%
            );
            border-radius: inherit;
            opacity: 0;
            transition: opacity 0.4s ease-out;
            z-index: 0;
          }

          .card:hover::before { opacity: 1; }
          
          .card:hover .card-icon { transform: scale(1.1) rotate(-5deg); }

          .animated-link { position: relative; padding-bottom: 2px; }
          .animated-link::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 1.5px;
            bottom: 0;
            left: 0;
            background-image: linear-gradient(to right, #FFC364, #00DCDC); /* Gold to Teal gradient */
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
          }
          .animated-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}</style>
    </>
  );
}
