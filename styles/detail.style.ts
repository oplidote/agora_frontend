import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 16px;
  justify-content: center;
  line-height: 150%;
`;
export const BoardBox = styled.div`
  position: relative;
  display: block;
  width: 33.33%;
  text-align: center;
  flex-grow: 1;
`;

export const BoardTitle = styled.span`
  padding: 5px 20px;
  border: 1px solid #6e8ab4;
  border-radius: 20px;
  font-weight: 500;
  font-size: 20px;
  color: #0d3c82;
  background: #ffffff;
`;
export const Board = styled.div`
  position: relative;
  display: grid;
  padding: 0 18px;
  margin-top: 16px;
  padding-top: 16px;
  background-color: #fff;
  grid-template-columns: repeat(2, calc(50% - 8px));
  gap: 16px;
  box-shadow: 6px 12px 32px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  height: 560px;
`;

export const EmptyBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 560px;
  margin-top: 16px;
  box-shadow: 6px 12px 32px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  border-radius: 20px;
  font-weight: 500;
  font-size: 18px;
  color: #6e8ab4;
`;
