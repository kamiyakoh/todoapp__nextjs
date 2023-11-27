import { AppProps } from 'next/app';

import AppProviders from '../components/provider/AppProviders';

import '@/styles/globals.css';
import type { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
};

export default App;
