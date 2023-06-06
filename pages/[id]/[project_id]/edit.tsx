import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../_app';
import { HeaderLayout } from 'components/layout';
import { Title } from 'components/common';
import CreateForm from 'components/create';
import { useRouter } from 'next/router';

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { project_id } = router.query;
  return (
    <>
      <Title>회고 수정하기</Title>
      <CreateForm project_id={project_id as string} />
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Page;
