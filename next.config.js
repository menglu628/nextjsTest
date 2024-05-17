/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path",
        destination: "https://aigc.happyelements.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
