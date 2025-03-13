import React from 'react'
import { HeroContainer,HeroBg,HeroInnerContainer,HeroLeftContainer,HeroRightContainer,Title,H1,Span,SubTitle,ResumeButton,Image} from './HeroStyle'
import {Bio} from '../../Data/Constant'
import {Typewriter} from 'react-simple-typewriter'
import my1 from '../../Assets/images/my1.jpg'
import HeroBgAnimation from '../../HeroBgAnimation/HeroBgAnimation'

const Hero = () => {
  return (
    <div>
      <div id="about">
            <HeroContainer>
                <HeroBg>
                   <HeroBgAnimation/>
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <H1>
                            I am a{' '}
                            <Span>
                              <Typewriter
                                words={Bio.roles}
                                loop={true}
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                              />
                            </Span>
                          </H1>
                          <SubTitle>{Bio.description}</SubTitle>
                          <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>  
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Image src={my1} alt="my" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    </div>
  )
}

export default Hero
