import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 280px;
    height: 300px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 130px;
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
    gap: 5px;
    margin-top: 4px;
`;
const Tag = styled.span`
    font-size: 10px;
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
    font-size: 14px;
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

const AchivementCard = ({achivement}) => {
  return (
    <div>
      <Card>
            <Image src={achivement.image}/>
            <Tags>
                {achivement.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{achivement.title}</Title>
                <Date>{achivement.date}</Date>
                
            </Details>
            
        </Card>
    </div>
  )
}

export default AchivementCard
