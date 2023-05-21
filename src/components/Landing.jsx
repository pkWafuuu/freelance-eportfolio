import picture from "../assets/b.jpg"

function Landing() {
  return (
    <section id="landing">
      <div className="row">
        <header>
          <img src={picture} alt="" className="header__picture" />
          <div className="header__content">
            <h1 className="header__title">Hey, Justin here!</h1>
            <p className="header__para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              ipsum!
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Landing;