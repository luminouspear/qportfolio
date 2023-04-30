import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { sectionOverviews, projects, legacyProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	url_location,
  git_source_code_link,
  dates,
  githubLink,
  location,

}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-qportfolio-sage p-5 rounded-md lg:w-72 xl:w-80 w-full"
			>
				<div className="relative w-full h-36">
					<img
						src={image}
						loading="lazy"
						alt={name}
						className="w-full h-full object-cover rounded-md"
					/>
					<div className="absolute inset-0 flex justify-end m-4 card-img_hover">
						{githubLink && (
							<div
								onClick={() => {
									window.open(git_source_code_link, "_blank");
								}}
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							>
								<img
									src={github}
									alt={`Github link for ${name} project.`}
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						)}
						{url_location && (
							<div
								onClick={() => {
									window.open(url_location, "_blank");
								}}
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							>
								<img
									src={location}
									alt={`Github link for ${name} project.`}
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						)}
          </div>
				</div>
				<div className="mt-6">
					<h3 className="font-bold text-2xl mb-4">{name}</h3>
					{dates && <h3>{dates}</h3>}
					<p>{description}</p>
				</div>
          <div className="mt-2 flex flex-wrap gap-1 font-bold text-xs">
            {tags.map((tag, index) => (
              <p key={tag.name} className={`text-base text-${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<div
			className={`sm:px-32 px-6 mx-auto w-screen py-12 bg-qportfolio-black`}
		>
			<span className="hash-span" id="projects">
				&nbsp;
			</span>
			<div className="max-w-7xl">
				<motion.div variants={textVariant()}>
					<p className={styles.darkSectionSubText}>
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
				<div className="mt-8 flex flex-wrap gap-6 flex-col md:flex-row">
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

export default Works;
