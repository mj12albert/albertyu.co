/** @type {import('next').NextConfig} */

const CSP_DIRECTIVES = `
  default-src 'self';
  script-src 'self';
  script-src-elem 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data:;
`

module.exports = {
  reactStrictMode: true,

  env: {
    IMAGE_TAG_V: process.env.IMAGE_TAG_V,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: CSP_DIRECTIVES.replace(/\s{2,}/g, ' ').trim()
          },
        ],
      }
    ]
  }
}
