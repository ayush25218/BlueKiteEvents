"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type GalleryItem = {
  id: string;
  title: string;
  category: "wedding" | "corporate" | "concert" | "party";
  src: string;
  tag: string;
  description: string;
};

const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Royal Crimson Wedding Stage",
    category: "wedding",
    src: "/images/gallery/gallery_wedding_1.jpg",
    tag: "Wedding",
    description: "A lavish crimson and gold themed stage design for a royal wedding.",
  },
  {
    id: "g2",
    title: "Holographic Keynote Stage",
    category: "corporate",
    src: "/images/gallery/gallery_speaker_1.png",
    tag: "Corporate",
    description: "3D holographic projection mapping for a global tech summit.",
  },
  {
    id: "g3",
    title: "Electric Indigo Arena",
    category: "concert",
    src: "/images/gallery/gallery_gala_1.png",
    tag: "Concert",
    description: "A high-octane stadium concert featuring synchronized laser shows.",
  },
  {
    id: "g4",
    title: "Neon Retro Milestone",
    category: "party",
    src: "/images/gallery/gallery_lounge_1.jpg",
    tag: "Party",
    description: "Milestone anniversary party designed with retro neon setups.",
  },
  {
    id: "g5",
    title: "Tech Summit Panel",
    category: "corporate",
    src: "/images/gallery/gallery_conference_1.jpg",
    tag: "Corporate",
    description: "Corporate panel discussion stage with high-density LED displays.",
  },
  {
    id: "g6",
    title: "Executive Networking Meet",
    category: "corporate",
    src: "/images/gallery/gallery_corporate_handshake.png",
    tag: "Networking",
    description: "Premium corporate client hosting and networking event coordination.",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "wedding" | "corporate" | "concert" | "party">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
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
        ctx.shadowBlur = 6;
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

  const filteredItems = galleryData.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  const openLightbox = (id: string) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden font-sans pb-24">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-35" />

      {/* Decorative radial glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none z-0" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 px-6 sm:px-12 md:px-20 lg:px-24 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sky-400 text-xs font-semibold tracking-widest uppercase mb-6 animate-pulse">
          <Sparkles size={14} /> Visual Showcase
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Moments Suspended In<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
            High Definition.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
          A glimpse into the stunning stages, live performances, and high-tech setups we have brought to life. Click on any image to view details.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-16">
          {(["all", "wedding", "corporate", "concert", "party"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                closeLightbox();
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/15"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "all" ? "All Media" : tab}
            </button>
          ))}
        </div>
      </section>

      {/* --- GALLERY GRID --- */}
      <section className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-20">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-colors">
                    <ZoomIn size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center z-10 max-w-7xl w-full mx-auto">
            <div>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-sky-400">
                {filteredItems[lightboxIndex].tag}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Area with Navigation */}
          <div className="relative flex-grow flex items-center justify-center max-w-7xl w-full mx-auto my-4">
            {/* Left Button */}
            <button
              onClick={showPrev}
              className="absolute left-0 md:-left-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full h-[65vh] md:h-[75vh] max-w-5xl rounded-3xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain bg-black/40"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={showNext}
              className="absolute right-0 md:-right-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center z-10 max-w-3xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {filteredItems[lightboxIndex].title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              {filteredItems[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
