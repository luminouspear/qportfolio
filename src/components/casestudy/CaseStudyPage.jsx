import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { caseStudyContent } from "../../constants";
import { getPageTitle } from "../../utils/utilityFunctions";
import { SummaryModule } from "./SummaryModule";
import { OverviewSection } from "./OverviewSection";
import { MainPoints } from "./MainPoints";
import { ResearchStory } from "./ResearchStory";
import { ReceptionSection } from "./ReceptionSection";
import { ConclusionSection } from "./ConclusionSection";
import Contact from "../Contact";

const CaseStudyPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const caseStudy = caseStudyContent.find((item) => item.id === id);

	useEffect(() => {
		if (!caseStudy) {
			navigate("/404");
		} else {
			document.title = getPageTitle(caseStudy.pageTitle);
			window.scrollTo(0, 0);
		}
	}, [id, caseStudy, navigate]);

	if (!caseStudy) return null;

	return (
		<section className="container mx-auto">
			<div className="grid grid-flow-row grid-rows-3 lg:grid-rows-2">
				<div
					id="mainImage"
					className="w-full h-[50vh] row-span-1 row-start-1  lg:row-start-2"
				>
					<img
						src={caseStudy.heroImage}
						alt={caseStudy.heroImageAlt}
						className="object-cover w-full h-full mt-20 lg:mt-0"
					/>
				</div>
				<div
					id="content"
					className="grid w-full h-full row-span-2 row-start-2 lg:grid-flow-col lg:row-span-1 lg:row-start-1 lg:grid-cols-2"
				>
					<div
						id="heading-and-subheading"
						className=" mt-20 lg:mt-20 lg:min-h-[50vh] flex items-center flex-col justify-center    "
					>
						<h1 className="w-10/12 pt-12 mx-auto text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
							{caseStudy.heading}
						</h1>
						<p
							className="w-10/12 pt-8 mx-auto mb-12 text-2xl font-archivo"
							dangerouslySetInnerHTML={{
								__html: caseStudy.subHeading,
							}}
						/>
					</div>
					{SummaryModule(
						caseStudy.role,
						caseStudy.tools,
						caseStudy.duration
					)}
				</div>
			</div>
			{OverviewSection(caseStudy)}
			{MainPoints(caseStudy, id)}
			{ResearchStory(caseStudy)}
			{ReceptionSection(caseStudy)}
			{ConclusionSection(caseStudy)}
			<Contact />
		</section>
	);
};

export default CaseStudyPage;
