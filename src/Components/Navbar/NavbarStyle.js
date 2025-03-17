import {Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${({theme}) => theme.card_light};
  height:80px;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:1rem;
   position:fixed;
    width:100%;
   top:0;
   z-index:10;
   @media screen and (max-width:960px){
      transition:0.8s all ease;
   }
  `;
export const NavContainer = styled.div`
  display:flex;
  justify-content:space-between;
  height:60px;
  z-index:1;
  width:100%;
  padding:0 24px;
  max-width:1200px;
  `;

export const NavLogo = styled(LinkR)`
  width:80%;
  padding : 0 6px;
  display:flex;
  jstify-self:flex-start;
  crsor:pointer;
  text-decoration:none;
  algn-items:center;
  @media screen and (max-width:740px){
  padding:0 0px;}`;

export const MobileIcon = styled.div`
  display:none;
  @media screen and (max-width:640px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.5rem;
    cursor:pointer;
    color:${({theme})=>theme.text_primary};
  }`;

export const NavItems = styled.ul`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  gap:32px;
  list-style:none;
  
  @media screen and (max-width:768px){
    display:none;
  }`;
export const NavLink = styled.a` 
  color:${({theme})=>theme.text_primary};
  font-weight:500;
  crsor:pointer;
  text-decoration:none;
  
  transition:0.2s ease-in-out;
  &:hover{
    color:${({theme})=>theme.primary};
    
  }`;

export const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:end;
  width:80%;
  height:100%;
  padding:0 6px;
  @media screen and (max-width:640px){
    display:none;
  }`;

export const GithubButton = styled.a`
background-color: transparent;
text-decoration:none;
color:${({theme})=>theme.primary};
border: 1.8px solid ${({theme})=>theme.primary};
border-radius:20px;
display:flex;
align-items:center;
justify-content:center;
padding:0px 20px;
font-size:1rem;
font-weight:500;
cursor:pointer;
height:70%;
&:hover{
   background-color:${({theme})=>theme.primary};
   color:${({theme})=>theme.white};
}
   @media screen and (max-width:640px){
   font-size:0.8rem;
   }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1' : '-1')};

`
export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

`;
