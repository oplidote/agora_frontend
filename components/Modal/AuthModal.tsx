import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { Dispatch } from 'redux';
import styled from 'styled-components';

interface PropsType {
  setIsOpenAuth: any;
  project_id?: number;
  post_id?: number;
  refreshHandler: (isRefresh:boolean) => void;
};

const AuthModal = ({ refreshHandler, post_id, project_id, setIsOpenAuth }: PropsType) => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;
  
  const onSubmit = async () => {
    try {
      if (project_id) {
        const res = await axios.delete(`${BACKEND_URL}/projects/${project_id}`, {
          data: {
            identity: id,
            password: password,
          },
        });
        refreshHandler(true);
        setIsOpenAuth(false);
      } else if (post_id) {
        const res = await axios.delete(`${BACKEND_URL}/posts/${post_id}`, {
          data: {
            identity: id,
            password: password,
          },
        });
        refreshHandler(true);
        setIsOpenAuth(false);
      }
    } catch {}
  };
  return (
    <ModalContainer>
      <Bg
        onClick={() => {
          setIsOpenAuth(false);
        }}
      />
      <Content>
        <h2>
          작성자 확인
          <button
            onClick={() => {
              setIsOpenAuth(false);
            }}
          >
            <img src="/assets/img/close.svg" alt="" />
          </button>
        </h2>
        <TextBox>
          <div className="txt">
            <label htmlFor="id">작성자</label>
            <input
              id="id"
              type="text"
              placeholder="이름 / 닉네임을 입력해주세요."
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
            />
          </div>
          <div className="txt">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 아는 사람만 수정할 수 있어요."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <button className="submit" onClick={onSubmit}>
            확인
          </button>
        </TextBox>
      </Content>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
const Content = styled.div`
  position: absolute;
  display: block;
  width: 400px;
  background-color: #fff;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 150%;
  h2 {
    margin-top: 22px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    button {
      position: absolute;
      top: 16px;
      right: 28px;
    }
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 42px;
  font-weight: 400;
  padding: 0 6.31%;
  color: #424242;
  > div {
    &.txt {
      position: relative;
      padding: 6px 15px 14px;
      span {
        position: absolute;
        top: calc(100% + 8px);
        right: 14px;
        font-weight: 400;
        font-size: 12px;
      }
    }
    display: flex;
    flex-direction: column;
    border: 1px solid #9eb1cd;
    border-radius: 8px;
    label {
      line-height: 150%;
      display: block;
      font-size: 10px;
      color: #6e8ab4;
    }
    input {
      line-height: 150%;
      margin-top: 4px;
      width: 100%;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
        color: #9e9e9e;
      }
    }
  }
  .submit {
    width: 100%;
    height: auto;
    margin-top: 32px;
    margin-bottom: 40px;
    background: #6e8ab4;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    padding: 16px 0;
  }
`;
export default AuthModal;
