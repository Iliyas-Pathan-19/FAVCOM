import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'img5a.flixcart.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'img6a.flixcart.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'static02.digital.flipkart.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'static03.digital.flipkart.com', port: '', pathname: '/**' },
      { protocol: 'http', hostname: 'img5a.flixcart.com', port: '', pathname: '/**' },
      { protocol: 'http', hostname: 'img6a.flixcart.com', port: '', pathname: '/**' },
      { protocol: 'http', hostname: 'static02.digital.flipkart.com', port: '', pathname: '/**' },
      { protocol: 'http', hostname: 'static03.digital.flipkart.com', port: '', pathname: '/**' },
    ],
  },
};

export default nextConfig;
