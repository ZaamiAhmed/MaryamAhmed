import './Intro.css';
import Skills from './Skills';
import image from '../images/mary.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";


import { motion } from "framer-motion";
export default function Intro() {
    return (
      <>
      <section className="heading-container">
        <div className="intro">
          <h1>
            Hello{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <h2>
            I'm <strong>Maryama Ahmed</strong>.
          </h2>

          <p>
            A passionate Front-End Developer crafting user-friendly web
            experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1eyFfqm5RiuosaVNVIA-qtJxCIP-wKmBJ/view?usp=sharing"
            download
            target="_blank"
            rel='noreferrer'
             
          >
            <button>My Resume</button>
          </a>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/milga-ahmed/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ZaamiAhmed?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="me">
          <motion.img
            src={image}
            alt="Maryama Ahmed"
            className="my-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
      
          />
          
        </div>
        
      </section>
      <Skills/>
     </>
    );
}