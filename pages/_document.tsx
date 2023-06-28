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
      </Head>
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
