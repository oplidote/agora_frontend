import AuthModal from 'components/Modal/AuthModal';
import DeleteModal from 'components/Modal/DeleteModal';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

interface EditButtonPropsType {
  project_id?: number;
  post_id?: number;
  refreshHandler: (isRefresh: boolean) => void;
}
const EditButton = ({ refreshHandler, post_id, project_id }: EditButtonPropsType) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  return (
    <ButtonWrapper className={post_id ? 'post': ''}>
      <button
        onClick={() => {
          if (project_id) {
            router.push({
              pathname: `${id}/${project_id}/edit`,
            });
          }
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          setIsOpenDelete(true);
        }}
      >
        삭제
      </button>
      {isOpenDelete ? <DeleteModal setIsOpenDelete={setIsOpenDelete} setIsOpenAuth={setIsOpenAuth} /> : ''}
      {isOpenAuth ? (
        <AuthModal
          refreshHandler={refreshHandler}
          post_id={post_id}
          project_id={project_id}
          setIsOpenAuth={setIsOpenAuth}
        />
      ) : (
        ''
      )}
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 54px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  &.post {
    left: 100%;
  }
  button {
    position: relative;
    display: block;
    font-weight: 400;
    font-size: 14px;
    width: 72px;
    height: 42px;
    color: #424242;
    z-index: 1;
    & + button {
      border-top: 1px solid #eeeeee;
    }
  }
`;
export default EditButton;
