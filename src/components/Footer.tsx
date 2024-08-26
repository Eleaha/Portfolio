import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="footer">
			<Link to="/" className="footer-tab" id="about-tab">
				<div>
					<p className="tab-text">About</p>
				</div>
			</Link>
			<Link to="/projects" className="footer-tab" id="projects-tab">
				<div>
					<p className="tab-text">Projects</p>
				</div>
			</Link>
			<Link to="/cv" className="footer-tab" id="cv-tab">
				<div>
					<p className="tab-text">CV</p>
				</div>
			</Link>
			<Link to="/contact" className="footer-tab" id="contact-tab">
				<div>
					<p className="tab-text">Contact</p>
				</div>
			</Link>
		</footer>
	);
}
