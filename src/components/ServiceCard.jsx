import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const ServiceCard = ({ index, title, icon }) => {
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
			<motion.div
				variants={fadeIn("right", "spring", -0.5 * index, 0.075)}
				className="w-full h-full bg-primary-green group hover:bg-secondary-green p-1.5 rounded-xl shadow-inner flex flex-col items-center justify-center gap-6 group"
			>
				<img
					src={icon}
					alt={title}
					className="w-24 h-24 object-contain"
				/>
				<h3 className="text-qportfolio-white group-hover:text-qportfolio-white text-xl font-bold text-center">
					{title}
				</h3>
			</motion.div>
		</Tilt>
	);
};
