import { blogTestData, sectionOverviews } from "../constants";
import { styles } from "../styles";
import { BlogPreview } from "./BlogPreview";

export default function BlogList() {
	const blogStaticData = sectionOverviews[6];

	return (
		<>
			<section className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
				<h3 className={styles.darkSectionSubText}>
					{blogStaticData.subtitle}
				</h3>
				<h2 className={`${styles.darkSectionHeadText} `}>
					{blogStaticData.title}
				</h2>
				<p className="mb-8">{blogStaticData.body}</p>
				{blogTestData.map((blog, index) => (
					<BlogPreview key={blog.id + blog.title} data={blog} />
				))}
			</section>
		</>
	);
}
