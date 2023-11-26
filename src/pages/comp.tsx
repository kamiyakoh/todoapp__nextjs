/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/components/projects/Layout';

const CompInner = dynamic(async () => await import('@/components/pageInner/CompInner'), {
  ssr: false,
});

const Comp: NextPage = () => {
  return (
    <Layout>
      <CompInner />
    </Layout>
  );
};
export default Comp;
