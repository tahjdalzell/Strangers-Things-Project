import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";

const NavBar = () => (
  <nav>
    <NavLink to="/" element={<Home/>}>Home</NavLink>
    <NavLink to="/Post" element={<Post/>}>Post</NavLink>
    <NavLink to="/Profile" element={<Profile/>}>Profile</NavLink>
  </nav>
);

export default NavBar;
