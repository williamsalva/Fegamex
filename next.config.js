/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/molduras-decorativas/:itemId",
        destination: "/moldura/:itemId",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverComponentsExternalPackages: ["resend"],
  },
};

module.exports = nextConfig;
