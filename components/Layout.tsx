import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Header from 'components/Header';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default Layout;
