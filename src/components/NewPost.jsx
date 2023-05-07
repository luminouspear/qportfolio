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
		const response = await fetch("http://localhost:4000/createpost", {
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
		<div className="flex justify-start  flex-col items-center mx-auto min-h-screen">
			<form
				className="mt-24 container flex flex-col max-w-4xl p-4 border border-black/10 rounded-md"
				onSubmit={createNewPost}
				encType="multipart/form-data"
			>
				<h1 className={styles.sectionHeadText}>Write a New Post</h1>
				<input
					className="px-2 py-2 my-2 border border-inherit rounded-md text-sm"
					type="title"
					placeholder={"Post Title"}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					className="px-2 py-2 my-2 border border-inherit rounded-md text-sm"
					type="summary"
					placeholder={"Summary"}
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
				/>
				<input
					className="px-2 py-2 my-2 border border-inherit rounded-md text-sm"
					type="Tags"
					placeholder={"Tags"}
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>
				<input
					className="px-2 py-2 my-2 border border-inherit rounded-md text-sm"
					type="datetime-local"
					value={publicationDate ? publicationDate : currentTimestamp}
					onChange={(e) => setPublicationDate(e.target.value)}
				/>
				<input
					type="file"
					name="file"
					onChange={(e) => setFiles(e.target.files)}
					className="my-2 px-2"
				/>
				<Editor
					className="bg-white my-2"
					value={content}
					onChange={setContent}
				/>
				<div className="flex py-2 px-2 gap-2 items-center">
					<input
						type="checkbox"
						label="Featured article"
                        id="featuredArticle"
                        checked={featured}
						onChange={() => setFeatured(!featured)}
						className="my-2 px-2 inline"
					/>
					<label htmlFor="featuredArticle">Featured article?</label>
				</div>
				<button className="py-2 bg-qportfolio-black text-qportfolio-white font-bold text-2xl rounded-md">
					Create Post
				</button>
			</form>
		</div>
	);
};

export default FullPageWrapper(NewPost, "");
