import { sectionOverviews }  from "../constants";
import { github } from "../assets";

const Footer = () => {

	const footer = sectionOverviews[7]

	return (
		<footer className="w-full py-6 mx-auto mt-4 text-sm font-thin text-center bg-qportfolio-black text-qportfolio-white">
			<div className="flex flex-row items-center content-center justify-center w-full space-x-2 space-y-2 align-middle">
				<p className="mb-0 font-medium">{footer.text} &bull;</p>
				<img
					src={github}
					alt="GitHub link"
					className="object-contain w-4 h-4"
				/>
				<p>
					<a
						href={footer.githubLink}
						className="text-xs text-qportfolio-white/80"
						target="_blank"
						rel="noreferrer"
					>
						{footer.githubText}
					</a>
				</p>
			</div>
			<p className="text-xs">{footer.text_rights}</p>
		</footer>
	);
};

export default Footer;
