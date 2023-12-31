import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/components/projects/Layout';

// dynamic importしないとサーバーサイドで読み込まれてエラーとなってしまうため
const ActiveInner = dynamic(async () => await import('@/components/pageInner/ActiveInner'), {
  ssr: false,
});

const Active: NextPage = () => {
  return (
    <Layout>
      <ActiveInner />
    </Layout>
  );
};
export default Active;
