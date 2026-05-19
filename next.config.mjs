/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "night-club-api.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
