import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { sectionOverviews } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";



const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="w-full sm:w-5/12 ">
			<motion.div
				variants={fadeIn("right", "spring", -0.5 * index, 0.075)}
				className="w-full bg-primary-green group hover:bg-secondary-green p-1.5 rounded-xl shadow-inner"
			>
				<motion.div
					options={{
						max: 1,
						scale: 1,
						speed: 10,
					}}
					className="bg-white bg-opacity-95 rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-primary-green group-hover:text-secondary-green text-xl font-bold text-center">
						{title}
					</h3>
				</motion.div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					{sectionOverviews[0].subtitle}
				</p>
				<h2 className={styles.sectionHeadText}>
					{sectionOverviews[0].title}
				</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.1, 1)} className="w-8/12">
				{sectionOverviews[0].body}
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
