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
		<section className={`${styles.paddingX} mx-auto max-w-7xl mt-12 `}>
			<motion.div >
				<h3 className={styles.darkSectionSubText}>
					{sectionOverviews[1].subtitle}
				</h3>
				<h2 className={styles.sectionHeadText}>
					{sectionOverviews[1].title}
				</h2>
			</motion.div>

			<div className="flex flex-col mt-12">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
			<div className="grid grid-flow-row gap-6 md:grid-flow-col ">
				{additionalExperiences.map((experience, index) => (
					<div
						key={`experience-${index}`}
						className="flex flex-col w-full p-8 rounded-md md:w-full bg-primary-green"
					>
						<h3 className="mb-6 text-xl font-bold text-qportfolio-white">
							{experience.title}
						</h3>
						<p className="text-base text-qportfolio-white">
							{experience.subtitle}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SectionWrapper(Experience, "work");
