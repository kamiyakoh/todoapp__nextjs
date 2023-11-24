/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import { FC, memo } from 'react';

import Board from '@/components/uiParts/Board';
import Button from '@/components/uiParts/Button';
import { useActiveBoard } from '@/hooks/useActiveBoard';

import { yellow, pink, blue, green, size2, textPink, textYellow, btn } from '../../styles/const';

/** @jsxRuntime classic */
/** @jsx jsx */

interface Props {
  boardId: number;
}

const Activeboard: FC<Props> = memo(({ boardId }) => {
  const { title, taskList, allChecked, onChange, trash, onSubmit } = useActiveBoard(boardId);

  return (
    <Board cssName={yellow}>
      <form
        css={boardInner}
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div>
          <input type="hidden" name="title" value={title} />
          <h3 css={textYellow}>{title}</h3>
          {taskList.map((task) => (
            <div key={task.taskNum}>
              <input
                type="checkbox"
                id={`${task.taskNum}`}
                name="tasks"
                value={task.value}
                checked={task.checked}
                onChange={(e) => {
                  onChange(e, task.taskNum);
                }}
              />
              <span css={task.checked ? [isChecked, textPink] : ''}>{task.value}</span>
            </div>
          ))}
        </div>
        <div css={btnArea}>
          <Link href={`/active/${boardId} `} css={[btn, green, size2]}>
            編集
          </Link>
          <div>
            {allChecked && (
              <Button isSubmit cssName={[pink, size2]}>
                完了
              </Button>
            )}
            <Button
              isSubmit={false}
              cssName={[
                blue,
                size2,
                css`
                  margin-left: 16px;
                `,
              ]}
              onClick={trash}
            >
              削除
            </Button>
          </div>
        </div>
      </form>
    </Board>
  );
});
export default Activeboard;

const boardInner = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  height: 100%;
`;
const isChecked = css`
  text-decoration: line-through;
`;
const btnArea = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
