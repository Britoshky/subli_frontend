import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lmlxnkolpekzdikbchdk.supabase.co",
        pathname: "/storage/v1/object/public/productos-subli/**",
      },
    ],
  },
};

export default nextConfig;
