/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'painel.ntbatista.dev',
      },
    ],
  },
}

module.exports = nextConfig
