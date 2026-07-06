"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const LoadingScreen = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#030712] z-50">
    <img
      src="/images/bke_logo.png"
      alt="Bluekite Events Logo"
      className="w-28 h-28 object-contain mb-6 animate-pulse"
    />
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
