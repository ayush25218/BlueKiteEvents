// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Home,
//   Info,
//   Building,
//   HeartHandshake,
//   Phone,
//   Pill,
//   Gem,
//   Diamond,
//   Camera,
//   Caravan,
//   Building2,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";
// import logo from "../../../public/images/logo.png";

// // GSAP imports
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP); // [23]

// // Top-level nav items
// const topNav = [
//   { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
//   { name: "About us", href: "/about", icon: <Info className="w-4 h-4" /> },
//   {
//     name: "Charity",
//     href: "/charity/aditi-poddar-foundation",
//     icon: <HeartHandshake className="w-4 h-4" />,
//   },
//   {
//     name: "Contacts us",
//     href: "/contact",
//     icon: <Phone className="w-4 h-4" />,
//   },
// ];

// // Industry types
// type SubLink = { name: string; href: string };
// type IndustryLink = {
//   name: string;
//   href: string;
//   icon: React.ReactElement;
//   subLinks?: SubLink[];
// };
// type IndustrySection = { heading: string; links: IndustryLink[] };
// type IndustryColumn = { column: number; items: IndustrySection[] };

// const industriesMenu: IndustryColumn[] = [
//   {
//     column: 1,
//     items: [
//       {
//         heading: "Pharma",
//         links: [
//           {
//             name: "PODS Pharma",
//             href: "/industries/pods-pharma",
//             icon: <Pill className="w-4 h-4" />,
//             subLinks: [
//               { name: "Pharma", href: "/industries/pods-pharma/pharma" },
//               {
//                 name: "Medical Equipment & Consumables",
//                 href: "/industries/pods-pharma/medical-equipment-consumables",
//               },
//               { name: "Gloves", href: "/industries/pods-pharma/gloves" },
//             ],
//           },
//         ],
//       },
//       {
//         heading: "Mining",
//         links: [
//           {
//             name: "LUXAUM Minerals Pvt Ltd",
//             href: "/industries/luxaum-minerals",
//             icon: <Gem className="w-4 h-4" />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     column: 2,
//     items: [
//       {
//         heading: "Luxury Jewellry",
//         links: [
//           {
//             name: "33 Carat Ltd",
//             href: "/industries/33-carat",
//             icon: <Diamond className="w-4 h-4" />,
//           },
//         ],
//       },
//       {
//         heading: "Media",
//         links: [
//           {
//             name: "PODS Media",
//             href: "/industries/pods-media",
//             icon: <Camera className="w-4 h-4" />,
//           },
//         ],
//       },
//       {
//         heading: "Procurements",
//         links: [
//           {
//             name: "PODS Procura",
//             href: "/industries/pods-procura",
//             icon: <Caravan className="w-4 h-4" />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     column: 3,
//     items: [
//       {
//         heading: "Infrastructure",
//         links: [
//           {
//             name: "Build Hub Properties",
//             href: "/industries/build-hub-properties",
//             icon: <Building className="w-4 h-4" />,
//           },
//           {
//             name: "Build Hub Prestige Property Pvt Ltd",
//             href: "/industries/build-hub-prestige-property",
//             icon: <Building2 className="w-4 h-4" />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const Header: React.FC = () => {
//   const [open, setOpen] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedMobileSections, setExpandedMobileSections] = useState<
//     Record<string, boolean>
//   >({});
//   const [expandedMobileLinks, setExpandedMobileLinks] = useState<
//     Record<string, boolean>
//   >({});
//   const firstFocusableRef = useRef<HTMLButtonElement | null>(null);

//   // refs
//   const headerRef = useRef<HTMLDivElement | null>(null);
//   const desktopMegaRef = useRef<HTMLDivElement | null>(null);
//   const mobileDrawerRef = useRef<HTMLElement | null>(null);
//   const underlineRef = useRef<HTMLDivElement | null>(null); // global underline bar

//   // ESC to close
//   useEffect(() => {
//     const onEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(null);
//         setMobileOpen(false);
//         setExpandedMobileSections({});
//         setExpandedMobileLinks({});
//         // hide underline
//         if (underlineRef.current)
//           gsap.to(underlineRef.current, {
//             width: 0,
//             duration: 0.2,
//             ease: "power2.out",
//           });
//       }
//     };
//     window.addEventListener("keydown", onEsc);
//     return () => window.removeEventListener("keydown", onEsc);
//   }, []); // [23]

