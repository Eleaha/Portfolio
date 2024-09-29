import { useEffect } from "react";

export function CV({ setActivePage }: any) {
	useEffect(() => {
		setActivePage("cv");
	}, []);
	return (
		<div className="page">
			<h1 className="page-title">CV</h1>
		</div>
	);
}
