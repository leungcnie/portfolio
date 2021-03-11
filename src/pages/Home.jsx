// import '../styles/Home.scss';
import styled from 'styled-components';

const Highlight = styled.mark`
  border-radius: 0.5rem;
  background-color: #d0c7ff;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

const Paragraph = styled.p`
  font-family: 'Sniglet';
  font-size: 1.5rem;
`;

const HomeWrapper = styled.div`
  padding: 1rem;
`;

export default function Home(props) {
  return (
    <HomeWrapper>
      <Heading>Hi, I'm Connie.</Heading>
      <Paragraph>I'm a full stack developer based in Vancouver, BC. <br />
      I'm passionate about <Highlight>playful design</Highlight> and writing <Highlight>clean, maintainable code.</Highlight></Paragraph>
    </HomeWrapper>
  )
}