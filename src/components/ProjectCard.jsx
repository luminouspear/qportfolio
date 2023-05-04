import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";

export const ProjectCard = ({
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
					max: 6,
					scale: 1.02,
					speed: 125,
					reverse: true,
				}}
				className="bg-qportfolio-sage p-5 rounded-md md:w-auto md:flex-wrap lg:flex-nowrap lg:w-72 xl:w-80 2xl:w-96 w-full"
			>
				<div className="relative w-full lg:h-48 h-72">
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
						<p
							key={tag.name}
							className={`text-base text-${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};
