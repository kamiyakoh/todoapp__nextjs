/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC, memo } from 'react';

import Board from '@/components/uiParts/Board';
import Button from '@/components/uiParts/Button';
import { useCompBoard } from '@/hooks/useCompBoard';
import { mq, pink, blue, size2, textPink } from '@/styles/const';

interface Props {
  boardId: number;
}

const Compboard: FC<Props> = memo(({ boardId }) => {
  const { board, trash } = useCompBoard(boardId);

  return (
    <Board cssName={pink}>
      <div css={boardInner}>
        <div>
          <h3>{board.title}</h3>
          <ul>
            {board.tasks.map((task) => (
              <li key={task.taskNum} css={textPink}>
                {task.value}
              </li>
            ))}
          </ul>
        </div>
        <div css={btnArea}>
          <Button isSubmit={false} cssName={[blue, size2]} onClick={trash}>
            削除
          </Button>
        </div>
      </div>
    </Board>
  );
});
export default Compboard;

const boardInner = css`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  gap: 24px;
  height: 100%;
  ${mq('tab')} {
    grid-template-rows: initial;
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }
`;
const btnArea = css`
  display: flex;
  justify-content: flex-end;
  ${mq('tab')} {
    justify-content: initial;
    align-self: flex-end;
    gap: 16px;
  }
`;
