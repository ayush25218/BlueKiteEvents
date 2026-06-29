import Link from 'next/link';
import Image from 'next/image';
import { 
  Briefcase, Heart, Building, Gem, ShoppingCart, TrendingUp, 
  Users, Linkedin, Instagram, ChevronRight 
} from 'lucide-react';

// Custom component for the 'X' icon (formerly Twitter)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

// --- Hero Section with Gradient and Breadcrumbs ---
const HeroSection = () => {
  return (
    <div className="relative w-full h-[350px] bg-gradient-to-br from-[#176299] to-[#143d5e] text-white p-8 flex flex-col justify-end shadow-2xl">
      <div className="max-w-screen-xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Our Leadership</h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-6">Architects of Change, Shaping the Future of Global Enterprise</p>
        
        {/* Breadcrumbs at the bottom of the hero */}
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li aria-current="page">
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li aria-current="page">
              <span className="text-sm font-medium text-white">
                Deepak Poddar
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};


const DeepakPoddarProfilePage = () => {
  // IMPORTANT: Replace with the actual path to your image in the /public directory
  const profileImageUrl = '/images/deepakpoddar.png';

  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* --- Full-width Hero Section at the top --- */}
      <HeroSection />

      {/* --- Main Content Container --- */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-5">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* --- Left Column: Image and Social Links --- */}
            <aside className="md:w-1/3 lg:w-2/5 p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="md:sticky md:top-8">
                <Image
                  src={profileImageUrl}
                  alt="Deepak Poddar"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Connect</h3>
                  <div className="flex items-center space-x-4">
                    <Link href="https://uk.linkedin.com/in/thedeepakpoddar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                      <Linkedin className="h-7 w-7" />
                    </Link>
                    {/* <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                      <XIcon className="h-6 w-6" />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                      <Instagram className="h-7 w-7" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </aside>

            {/* --- Right Column: Biography and Details --- */}
            <main className="md:w-2/3 lg:w-3/5 p-8 md:p-12">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  Deepak Poddar
                </h1>
                <p className="mt-3 text-base sm:text-2xl text-[#176299] font-semibold">
                  Founder & Chief Executive Officer, Poddar Group Ltd
                </p>
              </header>

              <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                <p>
                  Deepak Poddar is the Founder and CEO of <strong>Poddar Group Ltd</strong>, a diversified global enterprise with a focus on healthcare including pharmaceuticals, procurement, digital innovation, mining, real estate and ethical luxury. Mr Poddar is a result driven leader who has a proven track record of success in the care and health sectors by approaching all tasks with enthusiasm and dedication while maintaining a sensitive, tactful, and diplomatic approach to the many complex and confidential issues arising through the course of business.
                </p>

                <section className="mt-16">
                  <h2 className="text-base sm:text-3xl font-bold text-gray-900 border-b-2 border-blue-100 pb-4 mb-6 flex items-center">
                    <Building className="mr-4 text-[#176299] h-6 w-6 sm:h-8 sm:w-8" />
                    Key Ventures & Expansion
                  </h2>
                  <p>
                    Under his leadership, Poddar group and its group companies have opened global offices to supply hospitals, governments, foundations, and businesses across Europe, North America, Asia, Latin America, and Africa. As part of the group&apos;s expansion, he founded Pods Media, a digital powerhouse enabling D2C brands to scale using advanced media solutions, including 3D websites, marketing automation, and AI-driven strategy.
                  </p>
                  <p>
                    He also leads Pods Procura, a healthcare focused procurement and logistics company that supports hospitals and medical networks with efficient, cost-effective sourcing. Through Pods BXS, Mr. Poddar supports healthcare companies looking to expand globally, offering consulting in market entry, compliance, and operational excellence. Most recently, he launched 33 Carat, a bespoke luxury jewellery brand specialising in lab-grown diamonds, built on the foundation of sustainable craftsmanship and personalized storytelling.
                  </p>
                </section>
                
                <section className="mt-16">
                  <h2 className="text-base sm:text-3xl font-bold text-gray-900 border-b-2 border-blue-100 pb-4 mb-6 flex items-center">
                    <Users className="mr-4 text-[#176299] h-6 w-6 sm:h-8 sm:w-8" />
                    Career History
                  </h2>
                  <p>
                    Before starting Poddar Group in 2019, Mr. Poddar served Lambhill Court Ltd., a group of elderly care homes in Glasgow, for 13 years as the Operations and Managing Director. Earlier in his career, he became the Managing Director of Lotus Senior Living Ltd. in 2004 and founded Little Einsteins Kindergarten Ltd. in 2006. After relocating to Dubai in 2010, Mr. Poddar co-founded Health Call to provide state of the art health clinics in Dubai Healthcare City. Alongside his family, Mr. Poddar is also a key supporter of India&apos;s fastest growing FMCG company, Patanjali Ayurved Ltd.
                  </p>
                </section>

                <section className="mt-16">
                  <h2 className="text-base sm:text-3xl font-bold text-gray-900 border-b-2 border-blue-100 pb-4 mb-6 flex items-center">
                    <Heart className="mr-4 text-[#176299] h-6 w-6 sm:h-8 sm:w-8" />
                    Philanthropy
                  </h2>
                  <p>
                    Apart from his entrepreneurial ventures, Mr. Poddar is a trustee of Poddar Group Foundation, which provides equitable healthcare and medical supplies to people living in the SADC Region of Africa and empowers underprivileged children in India, respectively.
                  </p>
                </section>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepakPoddarProfilePage;
