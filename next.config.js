/** @type {import('next').NextConfig} */
const nextConfig = {
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
