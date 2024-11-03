export interface Project {
	name: string;
	techStack: string[];
	imgAddresses: string[];
	dates: string;
	description: string;
}

export interface slideShowProps {
	images: string[];
	delay: number;
	// text?: string[];
}

export interface ProjectCardProps {
	project: Project;
}

export interface SkillCategory {
	category: string;
	skills: string[];
}

export interface Role {
	title: string;
	where: string;
	when: string;
	description: string[];
}

export interface Education {
	where: string;
	completed: number;
	level: string;
	subjects?: string[];
}

export interface FormData {
	name?: string;
	company?: string;
	email?: string;
	message?: string;
}
