/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  output: "export",
  experimental: {
    images: true, // Habilitar la característica experimental "images"
  },
};

module.exports = nextConfig;
