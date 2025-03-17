import React from 'react'
import { Container, Wrapper, Title, Desc,CardContainer } from './AchivementsStyle';
import { achivements } from '../../Data/Constant';
import AchivementCard from '../Cards/AchivementCard';

const Achivements = () => {
  return (
    <div>
      <Container id="achivements">
         <Wrapper>
          <Title>Achivemets</Title>
          <Desc>
             Here are some of my Achivemets.
          </Desc>
         </Wrapper>
         <CardContainer>
         { achivements.map((achivement) => 
              <AchivementCard achivement={achivement} />
            )}
          
         </CardContainer>
      </Container>
    </div>
  )
}

export default Achivements;
