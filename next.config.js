/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
