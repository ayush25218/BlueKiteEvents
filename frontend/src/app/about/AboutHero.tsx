"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <main className="relative w-full bg-[#f4f7fb]">
      <section
        className="relative w-full min-h-[500px] bg-cover bg-center shadow-lg flex flex-col p-8 md:p-12"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2070&auto=format&fit=crop')", // Example Image
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Driving Innovation,
              <br />
              <span className="text-[#3aa0ff] drop-shadow-lg">
                Unleashing Potential
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Transforming visions into reality across diverse horizons with
              unwavering commitment.
            </p>
          </div>
        </div>

        {/* Breadcrumb Navigation at the bottom */}
        <nav className="relative z-10" aria-label="Breadcrumb">
          <ol className="flex justify-center items-center space-x-2 text-sm text-white">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li className="font-medium" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>
      </section>
    </main>
  );
}
