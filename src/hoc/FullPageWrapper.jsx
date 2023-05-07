import { motion } from "framer-motion";

import { styles } from "../styles";

const FullPageWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section

				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`w-full max-w-7xl container h-screen mx-auto`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default FullPageWrapper;
