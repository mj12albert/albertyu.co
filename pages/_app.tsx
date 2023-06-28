import { AppProps } from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'assets/theme';
import { NextPageWithLayout } from 'components/Layout';
import GlobalStyles from 'components/GlobalStyles';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeUIProvider theme={theme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeUIProvider>
  );
}

export default App;
