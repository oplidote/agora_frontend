import CreateModal from 'components/Modal/CreateModal';
import { useRouter } from 'next/router';
import { useState,Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface CreatePostButtonPropsType {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const CreatePostButton = ({setIsOpen}:CreatePostButtonPropsType) => {
  const router = useRouter();

  const { id } = router.query;
  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button onClick={onClick}>
        <img src="/assets/img/edit.svg" alt="생성버튼이미지" />
      </Button>
    </>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 5.47%;
  right: 5.56%;
  width: 56px;
  height: 56px;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;
export default CreatePostButton;
