import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'slelguoygbfzlpylpxfs.supabase.co', pathname: '/**' },
      { protocol: 'https', hostname: 'relayer.theaanurag.xyz', pathname: '/**' },
      { protocol: 'https', hostname:'uptime.theaanurag.xyz', pathname: '/**' },
      { protocol: 'https', hostname:'avatars.githubusercontent.com', pathname: '/**' },

      // Add example.com to remotePatterns
    ],
  },
  /* other config options */
};

export default nextConfig;