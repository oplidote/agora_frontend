import styled from 'styled-components';

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
      <Container>{props.children}</Container>
  );
};
const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 5.56%;
`;

export default AppLayout;
