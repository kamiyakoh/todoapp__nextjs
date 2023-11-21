/** @jsxImportSource @emotion/react */
/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';

import Layout from '@/components/projects/Layout';

import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import Board from '@/components/uiParts/Board';
import Button from '@/components/uiParts/Button';
import Container from '@/components/uiParts/Container';
import { useActive } from '@/hooks/useActive';
import { useComp } from '@/hooks/useComp';
import { useCustomForm } from '@/hooks/useCustomForm';
import {
  mq,
  pink,
  blue,
  yellow,
  size3,
  textOrange,
  dInline,
  dNone,
  fs3,
  fwBold,
  sec,
  singleBoard,
  form,
} from '@/styles/const';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { active } = useActive();
  const { comp } = useComp();
  const {
    register,
    handleSubmit,
    fields,
    isError,
    onSubmit,
    isInline,
    taskCount,
    addTask,
    reduceTask,
    startComposition,
    endComposition,
    onKeydownTitle,
    onKeydown,
  } = useCustomForm();

  return (
    <div>
      <Head>
        <title>Create New Board</title>
      </Head>
      <Layout>
        <div css={sec}>
          <Container isSingle>
            <h2 css={fs3}>作成</h2>
            <p>することを1つ以上は必ず入力してください</p>
            <Board cssName={[singleBoard, yellow, counter]}>
              <Link href="./active">
                <Button isSubmit={false} cssName={[yellow, sizeResp]}>
                  進行中 {active.length}
                </Button>
              </Link>
              <Link href="./comp">
                <Button isSubmit={false} cssName={[pink, sizeResp]}>
                  完了済 {comp.length}
                </Button>
              </Link>
            </Board>
            <Board cssName={singleBoard}>
              <form css={form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="newTitle">
                    <span css={fwBold}>タイトル</span>
                    <br />
                    <input
                      {...register('title')}
                      onCompositionStart={startComposition}
                      onCompositionEnd={endComposition}
                      onKeyDown={(e) => {
                        onKeydownTitle(e);
                      }}
                    />
                    <br />
                  </label>
                  <label htmlFor="tasks">
                    <span css={fwBold}>すること</span>
                    <br />
                    <span css={[isError ? dInline : dNone, fwBold, textOrange]}>
                      することを1つ以上は必ず入力してください
                    </span>
                    <div id="taskInputs">
                      {fields.map((field, index) => (
                        <input
                          key={field.id}
                          {...register(`tasks.${index}.value`)}
                          onCompositionStart={startComposition}
                          onCompositionEnd={endComposition}
                          onKeyDown={(e) => {
                            onKeydown(e, index);
                          }}
                        />
                      ))}
                    </div>
                  </label>
                  <Button isSubmit={false} cssName={pink} onClick={addTask}>
                    追加する
                  </Button>
                  <Button
                    isSubmit={false}
                    btnId="btnReduce"
                    cssName={[
                      isInline ? dInline : dNone,
                      blue,
                      css`
                        margin-left: 24px;
                      `,
                    ]}
                    onClick={() => {
                      reduceTask(taskCount);
                    }}
                  >
                    枠を減らす
                  </Button>
                </div>
                <Button
                  isSubmit
                  cssName={[
                    yellow,
                    size3,
                    css`
                      align-self: flex-end;
                    `,
                  ]}
                >
                  作成
                </Button>
              </form>
            </Board>
          </Container>
          <Toaster />
        </div>
      </Layout>
    </div>
  );
};
export default Home;

const counter = css`
  display: flex;
  justify-content: space-around;
  ${mq('tab')} {
    justify-content: space-evenly;
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