//   // Body scroll lock when drawer open
//   useEffect(() => {
//     if (mobileOpen) {
//       setTimeout(() => firstFocusableRef.current?.focus(), 0);
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.documentElement.style.overflow = "";
//     }
//     return () => {
//       document.documentElement.style.overflow = "";
//     };
//   }, [mobileOpen]); // [23]

//   const flatIndustryHeadings = useMemo(
//     () => industriesMenu.flatMap((c) => c.items.map((i) => i.heading)),
//     []
//   ); // [23]

//   const toggleSection = (heading: string) =>
//     setExpandedMobileSections((s) => ({ ...s, [heading]: !s[heading] })); // [23]
//   const toggleLink = (name: string) =>
//     setExpandedMobileLinks((s) => ({ ...s, [name]: !s[name] })); // [23]

//   // GLOBAL UNDERLINE: init style
//   useGSAP(
//     () => {
//       if (!underlineRef.current || !headerRef.current) return;
//       gsap.set(underlineRef.current, {
//         left: 0,
//         width: 0,
//         height: 2,
//         y: 0,
//         autoAlpha: 1,
//       });
//     },
//     { scope: headerRef }
//   ); // [23]

//   // Utility to move underline to hovered item
//   const moveUnderlineTo = (el: HTMLElement | null) => {
//     if (!el || !underlineRef.current || !headerRef.current) return;
//     const linkBox = el.getBoundingClientRect();
//     const headerBox = headerRef.current.getBoundingClientRect();
//     const label = el.querySelector("span[data-label]") as HTMLElement | null;
//     const targetBox = label ? label.getBoundingClientRect() : linkBox;
//     const left = targetBox.left - headerBox.left;
//     const width = targetBox.width;

//     gsap.to(underlineRef.current, {
//       left,
//       width,
//       height: 4,
//       duration: 0.28,
//       ease: "power3.out",
//     });
//   }; // [1]

//   const hideUnderline = () => {
//     if (!underlineRef.current) return;
//     gsap.to(underlineRef.current, {
//       width: 0,
//       duration: 0.22,
//       ease: "power2.inOut",
//     });
//   }; // [1]

//   // Desktop mega menu animations (scoped)
//   useGSAP(
//     (context) => {
//       const q = context.selector!;
//       gsap.set(desktopMegaRef.current, {
//         autoAlpha: 0,
//         y: -8,
//         pointerEvents: "none",
//       });
//       gsap.set(q(".mega-link"), { y: 6, autoAlpha: 0 });
//     },
//     { scope: desktopMegaRef }
//   ); // [24]

//   useEffect(() => {
//     if (!desktopMegaRef.current) return;
//     const ctx = gsap.context(() => {
//       const links = gsap.utils.toArray<HTMLElement>(
//         ".mega-link",
//         desktopMegaRef.current
//       );
//       const tl = gsap.timeline({
//         defaults: { ease: "power2.out", duration: 0.25 },
//       });
//       if (open === "industries") {
//         tl.to(desktopMegaRef.current, {
//           autoAlpha: 1,
//           y: 0,
//           pointerEvents: "auto",
//           duration: 0.2,
//         }).to(
//           links,
//           { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.22 },
//           "<0.05"
//         );
//       } else {
//         tl.to(links, { y: 6, autoAlpha: 0, stagger: 0.03, duration: 0.18 }).to(
//           desktopMegaRef.current,
//           { autoAlpha: 0, y: -8, pointerEvents: "none", duration: 0.18 },
//           "<"
//         );
//       }
//     }, desktopMegaRef);
//     return () => ctx.revert();
//   }, [open]); // [24]

//   // Mobile drawer animations
//   useGSAP(
//     () => {
//       if (!mobileDrawerRef.current) return;
//       gsap.set(mobileDrawerRef.current, { xPercent: -100 });
//       gsap.set(".mobile-item", { y: 8, autoAlpha: 0 });
//     },
//     { scope: headerRef }
//   ); // [23]

