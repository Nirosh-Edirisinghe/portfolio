import styled from 'styled-components';


export const Div = styled.div`
    width:600px;
    height: 500px;
    @media screen and(max-width: 960px) {
     width:400px;
    height: 300px;
  }
    @media screen and (max-width:640px){
     width:300px;
    height: 200px;
  }
`