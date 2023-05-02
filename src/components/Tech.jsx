import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { sectionOverviews, technologies } from "../constants"
import {textVariant } from "../utils/motion"



const Tech = () => {
  return (
    <div className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
      <motion.div variants={textVariant()}>
<<<<<<< HEAD
        <p className={styles.sectionSubText}>
=======
<<<<<<< HEAD
        <p className={styles.sectionSubText}>
=======
        <p className={styles.darkSectionSubText}>
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
          {sectionOverviews[2].subtitle}
        </p>
        <h2 className={styles.sectionHeadText}>
          {sectionOverviews[2].title}
        </h2>
      </motion.div>
<<<<<<< HEAD
      <div className="mt-20 flex flex-row flex-wrap items-center gap-6">
=======
<<<<<<< HEAD
      <div className="mt-20 flex flex-row flex-wrap items-center gap-6">
=======
      <div className="mt-20 flex flex-row flex-wrap items-center justify-center gap-6">
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
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