//   useEffect(() => {
//     if (!mobileDrawerRef.current) return;
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     if (mobileOpen) {
//       tl.to(mobileDrawerRef.current, { xPercent: 0, duration: 0.26 }).to(
//         ".mobile-item",
//         { y: 0, autoAlpha: 1, stagger: 0.035, duration: 0.2 },
//         "<0.05"
//       );
//     } else {
//       tl.to(".mobile-item", {
//         y: 8,
//         autoAlpha: 0,
//         stagger: 0.03,
//         duration: 0.15,
//       }).to(
//         mobileDrawerRef.current,
//         { xPercent: -100, duration: 0.22 },
//         "<0.02"
//       );
//     }
//     return () => {
//       tl.kill();
//     };
//   }, [mobileOpen]); // [23]

//   // Hover intent for mega menu
//   const hoverTimerRef = useRef<number | null>(null);
//   const openIndustries = () => {
//     if (hoverTimerRef.current) {
//       window.clearTimeout(hoverTimerRef.current);
//       hoverTimerRef.current = null;
//     }
//     setOpen("industries");
//   }; // [25]
//   const closeIndustriesWithDelay = () => {
//     if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
//     hoverTimerRef.current = window.setTimeout(() => setOpen(null), 240);
//   }; // [26]

//   // Handlers for underline on header nav items
//   const onNavEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     moveUnderlineTo(e.currentTarget);
//   }; // [1]
//   const onNavLeave = () => {
//     // If menu is open keep underline for Industries, else hide
//     if (open === "industries" && headerRef.current) {
//       const trigger = headerRef.current.querySelector(
//         'button[data-trigger="industries"]'
//       ) as HTMLElement | null;
//       moveUnderlineTo(trigger ?? null);
//     } else {
//       hideUnderline();
//     }
//   }; // [1]

//   return (
//     <header
//       ref={headerRef}
//       className="relative bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-50"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <nav
//           className="flex items-center justify-between py-3"
//           role="navigation"
//           aria-label="Main navigation"
//         >
//           {/* Brand */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={logo} alt="Poddar Group" width={48} height={48} />
//             <span className="hidden sm:block text-sm tracking-widest uppercase font-semibold text-gray-900">
//               Poddar Group
//             </span>
//           </Link>

//           {/* Desktop nav */}
//           <ul className="hidden lg:flex items-center gap-6" role="menubar">
//             {topNav.slice(0, 2).map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 font-medium"
//                   onMouseEnter={onNavEnter}
//                   onMouseLeave={onNavLeave}
//                 >
//                   <span className="text-gray-800">{item.icon}</span>
//                   <span data-label className="relative">
//                     {item.name}
//                   </span>
//                 </Link>
//               </li>
//             ))}

//             {/* Industries trigger only; also drives underline */}
//             <li
//               className="relative"
//               onMouseEnter={openIndustries}
//               onMouseLeave={closeIndustriesWithDelay}
//             >
//               <button
//                 data-trigger="industries"
//                 className="inline-flex items-center gap-2 font-medium text-gray-800 hover:text-gray-900"
//                 aria-haspopup="true"
//                 aria-expanded={open === "industries"}
//                 onMouseEnter={(e) =>
//                   moveUnderlineTo(e.currentTarget as HTMLElement)
//                 }
//                 onMouseLeave={onNavLeave}
//               >
//                 <Building className="w-4 h-4 text-gray-600" />
//                 <span data-label className="relative">
//                   Industries
//                 </span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//             </li>

//             {topNav.slice(2).map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 font-medium"
//                   onMouseEnter={onNavEnter}
//                   onMouseLeave={onNavLeave}
//                 >
//                   <span className="text-gray-800">{item.icon}</span>
//                   <span data-label className="relative">
//                     {item.name}
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile toggle */}
//           <button
//             onClick={() => {
//               hideUnderline();
//               setMobileOpen(true);
//             }}
//             className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white"
//             aria-label="Open menu"
//             aria-expanded={mobileOpen}
//             aria-controls="mobile-drawer"
//             ref={firstFocusableRef}
//           >
//             <Menu className="h-5 w-5 text-gray-800" />
//           </button>
//         </nav>
//       </div>

