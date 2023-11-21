/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import type { jsx, SerializedStyles } from '@emotion/react';
import type { FC, ReactNode } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */

interface Props {
  cssName?: SerializedStyles | SerializedStyles[];
  isSingle: boolean;
  children: ReactNode;
}

const Container: FC<Props> = ({ cssName, isSingle, children }) => {
  return <div css={[container, cssName, isSingle ? single : multi]}>{children}</div>;
};
export default Container;

const container = css`
  width: 90%;
  margin: 0 auto;
`;
const single = css`
  max-width: 720px;
`;
const multi = css`
  max-width: 1280px;
`;
