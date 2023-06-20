/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  externalDir:
    true |
    {
      enabled: true,
      silent: true,
    },
};

module.exports = nextConfig;
