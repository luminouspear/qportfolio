import { useState, useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { styles } from "../styles";
import Editor from "./Editor";
import { handleTags } from "../utils/text";
import { useRedirectIfNotLoggedIn } from "../hoc/useRedirectIfNotLoggedIn";
import { UserContext } from "../UserContext";

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
	const [showConfirmDelete, setShowConfirmDelete] = useState(false);
	const { loading, isLoggedIn } = useContext(UserContext);

		const path =
			process.env.NODE_ENV === "production"
				? "https://danmccollum.com"
				: "http://127.0.0.1:4000";

	useRedirectIfNotLoggedIn();

	useEffect(() => {
		fetch(`${path}/post/` + id).then((response) => {
			response.json().then(async (postInfo) => {
				setTitle(postInfo.title);
				setSummary(postInfo.summary);
				setTags(postInfo.tags.join(", "));
				setPublicationDate(postInfo.date);
				// Fetch the main image, create a Blob, and then create a File object
				const imageResponse = await fetch(
					`${path}/` + postInfo.mainImage
				);
				const imageBlob = await imageResponse.blob();

				// Extract the file name from the image URL
				const imageUrl = new URL(
					`${path}/uploads/` + postInfo.mainImage
				);
				const imageName = imageUrl.pathname.split("/").pop();

				const imageFile = new File([imageBlob], imageName, {
					type: imageBlob.type,
				});

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

		const response = await fetch(`${path}/post`, {
			method: "PUT",
			body: data,
			credentials: "include",
		});
		if (response.status === 200) {
			setRedirect(true);
		}
	}

	async function deletePost() {
		const response = await fetch(`${path}/post/` + id, {
			method: "DELETE",
			credentials: "include",
		});

		if (response.status === 200) {
			setRedirect(true);
		}
    }

    function showDelete(e) {
        e.preventDefault()
        if (showConfirmDelete) {
            setShowConfirmDelete(false)
        } else {
            setShowConfirmDelete(true)
        }
    }

	if (redirect) {
		return <Navigate to={`/post/${id}`} />;
	}

	return (
		<div className="relative flex flex-col items-center justify-start min-h-screen mx-auto">
			{showConfirmDelete && <div className="absolute inset-0 flex items-center justify-center bg-black/60">
				<div className="w-1/2 h-auto rounded-xl shadow-md bg-qportfolio-white border border-qportfolio-black/50 pt-[5%] pb-[5%] z-[100] px-16">
					<h2 className={styles.darkSectionHeadText}>
						Are you sure you want to delete?
					</h2>
					<p className="py-4">This action cannot be undone.</p>
					<div className="flex flex-row gap-2">
                        <button
                            className="w-1/2 py-4 text-xl font-bold text-red-500 border border-red-500 rounded-md"
                            onClick={deletePost}
                        >
							Delete
						</button>
                        <button
                            className="w-1/2 py-4 text-xl font-bold border rounded-md border-secondary-green text-secondary-green"
                            onClick={showDelete}
                        >
							Cancel
						</button>
					</div>
				</div>
			</div>}
			<form
				className="container flex flex-col max-w-4xl p-4 mt-24 border rounded-md border-black/10"
				onSubmit={updatePost}
				encType="multipart/form-data"
			>
				<h1 className={styles.sectionHeadText}>Edit Post</h1>
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
					value={publicationDate}
					onChange={(e) => setPublicationDate(e.target.value)}
				/>
				<input
					type="file"
					name="file"
					onChange={(e) => setFiles(e.target.files)}
					className="px-2 my-2"
				/>
				{files && (
					<img
						src={`${path}/uploads/` + files[0].name}
						alt="Current image"
						className="object-contain w-16 h-16"
					/>
				)}
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
				<div className="flex flex-row-reverse gap-4 md:flex-col ">
                    <button className="w-1/2 py-2 text-2xl font-bold rounded-md md:w-full bg-qportfolio-black text-qportfolio-white">
                        Save Post
                    </button>
                                    <button className="w-1/2 md:w-full py-2 bg-[#d00] text-qportfolio-white font-bold  text-2xl rounded-md"
                                    onClick={showDelete}>
                        Delete Post
                    </button>
                </div>
			</form>
		</div>
	);
};

export default EditPost;
