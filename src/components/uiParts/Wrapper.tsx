/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import type { SerializedStyles } from '@emotion/react';
import type { ReactNode, FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */

interface Props {
  cssName?: SerializedStyles | SerializedStyles[];
  children: ReactNode;
}

const Wrapper: FC<Props> = ({ cssName, children }) => {
  return <div css={[wrapper, cssName]}>{children}</div>;
};
export default Wrapper;

const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2em;
  padding: 2em 0;
`;
