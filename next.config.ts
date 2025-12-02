import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "motivated-advice-17027cdcc0.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
