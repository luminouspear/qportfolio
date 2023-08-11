import React from "react";

export function ResearchStory(caseStudy) {
	return (
		<div className="font-archivo">
			<h1 className="w-10/12 pt-12 mx-auto text-6xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
				{caseStudy.research.heading}
			</h1>
			<p
				className="w-10/12 pt-8 mx-auto mb-12 text-2xl max-w-1/2 font-archivo lg:pr-72"
				dangerouslySetInnerHTML={{
					__html: caseStudy.research.subHeading,
				}}
			/>
			{caseStudy.research.content.map((content) => {
				return (
					<div
						key={content.id}
						className={`
								 ${
										content.id % 2 === 0
											? ` lg:flex-row-reverse`
											: ` lg:flex-row`
									}   flex flex-col w-10/12 mx-auto lg:mb-12 items-start`}
					>
						<img
							src={content.image}
							className={`lg:w-1/2 lg:p-8 w-full object-contain `}
						/>
						<div className="lg:w-1/2 ">
							<p
								className="mt-8 text-xl xl:text-2xl lg:mt-8"
								dangerouslySetInnerHTML={{
									__html: content.story,
								}}
							/>
							<ul className="flex flex-col mt-8 ">
								{content.bulletPoints &&
									content.bulletPoints.map((point, idx) => {
										return (
											<li
												key={idx}
												className="py-2 pl-2 text-xl xl:text-2xl before:content-['•'] before:pr-1 before:-ml-2"
												dangerouslySetInnerHTML={{
													__html: point,
												}}
											/>
										);
									})}
							</ul>
							<p
								className="mt-4 mb-16 text-xl font-bold xl:text-2xl"
								dangerouslySetInnerHTML={{
									__html: content.summary,
								}}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
