import React from "react";

export function OverviewSection(caseStudy) {
	return (
		<div className="justify-center mx-auto md:grid-cols-12 md:grid md:grid-flow-row md:grid-rows-1">
			<div
				className={`w-full col-start-1 col-span-12 lg:col-span-8 row-start-1  h-fit lg:h-auto`}
			>
				<h2 className="w-10/12 pt-12 mx-auto text-5xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
					{caseStudy.sectionTwoTitle}
				</h2>
				<p
					className="w-10/12 pt-8 mx-auto mb-12 text-xl sm:text-2xl font-archivo"
					dangerouslySetInnerHTML={{
						__html: caseStudy.sectionTwoSubheading,
					}}
				/>
			</div>
			<div className="w-full row-start-2 lg:col-start-9 lg:col-span-4 lg:row-start-1 col-span-full">
				<img
					className="object-cover w-full h-auto lg:pr-8"
					src={caseStudy.sectionTwoImage.image}
					alt={caseStudy.sectionTwoImage.alt}
				/>
			</div>
		</div>
	);
}
