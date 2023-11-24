import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { trashActiveState } from '../states/trashActiveState';

import type { TodoData } from '../types';

interface UseTrashActive {
  trashActive: TodoData[];
  setNewTrashActive: (newTrashActive: TodoData[]) => void;
}

export const useTrashActive = (): UseTrashActive => {
  const [trashActive, setTrashActive] = useRecoilState(trashActiveState);
  const setNewTrashActive = useCallback(
    (newTrashActive: TodoData[]) => {
      setTrashActive(newTrashActive);
    },
    [setTrashActive],
  );

  return { trashActive, setNewTrashActive };
};
