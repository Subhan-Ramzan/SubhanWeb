/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['th.bing.com', 'c10.patreonusercontent.com'], // External domains for images
    unoptimized: true, // Disable image optimization for static export
  },
  // output: 'export', // Static export configuration
};

export default nextConfig;
