import Image from "next/image";
import Link from "next/link";

const breadcrumbBg = "/images/charity/6892.webp";
const breadcrumbSideBg = "/images/charity/jsdbfsjbfjd666sfsffsd.webp";
const leftSideImage = "/images/charity/aql5q7fwsher4ejivavx.webp";
const images = [
  "/images/charity/asdkjsdkjdn565sdjkksdfsdf.webp",
  "/images/charity/e79y41fwujzelr5zesjx.webp",
  "/images/charity/jzi9yoacg669q39iwblv.webp",
  "/images/charity/ew9w3cork3sm5ecvulrx.webp",
];
const sponsorLogos = [
  { src: "/images/logos/StPaulsMusamiFootballClub.png", alt: "Sponsor 1" },
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
              Poddar Group Foundation
            </h1>
            <h2 className="sm:text-4xl font-medium mb-4">Empowering Africa&apos;s Future Together</h2>
            <nav
              className="text-[11px] sm:text-sm sm:font-semibold flex items-center gap-2 opacity-80 text-white"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span aria-current="page">Charity</span>
            </nav>
          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-48 max-w-lg lg:w-[450px] lg:h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white/50 flex-shrink-0">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={breadcrumbSideBg}
                alt="Empowering Africa"
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
            alt="Empowering Africa"
            fill
            // className="object-cover"
            priority
          />
        </div>

        {/* Right Side Content - Scrollable with page scroll */}
        <div className="max-w-xl text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            Poddar Group Foundation is the charitable foundation of Poddar Group
            Ltd., dedicated to supporting sustainable development and meaningful
            change for communities across Africa.
          </p>

          <p className="mb-8">
            Rooted in our shared vision to uplift lives, we focus on empowering
            African children, families, and communities through:
          </p>

          <ol className="list-decimal ml-6 space-y-6">
            <li>
              <strong>Improving Healthcare and Well-being:</strong> Supporting
              clinics, health education, maternal and child care programs, and
              preventive healthcare initiatives to enhance health outcomes and
              resilience.
            </li>
            <li>
              <strong>Access to Quality Education:</strong> Ensuring children
              and youth across Africa have the opportunity to attend school,
              access learning resources, and develop the skills to succeed.
            </li>
            <li>
              <strong>Fostering Social and Economic Growth:</strong> Partnering
              with local organizations to promote vocational training, community
              development projects, and inclusive programs.
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
                alt={`Charity initiative ${idx + 1}`}
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
            A United Commitment to Africa&apos;s Promise
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg px-4">
            As a conglomerate operating with deep respect for Africa&apos;s diversity
            and potential, Poddar Group Foundation brings together resources,
            expertise, and compassion to be a true partner in progress.
          </p>

          <p className="text-gray-700 mb-14 leading-relaxed text-lg px-4">
            We believe that by investing in education, health, and social
            growth, we are not only supporting immediate needs — but helping
            build a foundation for long-term prosperity and dignity for
            millions.
          </p>

          <blockquote className="border-l-4 border-blue-700 pl-6 italic text-gray-800 text-xl max-w-3xl mx-auto">
            “Together, we invest in hope, health, and opportunity for Africa&apos;s
            tomorrow.”
            <br />
            <span className="font-semibold block mt-3 text-lg">
              - Poddar Group Foundation
            </span>
          </blockquote>
        </section>

        {/* --- Sponsor Section Start --- */}
        <section className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Proud Sponsors of
          </h3>
          <p className="text-gray-600 mb-8">We are grateful for the support of our partners.</p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
            {/* grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 */}
            {sponsorLogos.map((logo, idx) => (
              <div
                key={idx}
                className="relative w-80 h-52"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>
        {/* --- Sponsor Section End --- */}
      </div>
    </main>
  );
}
