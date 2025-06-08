import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: "50mb", // o el tamaño que necesites, como "50mb"
    },
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
