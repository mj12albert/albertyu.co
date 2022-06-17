/** @type {import('next').NextConfig} */

const CSP_DIRECTIVES = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  script-src-elem 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data:;
`;

module.exports = {
  reactStrictMode: true,

  env: {
    IMAGE_TAG: process.env.IMAGE_TAG,
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
