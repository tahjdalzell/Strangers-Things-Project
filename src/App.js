import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      

      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/'/>
          <Route path='Profile'/>
          <Route path='/Post'/>
        </Routes>
    </Router>
    
      </div>
  );
}

export default App;
