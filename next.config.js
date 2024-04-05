const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/journal',
        permanent: true
      },
      {
        source: '/blog/:path*',
        destination: '/article/:path*',
        permanent: true
      }
    ]
  },
});
