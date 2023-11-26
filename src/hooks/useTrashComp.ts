import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { trashCompState } from '../states/trashCompState';

import type { TodoData } from '../types';

interface UseTrashComp {
  trashComp: TodoData[];
  setNewTrashComp: (newTrashComp: TodoData[]) => void;
}

export const useTrashComp = (): UseTrashComp => {
  const [trashComp, setTrashComp] = useRecoilState(trashCompState);
  const setNewTrashComp = useCallback(
    (newTrashComp: TodoData[]) => {
      setTrashComp(newTrashComp);
    },
    [setTrashComp],
  );

  return { trashComp, setNewTrashComp };
};
