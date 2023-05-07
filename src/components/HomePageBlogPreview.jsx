import { Link } from "react-router-dom";
import { blogTestData, sectionOverviews } from "../constants";
import { styles } from "../styles";
import { BlogPreview } from "./BlogPreviewCard";
import { useEffect, useState } from "react";

export default function BlogList() {
	const blogStaticData = sectionOverviews[6];

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/posts?limit=3").then((response) => {
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
					<button className="font-bold py-4 px-16 border border-secondary-green rounded-lg text-secondary-green hover:border-primary-green  text-xl hover:text-primary-green cursor-pointer">
						View Blog
					</button>
				</Link>
			</section>
		</>
	);
}
