import axios from 'axios';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import styled from 'styled-components';

const CreateForm = () => {
  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [type1, setType1] = useState<string>('');
  const [type2, setType2] = useState<string>('');
  const [type3, setType3] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;
  // state의 변화를 감지하여 재연산
  const verification = useMemo(() => {
    return !!title && !!name && !!type1 && !!type2 && !!type3;
  }, [title, name, type1, type2, type3]);
  const verification2 = useMemo(()=> {
    
    return type1 != type2 && type2 != type3 && type1 != type3;
  },[type1,type2,type3])
  const onRegist = async () => {
    if (verification) {
      if(verification2){
        try {
          const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;
          const res = await axios.post(`${BACKEND_URL}/${id}/projects`, {
            name,
            title,
            type1,
            type2,
            type3,
          });
          router.push({
            pathname: `/${id}`,
          });
        } catch {}
      }
      else {
        alert('보드에 동일한 이름이 존재합니다.')
      }
    }
  };
  return (
    <Form>
      <CreateTitle>
        <div>
          <span>주제</span>
          <input
            placeholder="회고 주제를 작성해주세요."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <span>프로젝트</span>
          <input
            placeholder="프로젝트를 이름을 작성해주세요 (최대 20자)"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </CreateTitle>
      <Description>
        <h3>회고할 내용을 설정해주세요!</h3>
        <p>
          <span>
            일의 성과를 내는데 있어서 다양한 기준으로 평가하게 됩니다. 아래와 같은 예시로 회고 내용을 분류하여
            설정해보세요!
          </span>
          <span>예시{')'}</span>
          <span>지속할 점 (Keep), 해결할 점(Problem), 시도할 점(Try)으로 정리하는 KPT</span>
          <span>좋았던 점(Liked), 배운 점(Learned), 부족했던 점(Lacked)으로 정리하는 3L</span>
          <span>팀에서 지속할 것 (Continue) - 그만 둘 것(Stop) - 새롭게 시작할 것 (Start)</span>
        </p>
      </Description>
      <CreateKeyword>
        <section>
          <span>보드 1</span>
          <input
            type="text"
            placeholder="예시 ) Keep"
            value={type1}
            onChange={(e) => {
              setType1(e.target.value);
            }}
          />
        </section>
        <section>
          <span>보드 2</span>
          <input
            type="text"
            placeholder="예시 ) Problem"
            value={type2}
            onChange={(e) => {
              setType2(e.target.value);
            }}
          />
        </section>
        <section>
          <span>보드 3</span>
          <input
            type="text"
            placeholder="예시 ) Try"
            value={type3}
            onChange={(e) => {
              setType3(e.target.value);
            }}
          />
        </section>
      </CreateKeyword>
      <ButtonBox>
        <button
          className="cancle"
          onClick={() =>
            router.push({
              pathname: `/${id}`,
            })
          }
        >
          취소
        </button>
        <button className={`post ${verification && 'on'}`} onClick={onRegist}>
          등록
        </button>
      </ButtonBox>
    </Form>
  );
};
const Form = styled.div`
  margin-top: 50px;
  line-height: 150%;
  font-weight: 400;
  font-size: 14px;
  color: #424242;
`;
const CreateTitle = styled.div`
  position: relative;
  display: flex;
  div {
    display: flex;
    width: 50%;
    flex-direction: column;
    padding-right: 9.69%;
    span {
      font-weight: 400;
      padding-left: 15px;
      font-size: 12px;
      color: #757575;
    }
    input {
      padding: 14px 0;
      padding-left: 15px;
      border-bottom: 1px solid #9eb1cd;

      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #9e9e9e;
      }
    }
  }
`;
const Description = styled.div`
  h3 {
    font-weight: 500;
    font-size: 16px;
    margin: 40px 0 12px;
    padding-left: 15px;
  }
  p {
    background: #f5f7fa;
    border-radius: 8px;
    padding: 15px;
    span {
      display: block;
      font-weight: 500;
      font-size: 15px;
      color: #6e8ab4;
    }
  }
`;
const CreateKeyword = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    span {
      padding-left: 15px;
    }
    input {
      margin-top: 8px;
      padding: 15px;
      border: 1px solid #9eb1cd;
      border-radius: 8px;
      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        color: #bdbdbd;
      }
    }
  }
`;
const ButtonBox = styled.div`
  margin-top: 180px;
  display: flex;
  justify-content: end;
  gap: 16px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 60px;
    border: 1px solid #6e8ab4;
    border-radius: 8px;
    &.cancle {
      color: #6e8ab4;
    }
    &.post {
      background: #6e8ab4;
      color: #fff;
      cursor: auto;

      &.on {
        background-color: #3d639b;
        cursor: pointer;
      }
    }
  }
`;
export default CreateForm;
