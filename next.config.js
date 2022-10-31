/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/api/.well-known/_deep-link-ios",
      },
      {
        source: "/.well-known/assetlinks.json",
        destination: "/api/.well-known/_deep-link-android",
      },
      {
        source: "/.well-known/acme-challenge/qG6aJ1MBp3FnviWGVLkwcBJBziVa4_WI6TXZoOfSeVs",
        destination: "/api/.well-known/dynamic-link-provisioning"
      },
      {
        source: "/.well-known/pki-validation/5D3684D360C9596099D19C98DC393634.txt",
        destination: "/api/.well-known/ssl-provisioning"
      }
    ];
  },
};

module.exports = nextConfig;
