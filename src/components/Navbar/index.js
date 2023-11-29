import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav, NavbarContainer, NavLogo, MobileIcon,NavMenu, NavItem, NavLinks,Tradebutton 
} from "./NavbarElement";
import logo from "../../images/Frame.svg";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = ()=>{
    setClick(!click);
  }
  const ChangeNav = ()=>{
    if(window.scrollY >= 80){
        setScroll(true);
    }
    else{
        setScroll(false);
    }
  }

  useEffect(()=>{
    ChangeNav()
    window.addEventListener("scroll", ChangeNav)
  },[])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={logo} alt="" />
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />} 
                </MobileIcon>
<NavMenu onClick={handleClick} click={click}>
  <NavItem>
    <NavLinks to="/">
      Academy
    </NavLinks>
  </NavItem>
  <NavItem>
    <NavLinks to="/">
      Blogs
    </NavLinks>
  </NavItem>
  <NavItem>
    <NavLinks to="/">
      LeaderBoard
    </NavLinks>
  </NavItem>
  <NavItem>
    <NavLinks to="/">
      Fees
    </NavLinks>
  </NavItem>

<Tradebutton>Tarde Now</Tradebutton>
</NavMenu>

            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;