/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://idiem.github.io/reforms/"
      : "",
};

module.exports = nextConfig;
