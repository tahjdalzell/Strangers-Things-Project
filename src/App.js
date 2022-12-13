import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Strangers Things</h1>
      <Router>
        <Navbar />
    </Router>
    
      </div>
  );
}

export default App;
