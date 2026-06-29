"use client";

import Link from "next/link";

export default function BluekiteLeadership() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 bg-[#c6e2f7] font-sans">
      <section className="w-full mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-16 bg-[#176299] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-900/40 border border-blue-700">
        
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left">
          <span className="uppercase text-sm font-bold text-blue-300 tracking-wider mb-3 block">
            Leadership
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            The Driving Force Behind Bluekite Events
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            Our leadership team is driven by a passion for excellence, creativity, and customer-first values. We approach every event with dedication and a strategic mindset—delivering spectacular results and unforgettable memories for weddings, corporate gatherings, and entertainment shows.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-white font-semibold text-base mb-10 transition-transform transform hover:-translate-y-0.5"
          >
            Connect with Us <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <div className="mt-4">
            <div className="font-bold text-xl text-white">Bluekite Events Pro</div>
            <div className="text-md text-blue-300">Curators of Memories</div>
          </div>
        </div>

        {/* Right Side: Perfectly Aligned Image */}
        <div className="flex items-center justify-center">
          <figure className="relative w-full max-w-md mx-auto group">
            <div className="absolute"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#156395]">
              <img
                src="/images/about.jpg"
                alt="Bluekite Events Showcase"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm shadow-lg border border-white/20">
                Premium Events Management
              </figcaption>
            </div>
          </figure>
        </div>
      </section>
    </main>
  );
}
