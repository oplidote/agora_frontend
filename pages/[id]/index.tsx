import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { AppLayout, HeaderLayout } from 'components/layout';
import { Title } from 'components/common';
import ProjectList from 'components/Project';
import AddButton from 'components/Button/AddButton';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Title>List</Title>
      <ProjectList />
      <AddButton/>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Page;
