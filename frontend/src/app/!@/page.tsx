"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Calendar, User, Search, RefreshCw, Trash2, ShieldAlert, CheckCircle, ExternalLink } from "lucide-react";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

export default function AdminPanel() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 1. Check for the "#admin" hash in the URL to authorize access
  useEffect(() => {
    const checkAuth = () => {
      if (window.location.hash === "#admin") {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    };

    checkAuth();
    window.addEventListener("hashchange", checkAuth);
    return () => window.removeEventListener("hashchange", checkAuth);
  }, []);

  // 2. Load inquiries from API
  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorized) {
      fetchInquiries();
    }
  }, [authorized]);

  // 3. Ambient Particle Background
  useEffect(() => {
    if (!authorized) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string }> = [];
    const colors = ["#38bdf8", "#818cf8", "#c084fc"];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
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
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [authorized]);

  // If not authorized yet, show standard 404 to hide the page
  if (authorized === false) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-9xl font-extrabold text-white/5 tracking-widest">404</h1>
        <div className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 -mt-8">
          Page Not Found
        </div>
        <p className="text-gray-400 text-base max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 text-white transition-colors"
        >
          Go Back Home
        </a>
      </div>
    );
  }

  if (authorized === null) {
    return <div className="min-h-screen bg-[#030712]" />;
  }

  // Filtered inquiries
  const filtered = inquiries.filter(
    (inq) =>
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden font-sans pb-24">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" />
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-900/10 blur-[150px] pointer-events-none z-0" />

      {/* HEADER */}
      <header className="relative z-10 pt-28 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Secure Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Customer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              Inquiries
            </span>
          </h1>
        </div>

        <button
          onClick={fetchInquiries}
          disabled={loading}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-semibold rounded-xl transition-all active:scale-95 disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </header>

      {/* SEARCH AND COUNTS */}
      <section className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Search Bar */}
          <div className="lg:col-span-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search by name, email, subject, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.02] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:border-sky-500 focus:outline-none transition-all placeholder-gray-500"
            />
          </div>
          {/* Count Card */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 rounded-2xl p-4 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total Submissions</p>
              <p className="text-2xl font-black text-white mt-1">{inquiries.length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
              <Mail size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-md overflow-hidden">
          {loading ? (
            <div className="p-20 text-center text-gray-400 flex flex-col items-center gap-3">
              <RefreshCw className="animate-spin text-sky-400" size={32} />
              <p className="text-sm font-medium">Loading submissions...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-20 text-center text-gray-500 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <Mail size={24} className="text-gray-400" />
              </div>
              <div>
                <p className="text-base font-bold text-white">No Inquiries Found</p>
                <p className="text-xs text-gray-400 mt-1">
                  {searchTerm ? "Try adjusting your search keywords." : "New submissions will appear here."}
                </p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-xs text-gray-400 uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Date & Time</th>
                    <th className="py-4 px-6 font-semibold">Contact Info</th>
                    <th className="py-4 px-6 font-semibold">Subject</th>
                    <th className="py-4 px-6 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filtered.map((inq) => (
                    <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-6 px-6 align-top">
                        <span className="text-xs text-gray-400 font-mono block">
                          {new Date(inq.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono block mt-1">
                          {new Date(inq.date).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </td>
                      <td className="py-6 px-6 align-top min-w-[200px]">
                        <p className="font-bold text-white text-sm">{inq.name}</p>
                        <a
                          href={`mailto:${inq.email}`}
                          className="text-xs text-sky-400 hover:underline flex items-center gap-1 mt-1 break-all"
                        >
                          {inq.email}
                        </a>
                      </td>
                      <td className="py-6 px-6 align-top min-w-[180px]">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                          {inq.subject}
                        </span>
                      </td>
                      <td className="py-6 px-6 align-top">
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line max-w-xl">
                          {inq.message}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
