import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #0d0d0d;
  color: white;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  
`;
export const FooterWrapper = styled.div`
   display: flex;
   align-items: center
   text-align: center;
   justify-content: center;
   gap: 200px;
   margin-bottom: 3rem;
   @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: left;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const IconLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

  a {
    color: white;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1e90ff;
  }
`;

export const ContactInfo = styled.div`
  line-height: 1.7;
  font-size: 16px;
  font-weight: 400;
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid #333;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 1rem;
`;