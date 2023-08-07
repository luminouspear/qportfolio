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
		<div className="max-w-7xl w-full lg:h-[850px] xl:h-[800px] 2xl:h-[900px] overflow-hidden">
			<div className="relative flex flex-col-reverse items-center justify-center gap-10 mt-0 ml-12 lg:mt-36 2xl:mt-0 lg:flex-row lg:ml-0 lg:min-h-fit">
				<motion.div
					variants={slideIn("right", "tween", 0.2, 0.5)}
					className=" lg:w-3/4 w-full lg:ml-[25%] lg:pr-8 lg:pt-[10%] rounded-lg"
				>
					<img
						src={sectionOverviews[5].image}
						alt="Contact Dan"
						className="object-contain w-full h-full rounded-lg "
					/>
				</motion.div>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 0.5)}
					className="w-full p-8 rounded-lg lg:w-1/2 bg-primary-green lg:absolute lg:left-8 lg:h-fit 2xl:top-16"
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
							<span className="mb-4 font-medium text-qportfolio-white">
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
							<span className="mb-4 font-medium text-qportfolio-white">
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
								className="px-6 py-4 text-2xl font-bold rounded-lg bg-secondary-green text-qportfolio-black"
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
