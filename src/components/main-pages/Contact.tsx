import { useEffect } from "react";

export function Contact({ setActivePage }: any) {
	useEffect(() => {
		setActivePage("contact");
	}, []);
	return (
		<div className="page">
			<h1 className="page-title">Contact</h1>
		</div>
	);
}
