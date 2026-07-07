import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientLoader from "./components/ClientLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontend-pearl-six-1n89aq3m9j.vercel.app"),
  title: "Best Event Management Company in India | Bluekite Events Pro",
  description: "Bluekite Events Pro is the top event management company in India. We specialize in luxury wedding planning, corporate events, live concerts, stage shows, celebrity management, and experiential brand activations across India.",
  keywords: [
    "event management company in India",
    "best event planners in India",
    "top event organizers Delhi",
    "corporate event management companies",
    "luxury wedding planners India",
    "live concert production agency",
    "celebrity management services India",
    "brand activation agencies India",
    "exhibition designers Delhi NCR",
    "Bluekite Events Pro",
    "best event management agency",
    "wedding management services",
    "sports event organizers India",
    "fashion show management Delhi"
  ],
  icons: {
    icon: '/images/bke_logo_cropped.png',
  },
  openGraph: {
    title: "Best Event Management Company in India | Bluekite Events Pro",
    description: "Bluekite Events Pro is the top event management company in India. We plan corporate events, luxury weddings, live concerts, and experiential brand activations.",
    url: "https://frontend-pearl-six-1n89aq3m9j.vercel.app",
    siteName: "Bluekite Events Pro",
    images: [
      {
        url: "/images/about/Team.jpg",
        width: 1200,
        height: 630,
        alt: "Bluekite Events Pro Team",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Event Management Company in India | Bluekite Events Pro",
    description: "Top event management company in India offering corporate event management, luxury wedding planning, and concert production.",
    images: ["/images/about/Team.jpg"],
  },
  alternates: {
    canonical: "https://frontend-pearl-six-1n89aq3m9j.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Bluekite Events Pro",
    "image": "https://frontend-pearl-six-1n89aq3m9j.vercel.app/images/bke_logo_cropped.png",
    "@id": "https://frontend-pearl-six-1n89aq3m9j.vercel.app",
    "url": "https://frontend-pearl-six-1n89aq3m9j.vercel.app",
    "telephone": "+919355510707",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dwarka",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5921,
      "longitude": 77.0460
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/bluekiteevents",
      "https://twitter.com/bluekiteevents",
      "https://www.linkedin.com/company/blue-kite-events-production-private-limited/",
      "https://www.instagram.com/bluekite_eventspro/"
    ],
    "priceRange": "$$$"
  };

  return (
    <html lang="en">
      <body className={`antialiased relative`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLoader>
          <Header />
          {children}
          <Footer />
        </ClientLoader>
      </body>
    </html>
  );
}
