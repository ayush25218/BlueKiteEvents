import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    // Either allow specific remote patterns:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**", // or narrower: "/lucasfernandodev/spacetravel/**"
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**", // if any images come via github.com?raw=true
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: "",
        pathname: "/**", // for your Other ventures images
      },
    ],
  },
};

export default nextConfig;
