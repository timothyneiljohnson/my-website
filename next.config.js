const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
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
});
