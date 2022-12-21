import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import Home from './components/Home';
import { Post } from './components/Post';
import { Login } from './components/Login';
import { useState } from 'react';
import { Register } from './components/Register';

function App() {
  const [token,setToken] = useState(localStorage.getItem('myToken'));
  const saveToken = (token) =>
{
  setToken(token);
  localStorage.setItem("myToken",token);
}
  return (
    <div className="App">

       

      <Router>
        <Navbar/> 
        <Routes> 
          <Route path='/Register' element={<Register saveToken = {saveToken}  />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login saveToken={saveToken}/>}/>
          <Route path='/Profile'element={<Profile/>}/>
          <Route path='/Post'element={<Post/>}/>
        </Routes>
    </Router>
    
      </div>
  );
}
 
export default App;
