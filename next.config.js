/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    protocol: 'https',
    domains: ['data.si', 'www.indiafilings.com', 'm-cdn.phonearena.com', 'media.zenfs.com']
  }
}

module.exports = nextConfig
