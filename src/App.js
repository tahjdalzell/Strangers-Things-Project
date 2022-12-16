import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import Home from './components/Home';
import { Post } from './components/Post';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">

       

      <Router>
        <Navbar/> 
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Profile'element={<Profile/>}/>
          <Route path='/Post'element={<Post/>}/>
        </Routes>
    </Router>
    
      </div>
  );
}
 
export default App;
