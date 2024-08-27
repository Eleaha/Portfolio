export interface Project {
    techStack: string[];
    imgAddresses: string[];
    dates: string;
    description: string
}

export interface slideShowProps {
    images: string[];
    delay: number;
    text?: string[];
}