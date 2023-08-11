import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export function MainPoints(caseStudy, id) {
	return (
		<div className="my-12">
			<h2 className="w-10/12 pt-12 mx-auto text-5xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
				{caseStudy.mainPointsHeading}
			</h2>
			<p
				className="w-10/12 pt-8 mx-auto mb-12 text-xl sm:text-2xl font-archivo"
				dangerouslySetInnerHTML={{
					__html: caseStudy.mainPointsSubheading,
				}}
			/>
			<div
				className={`grid grid-flow-col grid-cols-12 lg:grid-flow-row gap-4 lg:w-10/12 mx-auto `}
			>
				{caseStudy.mainPoints.map((point) => {
					const delay = 0.2 * (point.id - 1);
					return (
						<motion.div
							variants={fadeIn("up", "tween", delay, 0.33)}
							animate="show"
							key={point.id}
							className="flex flex-col items-center justify-center w-10/12 py-12 mx-auto rounded lg:py-16 bg-qportfolio-black col-span-full lg:col-span-4 lg:w-full font-archivo"
						>
							<img
								className="w-3/12 mx-auto"
								src={point.icon}
								alt={point.iconAlt}
							/>
							<h3 className="w-full px-4 mx-auto text-2xl font-bold text-center sm:text-3xl md:text-2xl text-qportfolio-white">
								{point.heading}
							</h3>
							<p className="w-full px-4 mx-auto my-4 text-xl text-center sm:text-2xl md:text-xl font-regular text-qportfolio-white ">
								{point.subheading}
							</p>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
