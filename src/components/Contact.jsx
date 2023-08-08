import { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { sectionOverviews } from "../constants";

const Contact = () => {
	const formRef = useRef();

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		emailjs
			.send(
				"service_f4iid1f",
				"template_66wtvsk",
				{
					from_name: form.name,
					to_name: "Dan McCollum - via Portfolio Site",
					from_email: form.email,
					to_email: "mccollum.d@gmail.com",
					message: form.message,
				},
				"uzmyvnrM-EtM2dzaO"
			)
			.then(
				() => {
					setLoading(false);
					setFormSubmitted(true);
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					console.log(error);
					alert(
						"Something went wrong with your email. Please try again."
					);
				}
			);
	};

	return (
		<section className="w-full max-w-7xl ">
			<div className="grid grid-flow-row grid-rows-3 gap-10 lg:ml-0 lg:grid-flow-col lg:grid-rows-3 lg:grid-cols-8 ">
				<div

					className="w-full h-auto row-span-1 row-start-1 rounded-lg lg:row-start-1 lg:col-start-4 lg:col-span-6 lg:row-span-full lg:mt-36"
				>
					<img
						src={sectionOverviews[5].image}
						alt="Contact Dan"
						className="object-contain w-full h-auto rounded-lg "
					/>
				</div>
				<div
					className="w-full row-span-2 row-start-2 p-8 rounded-lg bg-primary-green lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-full"
				>
					<p className={styles.sectionSubText}>
						{sectionOverviews[5].subtitle}
					</p>
					<h2 className={styles.whiteSectionHeadText}>
						{sectionOverviews[5].title}
					</h2>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="flex flex-col gap-8 mt-12"
					>
						<label className="flex flex-col">
							<span className="mb-4 font-medium text-qportfolio-white">
								Your Name
							</span>
							<input
								type="text"
								className="px-6 py-4 font-medium border-none rounded-lg outline-none bg-qportfolio-white placeholder:text-qportfolio-black/60"
								name="name"
								placeholder="What's your name?"
								value={form.name}
								onChange={handleChange}
							/>
						</label>
						<label className="flex flex-col">
							<span className="mt-6 mb-4 font-medium text-qportfolio-white">
								Your Email
							</span>
							<input
								type="email"
								className="px-6 py-4 font-medium border-none rounded-lg outline-none bg-qportfolio-white placeholder:text-qportfolio-black/60"
								name="email"
								placeholder="What's your email address?"
								value={form.email}
								onChange={handleChange}
							/>
						</label>
						<label className="flex flex-col">
							<span className="mt-6 mb-4 font-medium text-qportfolio-white">
								Your Message
							</span>
							<textarea
								rows="7"
								className="px-6 py-4 font-medium border-none rounded-lg outline-none bg-qportfolio-white placeholder:text-qportfolio-black/60"
								name="message"
								placeholder="How can I help you today?"
								value={form.message}
								onChange={handleChange}
							/>
						</label>
						{formSubmitted ? (
							<p className="text-2xl font-bold text-qportfolio-white">
								Thanks for your email! I'll get back to you
								soon!
							</p>
						) : (
							<button
								type="submit"
								className="px-6 py-4 mt-4 text-2xl font-bold rounded-lg bg-secondary-green text-qportfolio-black"
							>
								{loading ? "Sending..." : "Submit"}
							</button>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default SectionWrapper(Contact, "contact");
