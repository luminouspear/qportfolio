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

	useRedirectIfNotLoggedIn();

	useEffect(() => {
		fetch("http://localhost:4000/post/" + id).then((response) => {
			response.json().then(async (postInfo) => {
				setTitle(postInfo.title);
				setSummary(postInfo.summary);
				setTags(postInfo.tags.join(", "));
				setPublicationDate(postInfo.date);
				// Fetch the main image, create a Blob, and then create a File object
				const imageResponse = await fetch(
					"http://localhost:4000/" + postInfo.mainImage
				);
				const imageBlob = await imageResponse.blob();

				// Extract the file name from the image URL
				const imageUrl = new URL(
					"http://localhost:4000/uploads/" + postInfo.mainImage
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

		const response = await fetch("http://localhost:4000/post", {
			method: "PUT",
			body: data,
			credentials: "include",
		});
		if (response.status === 200) {
			setRedirect(true);
		}
	}

	async function deletePost() {
		const response = await fetch("http://localhost:4000/post/" + id, {
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
		<div className="flex justify-start  flex-col items-center mx-auto min-h-screen relative">
			{showConfirmDelete && <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
				<div className="w-1/2 h-auto rounded-xl shadow-md bg-qportfolio-white border border-qportfolio-black/50 pt-[5%] pb-[5%] z-[100] px-16">
					<h2 className={styles.darkSectionHeadText}>
						Are you sure you want to delete?
					</h2>
					<p className="py-4">This action cannot be undone.</p>
					<div className="flex flex-row gap-2">
                        <button
                            className="w-1/2 py-4 rounded-md border border-red-500 text-red-500 font-bold text-xl"
                            onClick={deletePost}
                        >
							Delete
						</button>
                        <button
                            className="w-1/2 py-4 rounded-md border border-secondary-green text-secondary-green font-bold text-xl"
                            onClick={showDelete}
                        >
							Cancel
						</button>
					</div>
				</div>
			</div>}
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
				{files && (
					<img
						src={"http://localhost:4000/uploads/" + files[0].name}
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
				<div className="flex flex-row-reverse gap-4 md:flex-col ">
                    <button className="w-1/2 md:w-full py-2 bg-qportfolio-black text-qportfolio-white font-bold text-2xl rounded-md">
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