//       {/* Global full-width mega menu below header */}
//       <div
//         ref={desktopMegaRef}
//         onMouseEnter={() => {
//           openIndustries();
//           // keep underline under Industries when entering panel
//           if (headerRef.current) {
//             const trigger = headerRef.current.querySelector(
//               'button[data-trigger="industries"]'
//             ) as HTMLElement | null;
//             moveUnderlineTo(trigger ?? null);
//           }
//         }}
//         onMouseLeave={() => {
//           closeIndustriesWithDelay();
//           hideUnderline();
//         }}
//         className={[
//           "absolute left-0 right-0 top-full",
//           "mx-auto w-full bg-white border-t border-gray-200 shadow-2xl",
//           "transition-none z-40",
//         ].join(" ")}
//         role="menu"
//       >
//         <div className="mx-auto max-w-7xl px-8 py-8">
//           <div className="grid grid-cols-3 gap-8">
//             {industriesMenu.map((col) => (
//               <div key={col.column} className="space-y-8">
//                 {col.items.map((section) => (
//                   <div key={section.heading}>
//                     <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mega-link">
//                       {section.heading}
//                     </h3>
//                     <ul className="mt-3 space-y-2">
//                       {section.links.map((link) => (
//                         <li key={link.name} className="mega-link">
//                           <Link
//                             href={link.href}
//                             className="group flex items-center gap-2 rounded-lg p-2 hover:bg-gray-50"
//                           >
//                             <span className="text-gray-600">{link.icon}</span>
//                             <span className="font-medium text-gray-900">
//                               {link.name}
//                             </span>
//                           </Link>
//                           {link.subLinks?.length ? (
//                             <ul className="pl-7 mt-1 space-y-1">
//                               {link.subLinks.map((sub) => (
//                                 <li key={sub.name} className="mega-link">
//                                   <Link
//                                     href={sub.href}
//                                     className="block text-sm text-gray-700 hover:text-gray-900"
//                                   >
//                                     {sub.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           ) : null}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Global multicolor underline bar at header bottom */}
//       <div
//         ref={underlineRef}
//         aria-hidden="true"
//         className="
//     pointer-events-none absolute left-0 bottom-0 h-[6px] z-50
//     bg-gradient-to-r from-cyan-500 via-lime-500 via-50% to-rose-500
//   "
//       />

//       {/* Overlay */}
//       <button
//         type="button"
//         onClick={() => {
//           setMobileOpen(false);
//           hideUnderline();
//         }}
//         aria-hidden={!mobileOpen}
//         className={[
//           "fixed inset-0 bg-black/40 transition-opacity duration-200 lg:hidden",
//           mobileOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none",
//         ].join(" ")}
//       />

//       {/* Mobile/Tablet Drawer (Left) */}
//       <aside
//         id="mobile-drawer"
//         role="dialog"
//         aria-modal="true"
//         aria-label="Mobile navigation"
//         ref={mobileDrawerRef}
//         className={[
//           "fixed inset-y-0 left-0 z-[27] w-80 max-w-[85vw] transform !bg-white shadow-2xl outline-none",
//           "lg:hidden", "h-screen overflow-y-auto overflow-x-hidden",
//         ].join(" ")}
//       >
//         <div className="flex items-center justify-between px-4 py-3 border-b">
//           <Link
//             href="/"
//             className="flex items-center gap-2"
//             onClick={() => setMobileOpen(false)}
//           >
//             <Image src={logo} alt="Poddar Group" width={48} height={48} />
//             <span className="text-sm font-semibold text-gray-900">
//               Poddar Group
//             </span>
//           </Link>
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300"
//             aria-label="Close menu"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <nav className="px-4 py-4 bg-white" aria-label="Main">
//           <ul className="space-y-1">
//             {topNav.slice(0, 2).map((item) => (
//               <li key={item.name} className="mobile-item">
//                 <Link
//                   href={item.href}
//                   className="flex items-center gap-2 rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-50"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   <span className="text-gray-600">{item.icon}</span>
//                   <span>{item.name}</span>
//                 </Link>
//               </li>
//             ))}

