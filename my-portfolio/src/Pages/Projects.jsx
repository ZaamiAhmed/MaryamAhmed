import worldClock from '../images/world-clock.png'
import poemai from '../images/somalipoem.png';
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
          <img src={worldClock} alt="World Clock" />
          <p>A responsive clock using Moment.js to show time across cities.</p>
          <p>
            <strong>Tools:</strong> HTML, CSS, JS, Moment.js
          </p>
          <div className="project-links">
            <a
              href="https://world-clock-momentjs-project.netlify.app/"
              rel="noreferrer">
              Live
            </a>
            <a
              href="https://github.com/yourgithub/world-clock"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>🧠 AI Prompt Generator</h3>
          <img src={poemai} alt="AI Prompt" />
          <p>Generated creative poems using JavaScript + free AI API.</p>
          <p>
            <strong>Tools:</strong> JavaScript, API
          </p>
          <div className="project-links">
            <a href="#" rel="noreferrer">
              Live
            </a>
            <a href="#" rel="noreferrer">
              Code
            </a>
          </div>
        </div>

        {/* Add Project 3 & 4 similarly */}
        <div className="project-card">
          <h3>🌍 World Clock App</h3>
          <img src={worldClock} alt="World Clock" />
          <p>A responsive clock using Moment.js to show time across cities.</p>
          <p>
            <strong>Tools:</strong> HTML, CSS, JS, Moment.js
          </p>
          <div className="project-links">
            <a
              href="https://world-clock-momentjs-project.netlify.app/"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/yourgithub/world-clock"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
 
}
