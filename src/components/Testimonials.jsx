import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials, sectionOverviews } from "../constants";
import { FeedbackCard } from "./FeedbackCard";

const Testimonials = () => {
	return (
		<div className="md:px-32 xl:px-[13rem] 2xl:px-[22rem] px-12  py-12 translate-x-6  bg-primary-green ">
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
				className={`mt-12 pb-14 flex flex-col flex-wrap gap-6 text-qportfolio-white`}
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

export default Testimonials;
