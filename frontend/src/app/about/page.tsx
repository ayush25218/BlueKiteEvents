"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Compass, ArrowRight, Zap, Flame, ShieldCheck, Radio } from "lucide-react";

const teamMembers = [
  { name: "Anil Mehra", role: "Founder and CEO", image: "/images/AnilMehra.png", accent: "from-sky-400 to-blue-500" },
  { name: "Kiara Sethi", role: "Event Strategy Lead", image: "/images/team/team-2.svg", accent: "from-indigo-400 to-violet-500" },
  { name: "Mohit Mehra", role: "Production Head", image: "/images/about/MohitMehra.png", accent: "from-purple-400 to-fuchsia-500" },
  { name: "Ayush", role: "Software Developer", image: "/images/about/Ayush.jpeg", accent: "from-amber-300 to-orange-500" },
  { name: "Yuvika", role: "Digital marketing Specialist", image: "/images/about/Yuvika.jpeg", accent: "from-emerald-300 to-teal-500" },
  { name: "Neha", role: "Graphic Designer", image: "/images/about/Neha.jpg", accent: "from-pink-300 to-rose-500" },
  { name: "Divansh", role: "Event Director", image: "/images/about/Divansh.jpeg", accent: "from-amber-400 to-orange-500" },
];

export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Particles background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = ["#38bdf8", "#818cf8", "#c084fc", "#f472b6"];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden font-sans pb-24">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-45" />

      {/* Decorative radial glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none z-0" />

      {/* --- SECTION 1: HERO (DARK) --- */}
      <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 md:px-20 lg:px-24 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sky-400 text-xs font-semibold tracking-widest uppercase mb-6 animate-pulse">
          <Sparkles size={14} /> Redefining Event Production
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          We Don&apos;t Just Manage Events.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
            We Create Legends.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
          Bluekite Events Pro is a premium, high-tech event production agency. We blend immersive designs, cutting-edge technology, and flawless execution to curate unforgettable experiences.
        </p>

        {/* Floating 3D-like Glass Card with Holographic Stage Image */}
        <div className="relative w-full aspect-[16/9] max-w-4xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
          <Image
            src="/images/about/Team.png"
            alt="Futuristic Holographic Stage"
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Next-Gen Immersive Experience</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Holographic Projection Mapping</h3>
            </div>
            <Link href="/contact" className="px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
              Book Your Stage
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: OUR STORY (WHITE) --- */}
      <section className="relative z-20 bg-white text-slate-950 py-24 px-6 sm:px-12 md:px-20 lg:px-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side text */}
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Our Genesis</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Architects of Extraordinary Moments
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Founded with a vision to break the monotony of traditional events, Bluekite Events Pro has evolved into a powerhouse of innovation. We integrate holographic displays, synchronized smart lighting, and immersive spatial soundscapes to make every attendee feel they have stepped into the future.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Whether it is a corporate summit, a stadium music festival, a laugh-out-loud comedy night, or a luxurious wedding, our team of passionate curators plans and executes with surgical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl shadow-sm">
                <Zap className="text-amber-500" size={24} />
                <div>
                  <h4 className="font-bold text-slate-950">100% Immersive</h4>
                  <p className="text-xs text-slate-500">Hi-Tech Visuals</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl shadow-sm">
                <ShieldCheck className="text-emerald-500" size={24} />
                <div>
                  <h4 className="font-bold text-slate-950">Flawless Delivery</h4>
                  <p className="text-xs text-slate-500">End-to-End Control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="relative w-full aspect-square max-w-xl mx-auto flex items-center justify-center">
            {/* Soft glowing ring behind team illustration */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-indigo-500/10 bg-indigo-500/5 animate-pulse z-0" />
            <div className="relative w-[90%] h-[90%] z-10">
              <Image
                src="/images/about/Team.png"
                alt="Bluekite Curators"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: OUR TEAM (DARK) --- */}
      <section className="relative z-10 py-28 px-6 sm:px-12 md:px-20 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
                <Radio size={14} /> Our Team
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                The people behind every unforgettable show.
              </h2>
            </div>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              A focused crew of planners, producers, designers, and experience specialists who bring every event from first sketch to final applause.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="team-card-reveal group relative min-h-[430px] rounded-3xl border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-sky-500/10"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${member.accent}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_46%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="relative h-72 overflow-hidden rounded-[1.35rem] bg-slate-900">
                    <img
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/85 via-[#030712]/10 to-transparent" />
                    <div className={`absolute bottom-4 left-4 rounded-full bg-gradient-to-r ${member.accent} px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg`}>
                      Core Team
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-start px-3 pb-4 pt-5">
                    <h3 className="text-2xl font-extrabold text-white">{member.name}</h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* "And Many More..." Card */}
            <div
              className="group relative min-h-[430px] rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-6 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-sky-500/5 flex flex-col justify-center items-center text-center"
              style={{ animationDelay: `${teamMembers.length * 90}ms` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_50%)]" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles size={28} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">And Many More...</h3>
                  <p className="mt-2 text-sm text-slate-400 max-w-[200px]">
                    Our extended network of industry experts, technicians, and curators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE TIMELINE (DARK) --- */}
      <section className="relative z-10 py-28 px-6 sm:px-12 md:px-20 lg:px-24 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Our Evolution</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">The Journey of Innovation</h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {/* 2019 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] group-hover:scale-125 transition-transform" />
            <div className="absolute left-[-120px] top-0 hidden md:block text-right w-24">
              <span className="text-2xl font-black text-sky-400">2019</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">The Spark</h3>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Bluekite Events Pro was established with a small, passionate group of curators. We began by managing boutique weddings and corporate gatherings, focusing on introducing fresh aesthetics.
            </p>
          </div>

          {/* 2021 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8] group-hover:scale-125 transition-transform" />
            <div className="absolute left-[-120px] top-0 hidden md:block text-right w-24">
              <span className="text-2xl font-black text-indigo-400">2021</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">Scaling Heights</h3>
            <p className="text-gray-400 mt-2 max-w-2xl">
              We expanded our reach to national-level corporate summits, massive music concerts, and comedy festivals. We built strong partnerships with leading decorators, caterers, and tech specialists.
            </p>
          </div>

          {/* 2024 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] group-hover:scale-125 transition-transform" />
            <div className="absolute left-[-120px] top-0 hidden md:block text-right w-24">
              <span className="text-2xl font-black text-purple-400">2024</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">The Holographic Era</h3>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Pioneered the integration of holographic projection mapping, interactive LED stages, and spatial audio design, setting a new benchmark for high-tech, futuristic events.
            </p>
          </div>

          {/* 2026 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6] group-hover:scale-125 transition-transform" />
            <div className="absolute left-[-120px] top-0 hidden md:block text-right w-24">
              <span className="text-2xl font-black text-pink-400">2026</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">The Legend</h3>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Today, Bluekite Events Pro stands as a premier brand in India, curating ultra-premium, tech-infused, and environmentally sustainable events that transcend expectations.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CORE PILLARS (WHITE) --- */}
      <section className="relative z-20 bg-slate-50 text-slate-950 py-24 px-6 sm:px-12 md:px-20 lg:px-24 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Our Foundations</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Guiding Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="relative group bg-white border border-slate-200/60 shadow-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-400 to-blue-500" />
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform">
                <Flame size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower tomorrow by curating events that inspire, connect, and leave a lasting positive impact on communities. We turn ideas into spectacles.
              </p>
            </div>

            {/* Vision */}
            <div className="relative group bg-white border border-slate-200/60 shadow-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-400 to-purple-500" />
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                <Compass size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the global gold standard for immersive event production, pushing the boundaries of what is possible through creativity, technology, and art.
              </p>
            </div>

            {/* Values */}
            <div className="relative group bg-white border border-slate-200/60 shadow-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 to-pink-500" />
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Creativity, integrity, and absolute reliability. We prioritize our clients&apos; vision, support local talents, and execute with absolute dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CALL TO ACTION (DARK) --- */}
      <section className="relative z-10 py-24 px-6 sm:px-12 md:px-20 lg:px-24 max-w-5xl mx-auto">
        <div className="relative text-center bg-gradient-to-r from-blue-900/25 to-purple-900/25 border border-white/10 rounded-3xl p-12 sm:p-16 backdrop-blur-md overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-950/20 pointer-events-none z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to Host a Legendary Event?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Get in touch with our curation specialists today, and let&apos;s start designing an immersive experience that your guests will talk about for years.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-sky-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Let&apos;s Connect <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
