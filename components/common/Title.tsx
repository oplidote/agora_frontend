import styled from 'styled-components';

const Title = (props: { children: React.ReactNode }) => {
  return <PageHeader>{props.children}</PageHeader>;
};

const PageHeader = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  margin-top: 48px;
`;
export default Title;