//             {/* Industries collapsible */}
//             <li className="mt-3 mobile-item">
//               <button
//                 className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-50"
//                 onClick={() => {
//                   const key = "Industries";
//                   setExpandedMobileSections((s) => ({ ...s, [key]: !s[key] }));
//                 }}
//                 aria-expanded={!!expandedMobileSections["Industries"]}
//                 aria-controls="sec-Industries"
//               >
//                 <span className="flex items-center gap-2">
//                   <Building className="w-4 h-4 text-gray-600" />
//                   <span>Industries</span>
//                 </span>
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform ${
//                     expandedMobileSections["Industries"] ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <div
//                 id="sec-Industries"
//                 className={`overflow-hidden transition-[max-height] duration-300 ${
//                   expandedMobileSections["Industries"]
//                     ? "max-h-[1200px]"
//                     : "max-h-0"
//                 }`}
//               >
//                 {industriesMenu
//                   .flatMap((c) => c.items)
//                   .map((section) => (
//                     <div key={section.heading} className="mt-1">
//                       <p className="px-3 py-2 text-xs font-semibold uppercase text-gray-500">
//                         {section.heading}
//                       </p>
//                       <ul className="ml-1">
//                         {section.links.map((link) => (
//                           <li key={link.name} className="mb-1">
//                             <Link
//                               href={link.href}
//                               className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50"
//                               onClick={() => setMobileOpen(false)}
//                             >
//                               <span className="text-gray-600">{link.icon}</span>
//                               <span className="font-medium text-gray-900">
//                                 {link.name}
//                               </span>
//                             </Link>
//                             {link.subLinks?.length ? (
//                               <ul className="ml-7 mt-1">
//                                 {link.subLinks.map((sub) => (
//                                   <li key={sub.name}>
//                                     <Link
//                                       href={sub.href}
//                                       className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50"
//                                       onClick={() => setMobileOpen(false)}
//                                     >
//                                       {sub.name}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             ) : null}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//               </div>
//             </li>

//             {topNav.slice(2).map((item) => (
//               <li key={item.name} className="mobile-item">
//                 <Link
//                   href={item.href}
//                   className="flex items-center gap-2 rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-50"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   <span className="text-gray-600">{item.icon}</span>
//                   <span>{item.name}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>
//     </header>
//   );
// };

// export default Header;


"use client";


import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Info,
  CalendarDays,
  Phone,
  Music,
  Heart,
  Briefcase,
  Star,
  Laugh,
  Image as ImageIcon,
  ChevronDown,
  Menu,
  X,
  Camera
} from "lucide-react";
import logo from "../../../public/images/logo.png";


// GSAP imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


