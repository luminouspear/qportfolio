import React from "react";

export function ConclusionSection(caseStudy) {
	return (
		<div>
			<h2 className="w-10/12 pt-12 mx-auto text-5xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
				{caseStudy.conclusion.heading}
			</h2>
			<p
				className="w-10/12 pt-8 mx-auto mb-12 text-xl sm:text-2xl font-archivo"
				dangerouslySetInnerHTML={{
					__html: caseStudy.conclusion.subHeading,
				}}
			/>
			<div
				className="relative flex w-full mx-auto mt-12 md:w-8/12"
				style={{ paddingBottom: "56.25%" }}
			>
				{caseStudy.conclusion.videoSrc && (
					<iframe
						className="absolute top-0 left-0 w-full h-full "
						src={caseStudy.conclusion.videoSrc}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				)}
			</div>
		</div>
	);
}
