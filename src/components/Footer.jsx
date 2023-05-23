/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer({ handleClick, home }){
	return (
		<footer>
			<div className="footer__row">
				<h1 className="footer__title">Cruzana</h1>
				<div className="footer__copyright">Copyright &copy; 2023 Justin Cruzana</div>
				<div className="footer__divider-horizontal"></div>
				<ul className="footer__links">
					<li className="footer__link">
						<a rel="noopener noreferrer" onClick={() => handleClick(home)}>
							Home
						</a>
					</li>
					<li className="footer__link">
						<a href="https://www.linkedin.com/in/justin-cruzana-18265519a/" rel="noopener noreferrer">
							LinkedIn
						</a>
					</li>
					<li className="footer__link">
						<a href="mailto:justinandrewcruzana@gmail.com" rel="noopener noreferrer">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;