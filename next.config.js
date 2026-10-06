const nextConfig = {
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
    remotePatterns: [process.env.IMAGE_DOMAIN].map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
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
};

export default nextConfig;
