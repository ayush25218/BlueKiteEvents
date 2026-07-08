"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import {
  ArrowLeft, CheckCircle, Users, ArrowRight,
  Phone, Calendar, Award, Shield, Mic2, Music,
  Heart, Star, Theater, Briefcase, MapPin
} from "lucide-react";

type ServiceDetail = {
  id: string;
  title: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  longDesc: string;
  features: string[];
  process: { step: string; desc: string }[];
  capacity: string;
  turnaround: string;
  relatedIds: string[];
};

const allServices: ServiceDetail[] = [
  {
    id: "corporate-events",
    title: "Corporate Conferences & Summits",
    category: "Corporate",
    image: "/images/corporate_event.jpg",
    tagline: "Flawless tech integration for global brands.",
    description: "Empower your corporate gatherings with high-tech stages, interactive LED backdrops, and seamless live-streaming setups.",
    longDesc:
      "Corporate events are a reflection of your brand's identity and ambition. We design and execute conferences, product launches, award ceremonies, and team-building retreats that command attention and inspire action. Our technical teams deploy state-of-the-art AV systems, interactive LED stages, multi-camera live streaming, and precision sound engineering to ensure your message resonates powerfully with every attendee — whether in the room or watching remotely across the globe.",
    features: ["Interactive LED Wall Stages", "Ultra-HD Live Streaming", "Multi-Zone Sound System", "Registrations & RSVP Management", "Brand Activation Zones", "Guest Management Tech"],
    process: [
      { step: "Brief & Strategy", desc: "We align on your brand message, goals, and audience profile." },
      { step: "Technical Design", desc: "AV, staging, and tech setup are planned to the last cable." },
      { step: "Rehearsal & Testing", desc: "Full technical dry-run to eliminate any day-of surprises." },
      { step: "Live Execution", desc: "Our dedicated crew manages every aspect on the event day." },
    ],
    capacity: "100 – 3000+ Guests",
    turnaround: "4 – 16 Weeks Planning",
    relatedIds: ["stage-shows", "music-concerts", "sports-events"],
  },
  {
    id: "music-concerts",
    title: "Music Festivals & Live Concerts",
    category: "Entertainment",
    image: "/images/music_concert.jpg",
    tagline: "High-octane sound, lasers, and stadium-level energy.",
    description: "We produce stadium-scale music festivals and live concerts with synchronized laser shows that leave the crowd mesmerized.",
    longDesc:
      "A great concert is more than music — it is a full-body sensory experience. Our production teams design towering LED stages, engineer line-array sound systems that deliver crystal-clear audio across vast outdoor arenas, and choreograph pyrotechnic and laser shows that synchronize perfectly with the music. From independent artists at intimate venues to multi-stage international music festivals, we handle logistics, ticketing, security, VIP management, and every technical aspect that makes a concert legendary.",
    features: ["Line-Array Sound Engineering", "DMX Laser & Pyro Shows", "Crowd Control & VIP Lounges", "Ticketing & Sponsor Branding", "Artist Hospitality & Riders", "Stage & Rigging Design"],
    process: [
      { step: "Artist & Lineup", desc: "We assist with artist booking, contracts, and technical riders." },
      { step: "Stage Production", desc: "Stage, rigging, screens, and lighting are designed and installed." },
      { step: "Security & Logistics", desc: "Crowd flow, emergency plans, and security are meticulously arranged." },
      { step: "Show Day", desc: "Full production crew executes every cue live, in real time." },
    ],
    capacity: "1000 – 50,000+ Guests",
    turnaround: "6 – 20 Weeks Planning",
    relatedIds: ["comedy-shows", "stage-shows", "corporate-events"],
  },
  {
    id: "sports-events",
    title: "Professional Sports Events & Tournaments",
    category: "Entertainment",
    image: "/images/sports_event.jpg",
    tagline: "High-octane athletics, managed with surgical precision.",
    description: "From local tournaments and school championships to professional sports meets, we manage every detail to deliver a world-class athletic experience.",
    longDesc:
      "We specialize in transforming sporting events into premium entertainment spectacles. Every detail — from tournament scheduling and stadium logistics to high-quality sound engineering and live broadcast setups — is meticulously planned and executed. Our team of directors, production managers, and field staff work in perfect unison to deliver tournaments that engage fans and empower athletes. Whether you envision a local school meet or a large-scale stadium event, we scale our expertise to match your requirements.",
    features: ["Tournament Scheduling & Brackets", "Stadium Logistics & Ticketing", "Vibrant Sound & Audio setup", "Live Broadcast & Multi-Cam", "Player Registration Systems", "Custom Branding & Merchandising"],
    process: [
      { step: "Strategy & Setup", desc: "We plan the tournament structure, rules, and participant brackets." },
      { step: "Logistics & Staging", desc: "We coordinate stadium setup, ticketing, and AV systems." },
      { step: "Testing & Rehearsal", desc: "We conduct technical dry-runs of broadcasts and sound." },
      { step: "Match-Day Execution", desc: "Our crew coordinates the entire matches flow and fan experience." },
    ],
    capacity: "500 – 20000+ Fans",
    turnaround: "2 – 6 Months Planning",
    relatedIds: ["corporate-events", "music-concerts", "stage-shows"],
  },
  {
    id: "comedy-shows",
    title: "Stand-up Comedy & Stage Shows",
    category: "Entertainment",
    image: "/images/comedy_show.jpg",
    tagline: "Laughter, drama, and perfect acoustics.",
    description: "We design seating layouts and fine-tune sound systems so every punchline is perfectly heard.",
    longDesc:
      "Comedy and stage performances demand intimacy and acoustic precision. Every word, every pause, and every punchline must land perfectly. We acoustically optimize venues, design warm spotlight setups, configure seating for maximum sightlines, and manage every behind-the-scenes detail — from green room setup to post-show meet-and-greet logistics — so the artist can focus entirely on delivering an unforgettable performance.",
    features: ["Acoustical Optimization", "Warm Stage Spotlight Design", "Auditorium & Lounge Seating", "Backstage & Green Room Setup", "Comedian Booking & Contracts", "Merch & F&B Coordination"],
    process: [
      { step: "Venue Scouting", desc: "We identify and assess venues for optimal acoustics and intimacy." },
      { step: "Stage & Lighting", desc: "Spotlight rigs and stage setups are designed for the performer." },
      { step: "Sound Tuning", desc: "Acoustic panels and speaker placement are fine-tuned per venue." },
      { step: "Night-Of Management", desc: "Our team handles the entire flow from doors-open to curtain call." },
    ],
    capacity: "200 – 1500+ Guests",
    turnaround: "3 – 8 Weeks Planning",
    relatedIds: ["music-concerts", "stage-shows", "social-celebrations"],
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations & Milestones",
    category: "Social",
    image: "/images/themed_party.jpg",
    tagline: "Vibrant atmospheres for life's biggest moments.",
    description: "Birthdays, anniversaries, and milestone events curated with immersive themes and luxury touches.",
    longDesc:
      "Life's greatest milestones deserve extraordinary celebrations. From surprise 50th birthday parties and 25th anniversary dinners to engagement parties and baby showers, we pour creativity and care into every element. We curate custom themes, source exquisite florals, arrange live entertainment, design personalized photobooths, and create immersive atmospheres that become treasured memories for years to come.",
    features: ["Custom Theme Design", "Personalized Photobooth Setups", "Live Entertainment & DJ", "Floral & Balloon Artistry", "Custom Cake & Catering", "Guest Experience Curation"],
    process: [
      { step: "Vision Sharing", desc: "You share your dreams and we note every personal detail." },
      { step: "Theme Creation", desc: "Our designers craft a fully themed concept board for your approval." },
      { step: "Setup & Decor", desc: "Our crew transforms the venue in the hours before your arrival." },
      { step: "Celebration Day", desc: "We manage the event so you can be fully present in the moment." },
    ],
    capacity: "50 – 1000+ Guests",
    turnaround: "2 – 8 Weeks Planning",
    relatedIds: ["themed-parties", "weddings", "comedy-shows"],
  },
  {
    id: "themed-parties",
    title: "Themed Parties & Masquerades",
    category: "Social",
    image: "/images/themed_party.jpg",
    tagline: "Transport your guests to another world entirely.",
    description: "From neon retro nights and masquerade balls to Gatsby galas, we bring extraordinary themes to life.",
    longDesc:
      "A great themed party is a completely immersive world. We design every element of the experience — from venue transformation with custom props, lighting rigs, and set pieces, to costume coordination, themed menus, character performers, and holographic displays. Whether you desire the opulence of a 1920s Gatsby soiree, the neon energy of an 80s retro rave, or the mystery of a masquerade ball, our production team builds the entire world around your theme.",
    features: ["Fantasy & Costume Themes", "Venue Transformation & Props", "Character Performers", "Holographic & AR Displays", "Themed Menus & Cocktails", "Custom Soundtrack & DJ"],
    process: [
      { step: "Theme Selection", desc: "We present curated theme options with full mood boards." },
      { step: "World-Building", desc: "Props, set pieces, and decor are sourced or custom-built." },
      { step: "Entertainment Booking", desc: "Performers, DJs, and live acts are confirmed and briefed." },
      { step: "Immersive Launch", desc: "Guests enter a fully realized alternate world on arrival." },
    ],
    capacity: "100 – 2000+ Guests",
    turnaround: "4 – 12 Weeks Planning",
    relatedIds: ["social-celebrations", "comedy-shows", "weddings"],
  },
  {
    id: "stage-shows",
    title: "Stage Shows & Exhibitions",
    category: "Entertainment",
    image: "/images/stage_show.jpg",
    tagline: "Interactive showcases and theatrical productions that captivate.",
    description: "From cultural stage productions to holographic product launch reveals, we make every show unmissable.",
    longDesc:
      "Stage shows and exhibitions combine theatre, technology, and commerce into a single compelling experience. We produce cultural dance and drama productions, brand exhibitions, and theatrical product launch reveals that blend physical stagecraft with cutting-edge holographic displays and immersive spatial audio. Whether you are launching a new vehicle, showcasing art at a gallery, or staging a cultural performance for thousands, our creative directors ensure every moment is perfectly composed.",
    features: ["Cultural Stage Productions", "Holographic Reveal Pods", "Interactive Experience Booths", "Media & Press Conference Setup", "Trade Fair Management", "Brand Exhibition Design"],
    process: [
      { step: "Concept Development", desc: "We develop a narrative and visual concept for the show or exhibit." },
      { step: "Technical Production", desc: "Holograms, AV, and stage elements are designed and tested." },
      { step: "Rehearsal", desc: "Performers and technical crews do a full run-through." },
      { step: "Premiere", desc: "The full production is unveiled to audiences or press." },
    ],
    capacity: "100 – 2000+ Guests",
    turnaround: "6 – 16 Weeks Planning",
    relatedIds: ["music-concerts", "corporate-events", "comedy-shows"],
  },
];

