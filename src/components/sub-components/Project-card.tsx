import { ProjectCardProps } from "../../interfaces";
import { ClickThroughSlideshow } from "./Click-through-slideshow";
import { TechTag } from "./Tech-tag";

//iterate through the project-index
//for each project
// slideshow on hover

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<figure className="project-card">
			<div className="project-card-cts-wrapper">
				<ClickThroughSlideshow images={project["imgAddresses"]} />
			</div>
			<figcaption>
				<h2>{project.name}</h2>
				{project["techStack"].map((tech: string, index: number) => {
					return <TechTag tech={tech} key={index} />;
				})}
				<p>{project["description"]}</p>
				<a href="">Hosted Site</a>
				<a href="">Repo</a>
			</figcaption>
		</figure>
	);
}
