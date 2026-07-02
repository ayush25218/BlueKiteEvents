"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, CheckCircle, Users, Award, Shield } from "lucide-react";

type EventType = {
  id: string;
  title: string;
  category: "corporate" | "social" | "entertainment";
  image: string;
  tagline: string;
  description: string;
  features: string[];
  capacity: string;
};

const eventData: EventType[] = [
  {
    id: "wedding",
    title: "Royal & Themed Weddings",
    category: "social",
    image: "/images/wedding_event.png",
    tagline: "Your fairy tale, curated with next-gen luxury.",
    description: "From grand palace weddings to modern beachside ceremonies, we design weddings that reflect your unique story. We integrate custom lighting, floral installations, and digital projection mapping for a magical ambience.",
    features: ["Bespoke Decor & Set Design", "Smart Ambient Lighting", "Premium Hospitality & Catering", "Sound & Artist Coordination"],
    capacity: "200 - 5000+ Guests",
  },
  {
    id: "corporate",
    title: "Corporate Conferences & Summits",
    category: "corporate",
    image: "/images/corporate_event.png",
    tagline: "Flawless tech integration for global brands.",
    description: "Empower your corporate gatherings with high-tech stages, interactive LED backdrops, crystal-clear spatial sound, and seamless live-streaming setups. We ensure your brand message is delivered with absolute precision.",
    features: ["Interactive LED Wall Stages", "Ultra-HD Live Streaming", "Multi-Zone Sound System", "Registrations & RSVP Management"],
    capacity: "100 - 3000+ Guests",
  },
  {
    id: "concert",
    title: "Music Festivals & Live Concerts",
    category: "entertainment",
    image: "/images/music_concert.png",
    tagline: "High-octane sound, lasers, and stadium-level energy.",
    description: "We produce stadium-scale music festivals and live concerts. Our team manages line-ups, security, ticketing integration, line-array audio systems, and synchronized laser shows that leave the crowd mesmerized.",
    features: ["Line-Array Sound Engineering", "DMX Laser & Pyro Shows", "Crowd Control & VIP Lounges", "Ticketing & Sponsor Branding"],
    capacity: "1000 - 50000+ Guests",
  },
  {
    id: "comedy",
    title: "Stand-up Comedy & Stage Shows",
    category: "entertainment",
    image: "/images/comedy_show.png",
    tagline: "Laughter, drama, and perfect acoustics.",
    description: "Acoustics and intimacy are key to stage performances. We design seating layouts and fine-tune sound systems so that every punchline, note, and whisper is clearly heard by the audience.",
    features: ["Acoustical Optimization", "Warm Stage Spotlight Designs", "Auditorium & Lounge Seating", "Backstage & Green Room Setup"],
    capacity: "200 - 1500+ Guests",
  },
  {
    id: "themed-party",
    title: "Themed Parties & Anniversaries",
    category: "social",
    image: "/images/themed_party.png",
    tagline: "Vibrant atmospheres and unforgettable themes.",
    description: "Whether it is a neon retro party, a masquerade ball, or a high-end milestone anniversary, we bring themes to life with custom props, photobooths, live entertainment, and customized food & beverage curation.",
    features: ["Immersive Theme Props", "Custom Digital Photobooths", "Live DJ & Entertainment", "Curated Theme Menus"],
    capacity: "50 - 1000+ Guests",
  },
  {
    id: "exhibition",
    title: "Exhibitions & Product Launches",
    category: "corporate",
    image: "/images/stage_show.png",
    tagline: "Interactive showcases that captivate markets.",
    description: "Launch your product with maximum impact. We design experiential booths, holographic display cases, and theatrical reveal sequences that create buzz and captivate potential buyers and media alike.",
    features: ["Holographic Reveal Pods", "Interactive Experience Booths", "Media & Press Conference Setup", "High-End Product Lighting"],
    capacity: "100 - 2000+ Guests",
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "corporate" | "social" | "entertainment">("all");
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

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.8,
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
        ctx.shadowBlur = 8;
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

  const filteredEvents = eventData.filter(
    (event) => activeTab === "all" || event.category === activeTab
  );

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden font-sans pb-24">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" />

      {/* Decorative radial glows */}
      <div className="absolute top-[15%] right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-15%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[140px] pointer-events-none z-0" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 px-6 sm:px-12 md:px-20 lg:px-24 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sky-400 text-xs font-semibold tracking-widest uppercase mb-6 animate-pulse">
          <Sparkles size={14} /> Our Curation Catalog
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Immersive Experiences For<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
            Every Occasion.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
          From high-energy stadium concerts and premium corporate summits to majestic royal weddings, we plan and produce events that set new standards.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-16">
          {(["all", "corporate", "social", "entertainment"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/15"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "all" ? "All Events" : tab}
            </button>
          ))}
        </div>
      </section>

      {/* --- EVENTS GRID --- */}
      <section className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/30 group"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
                  {event.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sky-400 text-sm font-medium italic mb-4">{event.tagline}</p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Bullet Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Section of Card */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Users size={16} className="text-indigo-400" />
                    <span>Capacity: <strong className="text-white">{event.capacity}</strong></span>
                  </div>
                  <Link
                    href={`/contact?event=${event.id}`}
                    className="inline-flex items-center gap-2 text-sky-400 hover:text-white font-semibold text-sm transition-colors group/btn"
                  >
                    Inquire Now <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATS / VALUE PROP SECTION --- */}
      <section className="relative z-10 mt-36 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4">
              <Award size={24} />
            </div>
            <h4 className="text-3xl font-black text-white mb-2">150+</h4>
            <p className="text-gray-500 text-sm">Legendary Events Curated</p>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/15 py-8 md:py-0">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
              <Users size={24} />
            </div>
            <h4 className="text-3xl font-black text-white mb-2">200k+</h4>
            <p className="text-gray-500 text-sm">Attendees Entertained</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <Shield size={24} />
            </div>
            <h4 className="text-3xl font-black text-white mb-2">100%</h4>
            <p className="text-gray-500 text-sm">Safe & Certified Executions</p>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="relative z-10 mt-36 px-6 sm:px-12 md:px-20 lg:px-24 max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-12 sm:p-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Have a Special Concept in Mind?
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          We love custom themes and challenging tech integrations. Speak directly with our lead creative producers and bring your dream stage to life.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-sky-400 hover:text-white font-bold rounded-full transition-all duration-300"
        >
          Book a Free Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
