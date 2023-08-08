import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#122111", color: "#122111" }}
			className=""
			contentArrowStyle={{ borderRight: "7px solid #122111" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex items-center justify-center w-full h-full ">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[72%] h-[72%] object-contain "
					/>
				</div>
			}
		>
			<div className="">
				<h3 className="-mb-2 text-2xl text-qportfolio-white font-gloock">
					{experience.title}
				</h3>
				<p className="m-0 text-sm font-semibold text-qportfolio-white">
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 ml-5 space-y-2 list-disc">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="pl-1 tracking-wider text-md text-qportfolio-white"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};
