import React, { useState } from "react";
import Home from "./Home";
import { NavbarLink } from "./Navbar.style";
import { LoginForum } from "./Login.style";
import { LoginButt } from "./Login.style";
import { json, useNavigate } from "react-router-dom";

export const Login = ({ saveToken, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsenameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/users/login",
        {
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
        }
      );
      const json = await response.json();
      if (response.ok) {
        saveToken(json.data.token);
        setIsLoggedIn(true);
        navigate("/Profile");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
    // if (json.data.username != '') {
    //   setIsLoggedIn(true)
    // }
  };

  const Logout = () => {
    console.log("Logged Out !");
  };

  return (
    // <div>
    //   {!isLoggedIn && (

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
      <LoginButt type="submit">Login</LoginButt>
    </LoginForum>
  );
};
//   {isLoggedIn && <h1> Welcome, {json.data.username}</h1>}

// </div>

// };
