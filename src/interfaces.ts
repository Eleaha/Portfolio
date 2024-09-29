export interface Project {
    name: string;
    techStack: string[];
    imgAddresses: string[];
    dates: string;
    description: string
}

export interface slideShowProps {
    images: string[];
    delay: number;
    // text?: string[];
}

export interface ProjectCardProps {
    project: Project
}