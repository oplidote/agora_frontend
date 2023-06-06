import { ReactElement, useCallback, useEffect, useState } from 'react';
import type { NextPageWithLayout } from '../../_app';
import { HeaderLayout } from 'components/layout';
import { Title } from 'components/common';
import CreateButton from 'components/Button/CreateButton';
import * as Detail from 'styles/detail.style';
import PostIt from 'components/Project/PostIt';
import axios from 'axios';
import { useRouter } from 'next/router';
import CreateModal from 'components/Modal/CreateModal';
import CreatePostButton from 'components/Button/CreatePostButton';
interface PostType {
  id: number;
  category: string;
  writer: string;
  content: string;
  password: string;
}
interface DataType {
  postDtos: PostType[];
  projectDto: {
    createDt: string;
    id: number;
    name: string;
    title: string;
    type1: string;
    type2: string;
    type3: string;
    updateDt: string;
  };
}
const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = router.query;
  const { project_id } = router.query;
  const [projectData, setProjectData] = useState<DataType | null>(null);
  const [refresh, setRefresh] = useState(false);

  const refreshHandler = (isRefresh: boolean) => {
    setRefresh(isRefresh);
  };

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

  const getList = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/projects/${project_id}`);
      setProjectData(res.data);
    } catch {}
  };
  const board1 = projectData?.postDtos.filter((it) => it.category.includes(projectData.projectDto.type1));
  const board2 = projectData?.postDtos.filter((it) => it.category.includes(projectData.projectDto.type2));
  const board3 = projectData?.postDtos.filter((it) => it.category.includes(projectData.projectDto.type3));
  const board_JSX = useCallback((board: any, num: number) => {
    const frame = board.map((item: any, i: number) => {
      return <PostIt refreshHandler={refreshHandler} post_id={item.id} writter={item.writer} content={item.content} board_type={num} />;
    });
    return frame;
  }, []);
  useEffect(() => {
    refreshHandler(false);
    if (project_id) {
      getList();
    }
  }, [project_id, refresh]);
  return (
    <>
      {projectData && (
        <>
          <Title>{projectData.projectDto.title}</Title>
          <Detail.Content>
            <Detail.BoardBox>
              <Detail.BoardTitle>{projectData.projectDto.type1}</Detail.BoardTitle>
              {board1?.length != 0 ? (
                <Detail.Board>{board_JSX(board1, 1)}</Detail.Board>
              ) : (
                <Detail.EmptyBoard>등록된 포스트잇이 없습니다.</Detail.EmptyBoard>
              )}
            </Detail.BoardBox>
            <Detail.BoardBox>
              <Detail.BoardTitle>{projectData.projectDto.type2}</Detail.BoardTitle>
              {board2?.length != 0 ? (
                <Detail.Board>{board_JSX(board2, 2)}</Detail.Board>
              ) : (
                <Detail.EmptyBoard>등록된 포스트잇이 없습니다.</Detail.EmptyBoard>
              )}
            </Detail.BoardBox>
            <Detail.BoardBox>
              <Detail.BoardTitle>{projectData.projectDto.type3}</Detail.BoardTitle>
              {board3?.length != 0 ? (
                <Detail.Board>{board_JSX(board3, 3)}</Detail.Board>
              ) : (
                <Detail.EmptyBoard>등록된 포스트잇이 없습니다.</Detail.EmptyBoard>
              )}
            </Detail.BoardBox>
          </Detail.Content>
          <CreatePostButton setIsOpen={setIsOpen} />
          {isOpen ? (
            <CreateModal
              setIsOpen={setIsOpen}
              type_list={[projectData.projectDto.type1, projectData.projectDto.type2, projectData.projectDto.type3]}
              refreshHandler={refreshHandler}
            />
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout bg="#FAFAFA">{page}</HeaderLayout>;
};

export default Page;
