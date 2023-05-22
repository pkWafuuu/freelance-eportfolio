import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ handleClick, works }) {
  return (
    <nav>
      <div className="nav__row">
        <div className="nav__logo">Justin Cruzana</div>
        <ul className="nav__links">
          <li className="nav__link">Home</li>
          <li className="nav__link">Contact</li>
          <li className="nav__link" onClick={() => handleClick(works)}>
            Works
          </li>
        </ul>
        <button className="burger__menu">
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className="menu__backdrop"></div>
      </div>
    </nav>
  );
}

export default Nav;
