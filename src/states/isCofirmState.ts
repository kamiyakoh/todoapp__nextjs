import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { recoilKey } from './recoilKey';

const { persistAtom } = recoilPersist();

export const isComfirmState = atom<boolean>({
  key: recoilKey.isComfirmState,
  default: false,
  effects_UNSTABLE: [persistAtom],
});
