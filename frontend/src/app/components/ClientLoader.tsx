"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/bke_logo_cropped.png";

const LoadingScreen = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#030712] z-50">
    <div className="mb-6 flex flex-col items-center animate-pulse text-center">
      <div className="w-20 h-20 bg-white p-2.5 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/10 mb-4 border border-white/15">
        <Image
          src={logo}
          alt="Bluekite Events Logo"
          width={64}
          height={64}
          className="object-contain"
          priority
        />
      </div>
      <span className="block text-xl font-bold uppercase tracking-[0.32em] text-white">
        Bluekite
      </span>
      <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.38em] text-sky-300">
        Events Pro
      </span>
    </div>
    <div className="flex space-x-2">
      {[...Array(3)].map((_, idx) => (
        <span
          key={idx}
          className="w-3 h-3 bg-sky-400 rounded-full animate-bounce"
          style={{ animationDelay: `${idx * 0.3}s` }}
        />
      ))}
    </div>
    <p className="mt-4 text-gray-400 text-sm uppercase tracking-wide font-semibold">
      Loading Bluekite Events...
    </p>
  </div>
);

export default function ClientLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // This effect now runs on initial load AND whenever the pathname changes
  useEffect(() => {
    setLoading(true); // Show loading screen
    const timer = setTimeout(() => setLoading(false), 2200); // Hide after a delay
    return () => clearTimeout(timer);
  }, [pathname]); // Key change: re-run the effect when the path changes

  // Use a state to decide whether to show the loader or the children.
  // We use a different state for the initial load to avoid a flash of content.
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsInitialLoad(false);
    }
  }, [loading]);

  // On initial load, if loading is true, show the loader.
  if (isInitialLoad && loading) {
    return <LoadingScreen />;
  }

  // For subsequent navigations, show the loader on top of the old content.
  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  );
}
