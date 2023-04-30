import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { sectionOverviews, technologies } from "../constants"
import {textVariant } from "../utils/motion"



const Tech = () => {
  return (
    <div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {sectionOverviews[2].subtitle}
        </p>
        <h2 className={styles.sectionHeadText}>
          {sectionOverviews[2].title}
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap items-center gap-6">
        {technologies.map((technology, index) => (
          <img key={`${technology.name}-${index}`}
            src={technology.icon}
            alt={technology.name}
            className="h-20 w-20 lg:h-28 lg:w-28 object-contain" />
        ) )}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")