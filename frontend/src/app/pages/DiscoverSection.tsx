"use client";

import { useState } from 'react';
import Image from 'next/image';

const DEFAULT_ITEM_IMAGE = '/images/real-estate.jpg';

const discoverItems = [
  { name: 'Real Estate', image: '/images/real-estate.jpg', baseColor: 'bg-blue-700/70', activeColor: 'bg-blue-500/90' },
  { name: 'Health Care', image: '/images/market_presence/abpeg7iuabim74jczorn.webp', baseColor: 'bg-teal-700/70', activeColor: 'bg-teal-500/90' },
  { name: 'Fashion', image: '/images/market_presence/cbezl88m12rxmhqxggsh.webp', baseColor: 'bg-pink-700/70', activeColor: 'bg-pink-500/90' },
  { name: 'Hospitality', image: '/images/market_presence/myqi8mefixvqx842vt5p.webp', baseColor: 'bg-indigo-700/70', activeColor: 'bg-indigo-500/90' },
  { name: 'Manufacturing', image: '/images/market_presence/ywz9cyvinachnlaxcpgw.webp', baseColor: 'bg-gray-700/70', activeColor: 'bg-gray-500/90' },
  { name: 'Management', image: '/images/market_presence/iechuhh6phsvuzgyuydg.webp', baseColor: 'bg-green-700/70', activeColor: 'bg-green-500/90' },
  { name: 'Mining', image: '/images/market_presence/gkreccclkfhhltmhzzqd.webp', baseColor: 'bg-yellow-700/70', activeColor: 'bg-yellow-500/90' },
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
          <div className={`absolute bottom-3 right-3 w-7 h-7 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center text-white
                            transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            →
          </div>
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
              <p className="text-base md:text-lg font-semibold tracking-wider text-blue-200 uppercase">Market presence</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Versatile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900">industry</span> presence.
            </h1>
          </div>
          <div className="w-full md:w-2/5 mt-6 md:mt-2">
            <p className="text-base md:text-lg text-gray-200">
              Our expertise spans across sectors like online retail, management, mining, health care, fashion, hospitality and real estate.
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
