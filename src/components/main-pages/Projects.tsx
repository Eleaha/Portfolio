import { useEffect } from "react";

export function Projects({ setActivePage }: any) {
	useEffect(() => {
		setActivePage("projects");
	}, []);
	return (
		<div className="page">
			<h1>Projects</h1>
		</div>
	);
}
