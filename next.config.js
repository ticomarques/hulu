/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "logo.wine",
    ]
  }
}

module.exports = nextConfig