const serviceMap = Object.fromEntries(allServices.map((s) => [s.id, s]));

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = serviceMap[slug];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const colors = ["#38bdf8", "#818cf8", "#c084fc"];
    for (let i = 0; i < 40; i++) {
      particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 1.8 + 0.4, color: colors[Math.floor(Math.random() * colors.length)] });
    }
    let id: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.shadowBlur = 6; ctx.shadowColor = p.color; ctx.fill();
      });
      id = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", onResize); };
  }, []);

  if (!service) notFound();

  const related = service.relatedIds.map((id) => serviceMap[id]).filter(Boolean);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden font-sans pb-24">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" />
      <div className="absolute top-0 right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-sky-900/8 blur-[160px] pointer-events-none z-0" />

      {/* BACK BUTTON */}
      <div className="relative z-10 pt-28 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors group mb-8">
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to All Services
        </Link>
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4">
              {service.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
                {service.title}
              </span>
            </h1>
            <p className="text-sky-400 text-lg italic mb-6">{service.tagline}</p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">{service.longDesc}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?service=${service.id}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all shadow-lg shadow-sky-500/20"
              >
                <Calendar size={18} /> Book This Service
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-semibold rounded-full transition-all"
              >
                <Phone size={18} /> Free Consultation
              </Link>
            </div>
          </div>

          {/* Right: Feature Image */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] lg:h-[520px] group">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
              <div className="flex-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
                <Users size={18} className="text-indigo-400 mx-auto mb-1" />
                <p className="text-white font-bold text-sm">{service.capacity}</p>
                <p className="text-gray-400 text-xs">Capacity</p>
              </div>
              <div className="flex-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
                <Calendar size={18} className="text-sky-400 mx-auto mb-1" />
                <p className="text-white font-bold text-sm">{service.turnaround}</p>
                <p className="text-gray-400 text-xs">Lead Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 mt-24 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          What&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Included</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-5 bg-white/[0.02] border border-white/8 rounded-2xl hover:bg-white/[0.05] hover:border-sky-500/20 transition-all duration-300">
              <CheckCircle size={20} className="text-emerald-400 flex-shrink-0" />
              <span className="text-gray-200 text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 mt-24 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Process</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p, i) => (
            <div key={i} className="relative p-6 bg-white/[0.02] border border-white/8 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/20 flex items-center justify-center text-sky-400 font-extrabold text-lg mb-4">
                {i + 1}
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-sky-400 transition-colors">{p.step}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mt-24 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-3"><Award size={24} /></div>
            <h4 className="text-3xl font-black text-white mb-1">150+</h4>
            <p className="text-gray-500 text-sm">Events Executed</p>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3"><Users size={24} /></div>
            <h4 className="text-3xl font-black text-white mb-1">200k+</h4>
            <p className="text-gray-500 text-sm">Happy Guests</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3"><Shield size={24} /></div>
            <h4 className="text-3xl font-black text-white mb-1">100%</h4>
            <p className="text-gray-500 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="relative z-10 mt-24 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            You May Also <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Like</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.id}`}
                className="relative overflow-hidden rounded-2xl group h-48 block"
              >
                <Image src={rel.image} alt={rel.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-1">{rel.category}</p>
                  <h3 className="text-white font-bold text-sm group-hover:text-sky-400 transition-colors">{rel.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative z-10 mt-24 px-6 sm:px-12 md:px-20 lg:px-24 max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-12 sm:p-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
          Let&apos;s bring your vision to life. Speak with our event producers today and get a free custom proposal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/contact?service=${service.id}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-sky-400 hover:text-white font-bold rounded-full transition-all duration-300"
          >
            Book Now <ArrowRight size={18} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-gray-300 hover:text-white font-semibold rounded-full transition-all"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
