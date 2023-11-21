import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import { toastBoard } from '@/styles/const';

interface Props {
  children: ReactNode;
}

const AppProviders: FC<Props> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        {children}
        <Toaster toastOptions={{ className: '', style: toastBoard }} />
      </RecoilRoot>
    </>
  );
};
export default AppProviders;
