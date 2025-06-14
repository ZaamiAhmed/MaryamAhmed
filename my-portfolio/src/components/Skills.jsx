import './skills.css';
import {FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaGithub} from 'react-icons/fa';
import {BsDashLg }from 'react-icons/bs'
export default function Skills() {
    return(
        <div className="skills-container">
  <div className="skills-content">
    <h2>My Skills</h2>
     <BsDashLg size={30}  className="simple-line"/>
    {/* <div className="simple-line">
       
        </div> */}
    <p>
      Skilled in front-end development with React, HTML, CSS, and JavaScript — 
      I build responsive, user-focused web apps with clean, efficient code.
    </p>
  </div>
  <div className='skills-card'>
  <div className='skill-card'>
      <FaReact className='card-icon'/>
     <h3>React.js</h3>
    <p>Built dynamic web apps like weather, dictionary, and poem generator using React components and hooks.</p>
 </div>
   <div className="skill-card">
    <FaHtml5 className='card-icon'/>
    <h3>HTML5</h3>
    <p>Structured semantic layouts with clean and accessible HTML code for various responsive websites.</p>
  </div>
  <div className='skill-card'>
      <FaCss3Alt className='card-icon'/>
    <h3>CSS3 / Grid</h3>
    <p>Styled pages with modern CSS including Grid, Flexbox, and animations for responsive design.</p>

  </div>
  <div className="skill-card">
    <FaJsSquare className='card-icon'/>
    <h3>JavaScript</h3>
    <p>Developed interactive features and logic for projects with vanilla JavaScript and ES6+ syntax.</p>
  </div>
  <div className="skill-card">
    <FaGithub className='card-icon' />
    <h3>Git & GitHub</h3>
    <p>Version control and collaboration using Git, GitHub repositories, and Netlify for deployment.</p>
  </div>
  </div>
</div>
    )
    
}