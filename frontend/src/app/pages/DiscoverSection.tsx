"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_ITEM_IMAGE = '/images/discover_wedding.jpg';

const discoverItems = [
  { name: 'Weddings', link: '/services/weddings', image: '/images/discover_wedding.jpg', baseColor: 'bg-blue-700/70', activeColor: 'bg-blue-500/90' },
  { name: 'Corporate Events', link: '/services/corporate-events', image: '/images/discover_corporate.jpg', baseColor: 'bg-teal-700/70', activeColor: 'bg-teal-500/90' },
  { name: 'Music Concerts', link: '/services/music-concerts', image: '/images/discover_concert.png', baseColor: 'bg-pink-700/70', activeColor: 'bg-pink-500/90' },
  { name: 'Comedy Shows', link: '/services/comedy-shows', image: '/images/discover_comedy.jpg', baseColor: 'bg-indigo-700/70', activeColor: 'bg-indigo-500/90' },
  { name: 'Social Celebrations', link: '/services/social-celebrations', image: '/images/discover_social.jpg', baseColor: 'bg-gray-700/70', activeColor: 'bg-gray-500/90' },
  { name: 'Themed Parties', link: '/services/themed-parties', image: '/images/fashion.jpg', baseColor: 'bg-green-700/70', activeColor: 'bg-green-500/90' },
  { name: 'Stage Shows', link: '/services/stage-shows', image: '/images/stage_show.jpg', baseColor: 'bg-yellow-700/70', activeColor: 'bg-yellow-500/90' },
];

const DiscoverSection = () => {
  const [bgImage, setBgImage] = useState(DEFAULT_ITEM_IMAGE);

  const GridItem = ({ item }: { item: typeof discoverItems[0] }) => {
    const isActive = bgImage === item.image;
    return (
      <div
        onMouseEnter={() => item.image && setBgImage(item.image)}
        onMouseLeave={() => setBgImage(DEFAULT_ITEM_IMAGE)}
        className={`
          flex items-center justify-center h-32 md:h-40 cursor-pointer transition-colors duration-300
          group relative ${isActive ? item.activeColor : item.baseColor} hover:${item.activeColor}
        `}
      >
        <div className="text-center p-2">
          <span className="text-lg md:text-xl font-semibold text-white">{item.name}</span>
          <Link
            href={item.link}
            className={`absolute bottom-3 right-3 w-7 h-7 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center text-white
                        transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'}`}
          >
            →
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full sm:h-screen text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        key={bgImage}
        src={bgImage}
        alt="Background"
        fill
        sizes="100vw"
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
              All types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">events</span> covered.
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
          <div className="grid grid-cols-3">
            {discoverItems.slice(0, 3).map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
          {/* Bottom Row: 4 items */}
          <div className="grid grid-cols-4">
            {discoverItems.slice(3, 7).map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
        </div>

        {/* For Small Devices */}
        <div className="w-full max-w-6xl block lg:hidden">
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
