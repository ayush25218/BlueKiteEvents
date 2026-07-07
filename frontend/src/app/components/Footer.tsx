"use client";
import Image from "next/image";
import logo from "../../../public/images/blue_kite_logo_cropped.png";
// Import icons from react-icons/fa
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: "https://www.facebook.com/bluekiteevents", label: "Facebook" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com/bluekiteevents", label: "Twitter" },
    { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/company/blue-kite-events-production-private-limited/", label: "LinkedIn" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/bluekite_eventspro/", label: "Instagram" },
  ];

  return (
    <div
      className={`bg-slate-900 text-slate-100 py-5 px-6 md:px-20 xl:px-24 2xl:px-32 w-full mx-auto relative`}
    >
      <footer className="w-full max-w-[1800px] mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl px-10 xl:px-16 2xl:px-20 pt-10 pb-2 shadow-xl border border-slate-700 relative">
        {/* Top Call to Action + Video */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="flex-1 w-full min-w-[280px] aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-700">
            <video
              src="/video_preview_h264.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
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
              <div className="w-16 h-16 p-1 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={logo}
                  alt="Bluekite Events"
                  className="max-w-full max-h-full object-contain"
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
                { label: "Weddings", href: "/services/weddings" },
                { label: "Corporate Events", href: "/services/corporate-events" },
                { label: "Music Concerts", href: "/services/music-concerts" },
                { label: "Comedy Shows", href: "/services/comedy-shows" },
                { label: "Stage Shows", href: "/services/stage-shows" },
                { label: "Themed Parties", href: "/services/themed-parties" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
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
