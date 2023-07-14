
import './App.css';
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function App() {
  return (
    <Container>
      <Title>
        <Hashtag>#</Hashtag> 
        <AboutMe>about-me</AboutMe><Line></Line>
      </Title>
      <TextArea>
        Hello, i'm Elias! <br /><br /><br />
      I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br /><br /><br />
Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.


      </TextArea><br />
      <ButtonMore>Read More <Arrow>&rarr;</Arrow></ButtonMore>
    </Container>
  );
}


export default App;


const Container = styled.div`

    margin-top: 10%;
    color:  #bfbfbf;
    font-family: 'Courier New', Courier, monospace;

`;
const Title = styled.span `
  margin-left: 10%;
  display: flex;
  align-items: center;
`;
const TextArea = styled.p `
  color:  #bfbfbf;
  margin-left: 10%;
  margin-right: 50%;
  font-size: 20px;
  
`
const Hashtag = styled.span `
  font-size: 40px;
  color: #a45df0;

`;
const AboutMe = styled.span `
  color: white;
  font-size: 40px;
`;

const Line = styled.hr `
  flex-grow: 1;
  height: 1px;
  background-color: #a45df0; /* Set the desired color */
  margin-left: 0px; /* Adjust the spacing between the text and the line */
`;
const ButtonMore = styled.button`

display: inline-block;
padding: 10px 30px ;
font-size: 16px;
border: 2px solid #a45df0;
background-color: black;
color: #fff;
cursor: pointer;
transition: background-color 0.3s ease;
margin-left: 10%;

`;

const Arrow = styled.span `
margin-left: 5px;
`;