import { format } from "date-fns";
import { Link } from "react-router-dom";

export const BlogPreview = (data) => {
	const { _id, title, author, date, summary, mainImage, tags, createdAt } =
		data.data;
	console.log("tags :", tags);
	console.log("author :", author);

	function setLink(element) {
		return <Link to={`/post/${_id}`}>{element}</Link>;
	}

	return (
		<>
			<article className=" flex flex-col lg:flex-row w-full lg:w-3/4 mt-8 mb-12 mx-auto group">
				{mainImage &&
					setLink(
						<img
							src={"http://localhost:4000/" + mainImage}
							className="rounded-lg object-cover cursor-pointer w-64 h-auto"
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
					<div className="flex flex-row text-xs text-qportfolio-black/90 mb-2 ">
						<p className="after:content-['@'] after:m-0.5">
							{author.username}
						</p>
						<p className="">
							{format(new Date(createdAt), "MMM do, yyyy")}
						</p>
					</div>
					<ul className="flex flex-row gap-2 text-qportfolio-white text-xs mb-4">
						{tags.map((tag, index) => (
							<li
								className="bg-qportfolio-black py-0.5 px-2 rounded-sm"
								key={index}
							>
								#{tag}
							</li>
						))}
					</ul>
					<p className="w-full text-base">{summary}</p>
					{setLink(
						<button className="w-full text-right font-bold text-primary-green hover:text-secondary-green cursor-pointer hover:underline">
							Read More »
						</button>
					)}
				</div>
			</article>
		</>
	);
};
