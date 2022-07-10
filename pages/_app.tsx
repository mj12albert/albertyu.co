import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'assets/theme';
import GlobalStyles from 'components/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
