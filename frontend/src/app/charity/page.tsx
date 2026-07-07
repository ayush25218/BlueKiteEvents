import Image from "next/image";
import Link from "next/link";

const breadcrumbSideBg = "/images/charityBanner.webp";
const leftSideImage = "/images/charity.jpg";
const images = [
  "/images/charity/6892.webp",
  "/images/charity/aql5q7fwsher4ejivavx.webp",
  "/images/charity/asdkjsdkjdn565sdjkksdfsdf.webp",
  "/images/charity/e79y41fwujzelr5zesjx.webp",
];

export default function CharityPage() {
  return (
    <main className="relative w-full">
      {/* Breadcrumb section */}
      <section
        className="relative w-full sm:h-[400px] flex items-end overflow-hidden mb-10"
        style={{
          backgroundImage: "url('/images/charityBanner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl w-full mx-auto pt-24 sm:pt-20 px-6 pb-2 sm:pb-12 text-white flex flex-col lg:flex-row justify-between items-start lg:items-end gap-2 sm:gap-12">
          {/* Left Side Text */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-6xl font-semibold sm:mb-4">
              Bluekite Community Initiative
            </h1>
            <h2 className="sm:text-4xl font-medium mb-4">Empowering Local Artists & Communities</h2>
            <nav
              className="text-[11px] sm:text-sm sm:font-semibold flex items-center gap-2 opacity-80 text-white"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span aria-current="page">Community</span>
            </nav>
          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-48 max-w-lg lg:w-[450px] lg:h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white/50 flex-shrink-0">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={breadcrumbSideBg}
                alt="Empowering Local Artists"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Left image and right content side by side */}
      <section className="max-w-8xl mx-auto px-4 sm:px-16 lg:px-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side Image - Sticky */}
        <div className="w-full h-[550px] sm:h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative sm:sticky top-0 sm:top-24">
          <Image
            src={leftSideImage}
            alt="Empowering Local Artists"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side Content - Scrollable with page scroll */}
        <div className="max-w-xl text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            Bluekite Community Initiative is the philanthropic arm of Bluekite Events Pro, dedicated to supporting local talent, promoting art and culture, and helping underprivileged children discover the joy of music, theatre, and dance.
          </p>

          <p className="mb-8">
            We believe that events have the power to bring people together and build a better society. Our initiatives focus on:
          </p>

          <ol className="list-decimal ml-6 space-y-6">
            <li>
              <strong>Supporting Underprivileged Artists:</strong> Providing free training, stage opportunities, and financial grants to talented local artists who lack resources.
            </li>
            <li>
              <strong>Art & Music Education:</strong> Sponsoring music, dance, and theatre workshops in community centers and government schools to nurture young minds.
            </li>
            <li>
              <strong>Inclusive Cultural Events:</strong> Organizing free community festivals and cultural shows to celebrate unity and diversity.
            </li>
          </ol>
        </div>
      </section>

      {/* Image gallery, Commitment, and Sponsors sections */}
      <div className="max-w-8xl mx-auto px-4 sm:px-16 lg:px-16 mb-20">
        {/* Image gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 aspect-[4/3]"
            >
              <Image
                src={src}
                alt={`Community initiative ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <section className="max-w-5xl mx-auto text-center px-4 mt-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Investing in Art, Culture & Hope
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg px-4">
            At Bluekite Events Pro, we believe that the soul of any community lies in its art and culture. Through our community initiative, we bring resources, mentors, and stages to those who need them most.
          </p>

          <p className="text-gray-700 mb-14 leading-relaxed text-lg px-4">
            By sponsoring local talent and educational art workshops, we aim to build a platform for long-term cultural enrichment and creative growth.
          </p>

          <blockquote className="border-l-4 border-blue-700 pl-6 italic text-gray-800 text-xl max-w-3xl mx-auto">
            “Together, we create stages for dreams to fly and communities to thrive.”
            <br />
            <span className="font-semibold block mt-3 text-lg">
              - Bluekite Community Initiative
            </span>
          </blockquote>
        </section>
      </div>
    </main>
  );
}
