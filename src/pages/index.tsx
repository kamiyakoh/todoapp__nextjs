/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/projects/Layout';
import Board from '@/components/uiParts/Board';
import Button from '@/components/uiParts/Button';
import Container from '@/components/uiParts/Container';
import { useCustomForm } from '@/hooks/useCustomForm';
import {
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

/** @jsxRuntime classic */
/** @jsx jsx */

const NaviBoard = dynamic(async () => await import('@/components/projects/NaviBoard'), {
  ssr: false,
});

const Home: NextPage = () => {
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
            <NaviBoard onPage="home" />
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
