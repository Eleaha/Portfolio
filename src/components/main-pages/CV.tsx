import { useEffect } from "react";
import cvData from "../../data/cv-data.json";
import { TechTag } from "../sub-components/Tech-tag";
import { SkillCategory, Role, Education } from "../../interfaces";

export function CV({ setActivePage }: any) {
	useEffect(() => {
		setActivePage("cv");
	}, []);

	return (
		<div className="page">
			<h1 className="page-title">CV</h1>
			<button>
				<a
					href="../../../public/Eleanor Harrington CV.pdf"
					download="Ellie Harrington CV.pdf"
					className="cv-download"
				>
					Download
				</a>
			</button>
			<p>{cvData.intro}</p>
			<div className="cv-section" id="technical-skills-section">
				<h2>Technical Skills</h2>
				<ul>
					{cvData.technicalSkills.map((skillCategory: SkillCategory, index: number) => {
						return (
							<li key={index}>
								<h3>{skillCategory.category}:</h3>
								<div className="cv-skill-tag-container">
									{skillCategory.skills.map((skill: string, skillIndex: number) => {
										return <TechTag key={skillIndex} tech={skill} />;
									})}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="cv-section" id="experiences-section">
				<h2>Experience</h2>
				{cvData.experience.map((role: Role, index: number) => {
					return (
						<li key={index}>
							<h3>
								{role.title} - {role.where}
							</h3>
							<h4>{role.when}</h4>
							<ul>
								{role.description.map((description: string, descriptionIndex: number) => {
									return <li key={descriptionIndex}>{description}</li>;
								})}
							</ul>
						</li>
					);
				})}
			</div>

			<div className="cv-section" id="education-section">
				<h2>Education</h2>
				<ul>
					{cvData.education.map((education: Education, index: number) => {
						return (
							<li key={index}>
								<h3>
									{education.where} - {education.level}
								</h3>
								<h4>Completed {education.completed}</h4>
								{education.subjects ? (
									<ul>
										{education.subjects.map((subject: string, subjectIndex: number) => {
											return <li key={subjectIndex}>{subject}</li>;
										})}
									</ul>
								) : null}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="cv-section" id="hobbies-and-interests-section">
				<h2>Hobbies and Interests</h2>
				<ul>
					{cvData.hobbiesAndInterests.map((hobby: string, index: number) => {
						return <li key={index}>{hobby}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
