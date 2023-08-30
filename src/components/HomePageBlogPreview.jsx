import { Link } from "react-router-dom";
import { blogTestData, sectionOverviews } from "../constants";
import { styles } from "../styles";
import { BlogPreview } from "./BlogPreviewCard";
import { useEffect, useState } from "react";

export default function BlogList() {
	const blogStaticData = sectionOverviews[6];

	const [posts, setPosts] = useState([]);

		const path =
			process.env.NODE_ENV === "production"
				? "https://danmccollum.com"
				: "http://127.0.0.1:4000";

	useEffect(() => {
		fetch(`${path}/api/posts?limit=3`).then((response) => {
			response.json().then((posts) => {
				setPosts(posts);
			});
		});
	}, []);

	return (
		<>
			<section className={`sm:px-32 px-8 mx-auto max-w-7xl mt-12`}>
				<h3 className={styles.blackSectionSubText}>
					{blogStaticData.subtitle}
				</h3>
				<h2 className={`${styles.blackSectionHeadText} `}>
					{blogStaticData.title}
				</h2>
				<p className="mb-8">{blogStaticData.body}</p>
				{posts.length > 0 &&
					posts.map((blog, index) => (
						<BlogPreview key={blog._id + blog.title} {...blog} />
					))}
				<Link to={"/blog"} className="flex justify-center">
					<button className="px-16 py-4 text-xl font-bold border rounded-lg cursor-pointer border-secondary-green text-secondary-green hover:border-primary-green hover:text-primary-green">
						View Blog
					</button>
				</Link>
			</section>
		</>
	);
}
