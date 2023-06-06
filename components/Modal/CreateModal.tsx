import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

interface CreateModalPropsType {
  setIsOpen: any;
  type_list: string[];
  setRefesh: any;
}
const CreateModal = ({ setRefesh,setIsOpen, type_list }: CreateModalPropsType) => {
  const router = useRouter();
  const { project_id } = router.query;
  const [isDown, setIsDown] = useState(false);
  const [writter, setWritter] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

  const onSubmit = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/${project_id}/posts`,{
        category,
        writer: writter,
        content,
        password,
      });
      setRefesh(true);
      setIsOpen(false);
    } catch {}
  };

  return (
    <ModalContainer>
      <Bg
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <Content>
        <h2>
          추가하기
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img src="/assets/img/close.svg" alt="" />
          </button>
        </h2>
        <TextBox>
          <div className="txt">
            <label htmlFor="writter">작성자</label>
            <input
              id="writter"
              type="text"
              placeholder="이름 / 닉네임을 입력해주세요."
              onChange={(e) => {
                setWritter(e.target.value);
              }}
              value={writter}
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
          <DropBox
            onClick={() => {
              setIsDown((current) => !current);
            }}
          >
            <img src="/assets/img/down.svg" alt="드롭다운아이콘" />
            <button className="dropdown">{category ? <span>{category}</span> : <span>회고 주제를 선택해주세요</span>}</button>
            {isDown ? (
              <Dropdown className={isDown ? 'on' : ''}>
                <span style={{ color: '#6E8AB4' }}>회고 주제를 선택해주세요</span>
                <span
                  className="select"
                  onClick={() => {
                    setCategory(type_list[0]);
                  }}
                >
                  {type_list[0]}
                </span>
                <span
                  className="select"
                  onClick={() => {
                    setCategory(type_list[1]);
                  }}
                >
                  {type_list[1]}
                </span>
                <span
                  className="select"
                  onClick={() => {
                    setCategory(type_list[2]);
                  }}
                >
                  {type_list[2]}
                </span>
              </Dropdown>
            ) : (
              ''
            )}
          </DropBox>

          <div className="txt">
            <label htmlFor="content">내용</label>
            <textarea
              maxLength={200}
              id="content"
              placeholder="내용을 입력해 주세요."
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
            />
            <span>{content.length} / 200</span>
          </div>
          <button className="submit" onClick={onSubmit}>
            등록
          </button>
        </TextBox>
      </Content>
    </ModalContainer>
  );
};

export default CreateModal;

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
  width: 412px;
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
  margin-top: 64px;
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
      /* margin-top: 4px; */
      &::placeholder {
        font-size: 14px;
        color: #9e9e9e;
      }
    }
  }
  textarea {
    line-height: 150%;
    &::placeholder {
      font-size: 12px;
      color: #9e9e9e;
    }
    outline-style: none;
    height: 125px;
    background: #ffffff;
    border: 1px solid #9eb1cd;
    border-radius: 8px;
    border: none;
    resize: none;
  }
  .submit {
    margin-top: 62px;
    margin-bottom: 40px;
    background: #6e8ab4;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    padding: 16px 0;
  }
`;
const DropBox = styled.div`
  position: relative;
  font-size: 14px;
  z-index: 1;
  line-height: 150%;
  img {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .dropdown {
    padding-left: 15px;
    text-align: left;
    height: 50px;
    background: #ffffff;
    border: 1px solid #9eb1cd;
    border-radius: 8px;
    font-size: 14px;
    span {
      color: #6e8ab4;
    }
  }
`;
const Dropdown = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: #ffffff;
  border: 1px solid #9eb1cd;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0;

  span {
    position: relative;
    height: 50px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    &.select {
      margin: 4px 8px;
      border-radius: 4px;
      &:hover {
        background: #f5f7fa;
      }
    }
  }
`;
