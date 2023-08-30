import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FullPageWrapper } from "../hoc";
import { styles } from "../styles";
import { format } from "date-fns";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { handleTags } from "../utils/text";

const BlogPostPage = () => {
	const [postInfo, setPostInfo] = useState(null);
    const { id } = useParams();
    const { userInfo } = useContext(UserContext)
	const [tagArray, setTagArray] = useState([])

	const path =
		process.env.NODE_ENV === "production"
			? "https://danmccollum.com"
			: "http://127.0.0.1:4000";

	useEffect(() => {
		fetch(`${path}/post/${id}`).then((response) => {
			response.json().then((postInfo) => {
                setPostInfo(postInfo);
                setTagArray(postInfo.tags)

			});
		});
	}, []);
	if (!postInfo) return "";

	return (postInfo && (
		<>
			<div className="container w-full min-h-screen mx-auto mt-24 max-w-7xl ">
				<div className="flex flex-col flex-grow ">
					{postInfo.mainImage && (
						<img
							className="h-[33%] w-auto mx-auto object-cover"
							src={`${path}/${postInfo.mainImage}`}
						/>
					)}
					<h1
						className={`${styles.sectionHeadText} mx-8 md:mx-auto pt-4 md:w-7/12 text-center `}
					>
						{postInfo.title}
					</h1>
					<div className="flex flex-row mx-auto mb-2 text-xs text-qportfolio-black/90">
						<p className="after:content-['@'] after:m-0.5">
							{postInfo.author.username}
						</p>
						<time className="">
							{format(
								new Date(postInfo.createdAt),
								"MMM do, yyyy"
							)}
						</time>
						{userInfo && userInfo.id === postInfo.author._id && (
							<div>
								<Link
									className="ml-2 font-semibold cursor-pointer text-secondary-green"
									to={`/edit/${postInfo._id}`}
								>
									Edit
								</Link>
							</div>
						)}
					</div>
					<ul className="flex flex-row gap-2 mx-auto mb-4 text-xs text-qportfolio-white h-fit">
						{postInfo.tags.map((tag, index) => (
							<li
								className="bg-qportfolio-black py-0.5 px-2 rounded-sm"
								key={index}
							>
								#{tag}
							</li>
						))}
					</ul>
					<p
						className="container w-full pb-12 mx-8 mt-12 text-base leading-loose lg:w-8/12 md:mx-auto lg:px-16 first-letter:block first-letter:text-6xl first-letter:align-text-top first-letter:float-left first-letter:mt-1 first-letter:mr-1 "
						dangerouslySetInnerHTML={{ __html: postInfo.content }}
					/>
				</div>
			</div>
		</>)
	);
};
export default FullPageWrapper(BlogPostPage, "");
