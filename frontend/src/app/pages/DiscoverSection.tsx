// "use client";

// import { useState } from 'react';
// import Image from 'next/image';

// // Store the default item's image path in a variable to avoid repetition
// const DEFAULT_ITEM_IMAGE = '/images/real-estate.jpg';

// const discoverItems = [
//     { name: 'Real Estate', image: '/images/real-estate.jpg', baseColor: 'bg-blue-700/70', activeColor: 'bg-blue-500/90' },
//     { name: 'Health Care', image: '/images/market_presence/abpeg7iuabim74jczorn.webp', baseColor: 'bg-teal-700/70', activeColor: 'bg-teal-500/90' },
//     { name: 'Fashion', image: '/images/market_presence/cbezl88m12rxmhqxggsh.webp', baseColor: 'bg-pink-700/70', activeColor: 'bg-pink-500/90' },
//     { name: 'Hospitality', image: '/images/market_presence/myqi8mefixvqx842vt5p.webp', baseColor: 'bg-indigo-700/70', activeColor: 'bg-indigo-500/90' },
//     { name: 'Manufacturing', image: '/images/market_presence/ywz9cyvinachnlaxcpgw.webp', baseColor: 'bg-gray-700/70', activeColor: 'bg-gray-500/90' },
//     // { name: 'Wholesale Trade', image: '/images/wholesale-trade.jpg', baseColor: 'bg-purple-700/70', activeColor: 'bg-purple-500/90' },
//     // { name: 'Online Retail', image: '/images/online-retail.jpg', baseColor: 'bg-red-700/70', activeColor: 'bg-red-500/90' },
//     { name: 'Management', image: '/images/market_presence/iechuhh6phsvuzgyuydg.webp', baseColor: 'bg-green-700/70', activeColor: 'bg-green-500/90' },
//     { name: 'Mining', image: '/images/market_presence/gkreccclkfhhltmhzzqd.webp', baseColor: 'bg-yellow-700/70', activeColor: 'bg-yellow-500/90' },
//     { name: 'Empty' }, // Empty item to complete the grid layout
// ];

// const DiscoverSection = () => {
//   const [bgImage, setBgImage] = useState(DEFAULT_ITEM_IMAGE);

//   return (
//     <section className="relative w-full sm:h-screen text-white overflow-hidden">
//       {/* Background Image */}
//       <Image
//         key={bgImage}
//         src={bgImage}
//         alt="Background"
//         fill
//         style={{ objectFit: 'cover' }}
//         className="z-0 transition-opacity duration-700 ease-in-out"
//         quality={100}
//       />
//       {/* Dark overlay on the background */}
//       <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

//       {/* Content - Adjusted padding for smaller screens */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full p-4 md:p-8">

//         {/* Header Section */}
//         <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start text-left">
//           {/* Left Column - Main Heading */}
//           <div className="w-full md:w-1/2">
//             <div className="mb-4">
//                 <span className="block w-12 h-1 bg-blue-200 mb-2"></span>
//                 <p className="text-base md:text-lg font-semibold tracking-wider text-blue-200 uppercase">Market presence</p>
//             </div>
//             {/* --- RESPONSIVE FONT SIZE CHANGE --- */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
//               Versatile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900">industry</span> presence.
//             </h1>
//           </div>
//           {/* Right Column - Description */}
//           <div className="w-full md:w-2/5 mt-6 md:mt-2">
//             {/* --- RESPONSIVE FONT SIZE CHANGE --- */}
//             <p className="text-base md:text-lg text-gray-200">
//               Our expertise spans across sectors like online retail, management, mining, health care, fashion, hospitality and real estate.
//             </p>
//           </div>
//         </div>

//         {/* --- RESPONSIVE GRID CHANGES --- */}
//         {/* Grid Container: 2 cols on mobile, 3 on tablet, 5 on desktop */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full max-w-6xl">
//           {discoverItems.map((item, index) => {
//             const isActive = bgImage === item.image;

//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => item.image && setBgImage(item.image)}
//                 onMouseLeave={() => setBgImage(DEFAULT_ITEM_IMAGE)}
//                 // --- RESPONSIVE HEIGHT AND TEXT SIZE CHANGES ---
//                 className={`
//                   flex items-center justify-center h-32 md:h-40 cursor-pointer transition-colors duration-300
//                   group relative
//                   ${
//                     item.name === 'Empty' 
//                       ? 'bg-transparent cursor-default'
//                       : `${isActive ? item.activeColor : item.baseColor} hover:${item.activeColor}`
//                   }
//                 `}
//               >
//                 {item.name !== 'Empty' && (
//                   <div className="text-center p-2">
//                     <span className="text-lg md:text-xl font-semibold">{item.name}</span>
//                     <div className={`absolute bottom-3 right-3 w-7 h-7 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center
//                                       transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
//                       →
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscoverSection;

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_ITEM_IMAGE = '/images/gold.jpg';

