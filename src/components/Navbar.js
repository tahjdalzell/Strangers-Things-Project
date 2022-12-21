import React, { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import {
  OpenLinksButton,
  Logo,
  NavbarLink,
  NavbarlinkContainer,
  NavbarextendedCont,
  NavbarinnerContainer,
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkExtended,
} from "./Navbar.style";
import LogoImg from "./logo.png";
import { Link, Navigate } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [extendedNav, setExtendedNav] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("myToken");
    Navigate("/Profile");
  };

  return (
    <NavbarContainer extendedNav={extendedNav}>
      <NavbarinnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>

        <RightContainer>
          <NavbarlinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/Post">Post</NavbarLink>
            <NavbarLink to="/CreatPost">Make Post</NavbarLink>
            <NavbarLink to="/Profile">Profile</NavbarLink>
            <NavbarLink to="/Register/">Register</NavbarLink>
            {!isLoggedIn ? (
              <NavbarLink to="/Login">Login</NavbarLink>
            ) : (
              <button onClick={logout}>Logout</button>
            )}

            <OpenLinksButton
              onClick={() => {
                setExtendedNav((curr) => !curr);
              }}
            >
              {extendedNav ? <>&#10005;</> : <>&#8801;</>};
            </OpenLinksButton>
          </NavbarlinkContainer>
        </RightContainer>
      </NavbarinnerContainer>

      {extendedNav && (
        <NavbarextendedCont>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/Post">Post</NavbarLinkExtended>
          <NavbarLinkExtended to="/Profile">Profile</NavbarLinkExtended>
        </NavbarextendedCont>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
