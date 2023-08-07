import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { sectionOverviews, projects, legacyProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
	return (
		<div
			className={`md:px-32 xl:px-[13rem] 2xl:px-80  px-12 mt-6 2xl:-mx-64 py-12 bg-qportfolio-black overflow-hidden`}
		>
			<span className="hash-span" id="projects">
				&nbsp;
			</span>
			<div className="mx-auto max-w-7xl">
				<motion.div variants={textVariant()}>
					<p className={styles.whiteSectionSubText}>
						{sectionOverviews[3].subtitle}
					</p>
					<h2 className={styles.darkSectionHeadText}>
						{sectionOverviews[3].title}
					</h2>
				</motion.div>
				<div className="flex w-full">
					<motion.p
						variants={fadeIn("", "", 0.1, 1.0)}
						className="max-w-3xl mt-3 text-lg text-qportfolio-white"
					>
						{sectionOverviews[3].body}
					</motion.p>
				</div>
				<h3 className="my-8 text-2xl font-bold text-qportfolio-white">
					Recent Design & Development Work
				</h3>
				<div className="grid grid-flow-col gap-6 mt-8 lg:grid-cols-12 lg:gap-4 md:grid-flow-row">
					{projects.map((project, index) => (
						<ProjectCard
							key={`project-${index}`}
							index={index}
							{...project}
						/>
					))}
				</div>
				<h3 className="mt-8 mb-4 text-2xl font-bold text-qportfolio-white">
					Legacy Design Work
				</h3>
				<p className="text-base text-qportfolio-white font-regular">
					A small collection of some projects I'm really proud of
					leading.
				</p>
				<div className="grid grid-flow-col gap-6 mt-8 lg:grid-cols-12 lg:gap-4 md:grid-flow-row">
					{legacyProjects.map((project, index) => (
						<ProjectCard
							key={`project-${index}`}
							index={index}
							{...project}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
