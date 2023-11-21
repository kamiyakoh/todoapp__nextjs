import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { recoilKey } from './recoilKey';

import type { TodoData } from '../types';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

export const compState = atom<TodoData[]>({
  key: recoilKey.compState,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
