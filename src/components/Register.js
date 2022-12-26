import React, { useState, useEffect } from "react";
// import Home from "./Home";
// import { NavbarLink } from "./Navbar.style";
import { LoginForum } from "./Login.style";
import { LoginButt } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { APIurl } from "../api";

export const Register = ({ saveToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsenameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${APIurl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const json = await response.json();

      if (response.ok) {
        navigate("/Profile");
        saveToken(json.data.token);
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
  };

  return (
    <LoginForum onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsenameChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <p className="error">{error}</p>}
      <LoginButt type="submit">Register</LoginButt>
    </LoginForum>
  );
};
