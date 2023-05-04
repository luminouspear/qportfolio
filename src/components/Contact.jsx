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
		<div className="max-w-7xl w-full lg:h-[850px] xl:h-[800px] 2xl:h-[900px] ">
			<div className="lg:mt-36 2xl:mt-0 mt-0 flex  flex-col-reverse lg:flex-row gap-10 justify-center items-center ml-12 lg:ml-0 relative   lg:min-h-fit">
				<motion.div
					variants={slideIn("right", "tween", 0.2, 0.5)}
					className=" lg:w-3/4 w-full lg:ml-[25%] lg:pr-8 lg:pt-[10%] rounded-lg"
				>
					<img
						src={sectionOverviews[5].image}
						alt="Contact Dan"
						className=" h-full w-full object-contain rounded-lg"
					/>
				</motion.div>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 0.5)}
					className="lg:w-1/2 w-full bg-primary-green p-8 rounded-lg lg:absolute lg:left-8 lg:h-fit 2xl:top-16"
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
						className="mt-12 flex flex-col gap-8"
					>
						<label className="flex flex-col">
							<span className="text-qportfolio-white font-medium mb-4">
								Your Name
							</span>
							<input
								type="text"
								className="bg-qportfolio-white py-4 px-6 placeholder:text-qportfolio-black/60 rounded-lg outline-none border-none font-medium"
								name="name"
								placeholder="What's your name?"
								value={form.name}
								onChange={handleChange}
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-qportfolio-white font-medium mb-4">
								Your Email
							</span>
							<input
								type="email"
								className="bg-qportfolio-white py-4 px-6 placeholder:text-qportfolio-black/60 rounded-lg outline-none border-none font-medium"
								name="email"
								placeholder="What's your email address?"
								value={form.email}
								onChange={handleChange}
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-qportfolio-white font-medium mb-4">
								Your Message
							</span>
							<textarea
								rows="7"
								className="bg-qportfolio-white py-4 px-6 placeholder:text-qportfolio-black/60 rounded-lg outline-none border-none font-medium"
								name="message"
								placeholder="How can I help you today?"
								value={form.message}
								onChange={handleChange}
							/>
						</label>
						{formSubmitted ? (
							<p className="text-qportfolio-white font-bold text-2xl">
								Thanks for your email! I'll get back to you
								soon!
							</p>
						) : (
							<button
								type="submit"
								className="bg-secondary-green py-4 px-6 rounded-lg text-qportfolio-black font-bold text-2xl"
							>
								{loading ? "Sending..." : "Submit"}
							</button>
						)}
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
