/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["localhost", "tailwindui.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
