"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
// Import icons from lucide-react
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/bluekiteevents", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/bluekiteevents", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/bluekite-events", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/bluekiteevents", label: "Instagram" },
  ];

  return (
    <div
      className={`bg-slate-900 text-slate-100 py-5 px-6 md:px-20 w-full mx-auto relative`}
    >
      <footer className="w-full max-w-full mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl px-10 pt-10 pb-2 shadow-xl border border-slate-700 relative">
        {/* Top Call to Action + Video */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="flex-1 w-full min-w-[280px] aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-700">
            <video
              src="/images/poddarvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Ready to create an unforgettable event experience?
            </h2>
            <Link
              href="/contact"
              className="inline-block rounded-full px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Book an Event
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-sm border-t border-slate-700 pt-10">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 p-1 rounded-xl bg-white flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Bluekite Events"
                  className="h-auto w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Bluekite Events Pro
              </h3>
            </div>
            <p className="text-slate-400 mb-4">
              Where Moments Become Memories!
            </p>
            <address className="not-italic text-slate-400">
              New Delhi, India
            </address>
            <p className="text-slate-400 my-1">
              Email: <a href="mailto:info@bluekiteevents.com" className="hover:text-white">info@bluekiteevents.com</a>
            </p>
            <p className="text-slate-400">
              Phone: <a href="tel:+919355510707" className="hover:text-white">+91 9355 510 707</a>
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Weddings",
                "Corporate Events",
                "Music Concerts",
                "Comedy Shows",
                "Stage Shows",
                "Themed Parties",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-400 hover:text-white transition-transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-slate-700 py-5 text-center text-xs text-slate-500 select-none">
          &copy; {new Date().getFullYear()} Bluekite Events Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
