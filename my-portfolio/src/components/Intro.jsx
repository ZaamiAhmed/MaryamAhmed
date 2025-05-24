import './Intro.css';
import image from '../images/photo1.jpg';
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

          <img src={image} alt="maryan" className="img-fluid" />
        </div>
        <button className="btn btn-primary">hello</button>
      </section>
    );
}