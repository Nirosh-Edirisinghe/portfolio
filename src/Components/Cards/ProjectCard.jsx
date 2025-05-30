import React from 'react'
import styled from 'styled-components'



const Card = styled.div`
    width: 350px;
    height: 550px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;
const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;
const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;
const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    whte-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;
const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99}; 
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    
`;
const ButtonContainer = styled.div`
  display:flex;
  align-items:end;  
  justify-content:center;
  width:100%;
  height:80%;
  padding:0 6px;
  margin-bottom:30px;
  
  @media screen and (max-width:640px){
    justify-content:center;
  }`;

const GithubButton = styled.a`
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
height:50px;
width:150px;
&:hover{
   background-color:${({theme})=>theme.primary};
   color:${({theme})=>theme.white};
}
   @media screen and (max-width:640px){
   font-size:0.8rem;
   }
`;
const ProjectCard = ({project}) => {
  return (
    <div>
      <Card>
            <Image src={project.image}/>
            <Tags>
                {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
           
            <ButtonContainer>
                <GithubButton href={project.github} target="_blank">Github</GithubButton>
            </ButtonContainer>
               
             
            
        </Card>
    </div>
  )
}

export default ProjectCard;
