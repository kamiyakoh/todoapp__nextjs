import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { activeState } from '../states/activeState';

import type { TodoData } from '../types';

interface UseActive {
  active: TodoData[];
  setNewActive: (newActive: TodoData[]) => void;
  delActive: (id: number) => void;
}

export const useActive = (): UseActive => {
  const [active, setActive] = useRecoilState(activeState);
  const setNewActive = useCallback(
    (newActive: TodoData[]) => {
      setActive(newActive);
    },
    [setActive],
  );
  const delActive = useCallback(
    (id: number) => {
      const filteredActive = active.filter((item) => item !== active[id]);
      const fixedIdActive = filteredActive.map((item, index) => ({
        ...item,
        id: index,
      }));
      setNewActive(fixedIdActive);
    },
    [active, setNewActive],
  );

  return { active, setNewActive, delActive };
};
