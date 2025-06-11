import './navbar.css';
import logo from '../images/maryama.png';
import {FaBars,FaTimes} from 'react-icons/fa';
import React,{ useState } from 'react';
export default function Navbar() {

  const[menuvisible,setMenuvisible]=useState(false);

  const toggleMenu=()=>{
    setMenuvisible(!menuvisible)
  }
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={logo} alt="" className="img-fluid" />
        <div className='nav-menu' onClick={toggleMenu}>
        {menuvisible? <FaTimes/>:<FaBars/>}
        </div>
        <nav className={`navlinks ${menuvisible? 'show':"" }`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
   }
