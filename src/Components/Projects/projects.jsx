import React from 'react'
import { Container, Wrapper, Title, Desc,ToggleButton,ToggleButtonGroup,Divider,CardContainer } from './ProjectStyle';
import { useState } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../Data/Constant';

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <div>
      <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
        {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
        <Divider />
        {toggle === 'fullStack' ?
            <ToggleButton active value="fullStack" onClick={() => setToggle('fullStack')}>Full Stack</ToggleButton>
            :
            <ToggleButton value="fullStack" onClick={() => setToggle('fullStack')}>Full Stack</ToggleButton>
          }
        <Divider />
        {toggle === 'frontend' ?
            <ToggleButton active value="frontend" onClick={() => setToggle('frontend')}>FrontEnd</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>FrontEnd</ToggleButton>
          }
          <Divider />
          {toggle === 'mini' ?
            <ToggleButton active value="mini" onClick={() => setToggle('mini')}>Mini Project's</ToggleButton>
            :
            <ToggleButton value="mini" onClick={() => setToggle('mini')}>Mini Project's</ToggleButton>
          }
        
        </ToggleButtonGroup>
        <CardContainer>
        {toggle === 'all' && projects
            .map((project) => 
              <ProjectCard project={project} />
            )}
            {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
    </div>
    
  )
};

export default Projects
