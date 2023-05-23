import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Nav({ handleClick, works, home }) {
	const [load, setLoad] = useState(false)

	function onClickMenu(){
		setLoad((prev) => !prev)
	}

  return (
    <nav>
      <div className="nav__row">
        <div className="nav__logo text__color">Justin Cruzana</div>
        <ul className="nav__links">
          <li className="nav__link link__hover-effect" onClick={() => handleClick(home)}>Home</li>
          <li className="nav__link link__hover-effect" onClick={() => handleClick(works)}>Works</li>
          <li className="nav__link--main">
						<a href="mailto:justinandrewcruzana@gmail.com" className="main__link" >Contact</a>	
					</li>
        </ul>
        <button className="burger__menu" onClick={onClickMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>
				{ load && 
					<div className="menu__backdrop">
          <button className="menu__exit" onClick={onClickMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__link" onClick={() => handleClick(home)}>Home</li>
            <li className="menu__link">
							<a href="mailto:justinandrewcruzana@gmail.com" >Contact</a>	
						</li>
            <li className="menu__link" onClick={() => handleClick(works)}>
              Works
            </li>
          </ul>
        </div>
				}
      </div>
    </nav>
  );
}

export default Nav;
