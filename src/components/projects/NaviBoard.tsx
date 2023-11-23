/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import { FC } from 'react';

import { useActive } from '@/hooks/useActive';
import { useComp } from '@/hooks/useComp';

import { mq, blue, pink, yellow } from '../../styles/const';
import Board from '../uiParts/Board';
import Button from '../uiParts/Button';

/** @jsxRuntime classic */
/** @jsx jsx */

interface Props {
  onPage: 'active' | 'comp' | 'home';
}

const NaviBoard: FC<Props> = ({ onPage }) => {
  const { active } = useActive();
  const { comp } = useComp();

  return (
    <Board cssName={[flexbox, onPage === 'active' ? pink : onPage === 'comp' ? yellow : blue]}>
      {onPage === 'home' || (
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
      )}
      {onPage === 'active' || (
        <Link href="/active">
          <Button isSubmit={false} cssName={[yellow, sizeResp]}>
            進行中 {active.length}
          </Button>
        </Link>
      )}
      {onPage === 'comp' || (
        <Link href="/comp">
          <Button isSubmit={false} cssName={[pink, sizeResp]}>
            完了済 {comp.length}
          </Button>
        </Link>
      )}
    </Board>
  );
};

const flexbox = css`
  display: flex;
  justify-content: space-around;
  ${mq('tab')} {
    justify-content: space-evenly;
  }
  ${mq('pc')} {
    width: 100%;
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
export default NaviBoard;
