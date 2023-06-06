import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { HeaderLayout } from 'components/layout';
import { Title } from 'components/common';
import ProjectList from 'components/Project';
import CreateButton from 'components/Button/CreateButton';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Title>회고록</Title>
      <ProjectList />
      <CreateButton/>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Page;
