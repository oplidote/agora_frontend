import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { AppLayout, HeaderLayout } from 'components/layout';
import { Title } from 'components/common';
import ProjectList from 'components/Project';
import AddButton from 'components/Button/CreateButton';
import CreateForm from 'components/create';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Title>회고 추가하기</Title>
      <CreateForm />
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Page;
