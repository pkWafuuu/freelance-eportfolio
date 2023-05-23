import picture from "../assets/justin.jpg";
import collageBG1 from "../assets/collage 1.png"
import collageBG2 from "../assets/collage 2.png"
import resume from "../assets/resume.pdf"
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing({ home }) {
  return (
    <section id="landing" ref={home}>
      <div className="row">
        <header>
          <figure className="header__picture--wrapper">
            <img src={picture} alt="" className="header__picture" />
          </figure>
          <div className="header__content">
            <h1 className="header__title">
              Hey, <span className="text__color">Justin</span> here!
            </h1>
						<h2 className="header__sub-title">
						<Typical loop={Infinity} steps={[2000, "Poet", 2100, "Writer", 2100, "Web Developer"]} />
						</h2>
            <p className="header__para">
              I'm a fresh graduate from the University of Santo Tomas, and I'm based in Metro Manila.
							I'm interested in copywriting, editing, and research-oriented work.
            </p>
						<ul className="header__links">
							<li className="header__link">
								<a href="https://www.linkedin.com/in/justin-cruzana-18265519a/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon="fa-brands fa-linkedin" />
								</a>
							</li>
							<li className="header__link">
								<a href={resume} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon="file-pdf" />
								</a>
							</li>
						</ul>
          </div>
        </header>
				<img src={collageBG1} alt="" className="bg__filler collage__bg1" />
				<img src={collageBG2} alt="" className="bg__filler collage__bg2" />
      </div>
    </section>
  );
}

export default Landing;
