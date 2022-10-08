/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        source: "/.well-known/acme-challenge/cXiAlsNLdGuZmdjRWEl0eYTz0LHtrKxC1ZpYtb8C5Mg",
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
