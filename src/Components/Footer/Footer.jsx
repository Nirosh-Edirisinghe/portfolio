import React from 'react'
import { FooterContainer,Section,Title,IconLinks,FooterWrapper,ContactInfo,Copyright} from './FotterStyle';
import { Bio } from '../../Data/Constant'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    
      <FooterContainer>
       <FooterWrapper>
       <Section>
        <Title>Let's Connect</Title>
        <IconLinks>
          <a href={Bio.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </IconLinks>
      </Section>

      <Section>
        <Title>Contact Info</Title>
        <ContactInfo>
          Email: nirosh.p.edirisinghe@gmail.com <br />
          Telephone: +94782636481 <br />
          Location: Kurunegala, Sri Lanka
        </ContactInfo>
      </Section>
       </FooterWrapper>

      <Copyright>
        © 2025 Nirosh Edirisinghe. All rights reserved.
      </Copyright>
    </FooterContainer>
  
  )
}

export default Footer
