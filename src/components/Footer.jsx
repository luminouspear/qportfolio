import { sectionOverviews }  from "../constants";
import { github } from "../assets";

const Footer = () => {

	const footer = sectionOverviews[7]

	return (
		<div className="bg-qportfolio-black w-screen mx-auto text-center font-thin text-sm py-6 mt-4 text-qportfolio-white">
			<div className="flex flex-row items-center justify-center gap-1">
				<p className="mb-0 font-medium">{footer.text} &bull;</p>
				<img
					src={github}
					alt="GitHub link"
					className="h-4 w-4 object-contain"
				/>
				<p>
                    <a href={footer.githubLink}
                        className="text-qportfolio-white/80 text-xs"
						target="_blank"
						rel="noreferrer"
                    >{footer.githubText}</a>
				</p>
			</div>
			<p className="text-xs">{footer.text_rights}</p>
		</div>
	);
};

export default Footer;
