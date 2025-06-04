import './navbar.css';
import logo from '../images/maryama.png';
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={logo} alt="" className="img-fluid" />
        <nav className="navlinks">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
  
}