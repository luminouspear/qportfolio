import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt
			className="w-full aspect-square"
			options={{
				max: 12,
				scale: 1.02,
				speed: 125,
				reverse: true,
			}}
		>
			<motion.div
				variants={fadeIn("right", "spring", -0.5 * index, 0.075)}
				initial="hidden"
				animate="show"
				className="w-full h-full bg-primary-green group hover:bg-secondary-green px-1.5 py-8 lg:py-16 rounded-xl shadow-inner flex flex-col items-center justify-center gap-6 group"
			>
				<img
					src={icon}
					alt={title}
					className="object-contain w-24 h-24 mb-8"
				/>
				<h3 className="text-xl font-bold text-center text-qportfolio-white group-hover:text-qportfolio-white">
					{title}
				</h3>
			</motion.div>
		</Tilt>
	);
};
