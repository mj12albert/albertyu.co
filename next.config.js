/** @type {import('next').NextConfig} */

const CSP_DIRECTIVES = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  script-src-elem 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data:;
`;

module.exports = {
  reactStrictMode: true,

  env: {
    IMAGE_TAG: process.env.IMAGE_TAG,
    APP_ENV: process.env.APP_ENV,
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: CSP_DIRECTIVES.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },

  webpack: (config) => {
    const rules = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );

    rules.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },

  poweredByHeader: false,
};
