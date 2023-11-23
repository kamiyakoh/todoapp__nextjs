import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { recoilKey } from './recoilKey';

import type { TodoData } from '../types';

const { persistAtom } = recoilPersist();

export const trashCompState = atom<TodoData[]>({
  key: recoilKey.trashCompState,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
