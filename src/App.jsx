
import './App.css'
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Utils/Themes';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skill from './Components/Skill/Skill';
import {BrowserRouter as Router } from 'react-router-dom';
import Projects from "./Components/Projects/projects";
import Achivements from './Components/Achivements/achivements';
import Contact from './Components/Contact/Contact';


const Body = styled.div`
  background-color: ${({theme})=>theme.bg};
  width : 100%;
  height: 100%;
  overflow-x: hidden;
  `;

  const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  
`;
function App() {
  

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
        <Navbar/>
        <Body>
        
          <Hero/>
          <Wrapper>
            <Skill/>
          </Wrapper>
        <Projects/>
          <Wrapper>
            <Achivements/>
          </Wrapper>
          <Contact/>
        </Body>
        </Router>
        
        </ThemeProvider>

    </>
  )
}

export default App
