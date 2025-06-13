import './navbar.css';
import logo from '../images/maryama.png';
import {FaBars,FaTimes} from 'react-icons/fa';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
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
           <Link to='/' className='links'><li>Home</li></Link> 
            <Link to='/about' className='links'><li>About</li></Link>
            <Link to='/projects' className='links'><li>Projects</li></Link>
           <Link to='/contact' className='links'><li>Contact</li></Link> 
           
           
          </ul>
        </nav>
      </div>
    </div>
  );
   }
