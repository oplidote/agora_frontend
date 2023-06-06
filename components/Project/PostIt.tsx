import EditButton from 'components/Button/EditButton';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface postItPropsType {
  post_id: number;
  writter: string;
  content: string;
  board_type: number;
}
const PostIt = ({ post_id, writter, content, board_type }: postItPropsType) => {
  const dropMenuRef = useRef<HTMLButtonElement | null>(null);
  const [isDropMenuOpen, setDropMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isDropMenuOpen && !dropMenuRef.current?.contains(e.target)) setDropMenuOpen(false);
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isDropMenuOpen]);

  return (
    <Box className={`board-${board_type}`}>
      <div className="post-top">
        <span>{writter}</span>
        <button onClick={() => setDropMenuOpen(true)} ref={dropMenuRef}>
          <img src="/assets/img/dote3.svg" alt="도트이미지" />
        </button>
        {isDropMenuOpen ? <EditButton refreshHandler={refreshHandler} post_id={post_id}/> : ''}
      </div>
      <p>{content}</p>
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  height: 198px;
  line-height: 150%;
  .post-top {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }
  span {
    padding-top: 10px;
    position: relative;
    font-weight: 500;
    font-size: 14px;
  }
  &.board-1 {
    background: #f5f7fa;
    border: 1px solid #cfd8e6;
    box-shadow: 0px 0px 6px rgba(110, 138, 180, 0.37);
  }
  &.board-2 {
    background: #fff1dd;
    box-shadow: 0px 0px 6px rgba(202, 174, 133, 0.37);
  }
  &.board-3 {
    background: #eff8e8;
    box-shadow: 0px 0px 6px rgba(184, 211, 163, 0.51);
  }
  p {
    padding: 10px;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
  }
`;

export default PostIt;
