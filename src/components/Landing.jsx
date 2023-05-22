import picture from "../assets/justin.jpg";
import collageBG1 from "../assets/collage 1.png"
import collageBG2 from "../assets/collage 2.png"
import Typical from "react-typical";

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
              Hey, <span className="text__color">Justin</span> here!
            </h1>
						<h2 className="header__sub-title">
						<Typical loop={Infinity} steps={[1500, "", 1500, "Poet", 1500, "Writer", 2100, "Web Developer", 2000]} />
						</h2>
            <p className="header__para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              ducimus perspiciatis provident sunt voluptates ipsum.
            </p>
          </div>
        </header>
				<img src={collageBG1} alt="" className="bg__filler collage__bg1" />
				<img src={collageBG2} alt="" className="bg__filler collage__bg2" />
      </div>
    </section>
  );
}

export default Landing;
