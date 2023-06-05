import { ReactElement, useCallback, useState } from 'react';
import type { NextPageWithLayout } from '../../_app';
import { HeaderLayout } from 'components/layout';
import { Title } from 'components/common';
import CreateButton from 'components/Button/CreateButton';
import * as Detail from 'styles/detail.style'
import PostIt from 'components/Project/PostIt';

const Page: NextPageWithLayout = () => {
  const mock = {
    name: '프로젝트1',
    title: '주제1',
    type1: '보드1',
    type2: '보드2',
    type3: '보드3',
    post: [
      { id: 1, category: '보드1', writter: '장원석', content: '일해라 얘들아.. 왜 일을 안하니?' },
      { id: 2, category: '보드2', writter: '장원석', content: '제가 좋은 말로할 때 해주시죠~' },
      { id: 3, category: '보드2', writter: '장원석', content: '끝나고 회식 있습니다. 필참이구요.' },
      { id: 4, category: '보드3', writter: '장원석', content: '2차는 제가 사겠습니다.' },
    ],
  };
  const [dataIndex, setDataIndex] = useState<number | null>(null);
  const board1 = mock.post.filter((it) => it.category.includes(mock.type1));
  const board2 = mock.post.filter((it) => it.category.includes(mock.type2));
  const board3 = mock.post.filter((it) => it.category.includes(mock.type3));

  const board_JSX = useCallback(
    (board: any,num:number) => {
      const frame = board.map((item: any, i: number) => {
        return (
          <PostIt id={item.id}writter={item.writter} content={item.content} board_type={num}/>
        );
      });
      return frame;
    },
    [mock],
  );
  return (
    <>
      <Title>{mock.title}</Title>
      <Detail.Content>
        <Detail.BoardBox>
          <Detail.BoardTitle>{mock.type1}</Detail.BoardTitle>
          <Detail.Board>{board_JSX(board1,1)}</Detail.Board>
        </Detail.BoardBox>
        <Detail.BoardBox>
          <Detail.BoardTitle>{mock.type2}</Detail.BoardTitle>
          <Detail.Board>{board_JSX(board2,2)}</Detail.Board>
        </Detail.BoardBox>
        <Detail.BoardBox>
          <Detail.BoardTitle>{mock.type3}</Detail.BoardTitle>
          <Detail.Board>{board_JSX(board3,3)}</Detail.Board>
        </Detail.BoardBox>
      </Detail.Content>
      <CreateButton />
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout bg='#FAFAFA'>{page}</HeaderLayout>;
};

export default Page;
