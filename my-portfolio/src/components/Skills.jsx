import './skills.css';
import {FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaGithub} from 'react-icons/fa';
import {BsDashLg }from 'react-icons/bs'
import {Link} from 'react-router-dom';
export default function Skills() {
    return (
      <div className="skills-container">
        <div className="skills-content">
          <h2>My Skills</h2>
          <BsDashLg size={30} className="simple-line" />
          {/* <div className="simple-line">
       
        </div> */}
          <p>
            Skilled in front-end development with React, HTML, CSS, and
            JavaScript — I build responsive, user-focused web apps with clean,
            efficient code.
          </p>
        </div>
        <div className="skills-card">
          <div className="skill-card">
            <FaReact className="card-icon" />
            <h3>React.js</h3>
            <p>
              Built dynamic web apps like weather, dictionary, and poem
              generator using React components and hooks.
            </p>
          </div>
          <div className="skill-card">
            <FaHtml5 className="card-icon" />
            <h3>HTML5</h3>
            <p>
              Structured semantic layouts with clean and accessible HTML code
              for various responsive websites.
            </p>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="card-icon" />
            <h3>CSS3 / Grid</h3>
            <p>
              Styled pages with modern CSS including Grid, Flexbox, and
              animations for responsive design.
            </p>
          </div>
          <div className="skill-card">
            <FaJsSquare className="card-icon" />
            <h3>JavaScript</h3>
            <p>
              Developed interactive features and logic for projects with vanilla
              JavaScript and ES6+ syntax.
            </p>
          </div>
          <div className="skill-card">
            <FaGithub className="card-icon" />
            <h3>Git & GitHub</h3>
            <p>
              Version control and collaboration using Git, GitHub repositories,
              and Netlify for deployment.
            </p>
          </div>
        </div>
        <div className="soft-skills">
          <div className="soft-skill-intro">
            <h2>What Sets Me Apart!</h2>
            <p>
              I turned to front-end development during a challenging time and
              discovered its power to create meaningful digital impact.
            </p>
          </div>
          <div className="seperate-line"></div>
          <div className="soft-skill">
            <h4>These are my Soft Skills:</h4>
            <ul>
              <li>problem-solver</li>
              <li>Resilient</li>
              <li>Adaptable</li>
              <li>detail-oriented</li>
            </ul>
          </div>
        </div>
        <div className="qualifications">
          <div className="qualifications-intro">
            <h2>Qualifications & Achievements</h2>
            <p>
              My journey has been shaped by persistence and self-driven
              learning. Here are the milestones that have defined my path:
            </p>
          </div>
          <div className="certificate-grid">
            <div className="certificate-card" style={{ "--i": 1 }}>
              <h4>Associate's Degree</h4>
              <p>Computer Science, University of the People</p>
            </div>
            <div className="certificate-card" style={{ "--i": 2 }}>
              <h4>Front-End Diploma</h4>
              <p>SheCodes – Projects in React, APIs & Responsive Design</p>
            </div>
            <div className="certificate-card" style={{ "--1": 3 }}>
              <h4>WordPress Skills Certificate</h4>
              <p>
                Designed & launched WordPress sites for personal and client use
              </p>
            </div>
            <div className="certificate-card" style={{ "--i": 4 }}>
              <h4>UX Design (Ongoing)</h4>
              <p>Coursera – Google UX Design Program (in progress)</p>
            </div>
          </div>
        </div>
        <div className='me' >
          <Link to="/about">
          <button >Know Me More!</button>
          </Link>
        </div>
      </div>
    );
    
}