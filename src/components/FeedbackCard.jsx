import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => {
	return (
		<motion.div
			variants={fadeIn("", "spring", index * 0.25, 0.75)}
			className=" bg-qportfolio-white p-5 rounded-md  w-full"
		>
			<p className="text-qportfolio-black tracking-wider text-xl font-semibold">
				{testimonial}
			</p>

			<div className="mt-7 flex  justify-between items-center gap-1">
				<div className="flex flex-1 flex-col text-qportfolio-black">
					<p className="text-base  text-primary-green font-bold">
						<span className=" text-xl text-primary-green">~</span>
						{name}
					</p>
					<p className="font-base text-sm text-secondary-green">
						{designation} at {company}
					</p>
				</div>
				<img
					src={image}
					className="w-12 h-12 rounded-full"
					alt={`Feedback by ${name}`}
				/>
			</div>
		</motion.div>
	);
};
