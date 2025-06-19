import worldClock from '../images/world-clock.png'
import poemai from '../images/somalipoem.png';
import dictionary from '../images/dicpic.png';
import kenyaTourism from '../images/kenya-tourism.png';
export default function Projects() {
  return (
    <div className="projects-container">
      <h2>These are my projects</h2>
      <p>
        These projects reflect my journey as a front-end developer. I built them
        using tools like React, JavaScript, Moment.js, and APIs to solve real
        problems and improve user experience.
      </p>

      <div className="project-grid">
        <div className="project-card">
          <h3>🌍 World Clock App</h3>
          <img src={worldClock} alt="World Clock" className="img-fluid" />
          <p>A responsive clock using Moment.js to show time across cities.</p>
          <p>
            <strong>Tools:</strong> HTML, CSS, JS, Moment.js
          </p>
          <div className="project-links">
            <a
              href="https://world-clock-momentjs-project.netlify.app/"
              rel="noreferrer"
            >
              View Live
            </a>
            <a
              href="https://github.com/ZaamiAhmed/World-clock"
              rel="noreferrer"
            >
             View Code
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>🧠 AI Prompt Generator</h3>
          <img src={poemai} alt="AI Prompt" className="img-fluid" />
          <p>Generated creative poems using JavaScript + free AI API.</p>
          <p>
            <strong>Tools:</strong> JavaScript, API
          </p>
          <div className="project-links">
            <a href="https://somali-poems.netlify.app/" rel="noreferrer">
              View Live
            </a>
            <a
              href="https://github.com/ZaamiAhmed/shecodesAI"
              target="_blank"
              rel="noreferrer"
            >
             View Code
            </a>
          </div>
        </div>

        {/* Add Project 3 & 4 similarly */}
        <div className="project-card">
          <h3>📚Dictionary App</h3>
          <img src={dictionary} alt="Dictionary app" className="img-fluid" />
          <p>
            A responsive dictionary app built with React.js and Axios. It
            fetches real-time word definitions, phonetics, and pronunciation
            from a free dictionary API using reusable components and clean UI
            design.
          </p>
          <p>
            <strong>Tools:</strong> React.js, CSS, Axios, Dictionary API
          </p>
          <div className="project-links">
            <a href="https://dictionary-projec.netlify.app/" rel="noreferrer">
              View Live
            </a>
            <a
              href="https://github.com/ZaamiAhmed/dictionary-app"
              rel="noreferrer"
            >
             View Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>🦁 Kenya Tourism</h3>
          <img src={kenyaTourism} alt="" />
          <p>
            A fully responsive static website built with just HTML and CSS. It
            highlights tourist destinations across Kenya using modern layout
            techniques like CSS Grid and Flexbox.
          </p>
          <p>
            <strong>Tools:</strong> HTML, CSS, Responsive Design
          </p>
          <div className="project-links">
            <a
              href="https://kenya-tourist-attraction.netlify.app/"
              rel="noreferrer"
            >
              View Live
            </a>
            <a
              href="https://github.com/ZaamiAhmed/Tourist-attraction-kenya"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
 
}
