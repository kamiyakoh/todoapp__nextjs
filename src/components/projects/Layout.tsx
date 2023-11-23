/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

import Header from './Header';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>To Do App</title>
        <meta name="description" content="BlackBord style To Do app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        css={css`
          padding-top: 80px;
        `}
      >
        {children}
      </main>
    </div>
  );
};
export default Layout;
