/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en-US',
        permanent: true,
      },
    ]
  },
}