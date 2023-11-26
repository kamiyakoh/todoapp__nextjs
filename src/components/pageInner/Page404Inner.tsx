/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { NextPage } from 'next';
/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';

import Board from '@/components/uiParts/Board';
import Button from '@/components/uiParts/Button';
import Container from '@/components/uiParts/Container';
import { useActive } from '@/hooks/useActive';
import { useComp } from '@/hooks/useComp';
import { mq, pink, yellow, fs3, fwBold, sec, singleBoard } from '@/styles/const';

const Page404Inner: NextPage = () => {
  const { active } = useActive();
  const { comp } = useComp();

  return (
    <div css={sec}>
      <Container isSingle>
        <h2 css={fs3}>404 ERROR</h2>
        <p
          css={[
            fwBold,
            css`
              font-size: 1.5rem;
            `,
          ]}
        >
          お探しのURLのページは見つかりませんでした
        </p>
        <Board cssName={[singleBoard, yellow, flexbox]}>
          <Link href="/">
            <Button
              isSubmit={false}
              cssName={[
                sizeResp,
                css`
                  --color: #fff;
                `,
              ]}
            >
              作成
            </Button>
          </Link>
          <Link href="/active">
            <Button isSubmit={false} cssName={[yellow, sizeResp]}>
              進行中 {active.length}
            </Button>
          </Link>
          <Link href="/comp">
            <Button isSubmit={false} cssName={[pink, sizeResp]}>
              完了済 {comp.length}
            </Button>
          </Link>
        </Board>
      </Container>
    </div>
  );
};
export default Page404Inner;

const flexbox = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  ${mq('tab')} {
    flex-direction: row;
    align-items: stretch;
    gap: 0;
  }
`;
const sizeResp = css`
  --size: 1.5;
  ${mq('tab')} {
    --size: 2;
  }
  ${mq('pc')} {
    --size: 3;
  }
`;
