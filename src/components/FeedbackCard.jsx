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
			className="w-full p-5 rounded-md bg-qportfolio-white"
		>
			<p className="text-xl font-semibold tracking-wider text-qportfolio-black"
			dangerouslySetInnerHTML={{__html: testimonial}}/>



			<div className="flex items-center justify-between gap-1 mt-7">
				<div className="flex flex-col flex-1 text-qportfolio-black">
					<p className="text-base font-bold text-primary-green">
						<span className="text-xl text-primary-green">~</span>
						{name}
					</p>
					{designation && <p className="text-sm font-base text-secondary-green">
						{designation} at {company}
					</p>}
				</div>
				{image && <img
					src={image}
					className="w-12 h-12 rounded-full"
					alt={`Feedback by ${name}`}
				/>}
			</div>
		</motion.div>
	);
};
