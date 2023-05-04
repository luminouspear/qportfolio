export const BlogPreview = (data) => {
	const { id, title, author, date, content, image, tags } = data.data;

	return (
		<>
			<article className=" flex flex-col lg:flex-row w-full lg:w-3/4 mt-8 mb-12 mx-auto group">
				<img
					src={image}
					className="rounded-lg object-cover cursor-pointer "
				/>
				<div className="lg:ml-8 lg:flex  lg:flex-col lg:justify-start  ">
					<h3
						className={`text-2xl font-semibold mt-4 lg:mt-0 mb-2 text-primary-green group-hover:text-secondary-green cursor-pointer`}
					>
						{title}
					</h3>
					<div className="flex flex-row text-xs text-qportfolio-black/90 mb-2 ">
						<p className="after:content-['@'] after:m-0.5">
							{author}
						</p>
						<p className="">{date}</p>
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
					<p className="w-full text-base">{content}</p>
					<button className="w-full text-right font-bold text-primary-green hover:text-secondary-green cursor-pointer hover:underline">
						Read More »
					</button>
				</div>
			</article>
		</>
	);
};
