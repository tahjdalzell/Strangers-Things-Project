import React, {useState} from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
import {OpenLinksButton,Logo,NavbarLink,NavbarlinkContainer,NavbarextendedCont,NavbarinnerContainer,NavbarContainer, LeftContainer, RightContainer, NavbarLinkExtended} from './Navbar.style'
import LogoImg from './logo.png'
const NavBar = () => {
  const [extendedNav, setExtendedNav] = useState(false)
return <NavbarContainer extendedNav={extendedNav}>
 
<NavbarinnerContainer>

  <LeftContainer>
    <Logo src={LogoImg}></Logo>

  </LeftContainer>

  <RightContainer>

    <NavbarlinkContainer>

      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/Post">Post</NavbarLink>
      <NavbarLink to="/Profile">Profile</NavbarLink>
      <NavbarLink to='/Register/'>Register</NavbarLink>
      <NavbarLink to="/Login">Login</NavbarLink>
      <OpenLinksButton onClick={()=>{
        setExtendedNav((curr)=> !curr)
      }}>{extendedNav ? <>&#10005;</>:<>&#8801;</>};</OpenLinksButton>
    </NavbarlinkContainer>

  </RightContainer>

</NavbarinnerContainer>

{extendedNav && (

<NavbarextendedCont>

      <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
      <NavbarLinkExtended to="/Post">Post</NavbarLinkExtended>
      <NavbarLinkExtended to="/Profile">Profile</NavbarLinkExtended>

</NavbarextendedCont>
)

}

</NavbarContainer>

}

;

export default NavBar;
