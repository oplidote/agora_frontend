import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top:60px;
  width: 546px;
  height: 352px;
  padding: 76px 72px 52px;
  border: 1px solid #bdbdbd;
  box-shadow: 1px 1px 11px 2px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  > div {
    position: relative;
    display: flex;
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    &.on {
      border-color: #9eb1cd;
    }
    & + div {
      margin-top: 16px;
      margin-bottom: 56px;
    }
    label {
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
      }
    }
    input {
      flex-grow: 1;
      border: none;
      outline-style: none;
      color: #bdbdbd;
      font-size: 18px;
      &::placeholder {
        color: #bdbdbd;
      }
    }
  }
  button {
    background-color: #6e8ab4;
    border-radius: 8px;
    width: 100%;
    border: 0;
    padding: 13px 24px;
    &.on {
      background-color: #0d3c82;
    }
    span {
      color: #fff;
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
