import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'assets/theme';
import { NextPageWithLayout } from 'components/Layout';
import GlobalStyles from 'components/GlobalStyles';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default App;
