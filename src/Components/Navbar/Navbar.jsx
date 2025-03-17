import React from 'react';
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GithubButton, ButtonContainer, MobileIcon, MobileMenu,MobileMenuLink } from './NavbarStyle'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { Bio } from '../../Data/Constant';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <div> 
      <Nav>
         <NavContainer>
            <NavLogo to="/">
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
            </NavLogo>
            <MobileIcon><FaBars onClick={() => {
            setIsOpen(!isOpen)
            }} />
          </MobileIcon>
            <NavItems>
               <NavLink href='#about'>About</NavLink>
               <NavLink href='#skill'>Skills</NavLink>
               <NavLink href='#projects'>projects</NavLink>
               <NavLink href='#achivements'>Achivement</NavLink>
               <NavLink href='#contact'>Contsct</NavLink>
            </NavItems>
            <ButtonContainer>
               <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
            </ButtonContainer>
            {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileMenuLink>
            <MobileMenuLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileMenuLink>
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href='/' target="_blank">Github Profile</GithubButton>
          </MobileMenu>
        }
         </NavContainer>

      </Nav>
    </div>
  )
}

export default Navbar
