/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react';

import { mq } from '../../styles/const';

import type { SerializedStyles } from '@emotion/react';
import type { ReactNode, FC } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
interface Props {
  cssName?: SerializedStyles | SerializedStyles[];
  children: ReactNode;
}

const Board: FC<Props> = ({ cssName, children }) => {
  return <div css={[board, cssName]}>{children}</div>;
};
export default Board;

const board = css`
  position: relative;
  padding: 1em;
  width: 100%;
  background: #006633;
  color: #fff;
  border: 8px solid #b2771f;
  border-radius: 3px;
  box-shadow:
    0 0 5px #333,
    0 0 5px #555 inset;
  ${mq('pc')} {
    width: calc(50% - 1em);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
  }

  &:before {
    width: 20px;
    right: 10px;
    border: solid 3px var(--color, #6fd1ff);
    border-radius: 3px 2px 0 2px;
  }

  &:after {
    width: 15px;
    right: 45px;
    border: solid 3px #fff;
    border-radius: 8px 5px 2px 5px;
  }
`;
