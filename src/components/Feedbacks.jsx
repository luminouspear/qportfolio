import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials, sectionOverviews } from "../constants";

const FeedbackCard = ({
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
<<<<<<< HEAD
			className=" bg-qportfolio-white p-5 rounded-md lg:w-72 xl:w-80 w-full"
=======
<<<<<<< HEAD
			className=" bg-qportfolio-white p-5 rounded-md lg:w-72 xl:w-80 w-full"
=======
			className=" bg-qportfolio-white p-5 rounded-md  w-full"
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
		>
			<p className="text-qportfolio-black tracking-wider text-xl font-semibold">
				{testimonial}
			</p>
<<<<<<< HEAD
			<div className="mt-7 flex justify-between items-center gap-1">
=======
<<<<<<< HEAD
			<div className="mt-7 flex justify-between items-center gap-1">
=======
			<div className="mt-7 flex  justify-between items-center gap-1">
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
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

const Feedbacks = () => {
	return (
<<<<<<< HEAD
		<div className="sm:px-32 px-6 mx-auto w-screen py-12 bg-primary-green ">
=======
<<<<<<< HEAD
		<div className="sm:px-32 px-6 mx-auto w-screen py-12 bg-primary-green ">
=======
		<div className="md:px-32 xl:px-[13rem] 2xl:px-[22rem] px-12  w-screen py-12 bg-primary-green ">
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
			<span className="hash-span" id="testimonials">
				&nbsp;
			</span>
			<motion.div variants={textVariant()}>
				<p className={styles.whiteSectionSubText}>
					{sectionOverviews[4].subtitle}
				</p>
				<h2 className={styles.whiteSectionHeadText}>
					{sectionOverviews[4].title}
				</h2>
			</motion.div>
			<div
<<<<<<< HEAD
				className={`mt-12 pb-14 flex flex-wrap gap-6 text-qportfolio-white`}
=======
<<<<<<< HEAD
				className={`mt-12 pb-14 flex flex-wrap gap-6 text-qportfolio-white`}
=======
				className={`mt-12 pb-14 flex flex-col flex-wrap gap-6 text-qportfolio-white`}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
			>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	);
};

export default Feedbacks;
