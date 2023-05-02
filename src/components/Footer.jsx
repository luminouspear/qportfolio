import React from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 53893bb (updates to UI)
import { footer } from '../constants'

const Footer = () => {
	return (
    <div className="bg-qportfolio-black w-full mx-auto text-center font-thin text-sm py-4 mt-4 text-qportfolio-white">
        <p className="mb-0 font-medium">{footer.text}</p>
        <p className="text-xs">{footer.text_rights}</p>
    </div>
    )

<<<<<<< HEAD
=======
=======
import { footer } from "../constants";
import { github } from "../assets";

const Footer = () => {
	return (
		<div className="bg-qportfolio-black w-full mx-auto text-center font-thin text-sm py-6 mt-4 text-qportfolio-white">
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
                    >{footer.githubText}</a>
				</p>
			</div>
			<p className="text-xs">{footer.text_rights}</p>
		</div>
	);
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
};

export default Footer;
