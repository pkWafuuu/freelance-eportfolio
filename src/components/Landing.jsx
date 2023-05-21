import picture from "../assets/b.jpg";

function Landing() {
  return (
    <section id="landing">
      <div className="row">
        <header>
          <figure className="header__picture--wrapper">
            <img src={picture} alt="" className="header__picture" />
          </figure>
          <div className="header__content">
            <h1 className="header__title">Hey, Justin here!</h1>
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
