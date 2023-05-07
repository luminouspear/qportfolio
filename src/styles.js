const styles = {
	paddingX: "sm:px-16 px-6",
	paddingY: "sm:py-16 py-6",
	padding: "sm:px-16 px-6 sm:py-16 py-10",

	heroHeadText:
		"font-medium lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",

	heroSubText:
		"text-[#F5F2ED] font-light lg:text-[28px] lg:leading-[44px] md:text-[22px] text-[16px] sm:text-[28px] md:leading-[36px] leading-[40px] lg:leading-[40px]",

	sectionHeadText:
		"text-primary-green font-gloock md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
	sectionSubText:
		"sm:text-[16px] text-[13px] font-archivo text-qportfolio-white text-secondary uppercase tracking-wider",
	darkSectionHeadText:
		"text-secondary-green font-gloock md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
	darkSectionSubText:
		"sm:text-[16px] text-[13px] font-archivo text-qportfolio-black text-secondary uppercase tracking-wider",
	blackSectionHeadText:
		"text-qportfolio-black font-gloock md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
	blackSectionSubText:
		"sm:text-[16px] text-[13px] font-archivo text-qportfolio-black text-secondary uppercase tracking-wider",
	whiteSectionHeadText:
		"text-qportfolio-white font-gloock md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
	whiteSectionSubText:
		"sm:text-[16px] text-[13px] font-archivo text-qportfolio-white text-secondary uppercase tracking-wider",
};
export { styles };

export const getNavLinkStyle = (active, title) => {
	return `${
		active === title ? "text-secondary-green " : "text-primary-green "
	} hover:text-secondary-green text-[16px] font-medium cursor-pointer`;
};