// BlueKiteEvents event categories with glassmorphism states and neon glow colors
const discoverItems = [
    { name: 'Weddings', link: '/services/weddings', image: '/images/discover_wedding.jpg', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-sky-950/50 border-sky-500/30 text-sky-400 shadow-[0_4px_20px_rgba(56,189,248,0.15)]' },
    { name: 'Corporate Events', link: '/services/corporate-events', image: '/images/discover_corporate.jpg', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-indigo-950/50 border-indigo-500/30 text-indigo-400 shadow-[0_4px_20px_rgba(99,102,241,0.15)]' },
    { name: 'Music Concerts', link: '/services/music-concerts', image: '/images/discover_concert.png', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-pink-950/50 border-pink-500/30 text-pink-400 shadow-[0_4px_20px_rgba(236,72,153,0.15)]' },
    { name: 'Comedy Shows', link: '/services/comedy-shows', image: '/images/discover_comedy.jpg', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-purple-950/50 border-purple-500/30 text-purple-400 shadow-[0_4px_20px_rgba(168,85,247,0.15)]' },
    { name: 'Social Celebrations', link: '/services/social-celebrations', image: '/images/discover_social.jpg', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-violet-950/50 border-violet-500/30 text-violet-400 shadow-[0_4px_20px_rgba(139,92,246,0.15)]' },
    { name: 'Themed Parties', link: '/services/themed-parties', image: '/images/fashion.jpg', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-blue-950/50 border-blue-500/30 text-blue-400 shadow-[0_4px_20px_rgba(59,130,246,0.15)]' },
    { name: 'Stage Shows', link: '/services/stage-shows', image: '/images/stage_show.jpg', baseColor: 'bg-slate-950/40 border-white/5', activeColor: 'bg-emerald-950/50 border-emerald-500/30 text-emerald-400 shadow-[0_4px_20px_rgba(16,185,129,0.15)]' },
];

const DiscoverSection = () => {
  const [bgImage, setBgImage] = useState(DEFAULT_ITEM_IMAGE);

  // Reusable component for each grid item to keep the code DRY
  const GridItem = ({ item }: { item: typeof discoverItems[0] }) => {
    const isActive = bgImage === item.image;
    return (
      <div
        onMouseEnter={() => item.image && setBgImage(item.image)}
        onMouseLeave={() => setBgImage(DEFAULT_ITEM_IMAGE)}
        className={`
          flex items-center justify-center h-32 md:h-40 cursor-pointer transition-all duration-300 border
          group relative ${isActive ? item.activeColor : item.baseColor} hover:${item.activeColor}
          backdrop-blur-md transform hover:scale-[1.02] hover:-translate-y-0.5 z-20
        `}
      >
        <div className="text-center p-2">
          <span className="text-lg md:text-xl font-semibold transition-colors duration-300">{item.name}</span>
          <Link href={item.link} className={`absolute bottom-3 right-3 w-7 h-7 md:w-8 md:h-8 border border-current rounded-full flex items-center justify-center
                          transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'}`}>
            →
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        key={bgImage}
        src={bgImage}
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        className="z-0 transition-opacity duration-700 ease-in-out"
        quality={100}
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-4 md:p-8">

        {/* Header Section */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <span className="block w-12 h-1 bg-blue-200 mb-2"></span>
              <p className="text-base md:text-lg font-semibold tracking-wider text-blue-200 uppercase">Our Event Categories</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              All types of{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">events</span> covered.
            </h1>
          </div>
          <div className="w-full md:w-2/5 mt-6 md:mt-2">
            <p className="text-base md:text-lg text-gray-200">
              Our expertise spans across events like weddings, corporate gatherings, music concerts, comedy shows, themed parties, and stage performances.
            </p>
          </div>
        </div>

        {/* Grid Container with two rows */}
        <div className="w-full max-w-6xl hidden lg:block">
          {/* Top Row: 3 items */}
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {discoverItems.slice(0, 3).map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
          {/* Bottom Row: 4 items */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {discoverItems.slice(3, 7).map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
        </div>
        {/* For Small Device */}
        <div className="w-full max-w-6xl block lg:hidden">
          {/* Top Row: 3 items */}
          <div className="grid grid-cols-2">
            {discoverItems.map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
