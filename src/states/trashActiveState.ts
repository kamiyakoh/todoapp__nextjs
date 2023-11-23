import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { recoilKey } from './recoilKey';

import type { TodoData } from '../types';

const { persistAtom } = recoilPersist();

export const trashActiveState = atom<TodoData[]>({
  key: recoilKey.trashActiveState,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
