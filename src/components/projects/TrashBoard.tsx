/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react';
import { FC, memo } from 'react';

import Board from '@/components/uiParts/Board';
import Button from '@/components/uiParts/Button';
import { useTrashBoard } from '@/hooks/useTrashBoard';
import { mq, pink, blue, yellow, green, size2, textPink } from '@/styles/const';

import type { TodoData } from '../../types';

/** @jsxRuntime classic */
/** @jsx jsx */

interface Props {
  isActive: boolean;
  distArr: TodoData[];
  trashArr: TodoData[];
  boardId: number;
  setDist: (newDist: TodoData[]) => void;
  setTrash: (newTrash: TodoData[]) => void;
}

const TrashBoard: FC<Props> = memo(({ isActive, distArr, trashArr, boardId, setDist, setTrash }) => {
  const { board, title, onClickDel, takeOut } = useTrashBoard(distArr, trashArr, boardId, setDist, setTrash);

  return (
    <Board
      cssName={[
        css`
          width: 100%;
          ${mq('pc')} {
            width: 100%;
          }
        `,
        isActive ? yellow : pink,
      ]}
    >
      <div css={boardInner}>
        <div>
          <h3>{title}</h3>
          <ul>
            {board.tasks.map((task) => (
              <li key={task.taskNum} css={task.checked ? [textPink, isActive ? txtDecLT : ''] : ''}>
                {task.value}
              </li>
            ))}
          </ul>
        </div>
        <div css={btnArea}>
          <Button isSubmit={false} cssName={[size2, green]} onClick={takeOut}>
            戻す
          </Button>
          <Button isSubmit={false} cssName={[size2, blue]} onClick={onClickDel}>
            破棄
          </Button>
        </div>
      </div>
    </Board>
  );
});
export default TrashBoard;

const boardInner = css`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  gap: 24px;
  height: 100%;
  ${mq('tab')} {
    grid-template-rows: auto;
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }
`;
const btnArea = css`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  ${mq('tab')} {
    align-self: flex-end;
  }
`;
const txtDecLT = css`
  text-decoration: line-through;
`;
