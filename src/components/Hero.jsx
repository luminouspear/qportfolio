import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const [activeUnderline, setActiveUnderline] = useState("build");
	const [userInteraction, setUserInteraction] = useState(false);
	const intervalIdRef = useRef(null);

	useEffect(() => {
		const changeActiveUnderline = () => {
			setActiveUnderline((prev) => {
				switch (prev) {
					case "build":
						return "inspire";
					case "inspire":
						return "design";
					case "design":
					default:
						return "build";
				}
			});
		};

		if (!userInteraction) {
			intervalIdRef.current = setInterval(changeActiveUnderline, 5000);
		}

		return () => {
			clearInterval(intervalIdRef.current);
		};
	}, [userInteraction]);

	const handleClick = (value) => {
		setActiveUnderline(value);
		setUserInteraction(true);
	};

	return (
		<section className="mx-auto mt-24">
			<div
				className={`${styles.paddingX}  max-w-7xl mx-auto flex flex-row items-start gap-6`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-primary-green" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="">
					<h1
						className={`${styles.heroHeadText} text-qportfolio-black`}
					>
						Hi, I'm{" "}
						<span className="text-primary-green font-gloock">
							Dan McCollum
						</span>
					</h1>
					<div
						className={`${styles.heroSubText} mt-2 text-qportfolio-black leading-[2.75rem]`}
					>
						<div className="flex gap-2">
							<p>I</p>
							<p>
								<span
									className={`${
										activeUnderline === "build"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("build")}
								>
									<a href="#work">build</a>
								</span>{" "}
								world-class experiences,<br></br>{" "}
								<span
									className={`${
										activeUnderline === "inspire"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("inspire")}
								>
									<a href="#testimonials">inspire</a>
								</span>{" "}
								change in people's lives, and <br />
								<span
									className={`${
										activeUnderline === "design"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("design")}
								>
									<a href="#projects">design</a>
								</span>
								&nbsp;whatever's coming next.
							</p>
						</div>
						<div className="ml-4 mt-8 flex flex-row gap-4 ">
							<a href="#contact">
								<button className="px-6 py-4 rounded-lg font-bold text-xl bg-primary-green hover:bg-secondary-green text-white">
									Let's Talk
								</button>
							</a>
							<a href="#work">
								<button className="px-6 py-4 rounded-lg text-xl hover:underline font-bold text-primary-green hover:text-secondary-green">
									Learn More
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
