import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
const [activeTab, setActiveTab] = useState("About")

function handleTabChange(e) {
	console.log(e.target.innerText, e.target)
	setActiveTab(e.target.innerText)
}

	return (
		<footer className="footer">
			<Link to="/" className={`footer-tab ${activeTab === "About" ? "active" : "inactive"}`} id="about-tab" onClick={handleTabChange}>
				<div>
					<p className="tab-text">About</p>
				</div>
			</Link>
			<Link to="/projects" className={`footer-tab ${activeTab === "Projects" ? "active" : "inactive"}`} id="projects-tab" onClick={handleTabChange}>
				<div>
					<p className="tab-text">Projects</p>
				</div>
			</Link>
			<Link to="/cv" className={`footer-tab ${activeTab === "CV" ? "active" : "inactive"}`} id="cv-tab" onClick={handleTabChange}>
				<div>
					<p className="tab-text">CV</p>
				</div>
			</Link>
			<Link to="/contact" className={`footer-tab ${activeTab === "Contact" ? "active" : "inactive"}`} id="contact-tab" onClick={handleTabChange}>
				<div>
					<p className="tab-text">Contact</p>
				</div>
			</Link>
		</footer>
	);
}

//create state to keep stack of the active tab
//add active class to active tabs
//change width to something like 15 vs 40 active
