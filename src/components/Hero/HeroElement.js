import React from 'react'
import "./hero.css";
import styled from 'styled-components';


export const TableBox = styled.div`
display: flex;
padding: 10px 40px;
border: 1.5px solid rgba(235, 255, 37, 0.2);
justify-content: space-between;
width: 850px;
border-radius: 5px;
margin: 30px auto;
box-shadow: 0px 0px 20px rgba(226, 255, 111, 0.25);

@media screen and (max-width: 960px){
  width: 700px;
  padding: 10px 20px;
}
@media screen and (max-width:400px){
  width: 400px;
  padding: 10px 10px;
}
`

export const Item = styled.div`
padding: 10px;
align-items: center;
margin: auto;
`;

export const Amount = styled.p`
font-size: 40px;
line-height: 48px;
color: rgba(235, 255, 37, 1);
font-weight: 700;

@media screen and (max-width: 960px){
  font-size: 30px;
  line-height:40px;
}
`;

export const AmountPara = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 26px;
color: rgba(169, 169, 169, 1);
`