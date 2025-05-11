import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://pngimg.com/**'),
      new URL('https://filecache.mediaroom.com/**'),
    ],
  },
};

export default nextConfig;
