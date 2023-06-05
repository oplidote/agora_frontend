import { Header } from 'components/common';
import styled from 'styled-components';

interface layoutPropsType {
  children: React.ReactNode
  bg: string
}
const HeaderLayout = ({children,bg}:layoutPropsType) => {
  return (
    <Container style={{backgroundColor: bg}}>
      <Header />
      {children}
    </Container>
  );
};
const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 5.56%;
  padding-top: 100px;
`;

export default HeaderLayout;
