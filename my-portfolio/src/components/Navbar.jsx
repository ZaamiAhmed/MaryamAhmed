import './navbar.css';
import logo from '../images/maryama.png';
import {FaBars,FaTimes} from 'react-icons/fa';
import React,{ useState } from 'react';
import {  NavLink } from 'react-router-dom';

export default function Navbar() {

  const[menuvisible,setMenuvisible]=useState(false);

  const toggleMenu=()=>{
    setMenuvisible(!menuvisible)
  }
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={logo} alt="" className="img-fluid" />
        <div className="nav-menu" onClick={toggleMenu}>
          {menuvisible ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`navlinks ${menuvisible ? "show" : ""}`}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              <li>Projects</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
   }
