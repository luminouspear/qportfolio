import React from "react";
import { footer } from '../constants'

const Footer = () => {
	return (
    <div className="bg-qportfolio-black w-full mx-auto text-center font-thin text-sm py-4 mt-4 text-qportfolio-white">
        <p className="mb-0 font-medium">{footer.text}</p>
        <p className="text-xs">{footer.text_rights}</p>
    </div>
    )

};

export default Footer;
