import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { sectionOverviews, technologies } from "../constants"
import {textVariant } from "../utils/motion"



const Tech = () => {
  return (
    <div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
      <motion.div variants={textVariant()}>
        <p className={styles.darkSectionSubText}>
          {sectionOverviews[2].subtitle}
        </p>
        <h2 className={styles.sectionHeadText}>
          {sectionOverviews[2].title}
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap items-center justify-center w-full mx-auto mt-12 space-x-4 space-y-4 ">
        {technologies.map((technology, index) => (
          <img key={`${technology.name}-${index}`}
            src={technology.icon}
            alt={technology.name}
            className="object-contain w-1/6 sm:w-1/5 lg:col-span-1 md:w-1/6 lg:w-1/12" />
        ) )}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")