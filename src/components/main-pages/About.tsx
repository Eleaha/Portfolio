import { Slideshow } from "../Slideshow";
import projectData from "../../data/project-index.json"
import { useEffect } from "react";

const images = projectData["testProject"]["imgAddresses"];

export function About({ setActivePage }: any) {
	useEffect(() => {
		setActivePage("about");
	}, []);

	return (
		<div className="page" id="about-page">
			<div id="about-top-section-wrapper">
				<div id="about-text-container">
					<h1 className="page-title">About</h1>
					<p id="about-body">
						Some test about me and how I got here. <br />
						Some other stuff like fun facts or where I'm based or what sort of work im
						interested in.
					</p>
				</div>
				<Slideshow
					images={images}
					delay={6000}
					text={["test3", "test2", "test1"]}
				/>
			</div>
		</div>
	);
}
