"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Mail, Phone, MapPin, Clock, ArrowRight, Send, ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How do I book an event with Bluekite?",
    answer: "You can start by filling out our contact form or calling us directly. We will schedule a free creative consultation to discuss your venue, theme, and technical requirements, followed by a customized proposal.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellation terms vary based on the scale of the event and booking timeline. Generally, the initial planning deposit is non-refundable, but we offer flexible rescheduling options for up to 12 months.",
  },
  {
    question: "How do I partner with Bluekite as a vendor?",
    answer: "We are always looking for premium venue partners, artists, and technical vendors. Please email your portfolio and equipment list to partner@bluekiteevents.com.",
  },
  {
    question: "Do you offer custom themed packages?",
    answer: "Absolutely! We specialize in bespoke, high-tech themed curations. Whether it's a neon retro party, a royal wedding, or a holographic product launch, we design everything from scratch.",
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({ submitted: false, message: "", isError: false });
  const [isLoading, setIsLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({ submitted: false, message: "", isError: false });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          message: "Thank you for your response, we will respond soon.",
          isError: false,
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setFormStatus({
        submitted: true,
        message: "Something went wrong. Please try again later.",
        isError: true,
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setFormStatus({ submitted: false, message: "", isError: false }), 6000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden font-sans pb-24">
      {/* Background Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" />

      {/* Glow Effects */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none z-0" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              We&apos;re Here to Help
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
                Us
              </span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Have a question, need support, or want to partner with us? Our team is ready to help you create amazing event experiences.
            </p>

            {/* Support Team Indicator */}
            <div className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-2xl pl-4 pr-6 backdrop-blur-md max-w-full">
              <div className="flex -space-x-2.5 flex-shrink-0">
                <div className="w-8 h-8 rounded-full border border-gray-800 bg-sky-500 flex items-center justify-center text-xs font-bold">A</div>
                <div className="w-8 h-8 rounded-full border border-gray-800 bg-pink-500 flex items-center justify-center text-xs font-bold">S</div>
                <div className="w-8 h-8 rounded-full border border-gray-800 bg-purple-500 flex items-center justify-center text-xs font-bold">K</div>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 flex items-center gap-1.5 break-words">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                Our support team is online and ready to assist you!
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-lg shadow-2xl shadow-sky-500/5 group">
              <Image
                src="/images/contact.webp"
                alt="Support Composition"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT INFO CARDS --- */}
      <section className="relative z-10 mt-16 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Phone */}
          <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-sky-500/20 transition-all duration-300 group overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
              <Phone size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 break-words">+91 9355 510 707</p>
              <p className="text-[10px] text-gray-500">Mon - Sat, 9AM - 7PM IST</p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-indigo-500/20 transition-all duration-300 group overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
              <Mail size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</h3>
              <p className="text-[11px] sm:text-xs md:text-sm lg:text-[11px] xl:text-sm font-bold text-white mb-0.5 break-words whitespace-nowrap">info@bluekiteevents.com</p>
              <p className="text-[10px] text-gray-500">We reply within 24 hours</p>
            </div>
          </div>

          {/* Card 3: Office */}
          <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-purple-500/20 transition-all duration-300 group overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Office</h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 break-words">Sector 12 Dwarka, Delhi</p>
              <p className="text-[10px] text-gray-500">110078</p>
            </div>
          </div>

          {/* Card 4: Business Hours */}
          <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/20 transition-all duration-300 group overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
              <Clock size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Hours</h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 break-words">Mon - Sat: 9AM - 7PM</p>
              <p className="text-[10px] text-gray-500">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM GRID SECTION --- */}
      <section className="relative z-10 mt-12 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Contact Form */}
          <div className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Send size={16} />
                </div>
                <h2 className="text-xl font-bold text-white">Send us a message</h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-sky-500/10 hover:shadow-sky-500/25 active:scale-[0.98] disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>

              {formStatus.submitted && (
                <p className={`mt-4 text-sm font-semibold text-center ${formStatus.isError ? "text-rose-400" : "text-emerald-400"}`}>
                  {formStatus.message}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Right Side (Map & FAQ stacked vertically) */}
          <div className="flex flex-col gap-8">
            {/* Location Map */}
            <div className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <MapPin size={16} />
                  </div>
                  <h2 className="text-xl font-bold text-white">Our Location</h2>
                </div>

                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-lg shadow-indigo-500/5 mb-6">
                  <iframe
                    src="https://maps.google.com/maps?q=307,%20Best%20Arcade,%20Sector%207%20Extension,%20Pocket%206,%20Sector%2012%20Dwarka,%20Delhi,%20110078&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full transition-all duration-500"
                  />
                  {/* Attractive corner badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-800">Blue Kite Events</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">Bluekite Events — Dwarka Office</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    307, Best Arcade, Sector 7 Extension, Pocket 6,<br />
                    Sector 12 Dwarka, Dwarka, Delhi — 110078
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=307+Best+Arcade+Sector+7+Extension+Pocket+6+Sector+12+Dwarka+Delhi+110078"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 hover:bg-sky-500/20 text-sky-400 hover:text-white font-bold text-sm tracking-wide uppercase transition-all"
              >
                <MapPin size={16} />
                Get Directions
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Quick Help / FAQ */}
            <div className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Quick Help</h2>
              </div>

              {/* FAQ Accordion List */}
              <div className="flex flex-col gap-4">
                {faqData.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-white/5 pb-3 last:border-0"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-start text-left gap-2 group"
                    >
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {item.question}
                      </span>
                      <span className="text-gray-500 group-hover:text-white transition-colors mt-0.5 flex-shrink-0">
                        {openFaqIndex === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>
                    {openFaqIndex === idx && (
                      <p className="mt-2 text-xs text-gray-400 leading-relaxed animate-fadeIn">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
