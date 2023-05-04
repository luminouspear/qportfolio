import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import {
	experiences,
	sectionOverviews,
	additionalExperiences,
} from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#122111", color: "#122111" }}
			contentArrowStyle={{ borderRight: "7px solid #122111" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[72%] h-[72%] object-contain "
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-qportfolio-white font-gloock text-2xl  -mb-2">
					{experience.title}
				</h3>
				<p className="text-qportfolio-white font-semibold m-0 text-sm">
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-qportfolio-white text-sm pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
			<motion.div variants={textVariant()}>

				<p className={styles.darkSectionSubText}>
					{sectionOverviews[1].subtitle}
				</p>
				<h2 className={styles.sectionHeadText}>
					{sectionOverviews[1].title}
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
			<div className="flex flex-col md:flex-row gap-6 px-2 md:px-4 lg:px-6 xl:px-12">
				{additionalExperiences.map((experience, index) => (
					<div
						key={`experience-${index}`}
						className="w-full md:w-1/3 flex flex-col bg-primary-green p-8 rounded-md"
					>
						<h3 className="text-qportfolio-white font-bold mb-6 text-xl">
							{experience.title}
						</h3>
						<p className="text-qportfolio-white text-base">
							{experience.subtitle}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Experience, "work");
