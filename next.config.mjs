/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "night-club-api.onrender.com",
      },
    ],
  },
};

export default nextConfig;
