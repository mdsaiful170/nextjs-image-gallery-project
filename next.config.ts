import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn-cm.freepik.com', 'images.unsplash.com','unsplash.com'], // অনুমোদিত ডোমেইনের তালিকা
  },
};

export default nextConfig;
