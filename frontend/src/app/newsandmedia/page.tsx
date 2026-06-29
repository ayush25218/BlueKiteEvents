"use client";

import Image from 'next/image';
import { useState, FC } from 'react';

// Define a type for our image objects for better type safety
interface ImageType {
  src: string;
  alt: string;
}

// --- Define your image paths here ---
// Replace these with the actual paths to your images in the `public` folder
const featuredImage: string = "/images/news/jsdbfsjbfjd666sfsffsd.webp";
const galleryImages: ImageType[] = [
  { src: "/images/news/zimbabwe-hospital.jpeg", alt: "St. Paul’s Musami Hospital" },
  { src: "/images/news/jsdbfsjbfjd666sfsffsd.webp", alt: "St. Paul’s Musami Football Club" },
  { src: "/images/news/zimbabwe-community.jpeg", alt: "Community members in Zimbabwe" },
  { src: "/images/news/deepak-poddar.jpeg", alt: "Mr. Deepak Poddar speaking during the visit" },
];

const NewsAndMediaPage: FC = () => {
  // State to manage the currently selected image for the popup
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <div className="bg-slate-50">
      <main className="py-16 sm:py-24">
        {/* --- Page Header --- */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
            News & Media
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            The latest updates from the Poddar Group
          </p>
        </header>

        {/* --- News Article Container --- */}
        <article className="max-w-7xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200">
          {/* Article Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Poddar Group Launches &quot;Helping Hand Initiative&quot; to Support
              Healthcare and Sports in Zimbabwe
            </h2>
            <p className="mt-4 text-sm font-semibold text-slate-500">
              Harare, Zimbabwe | October 2, 2025
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={featuredImage}
              alt="Poddar Group's Helping Hand Initiative in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body - Styled with Tailwind Typography */}
          <div className="prose prose-lg max-w-none text-slate-700">
            <p>
              The Poddar Group is proud to announce the official launch of the
              Helping Hand Initiative, a new effort aimed at empowering
              communities through direct support to both St. Paul’s Musami
              Football Club and St. Paul’s Musami Hospital.
            </p>
            <p>
              This initiative marks a significant step in Poddar Group’s
              commitment to fostering independent advocacy and sustainable
              development in Zimbabwe. Through direct financial assistance, the
              Helping Hand Initiative will provide vital resources to advance
              both community healthcare and youth development through sports.
            </p>
            <p>
              Speaking during the visit, Mr. Deepak Poddar, CEO of Poddar Group,
              expressed the organization&apos;s dedication to meaningful change:
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-6 text-xl italic text-slate-800 bg-blue-50 py-4 my-8">
              &quot;Our support for these organizations is part of a broader vision
              to uplift grassroots efforts that are making a real difference.
              The One Voice Initiative is a testament to our trust in the
              strength and potential of local communities. It aims to amplify
              their impact in both healthcare and community development.&quot;
            </blockquote>
            <p>
              The initiative is an extension of Poddar Group’s long-standing
              partnerships with government organizations and its ongoing
              mission to improve healthcare infrastructure and access for
              underserved populations.
            </p>
            <p>
              As part of this program, the Group has committed financial
              contributions to further support medical services at St. Paul’s
              Musami Hospital and developmental opportunities for local youth
              through the football club.
            </p>
            <p>
              This new chapter reaffirms Poddar Group’s belief in
              community-led progress and its vision of a healthier, more
              empowered Zimbabwe.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-3">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* --- Image Popup Modal --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-4xl bg-black/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/50 transition-colors"
              aria-label="Close image view"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAndMediaPage;
