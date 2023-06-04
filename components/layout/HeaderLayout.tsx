import { Header } from 'components/common';
import styled from 'styled-components';

const HeaderLayout = (props: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {props.children}
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
