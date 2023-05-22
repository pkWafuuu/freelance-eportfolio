import picture from "../assets/justin.jpg";
import collageBG1 from "../assets/collage 1.png"
import collageBG2 from "../assets/collage 2.png"
import resume from "../assets/resume.pdf"
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing({ landing }) {
  return (
    <section id="landing" ref={landing}>
      <div className="row">
        <header>
          <figure className="header__picture--wrapper">
            <img src={picture} alt="" className="header__picture" />
          </figure>
          <div className="header__content">
            <h1 className="header__title">
              Hey, Justin here!{" "}
              <Typical loop={Infinity} steps={[1500, "", 1500, "Poet", 1500, "Writer", 2100, "Web Developer", 2000]} />
            </h1>
						<h2 className="header__sub-title">
						<Typical loop={Infinity} steps={[1000, "Poet", 1500, "Writer", 2100, "Web Developer"]} />
						</h2>
            <p className="header__para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              ducimus perspiciatis provident sunt voluptates ipsum.
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Landing;
