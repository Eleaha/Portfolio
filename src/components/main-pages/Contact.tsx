import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact({ setActivePage }: any) {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		message: "",
	});

	const [isSending, setIsSending] = useState(false);
	const [displaySendingOverly, setDisplayOverlay] = useState(false);
	const [showIsInvalidForm, setShowIsInvalidForm] = useState(false);

	useEffect(() => {
		setActivePage("contact");
	}, []);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const checkValidForm = () => {
		return formData.name && formData.email && formData.message;
	};

	const sendEmail = async (e: any) => {
		e.preventDefault();
		try {
			if (!checkValidForm()) {
				setShowIsInvalidForm(true);
				Promise.reject();
			} else {
				setIsSending(true);
				setDisplayOverlay(true);
				await emailjs.send(
					"service_f5vqbw2",
					"template_nv2ydo9",
					formData,
					"0GYLrYXM7mJJwAduX"
				);
				console.log("worked!!");
				setFormData({
					name: "",
					company: "",
					email: "",
					message: "",
				});
				setIsSending(false);
				setShowIsInvalidForm(false);
			}
		} catch (err) {
			console.log("uh oh email not sent :(");
		}
	};

	return (
		<div className="page">
			{displaySendingOverly ? (
				<div id="sending-overlay" className="">
					<div className="sending-box">
						<p>{isSending ? "Sending..." : "Sent!"}</p>
						<button onClick={() => setDisplayOverlay(false)} disabled={isSending}>
							Ok!
						</button>
					</div>
				</div>
			) : null}
			<h1 className="page-title">Contact</h1>
			<form onSubmit={sendEmail}>
				<label htmlFor="name">Name*</label>
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
				{showIsInvalidForm ? <p>Please fill in all fields marked with *</p> : null}
			</form>
		</div>
	);
}
