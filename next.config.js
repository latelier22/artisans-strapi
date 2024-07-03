  /** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.react-photo-album.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "artisans.latelier22.fr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vps.latelier22.fr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
