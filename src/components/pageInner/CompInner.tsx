/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { NextPage } from 'next';

import Compboard from '@/components/projects/CompBoard';
import NaviBoard from '@/components/projects/NaviBoard';
import Trash from '@/components/projects/Trash';
import Container from '@/components/uiParts/Container';
import Wrapper from '@/components/uiParts/Wrapper';
import { useComp } from '@/hooks/useComp';
import { useTrashComp } from '@/hooks/useTrashComp';
import { bgLightPink, fs3, sec } from '@/styles/const';

const CompInner: NextPage = () => {
  const { comp, setNewComp } = useComp();
  const { trashComp, setNewTrashComp } = useTrashComp();

  return (
    <div css={[sec, bgLightPink]}>
      <Trash isActive={false} distArr={comp} setDist={setNewComp} trashArr={trashComp} setTrash={setNewTrashComp} />
      <Container isSingle={false}>
        <h2 css={fs3}>完了済： {comp.length}件</h2>
        <Wrapper>
          {comp.length < 1 && <NaviBoard onPage="comp" />}
          {comp.map((obj) => (
            <Compboard boardId={obj.id} key={obj.id} />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};
export default CompInner;
