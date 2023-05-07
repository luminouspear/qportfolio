import { VerticalTimeline } from "react-vertical-timeline-component";
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
import { ExperienceCard } from "./ExperienceCard";

const Experience = () => {
	return (
		<div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
			<motion.div >
				<h3 className={styles.darkSectionSubText}>
					{sectionOverviews[1].subtitle}
				</h3>
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
