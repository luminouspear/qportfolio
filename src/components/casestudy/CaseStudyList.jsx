import React, { useEffect } from "react";
import { caseStudyContent } from "../../constants";
import { Link } from "react-router-dom";

const CaseStudyList = () => {
	const caseStudies = caseStudyContent;

	useEffect(() => {
	  window.scrollTo(0,0)


	}, [])

	return (
		<div className="flex flex-col min-h-screen mt-24 font-archivo">
			<div>
				<h1 className="w-10/12 pt-12 mx-auto text-6xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
					Case Studies
				</h1>
				<p className="w-10/12 pt-8 mx-auto mb-12 text-2xl font-archivo">
					A collection of UX case studies from my career.
				</p>
			</div>
			<div className="w-10/12 mx-auto">
				{caseStudies.map((caseStudy) => {
					return (
						<Link
							key={caseStudy.id}
							className="flex flex-col space-y-6 cursor-pointer lg:flex-row group"
							to={caseStudy.id}
						>
							<img
								src={caseStudy.heroImage}
								className="w-full rounded object-fit lg:my-4 lg:w-4/12"
							/>
							<div className="flex flex-col lg:px-4">
								<h3 className="mb-4 text-4xl font-gloock text-qportfolio-black group-hover:text-qportfolio-black/70">
									{caseStudy.heading}
								</h3>
								<p
									className="mb-12 text-xl "
									dangerouslySetInnerHTML={{
										__html: caseStudy.subHeading,
									}}
								/>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CaseStudyList;
