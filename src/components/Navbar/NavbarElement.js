import styled from "styled-components";
import {DiScala} from "react-icons/Di";
import { Link } from "gatsby";

export const Nav = styled.nav`
  background-color: rgb(28,53,45);
 color:white;
      justify-content: center;
      alignt-items: center;
      font-size: 1rem;
      position: sticky;
      top:0;
      z-index: 999;
      padding: 20px 160px;

     @media screen and (max-width:1100px){
      padding : 20px 100px;
     }

     width:100%
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
z-index:1;
width: 100%;
max-width:100%;

`
export const NavLogo = styled(Link)`
color: #141414;
justify-self:flex-start;
cursor: pointer;
text-decoration:none;
font-size: 1.5rem;
display: flex;
align-items: center;

@media screen and (max-width:960px){
  position: absolute;
  left:25px;
  top:40px;
}

`


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
  display : block;
  position: absolute;
  top:18px;
  right: 0;
  transform: translate(-100%, 60%);
  font-size:1.8rem;
  cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-alig: center;
color:white;
@media screen and (max-width: 960px){
  display: flex;
  flex-direction: column;
  width:100%;
  height:90vh;
  position: absolute;
  top: ${({click})=> (click ? "100%" : "-1000px")};
  opacity:1;
  transition: all 0.2s ease;
  bacground: #fff;
}
`
export const NavItem= styled.li`
height: 80px;


@media screen and (max-width: 960px){
  width:100%;
  text-align: center;
}
`
export const NavLinks = styled(Link)`
color:white;
display: flex;
align-items: center;
text-decoration:none;
padding: 0.5rem 1rem;
height: 100%;
font-family: sans-serif;

@media screen and (max-width:960px){
  text-align:center;
  padding:2rem;
  width:100%;
  display:table;

}
`

export const Tradebutton = styled.button`
color: black;
background-size: 100%;
padding: 8px 30px;
border: none;

background-image: linear-gradient(81deg,#D4F938,#32D875);
font-size: 16px;
font-weight: 700;
display: inline-block;
vertical-align: middle;
box-sizing: border-box;
padding: 16px 32px;
background-color: transparent;
font: 500 16px/32px Arial,sans-serif;
color: #fff;
text-align: center;
border: 1px solid hsla(0,0%,100%,.5);
border-radius: 8px;
cursor: pointer;
position: relative;
z-index: 100;
font-family: Neurial Grotesk, sans-serif;
text-transform: uppercase;
line-height:19px;
margin: 0 20px;
margin-left: 40px;

&hover{
  box-shadow: 0 3px 18px 0 #A8EF9C;
}
@media screen and (max-width:960px){
 display: none;
 visibilty:hidden;
}
`
