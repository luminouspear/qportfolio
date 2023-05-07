import { useEffect, useState } from "react";
import { sectionOverviews } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { BlogPreview } from "./BlogPreviewCard";

const BlogListPage = () => {
	const [featuredPost, setFeaturedPost] = useState(null);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const allPostsResponse = await fetch("http://localhost:4000/posts");
			const allPosts = await allPostsResponse.json();

			const firstFeaturedPost = allPosts.find((post) => post.featured);
			setFeaturedPost(firstFeaturedPost);

			setPosts(
				allPosts.filter((post) => post._id !== firstFeaturedPost._id)
			);
		};

		fetchData();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="mx-auto mt-24 relative max-w-7xl  px-8 md:px-16">
			<h2 className={styles.darkSectionSubText}>
				{sectionOverviews[8].subtitle}{" "}
			</h2>
			<h1 className={styles.sectionHeadText}>
				{sectionOverviews[8].title}
			</h1>
			<p className="mb-12">{sectionOverviews[8].body}</p>
			<h3
				className={`${styles.darkSectionSubText} w-full lg:w-3/4 mx-auto`}
			>
				Featured Article
			</h3>
			{featuredPost && <BlogPreview {...featuredPost} />}
			<h3
				className={`${styles.darkSectionSubText} w-full lg:w-3/4 mx-auto`}
			>
				Additional Articles
			</h3>
			{posts.length > 0 &&
				posts.map((blog, index) => (
					<BlogPreview key={blog._id + blog.title} {...blog} />
				))}
		</div>
	);
};

export default SectionWrapper(BlogListPage, "blog");