// --- Data Structures (Menu Content) ---
const topNav = [
  { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { name: "About Us", href: "/about", icon: <Info className="w-4 h-4" /> },
  {
    name: "Events",
    href: "/events",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: <Camera className="w-4 h-4" />,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: <Phone className="w-4 h-4" />,
  },
];


type SubLink = { name: string; href: string };
type IndustryLink = {
  name: string;
  href: string;
  icon: React.ReactElement;
  subLinks?: SubLink[];
};
type IndustrySection = { heading: string; links: IndustryLink[] };
type IndustryColumn = { column: number; items: IndustrySection[] };


const industriesMenu: IndustryColumn[] = [
  {
    column: 1,
    items: [
      {
        heading: "Celebrations",
        links: [
          {
            name: "Weddings",
            href: "/#services",
            icon: <Heart className="w-4 h-4" />,
            subLinks: [
              { name: "Intimate Ceremonies", href: "/#services" },
              { name: "Lavish Wedding Affairs", href: "/#services" },
            ],
          },
          {
            name: "Social Celebrations",
            href: "/#services",
            icon: <Star className="w-4 h-4" />,
            subLinks: [
              { name: "Birthdays & Anniversaries", href: "/#services" },
              { name: "Special Milestones", href: "/#services" },
            ],
          },
        ],
      },
      {
        heading: "Entertainment",
        links: [
          {
            name: "Music Concerts",
            href: "/#services",
            icon: <Music className="w-4 h-4" />,
            subLinks: [
              { name: "Live Music Events", href: "/#services" },
              { name: "Artist Management", href: "/#services" },
            ],
          },
          {
            name: "Comedy Shows",
            href: "/#services",
            icon: <Laugh className="w-4 h-4" />,
            subLinks: [
              { name: "Stand-Up Comedy Nights", href: "/#services" },
              { name: "Comedy Festivals", href: "/#services" },
            ],
          },
          {
            name: "Stage Shows",
            href: "/#services",
            icon: <Star className="w-4 h-4" />,
            subLinks: [
              { name: "Theatre & Performances", href: "/#services" },
              { name: "Dance & Cultural Shows", href: "/#services" },
            ],
          },
        ],
      },
    ],
  },
  {
    column: 2,
    items: [
      {
        heading: "Corporate",
        links: [
          {
            name: "Corporate Events",
            href: "/#services",
            icon: <Briefcase className="w-4 h-4" />,
            subLinks: [
              { name: "Conferences & Seminars", href: "/#services" },
              { name: "Product Launches", href: "/#services" },
            ],
          },
          {
            name: "Exhibition & Trade Shows",
            href: "/#services",
            icon: <ImageIcon className="w-4 h-4" />,
            subLinks: [
              { name: "Brand Exhibitions", href: "/#services" },
              { name: "Trade Fair Management", href: "/#services" },
            ],
          },
        ],
      },
    ],
  },
  {
    column: 3,
    items: [
      {
        heading: "Creative",
        links: [
          {
            name: "Themed Parties",
            href: "/#services",
            icon: <Star className="w-4 h-4" />,
            subLinks: [
              { name: "Fantasy & Costume Themes", href: "/#services" },
              { name: "Destination Events", href: "/#services" },
            ],
          },
          {
            name: "Event Design",
            href: "/#services",
            icon: <Camera className="w-4 h-4" />,
            subLinks: [
              { name: "Floral & Lighting Design", href: "/#services" },
              { name: "Stage & Decor Setup", href: "/#services" },
            ],
          },
        ],
      },
    ],
  },
];

const Header: React.FC = () => {
  // --- State Management ---
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileSections, setExpandedMobileSections] = useState<Record<string, boolean>>({});
  const [expandedMobileLinks, setExpandedMobileLinks] = useState<Record<string, boolean>>({});
  
  // --- Refs for DOM elements ---
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const desktopMegaRef = useRef<HTMLDivElement | null>(null);
  const mobileDrawerRef = useRef<HTMLElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableRef = useRef<HTMLButtonElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  
  useEffect(() => {
    setOpen(null); // on initial mount ensure mega menu closed
  }, []);

  // --- Side Effects ---

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard (ESC) and body scroll lock
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    
    if (mobileOpen) {
      setTimeout(() => firstFocusableRef.current?.focus(), 0);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  // --- Animation Logic ---

  // Underline animation functions
  const moveUnderlineTo = (el: HTMLElement | null) => {
    if (!el || !underlineRef.current || !navRef.current) return;
    const navBox = navRef.current.getBoundingClientRect();
    const label = el.querySelector("span[data-label]") as HTMLElement | null;
    const targetBox = label ? label.getBoundingClientRect() : el.getBoundingClientRect();
    
    const left = targetBox.left - navBox.left;
    const width = targetBox.width;

    gsap.to(underlineRef.current, {
      left,
      width,
      duration: 0.28,
      ease: "power3.out",
    });
  };

  const hideUnderline = () => {
    if (!underlineRef.current) return;
    gsap.to(underlineRef.current, {
      width: 0,
      duration: 0.22,
      ease: "power2.inOut",
    });
  };

  // GSAP initial setup and animations
  useGSAP(() => {
    // Initial styles
    gsap.set(desktopMegaRef.current, { autoAlpha: 0, y: -8, pointerEvents: "none" });
    gsap.set(gsap.utils.toArray(".mega-link", desktopMegaRef.current), { y: 6, autoAlpha: 0 });
    gsap.set(mobileDrawerRef.current, { xPercent: -100 });
    gsap.set(".mobile-item", { y: 8, autoAlpha: 0 });
    gsap.set(underlineRef.current, { width: 0, y: 0, background: 'linear-gradient(to right, #3b82f6, #2563eb, #1d4ed8)' });
  }, { scope: headerRef });

  // Desktop mega menu animation
  useEffect(() => {
    if (!desktopMegaRef.current) return;
    const links = gsap.utils.toArray<HTMLElement>(".mega-link", desktopMegaRef.current);
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (open === "industries") {
      tl.to(desktopMegaRef.current, { autoAlpha: 1, y: 0, pointerEvents: "auto", duration: 0.2 })
        .to(links, { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.22 }, "<0.05");
    } else {
      tl.to(links, { y: 6, autoAlpha: 0, stagger: 0.03, duration: 0.18 })
        .to(desktopMegaRef.current, { autoAlpha: 0, y: -8, pointerEvents: "none", duration: 0.18 }, "<");
    }
    return () => { tl.kill(); };
  }, [open]);

  // Mobile drawer animation
  useEffect(() => {
    if (!mobileDrawerRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (mobileOpen) {
      tl.to(mobileDrawerRef.current, { xPercent: 0, duration: 0.26 })
        .to(".mobile-item", { y: 0, autoAlpha: 1, stagger: 0.035, duration: 0.2 }, "<0.05");
    } else {
      tl.to(".mobile-item", { y: 8, autoAlpha: 0, stagger: 0.03, duration: 0.15 })
        .to(mobileDrawerRef.current, { xPercent: -100, duration: 0.22 }, "<0.02");
    }
    return () => { tl.kill(); };
  }, [mobileOpen]);

  // --- Handlers ---

  // Hover intent for mega menu
  const openIndustries = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setOpen("industries");
  };
  
  const closeIndustriesWithDelay = () => {
    hoverTimerRef.current = window.setTimeout(() => setOpen(null), 240);
  };
  
  // Underline handlers
  const onNavEnter = (e: React.MouseEvent<HTMLElement>) => moveUnderlineTo(e.currentTarget);
  const onNavLeave = () => {
    if (open === "industries" && navRef.current) {
      const trigger = navRef.current.querySelector('button[data-trigger="industries"]') as HTMLElement | null;
      moveUnderlineTo(trigger);
    } else {
      hideUnderline();
    }
  };
  
  // Mobile accordion toggles
  const toggleSection = (heading: string) => setExpandedMobileSections(s => ({ ...s, [heading]: !s[heading] }));
  const toggleLink = (name: string) => setExpandedMobileLinks(s => ({ ...s, [name]: !s[name] }));

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-4'}`}
    >
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'max-w-none' : 'max-w-7xl'}`}>
        <nav
          ref={navRef}
          className={`relative flex items-center justify-between backdrop-blur-md shadow-lg border-white/10 transition-all duration-300
            ${isScrolled 
              ? 'bg-black/80 rounded-none border-x-0 border-t-0 border-b' 
              : 'bg-black/50 rounded-full border'
            }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-1">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image src={logo} alt="Poddar Group" width={40} height={40} className="h-10 w-auto" />
              <span className="hidden sm:block text-sm tracking-widest uppercase font-semibold text-white">
                Poddar Group
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1" role="menubar">
              {topNav.slice(0, 2).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white font-medium px-4 py-3"
                    onMouseEnter={onNavEnter}
                    onMouseLeave={onNavLeave}
                  >
                    <span className="text-gray-300">{item.icon}</span>
                    <span data-label className="relative">{item.name}</span>
                  </Link>
                </li>
              ))}

              <li className="relative" onMouseEnter={openIndustries} onMouseLeave={closeIndustriesWithDelay}>
                <button
                  data-trigger="industries"
                  className="inline-flex items-center gap-2 font-medium text-gray-200 hover:text-white px-4 py-3"
                  aria-haspopup="true"
                  aria-expanded={open === "industries"}
                  onMouseEnter={onNavEnter}
                  onMouseLeave={onNavLeave}
                >
                  <Building className="w-4 h-4 text-gray-300" />
                  <span data-label className="relative">Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>

              {topNav.slice(2).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white font-medium px-4 py-3"
                    onMouseEnter={onNavEnter}
                    onMouseLeave={onNavLeave}
                  >
                    <span className="text-gray-300">{item.icon}</span>
                    <span data-label className="relative">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-full text-white hover:bg-white/20"
              aria-label="Open menu"
              ref={firstFocusableRef}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Global multicolor underline bar at header bottom */}
          <div ref={underlineRef} aria-hidden="true" className="pointer-events-none absolute left-0 bottom-0 h-[3px] z-50 rounded-fullbg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"/>

        </nav>
      </div>

      {/* --- Popovers & Drawers --- */}

      {/* Desktop Mega Menu */}
      <div
        ref={desktopMegaRef}
        onMouseEnter={openIndustries}
        onMouseLeave={closeIndustriesWithDelay}
        className="absolute left-0 right-0 top-full bg-gray-950/95 backdrop-blur-lg border-t border-white/10 shadow-2xl"
        role="menu"
      >
        <div className="mx-auto max-w-7xl px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {industriesMenu.map((col) => (
              <div key={col.column} className="space-y-8">
                {col.items.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mega-link">
                      {section.heading}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name} className="mega-link">
                          <Link href={link.href} className="group flex items-center gap-3 rounded-lg p-2 -ml-2 hover:bg-white/5">
                            <span className="text-gray-400 group-hover:text-cyan-400">{link.icon}</span>
                            <span className="font-medium text-gray-200 group-hover:text-white">{link.name}</span>
                          </Link>
                          {link.subLinks?.length && (
                            <ul className="pl-8 mt-1 space-y-1">
                              {link.subLinks.map((sub) => (
                                <li key={sub.name} className="mega-link">
                                  <span className="block text-sm text-gray-400">{sub.name}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile/Tablet Drawer */}
      <aside
        id="mobile-drawer"
        ref={mobileDrawerRef}
        className="fixed inset-y-0 left-0 z-[60] w-80 max-w-[85vw] bg-gray-950 shadow-2xl lg:hidden h-screen overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image src={logo} alt="Poddar Group" width={40} height={40} />
            <span className="text-sm font-semibold text-white">Poddar Group</span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full text-white hover:bg-white/20" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-4" aria-label="Main">
          <ul className="space-y-1 text-white">
            {topNav.slice(0, 2).map((item) => (
              <li key={item.name} className="mobile-item">
                <Link href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                  <span className="text-gray-400">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}

            <li className="pt-1 mobile-item">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium hover:bg-white/10"
                onClick={() => toggleSection("Industries")}
                aria-expanded={!!expandedMobileSections["Industries"]}
              >
                <span className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span>Industries</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileSections["Industries"] ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${expandedMobileSections["Industries"] ? "max-h-[1200px]" : "max-h-0"}`}>
                <div className="pt-2 pl-4">
                  {industriesMenu.flatMap(c => c.items).map(section => (
                    <div key={section.heading} className="mt-1">
                      <p className="px-3 py-2 text-xs font-semibold uppercase text-gray-500">{section.heading}</p>
                      <ul className="ml-1">
                        {section.links.map(link => (
                          <li key={link.name} className="mb-1">
                            <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                              <span className="text-gray-400">{link.icon}</span>
                              <span className="font-medium text-gray-200">{link.name}</span>
                            </Link>
                            {link.subLinks && (
                              <ul className="ml-9 mt-1">
                                {link.subLinks.map(sub => (
                                  <li key={sub.name}>
                                    <Link href={sub.href} className="block px-3 py-1.5 rounded-md text-sm text-gray-400 hover:bg-white/10" onClick={() => setMobileOpen(false)}>{sub.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {topNav.slice(2).map((item) => (
              <li key={item.name} className="mobile-item">
                <Link href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                  <span className="text-gray-400">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for Mobile Drawer */}
      <button
        type="button"
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 lg:hidden z-50 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    </header>
  );
};

export default Header;