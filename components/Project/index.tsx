import EditButton from 'components/Button/EditButton';
import { useState } from 'react';
import styled from 'styled-components';

const ProjectList = () => {
  const [dataIndex, setDataIndex] = useState<number | null>(null);
  const onClick = (_i: number) => {
    if (dataIndex != _i) setDataIndex(_i);
    else if (dataIndex == _i) setDataIndex(null);
  };
  const data_list = [
    {
      id: 1,
      name: '캐치캐치',
      title: '칭찬회고',
      updatedAt: '2023-06-10',
      createdAt: '2023-06-03',
    },
    {
      id: 2,
      name: '요근방',
      title: 'KPT',
      updatedAt: '2023-06-09',
      createdAt: '2023-06-02',
    },
    {
      id: 3,
      name: '아고라',
      title: '스프린트 회고',
      updatedAt: '2023-06-13',
      createdAt: '2023-06-01',
    },
    {
      id: 4,
      name: '바짝',
      title: '스터디 회고',
      updatedAt: '2023-06-03',
      createdAt: '2023-05-23',
    },
  ];
  return (
    <List>
      <div className="th">
        <span className="title">제목</span>
        <span className="name">프로젝트</span>
        <span className="user">ID</span>
        <span className="create">생성 일자</span>
        <span className="update">업데이트 일자</span>
      </div>
      {data_list.map((data, i) => {
        return (
          <div className="td" key={i}>
            <span className="title">{data.title}</span>
            <span className="name">{data.name}</span>
            <span className="user">DEF</span>
            <span className="create">{data.createdAt}</span>
            <span className="update">{data.updatedAt}</span>
            <span className="setting">
              <button onClick={() => onClick(i)}>
                <img src="assets/img/dote3.svg" alt="도트이미지" />
              </button>
              {dataIndex == i ? <EditButton /> : ''}
            </span>
          </div>
        );
      })}
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
