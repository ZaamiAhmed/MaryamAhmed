 import Intro from "./components/Intro";
 import Navbar from "./components/Navbar";
 import {Routes,Route} from 'react-router-dom';
 import Home from './Pages/Home';
 import About from './Pages/About';
 import Projects from "./Pages/Projects";

 import './App.css';
 export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="navbar-route">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </div>
       <Intro />
    </div>
  );
  
 }
