import { useEffect } from "react";
import { ProjectCard } from "../sub-components/Project-card";
import { Project } from "../../interfaces";
import projectData from "../../data/project-index.json";

export function Projects({ setActivePage }: any) {
	useEffect(() => {
		setActivePage("projects");
	}, []);
	return (
		<section className="page">
			<h1 className="page-title">Projects</h1>
			<div id="project-card-container">
				{projectData.map((project: Project, index: number) => {
					return <ProjectCard project={project} key={index} />;
				})}
			</div>
		</section>
	);
}
