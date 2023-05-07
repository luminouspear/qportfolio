import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { styles } from "../styles";
import Editor from "./Editor";
import { handleTags } from "../utils/text";

const EditPost = () => {
	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [tags, setTags] = useState("");
	const [content, setContent] = useState("");
	const [files, setFiles] = useState("");
	const [featured, setFeatured] = useState(false);
	const [publicationDate, setPublicationDate] = useState("");
	const [username, setUsername] = useState("");

	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		fetch("http://localhost:4000/post/" + id).then((response) => {
            response.json().then(async (postInfo) => {
				setTitle(postInfo.title);
				setSummary(postInfo.summary);
				setTags(postInfo.tags.join(', '));
                setPublicationDate(postInfo.date);
                // Fetch the main image, create a Blob, and then create a File object
                const imageResponse = await fetch('http://localhost:4000/'+ postInfo.mainImage);
                const imageBlob = await imageResponse.blob();

                // Extract the file name from the image URL
                const imageUrl = new URL('http://localhost:4000/uploads/'+postInfo.mainImage);
                const imageName = imageUrl.pathname.split('/').pop();

                const imageFile = new File([imageBlob], imageName, { type: imageBlob.type });

                setFiles([imageFile]); // Set the File object to the state

				setContent(postInfo.content);
				setFeatured(postInfo.featured);
				setUsername(postInfo.author);
			});
		});
	}, []);

	async function updatePost(e) {
		e.preventDefault();
        const data = new FormData();
        const tagArray = tags.split(",").map((tag) => tag.trim());

		data.set("title", title);
		data.set("author", username);
        data.set("summary", summary);
        data.set("tags", tagArray);
		data.set("content", content);
		data.set("featured", featured);
		data.set("date", publicationDate);
		data.set("id", id);

		if (files[0]) {
			data.set("mainImage", files[0]);
		}

		const response = await fetch("http://localhost:4000/post", {
			method: "PUT",
			body: data,
			credentials: "include",
		});
		if (response.status === 200) {
			setRedirect(true);
		}
	}

	if (redirect) {
		return <Navigate to={`/post/${id}`} />;
	}

	return (
		<div className="flex justify-start  flex-col items-center mx-auto min-h-screen">
			<form
				className="mt-24 container flex flex-col max-w-4xl p-4 border border-black/10 rounded-md"
				onSubmit={updatePost}
				encType="multipart/form-data"
			>
				<h1 className={styles.sectionHeadText}>Edit Post</h1>
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
					value={publicationDate}
					onChange={(e) => setPublicationDate(e.target.value)}
				/>
				<input
					type="file"
					name="file"
					onChange={(e) => setFiles(e.target.files)}
					className="my-2 px-2"
				/>
				{files  && (
					<img
						src={'http://localhost:4000/uploads/'+files[0].name}
						alt="Current image"
						className="h-16 w-16 object-contain"
					/>
				)}
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
					Save Post
				</button>
			</form>
		</div>
	);
};

export default EditPost;
