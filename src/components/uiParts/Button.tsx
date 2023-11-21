/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { btn } from '../../styles/const';

import type { SerializedStyles } from '@emotion/react';
import type { MouseEventHandler, ReactNode, FC } from 'react';

interface Props {
  isSubmit: boolean;
  btnId?: string;
  cssName?: SerializedStyles | SerializedStyles[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: FC<Props> = ({ isSubmit, btnId, cssName, onClick, children }) => {
  return (
    <button type={isSubmit ? 'submit' : 'button'} id={btnId} css={[btn, cssName]} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
