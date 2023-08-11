import React from "react";

export function SummaryModule(role, tools, duration) {
	return (
		<div id="summary-module" className="py-12 lg:mt-20">
			<div className="w-10/12 h-full p-12 mx-auto rounded-lg shadow-sm bg-white/80">
				<h3
					className={`text-qportfolio-black font-gloock text-2xl mb-4`}
				>
					Role
				</h3>
				<p className="mb-8 text-2xl font-archivo text-qportfolio-black">
					{role}
				</p>
				<div className="h-[1px] bg-qportfolio-black/50"></div>
				<h3
					className={`text-qportfolio-black font-gloock text-2xl mb-4 mt-8`}
				>
					Tools
				</h3>
				<div className="flex flex-row mb-8 space-x-4 text-2xl font-archivo text-qportfolio-black">
					{tools.map((tool, id) => {
						return (
							<img
								className="object-cover w-14 sm:w-20 md:w-24 "
								src={tool.icon}
								alt={tool.alt}
								key={id}
							/>
						);
					})}
				</div>
				<div className="h-[1px] bg-qportfolio-black/50"></div>
				<h3
					className={`text-qportfolio-black font-gloock text-2xl mb-4 mt-8`}
				>
					Duration
				</h3>
				<p className="mb-8 text-2xl font-archivo text-qportfolio-black">
					{duration}
				</p>
			</div>
		</div>
	);
}
