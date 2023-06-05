import { useRouter } from 'next/router';
import styled from 'styled-components';

const CreateButton = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Button
      onClick={() => {
        router.push({
          pathname: `${id}/create`,
        });
      }}
    >
      <img src="/assets/img/edit.svg" alt="생성버튼이미지" />
    </Button>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 14.84%;
  right: 5.56%;
  width: 56px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;
export default CreateButton;
