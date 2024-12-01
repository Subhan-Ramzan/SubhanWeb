/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true, 
  },
  images: {
    domains: ["th.bing.com", "c10.patreonusercontent.com"], 
    unoptimized: true, 
  },
  webpack: (config) => {
    config.resolve.alias["content"] = path.join(__dirname, "content"); /
    return config;
  },
};

export default nextConfig;
