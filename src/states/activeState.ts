import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { recoilKey } from './recoilKey';

import type { TodoData } from '../types';

const { persistAtom } = recoilPersist();

export const activeState = atom<TodoData[]>({
  key: recoilKey.activeState,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
