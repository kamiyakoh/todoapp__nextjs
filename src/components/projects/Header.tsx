/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import { FC } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */

import { mq, yellow, pink } from '@/styles/const';

import Container from '../uiParts/Container';

const Header: FC = () => {
  return (
    <header css={header}>
      <Container isSingle={false}>
        <div css={headerFlex}>
          <h1 css={headerTtl}>
            すること
            <br css={headerBr} />
            リスト
          </h1>
          <nav>
            <div css={navUl}>
              <Link href="/" css={navLi}>
                作成
              </Link>
              <Link href="/active" css={[navLi, yellow]}>
                進行中
              </Link>
              <Link href="/comp" css={[navLi, pink]}>
                完了済
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default Header;

const header = css`
  position: fixed;
  background: #1fb068;
  color: #fff;
  width: 100%;
  height: 80px;
  padding: 16px 0;
  z-index: 10;
`;
const headerFlex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const headerTtl = css`
  font-size: 16px;
  text-align: center;
  ${mq('tab')} {
    font-size: revert;
  }
`;
const headerBr = css`
  display: block;
  ${mq('tab')} {
    display: none;
  }
`;
const navUl = css`
  display: flex;
`;
const navLi = css`
  color: var(--color, #fff);
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  border: solid 2px var(--color, #fff);
  margin-left: 8px;
  :visited {
    color: var(--color, #fff);
  }
`;
