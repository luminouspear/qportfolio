import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 53893bb (updates to UI)
import { sectionOverviews } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";



const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="w-full sm:w-5/12 ">
<<<<<<< HEAD
=======
=======
import { sectionOverviews } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt
			className="w-full md:w-5/12 "
			options={{
				max: 12,
				scale: 1.02,
				speed: 125,
				reverse: true,
			}}
		>
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
			<motion.div
				variants={fadeIn("right", "spring", -0.5 * index, 0.075)}
				className="w-full bg-primary-green group hover:bg-secondary-green p-1.5 rounded-xl shadow-inner"
			>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 53893bb (updates to UI)
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
<<<<<<< HEAD
=======
=======
				<motion.div className="bg-primary-green bg-opacity-95 rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img
						src={icon}
						alt={title}
						className="w-24 h-24 object-contain"
					/>
					<h3 className="text-qportfolio-white group-hover:text-secondary-green text-xl font-bold text-center">
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
						{title}
					</h3>
				</motion.div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
<<<<<<< HEAD
		<div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
=======
<<<<<<< HEAD
		<div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
=======
		<div className={`sm:px-16 px-6 mx-auto max-w-7xl mt-12`}>
			<motion.div variants={textVariant()}>
				<p className={styles.darkSectionSubText}>
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
					{sectionOverviews[0].subtitle}
				</p>
				<h2 className={styles.sectionHeadText}>
					{sectionOverviews[0].title}
				</h2>
			</motion.div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 53893bb (updates to UI)
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
<<<<<<< HEAD
=======
=======
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="w-11/12 md:w-8/12 mb-16"
			>
				{sectionOverviews[0].body}
			</motion.p>
			<div className="flex flex-col-reverse md:flex-row-reverse w-full ">
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
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
