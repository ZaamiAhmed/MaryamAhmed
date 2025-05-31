import './Intro.css';
import image from '../images/mary.png';
import { motion } from "framer-motion";
export default function Intro() {
    return (
      <section className="heading container">
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
          <button>About Me!</button>
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
    );
}