import { FullPageWrapper } from "../hoc";
import "react-quill/dist/quill.snow.css";
import { styles } from "../styles";
import { Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import Editor from "./Editor";
import { handleTags } from "../utils/text";
import { useRedirectIfNotLoggedIn } from "../hoc/useRedirectIfNotLoggedIn";

const NewPost = () => {


	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [tags, setTags] = useState("");
	const [content, setContent] = useState("");
	const [files, setFiles] = useState("");
	const [featured, setFeatured] = useState(false);
	const [slug, setSlug] = useState("")

	const now = new Date();
	const timezoneOffsetInMs = now.getTimezoneOffset() * 60 * 1000;
	const currentTimestamp = new Date(now - timezoneOffsetInMs)
	.toISOString()
	.slice(0, -8);
	const [publicationDate, setPublicationDate] = useState("");

	const [redirect, setRedirect] = useState(false);

	const { loading, userInfo } = useContext(UserContext);

	useRedirectIfNotLoggedIn();

	const username = userInfo?.username;

		const path =
			process.env.NODE_ENV === "production"
				? "https://danmccollum.com"
				: "http://127.0.0.1:4000";

	async function createNewPost(e) {
        const data = new FormData();
        const tagArray = tags.split(',').map(tag=>tag.trim())
        console.log('tags :', tags);

		data.set("title", title);
		data.set("author", username);
		data.set("summary", summary);
		data.set("tags", tagArray);
		data.set("content", content);
		data.set("mainImage", files[0]);
		data.set("featured", featured);
        data.set("date", publicationDate ? publicationDate : currentTimestamp);

		e.preventDefault();
		const response = await fetch(`${path}/api/createpost`, {
			method: "POST",
			body: data,
			credentials: "include",
		});

		if (response.status === 200) {
			setRedirect(true);
		}
	}

	if (redirect) {
		return <Navigate to={"/"} />;
	}

	return (
		<div className="flex flex-col items-center justify-start min-h-screen mx-auto">
			<form
				className="container flex flex-col max-w-4xl p-4 mt-24 border rounded-md border-black/10"
				onSubmit={createNewPost}
				encType="multipart/form-data"
			>
				<h1 className={styles.sectionHeadText}>Write a New Post</h1>
				<input
					className="px-2 py-2 my-2 text-sm border rounded-md border-inherit"
					type="title"
					placeholder={"Post Title"}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					className="px-2 py-2 my-2 text-sm border rounded-md border-inherit"
					type="summary"
					placeholder={"Summary"}
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
				/>
				<input
					className="px-2 py-2 my-2 text-sm border rounded-md border-inherit"
					type="Tags"
					placeholder={"Tags"}
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>
				<input
					className="px-2 py-2 my-2 text-sm border rounded-md border-inherit"
					type="datetime-local"
					value={publicationDate ? publicationDate : currentTimestamp}
					onChange={(e) => setPublicationDate(e.target.value)}
				/>
				<input
					type="file"
					name="file"
					onChange={(e) => setFiles(e.target.files)}
					className="px-2 my-2"
				/>
				<Editor
					className="my-2 bg-white"
					value={content}
					onChange={setContent}
				/>
				<div className="flex items-center gap-2 px-2 py-2">
					<input
						type="checkbox"
						label="Featured article"
                        id="featuredArticle"
                        checked={featured}
						onChange={() => setFeatured(!featured)}
						className="inline px-2 my-2"
					/>
					<label htmlFor="featuredArticle">Featured article?</label>
				</div>
				<button className="py-2 text-2xl font-bold rounded-md bg-qportfolio-black text-qportfolio-white">
					Create Post
				</button>
			</form>
		</div>
	);
};

export default FullPageWrapper(NewPost, "");
