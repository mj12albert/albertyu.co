import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const environment = process.env.APP_ENV || 'localhost';

  const response =
    environment === 'production'
      ? `
    User-agent: *
    Disallow: /resume

    User-agent: *
    Allow: /
  `
      : `
    User-agent: *
    Disallow: /
  `;

  res.status(200).send(response);
}
