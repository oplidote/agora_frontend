import axios from 'axios';
import EditButton from 'components/Button/EditButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
interface DataPropsType {
  title: string | null;
  name: string;
  type1: string;
  type2: string;
  type3: string;
  createdAt?: string;
  updatedAt?: string;
}
const ProjectList = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dataIndex, setDataIndex] = useState<number | null>(null);
  const [data_list, setDataList] = useState<DataPropsType[]>([]);
  const data_list1 = [
    { name: '1', title: null, type1: '2', type2: '3', type3: '4' },
    { name: 'tes3t', title: null, type1: 'test', type2: 'tsa3', type3: 'ts2as' },
    { name: 'tes3t21', title: null, type1: 'test', type2: 'tsa3', type3: 'ts2as' },
    { name: '프로젝트1', title: '주제1', type1: '보드1', type2: '보드2', type3: '보드3' },
    { name: 'ㅁ', title: 'ㅁ', type1: 'ㅁ', type2: 'ㅁ', type3: 'ㅁ' },
    { name: 'ㅁ', title: 'ㅁ', type1: 'ㅁ', type2: 'ㅁ', type3: '12' },
    { name: 'ㅁ', title: 'ㅁ', type1: 'ㅁ', type2: 'ㅁ', type3: '12' },
  ];
  const moveDetail = (_i:number) => {
    router.push({
      pathname: `${id}/${_i}`,
    });
  };
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const onClick = (_i: number) => {
    if (dataIndex != _i) setDataIndex(_i);
    else if (dataIndex == _i) setDataIndex(null);
  };

  const getList = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/123/projects`);
      console.log(res);
    } catch {}
  };
  useEffect(() => {
    getList();
    setDataList(data_list1);
  }, [id]);
  return (
    <List>
      {data_list.length != 0 ? (
        <>
          <div className="th">
            <span className="title">주제</span>
            <span className="name">프로젝트</span>
            <span className="user">ID</span>
            <span className="create">생성 날짜</span>
            <span className="update">업데이트 날짜</span>
          </div>
          {data_list.map((data, i) => {
            return (
              <div className="td" key={i}>
                <span className="title" onClick={() => moveDetail(i)}>
                  {data.title}
                </span>
                <span className="name">{data.name}</span>
                <span className="user">DEF</span>
                <span className="create">{data.createdAt}</span>
                <span className="update">{data.updatedAt}</span>
                <span className="setting">
                  <button onClick={() => onClick(i)}>
                    <img src="/assets/img/dote3.svg" alt="도트이미지" />
                  </button>
                  {dataIndex == i ? <EditButton /> : ''}
                </span>
              </div>
            );
          })}
        </>
      ) : (
        <div className="empty">
          <span>등록된 프로젝트가 없습니다.</span>
        </div>
      )}
    </List>
  );
};

const List = styled.div`
  position: relative;
  margin-top: 30px;
  font-weight: 600;
  box-shadow: 0px 0px 5px rgba(110, 138, 180, 0.1);
  border-radius: 10px;
  > div {
    display: flex;
    &.empty {
      padding: 150px 0;
      justify-content: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      color: #6e8ab4;
      box-shadow: 0px 0px 5px rgba(110, 138, 180, 0.25);
    }
    &.th {
      font-size: 16px;
      text-align: left;
      height: 60px;
      width: 100%;
      background-color: #f5f7fa;
      line-height: 60px;
    }
    &.td {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }
  }
  span {
    position: relative;
    display: block;
  }
  .title {
    width: 33.75%;
    padding-left: 8.44%;
  }
  .name {
    width: 25.31%;
  }
  .user {
    width: 8.44%;
  }
  .create {
    width: 8.44%;
    font-weight: 400;
  }
  .update {
    width: 13.52%;
    color: #323232;
    font-weight: 400;
  }
  .setting {
    flex-grow: 1;
    display: flex;
  }
`;
export default ProjectList;
