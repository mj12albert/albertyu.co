import { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Albert Yu is web developer &amp; designer. Currently based in Hong Kong."
        />
        <link rel="me" href="https://hachyderm.io/@mj12albert" />
        <link rel="icon" href="/favicon.ico" />
        {process.env.APP_ENV === 'production' && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "380beea29e5c423eafe2ea068705d5d7"}'
          />
        )}
      </Head>
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
