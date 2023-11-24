/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { FC } from 'react';

import Activeboard from '@/components/projects/ActiveBoard';
import NaviBoard from '@/components/projects/NaviBoard';
import Trash from '@/components/projects/Trash';
import Container from '@/components/uiParts/Container';
import Wrapper from '@/components/uiParts/Wrapper';
import { useActive } from '@/hooks/useActive';
import { useTrashActive } from '@/hooks/useTrashActive';
import { fs3, bgLightYellow, sec } from '@/styles/const';

const ActiveInner: FC = () => {
  const { active, setNewActive } = useActive();
  const { trashActive, setNewTrashActive } = useTrashActive();

  return (
    <div css={[sec, bgLightYellow]}>
      <Trash isActive distArr={active} setDist={setNewActive} trashArr={trashActive} setTrash={setNewTrashActive} />
      <Container isSingle={false}>
        <h2 css={fs3}>進行中： {active.length}件</h2>
        <Wrapper>
          {active.length < 1 && <NaviBoard onPage="active" />}
          {active.map((obj) => (
            <Activeboard key={obj.id} boardId={obj.id} />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};
export default ActiveInner;
