import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
   images: {

    remotePatterns: [

      {

        protocol: "https",

        hostname: "uptechsolution.com.np",

        pathname: "/api/v1/backend/wp-content/uploads/**",

      },

    ],

  },
};

export default nextConfig;
