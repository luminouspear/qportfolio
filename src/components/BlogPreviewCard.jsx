import { format } from "date-fns";
import { Link } from "react-router-dom";

export const BlogPreview = ( { _id, title, author, date, summary, mainImage, tags, createdAt }) => {

		const path =
			process.env.NODE_ENV === "production"
				? "https://danmccollum.com"
				: "http://127.0.0.1:4000";

	function setLink(element) {
		return <Link to={`/post/${_id}`}>{element}</Link>;
	}

	return (author &&
		<>
			<article className="flex flex-col justify-start w-full mx-auto mt-8 mb-12 lg:flex-row lg:w-3/4 group">
				{mainImage &&
					setLink(
						<img
							src={`${path}/` + mainImage}
							className="object-cover w-64 h-auto rounded-lg cursor-pointer"
						/>
					)}
				<div
					className={`${
						mainImage ? "w-2/3 lg:ml-8" : "w-full"
					}   lg:flex  lg:flex-col lg:justify-start  `}
				>
					{setLink(
						<h3
							className={` text-2xl font-semibold mt-4 lg:mt-0 mb-2 text-primary-green group-hover:text-secondary-green cursor-pointer`}
						>
							{title}
						</h3>
					)}
					<div className="flex flex-row mb-2 text-xs text-qportfolio-black/90 ">
						<p className="after:content-['@'] after:m-0.5">
							{author.username}
						</p>
						<p className="">
							{format(new Date(createdAt), "MMM do, yyyy")}
						</p>
					</div>
					<ul className="flex flex-row gap-2 mb-4 text-xs text-qportfolio-white">
						{tags.map((tag, index) => (
							<li
								className="bg-qportfolio-black py-0.5 px-2 rounded-sm h-fit"
								key={index}
							>
								#{tag}
							</li>
						))}
					</ul>
					<p className="w-full text-base">{summary}</p>
					{setLink(
						<button className="w-full font-bold text-right cursor-pointer text-primary-green hover:text-secondary-green hover:underline">
							Read More »
						</button>
					)}
				</div>
			</article>
		</>
	);
};
