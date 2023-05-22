
function Project({ info }) {
  return (
    <div className="project keen-slider__slide">
      <div className="project__content--wrapper">
        <h2 className="project__title">{info.title}</h2>
        <p className="project__summary">{info.summary}</p>
				<div className="project__links">
					<div className="project__link">link</div>
				</div>
      </div>
			<figure className="project__img--wrapper ">
      	<img src={info.url} alt="" className="project__img" />
			</figure>
    </div>
  );
}

export default Project;
