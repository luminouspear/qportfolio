import React from "react";

export function ReceptionSection(caseStudy) {
	return (
		<div className="">
			<div>
				<h1 className="w-10/12 pt-12 mx-auto text-6xl lg:text-7xl xl:text-8xl font-gloock text-qportfolio-black">
					{caseStudy.reception.heading}
				</h1>
				<p
					className="w-10/12 pt-8 mx-auto mb-12 text-2xl max-w-1/2 font-archivo lg:pr-72"
					dangerouslySetInnerHTML={{
						__html: caseStudy.reception.subHeading,
					}}
				/>
			</div>
			<div className="flex flex-row w-full py-12 pl-8 space-x-4 overflow-x-auto lg:pl-18 md:pl-12 bg-qportfolio-black scroll-snap-x-mandatory">
				{caseStudy.reception.quotes.map((quote) => {
					return (
						<div
							key={quote.id}
							className="flex-shrink-0 w-[90%] lg:w-[60%] p-4 rounded text-qportfolio-black bg-qportfolio-white flex justify-center px-4 md:px-8 text-2xl flex-col"
						>
							<p
								dangerouslySetInnerHTML={{
									__html: quote.quote,
								}}
								className="mb-8"
							/>
							<h3 className="text-xl">
								{quote.author}
								<br />
								<a
									href={quote.src}
									className="font-bold text-qportfolio-secondary-green"
									target="_blank"
								>
									{quote.source}
								</a>
							</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
}
