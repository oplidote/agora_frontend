import { useState } from 'react';
import styled from 'styled-components';

const EditButton = () => {
  return (
    <ButtonWrapper>
      <button>수정</button>
      <button>삭제</button>
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
