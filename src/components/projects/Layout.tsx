/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Head from 'next/head';
import { FC, ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { useActive } from '@/hooks/useActive';
import { useComp } from '@/hooks/useComp';
import { useDemoData } from '@/hooks/useDemoData';
import { isComfirmState } from '@/states/isCofirmState';

import Header from './Header';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [isComfirm, setIsComfirm] = useRecoilState<boolean>(isComfirmState);
  const { active } = useActive();
  const { comp } = useComp();
  const { fetch } = useDemoData();

  useEffect(() => {
    if (isComfirm || active.length > 0 || comp.length > 0) return;
    if (window.confirm('初期データとして、インターネットからデモデータを挿入しますか？')) fetch();
    setIsComfirm(true);
  }, [active, comp, isComfirm, fetch, setIsComfirm]);
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
