import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/components/projects/Layout';

const Page404Inner = dynamic(async () => await import('@/components/pageInner/Page404Inner'), {
  ssr: false,
});

const Page404: NextPage = () => {
  return (
    <Layout>
      <Page404Inner />
    </Layout>
  );
};
export default Page404;
