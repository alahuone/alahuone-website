module.exports = {
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source: '/terms-of-service',
        destination: '/terms-of-service/index.html',
      },
      {
        source: '/privacy-policy',
        destination: '/privacy-policy/index.html',
      }
    ]
  },
}