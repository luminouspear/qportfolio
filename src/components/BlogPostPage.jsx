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

	useEffect(() => {
		fetch(`http://localhost:4000/post/${id}`).then((response) => {
			response.json().then((postInfo) => {
                setPostInfo(postInfo);
                setTagArray(postInfo.tags)

			});
		});
	}, []);
	if (!postInfo) return "";

	return (postInfo && (
		<>
			<div className="container max-w-7xl mt-24  w-full min-h-screen mx-auto ">
				<div className="flex flex-col flex-grow ">
					{postInfo.mainImage && (
						<img
							className="h-[33%] w-auto mx-auto object-cover"
							src={`http://localhost:4000/${postInfo.mainImage}`}
						/>
					)}
					<h1
						className={`${styles.sectionHeadText} mx-8 md:mx-auto pt-4 md:w-7/12 text-center `}
					>
						{postInfo.title}
					</h1>
					<div className="flex flex-row text-xs text-qportfolio-black/90 mb-2 mx-auto">
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
									className="font-semibold text-secondary-green cursor-pointer ml-2"
									to={`/edit/${postInfo._id}`}
								>
									Edit
								</Link>
							</div>
						)}
					</div>
					<ul className="flex flex-row gap-2 text-qportfolio-white text-xs mb-4 mx-auto h-fit">
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
						className="container  w-full lg:w-8/12 mx-8 md:mx-auto mt-12 pb-12 text-base lg:px-16 leading-loose first-letter:block first-letter:text-6xl first-letter:align-text-top first-letter:float-left first-letter:mt-1 first-letter:mr-1  "
						dangerouslySetInnerHTML={{ __html: postInfo.content }}
					/>
				</div>
			</div>
		</>)
	);
};
export default FullPageWrapper(BlogPostPage, "");
