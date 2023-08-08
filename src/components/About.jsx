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
		<section className={` mx-auto max-w-7xl mt-12 flex flex-col justify-center `}>
			<motion.div variants={textVariant()}>
				<p className={styles.darkSectionSubText}>
					{sectionOverviews[0].subtitle}
				</p>
				<h2 className={styles.sectionHeadText}>
					{sectionOverviews[0].title}
				</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.1, 1)} className="w-full text-xl md:w-8/12 ">
				{sectionOverviews[0].body}
			</motion.p>

			<div className="flex flex-col-reverse w-full mt-8 md:flex-row-reverse">
				<div className="mt-4 md:mt-0 md:px-8">
					<img
						src={sectionOverviews[0].image}
						alt="Dan at the Louisiana Museum"
						className="object-cover w-full h-full rounded-lg"
					/>
				</div>
				<div className="grid w-full grid-flow-row gap-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 ">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							index={index}
							{...service}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionWrapper(About, "about");
