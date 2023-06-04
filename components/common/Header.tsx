import LogOutButton from 'components/Button/LogOutButton';
import { Logo } from 'components/common';
import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <LogOutButton />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position:fixed;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 5.56%;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  a {
    width: 118px;
  }
`;
export default Header;
