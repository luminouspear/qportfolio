import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { sectionOverviews, projects, legacyProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
	return (
		<div
			className={`md:px-32 xl:px-[13rem] 2xl:px-80  px-12 mt-6 2xl:-mx-64 py-12 bg-qportfolio-black`}
		>
			<span className="hash-span" id="projects">
				&nbsp;
			</span>
			<div className="max-w-7xl mx-auto">
				<motion.div variants={textVariant()}>
					<p className={styles.whiteSectionSubText}>
						{sectionOverviews[3].subtitle}
					</p>
					<h2 className={styles.darkSectionHeadText}>
						{sectionOverviews[3].title}
					</h2>
				</motion.div>
				<div className="w-full flex">
					<motion.p
						variants={fadeIn("", "", 0.1, 1.0)}
						className="mt-3 text-qportfolio-white text-lg max-w-3xl"
					>
						{sectionOverviews[3].body}
					</motion.p>
				</div>
				<h3 className="text-qportfolio-white font-bold text-2xl  my-8">
					Recent Design & Development Work
				</h3>
				<div className="mt-8 flex flex-wrap gap-6 lg:gap-6 flex-col md:flex-row">
					{projects.map((project, index) => (
						<ProjectCard
							key={`project-${index}`}
							index={index}
							{...project}
						/>
					))}
				</div>
				<h3 className="text-qportfolio-white font-bold text-2xl  mt-8 mb-4">
					Legacy Design Work
				</h3>
				<p className="text-qportfolio-white font-regular text-base">
					A small collection of some projects I'm really proud of
					leading.
				</p>
				<div className="mt-8 flex flex-wrap gap-6 flex-col md:flex-row">
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
