import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { Post } from "./components/Post";
import { Login } from "./components/Login";
import { useState } from "react";
import { Register } from "./components/Register";
import { CreatPost } from "./components/CreatPost";
import { DeletePost } from "./components/ DeletePost";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("myToken"));

  const logout = () => {
    setToken("");
    localStorage.removeItem("myToken");
    Navigate("/");
  };
  const saveToken = (token) => {
    setToken(token);
    localStorage.setItem("myToken", token);
  };
  return (
    <div className="App">
      <Router>
        {/* <DeletePost token={token} /> */}
        <Navbar logout={logout} token={token} />
        <Routes>
          <Route
            path="/Register"
            element={<Register saveToken={saveToken} />}
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} saveToken={saveToken} />
            }
          />
          <Route path="/Profile" element={<Profile token={token} />} />
          <Route path="/Post" element={<Post token={token} />} />
          <Route
            path="/CreatPost"
            element={<CreatPost token={token} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
