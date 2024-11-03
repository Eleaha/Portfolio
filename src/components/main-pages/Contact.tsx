import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact({ setActivePage }: any) {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		message: "",
	});

	useEffect(() => {
		setActivePage("contact");
	}, []);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const sendEmail = async (e: any) => {
		e.preventDefault();
		try {
			await emailjs.send(
				"service_f5vqbw2",
				"template_nv2ydo9",
				formData,
				"0GYLrYXM7mJJwAduX"
			);
			console.log("worked!!");
		} catch (err) {
			console.log("uh oh email not sent :(");
		}
	};

	return (
		<div className="page">
			<h1 className="page-title">Contact</h1>
			<form onSubmit={sendEmail}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					value={formData.name}
					onChange={handleChange}
				/>
				<label htmlFor="company">Company</label>
				<input
					type="text"
					id="company"
					value={formData.company}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email *</label>
				<input
					type="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<label htmlFor="message">Message *</label>
				<textarea id="message" value={formData.message} onChange={handleChange} />
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
}
