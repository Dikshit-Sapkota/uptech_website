import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.uptechsolution.com.np",
        pathname: "/wp-content/uploads/**",
      },
    ],

  },
};

export default nextConfig;
