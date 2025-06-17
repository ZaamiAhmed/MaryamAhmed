
 import Navbar from "./components/Navbar";
 import {Routes,Route} from 'react-router-dom';
 import Home from './Pages/Home';
 import About from './Pages/About';
 import Projects from "./Pages/Projects";
 import Contact from "./Pages/Contact";

 import './App.css';
 export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <footer>
        <p>
          @Copyright {new Date().getFullYear()} <strong>Maryan Ahmed </strong>
          |Contact:
          <a href="mailto:mohamedmaryam805@gmail.com">
            {" "}
            mohamedmaryam805@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
  
 }
