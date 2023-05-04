import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#122111", color: "#122111" }}
			contentArrowStyle={{ borderRight: "7px solid #122111" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[72%] h-[72%] object-contain "
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-qportfolio-white font-gloock text-2xl  -mb-2">
					{experience.title}
				</h3>
				<p className="text-qportfolio-white font-semibold m-0 text-sm">
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-qportfolio-white text-sm pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};
