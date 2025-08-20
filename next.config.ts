import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  images: {
    domains: ["images.unsplash.com","randomuser.me", "ik.imagekit.io","source.unsplash.com","picsum.photos"], // 👈 Add this
  },
};

export default nextConfig;
