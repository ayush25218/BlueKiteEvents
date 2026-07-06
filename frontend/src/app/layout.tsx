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
  title: "Bluekite Events Pro | Where Moments Become Memories",
  description: "Bluekite Events Pro — Weddings, Corporate Events, Music Concerts, Stage Shows, Comedy Shows, Themed Parties & more. We turn your vision into unforgettable experiences.",
  icons: {
    icon: '/images/bke_logo_cropped.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased relative`} suppressHydrationWarning>
        <ClientLoader>
          <Header />
          {children}
          <Footer />
        </ClientLoader>
      </body>
    </html>
  );
}
