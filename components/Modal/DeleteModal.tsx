import styled from 'styled-components';

type PropsType = {
  setIsOpenDelete: any;
  setIsOpenAuth: any;
  type?: number | undefined;
};

const DeleteModal = ({ setIsOpenAuth,setIsOpenDelete, type }: PropsType) => {
  const text = ['삭제하시겠습니까?', '포스트잇을 삭제하시겠습니까?'];
  return (
    <ModalContainer>
      <Bg
        onClick={() => {
          setIsOpenDelete(false);
        }}
      />
      <Content>
        <span>{type ? text[1] : text[0]}</span>
        <div>
          <button
            onClick={() => {
              setIsOpenDelete(false);
            }}
          >
            아니오
          </button>
          <button onClick={()=> {setIsOpenAuth(true); setIsOpenDelete(false)}}>네</button>
        </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 208px;
  background-color: #fff;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  line-height: 150%;
  padding-top: 7px;
  span {
    display: block;
    font-weight: 500;
    font-size: 20px;
    color: #212121;
  }
  > div {
    margin-top: 24px;
    display: flex;
    gap: 16px;
    font-weight: 400;
    font-size: 16px;
    button {
      width: 65px;
      padding: 8px 0;
      color: #3d639b;
      border: 1.5px solid #3d639b;
      border-radius: 8px;
      & + button {
        background: #3d639b;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
`;
export default DeleteModal;
