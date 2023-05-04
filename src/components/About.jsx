import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { sectionOverviews } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ServiceCard } from "./ServiceCard";

const About = () => {
	return (
		<div className={`sm:px-16 px-6 mx-auto max-w-7xl mt-12`}>
			<motion.div variants={textVariant()}>
				<p className={styles.darkSectionSubText}>
					{sectionOverviews[0].subtitle}
				</p>
				<h2 className={styles.sectionHeadText}>
					{sectionOverviews[0].title}
				</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.1, 1)} className="w-8/12">
				{sectionOverviews[0].body}
			</motion.p>

			<div className="flex flex-col-reverse md:flex-row-reverse w-full mt-8">
				<div className="mt-4 md:mt-0">
					<img
						src={sectionOverviews[0].image}
						alt="Dan at the Louisiana Museum"
						className="h-full w-full object-cover rounded-lg"
					/>
				</div>
				<div className=" flex flex-wrap gap-4 ">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							index={index}
							{...service}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
