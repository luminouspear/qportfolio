import { blogTestData, sectionOverviews } from "../constants";
import { styles } from "../styles";
import { BlogPreview } from "./BlogPreview";
import { useEffect, useState } from 'react'

export default function BlogList() {
	const blogStaticData = sectionOverviews[6];

	const [posts, setPosts] = useState([]);


	useEffect(() => {
		fetch('http://localhost:4000/posts?featuredArticles=2').then(response => {
			response.json().then((posts) => {
				setPosts(posts)
    console.log('posts :', posts);
			})
		})
	}, [])

	return (
		<>
			<section className={`${styles.paddingX} mx-auto max-w-7xl mt-12`}>
				<h3 className={styles.blackSectionSubText}>
					{blogStaticData.subtitle}
				</h3>
				<h2 className={`${styles.blackSectionHeadText} `}>
					{blogStaticData.title}
				</h2>
				<p className="mb-8">{blogStaticData.body}</p>
				{posts.length > 0 &&
					posts.map((blog, index) => (
						<BlogPreview key={blog._id + blog.title} data={blog} />
					))}
			</section>
		</>
	);
}
