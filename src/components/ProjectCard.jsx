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
		<motion.div
			variants={fadeIn("up", "spring", index * 0.25, 0.75)}
			className="lg:col-span-4 "
		>
			<Tilt
				options={{
					max: 6,
					scale: 1.02,
					speed: 125,
					reverse: true,
				}}
				className="w-full p-5 rounded-md bg-qportfolio-sage md:w-auto md:flex-wrap lg:flex-nowrap "
			>
				<div className="relative w-full lg:h-48 h-72">
					<img
						src={image}
						loading="lazy"
						alt={name}
						className="object-cover w-full h-full rounded-md"
					/>
					<div className="absolute inset-0 flex justify-end m-4 card-img_hover">
						{githubLink && (
							<div
								onClick={() => {
									window.open(git_source_code_link, "_blank");
								}}
								className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
							>
								<img
									src={github}
									alt={`Github link for ${name} project.`}
									className="object-contain w-1/2 h-1/2"
								/>
							</div>
						)}
						{url_location && (
							<div
								onClick={() => {
									window.open(url_location, "_blank");
								}}
								className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
							>
								<img
									src={location}
									alt={`Github link for ${name} project.`}
									className="object-contain w-1/2 h-1/2"
								/>
							</div>
						)}
					</div>
				</div>
				<div className="mt-6">
					<h3 className="mb-4 text-2xl font-bold">{name}</h3>
					{dates && <h3>{dates}</h3>}
					<p>{description}</p>
				</div>
				<div className="flex flex-wrap gap-1 mt-2 text-xs font-bold">
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
