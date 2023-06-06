import Router, { useRouter } from 'next/router';
import styled from 'styled-components';

const LogOutButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.push({
      pathname:'/',
    })
  }
  return <Button onClick={onClick} >로그아웃</Button>;
};
const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #9d9d9d;
`;
export default LogOutButton;
