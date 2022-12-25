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

const NavBar = ({ token, setToken, logout }) => {
  const [extendedNav, setExtendedNav] = useState(false);

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
            {token ?(<NavbarLink to="/CreatPost">Make Post</NavbarLink>) :(null)}
            {token ? (<NavbarLink to="/Profile">Profile</NavbarLink>) :(null)}
            
            {!token ? (<NavbarLink to="/Register">Register</NavbarLink>) : (null)}
            {!token ? (
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
