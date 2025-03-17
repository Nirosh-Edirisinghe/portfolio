import React from 'react'
import { skills } from '../../Data/Constant'
import { Container, Wrapper, Title, Desc, SkillsContainer, Skills, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillStyle'

const Skill = () => {
  return (
    <Container id="skill"> 
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working.
        </Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skills>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image}/>
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList> 
            </Skills>
          ))}

        </SkillsContainer> 
      </Wrapper>
    </Container>
  )
}

export default Skill
