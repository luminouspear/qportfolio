import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { heroGallery } from "../constants";

const Hero = () => {
	const [activeUnderline, setActiveUnderline] = useState("build");
	const [userInteraction, setUserInteraction] = useState(false);
	const intervalIdRef = useRef(null);
	const [currentImage, setCurrentImage] = useState(heroGallery[0].image);
	const [currentImageAlt, setCurrentImageAlt] = useState(heroGallery[0].alt);
	const imgRef = useRef(null);

	useEffect(() => {
		const changeActiveUnderline = () => {
			setActiveUnderline((prev) => {
				switch (prev) {
					case "build":
						setCurrentImage(heroGallery[1].image);
						setCurrentImageAlt(heroGallery[1].alt);
						return "inspire";
					case "inspire":
						setCurrentImage(heroGallery[2].image);
						setCurrentImageAlt(heroGallery[2].alt);
						return "design";
					case "design":
					default:
						setCurrentImage(heroGallery[0].image);
						setCurrentImageAlt(heroGallery[0].alt);
						return "build";
				}
			});
		};

		if (!userInteraction) {
			intervalIdRef.current = setInterval(changeActiveUnderline, 9000);
		}

		return () => {
			clearInterval(intervalIdRef.current);
		};
	}, [userInteraction]);

	useEffect(() => {
		if (imgRef.current) {
			imgRef.current.style.animation = "none";
			imgRef.current.offsetHeight; // Trigger reflow
			imgRef.current.style.animation =
				"pan-right 20s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";
		}
	}, [currentImage, currentImageAlt]);

	const handleClick = (value) => {
		setActiveUnderline(value);
		setUserInteraction(true);
	};

	const handleHover = (value) => {
		setCurrentImage(value.image);
		setCurrentImageAlt(value.alt);
		setUserInteraction(true);
	};

	const handleMouseLeave = () => {
		setUserInteraction(false);
	};

	return (
		<section className="relative mx-auto mt-24 max-w-7xl">
			<div
				className={`sm:px-16 px-0 mx-auto flex flex-col-reverse md:flex-row justify-start items-start gap-6 overflow-hidden`}
			>
				<div className="z-10 min-w-[50%] pl-4 md:pb-48 md:pt-24  xl:-translate-x-12 2xl:-translate-x-16 bg-qportfolio-white  ">
					<h1
						className={`${styles.heroHeadText} text-qportfolio-black ml-4`}
					>
						Hi, I'm{" "}
						<span className="text-primary-green font-gloock">
							Dan <br className="" />
							McCollum
						</span>
					</h1>
					<div
						className={`${styles.heroSubText} md:mt-2 text-qportfolio-black leading-[2.75rem]`}
					>
						<div className="flex gap-2 ml-4">
							<p>
								<span
									className={`${
										activeUnderline === "build"
											? "inline"
											: "hidden"
									} cursor-pointer `}
								>
									I
								</span>
								<br />
								<span
									className={`${
										activeUnderline === "inspire"
											? "inline"
											: "hidden"
									}`}
								>
									I
								</span>
								<br />
								<span
									className={`${
										activeUnderline === "design"
											? "inline"
											: "hidden"
									}`}
								>
									I
								</span>
							</p>
							<p>
								<span
									className={`${
										activeUnderline === "build"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("build")}
									onMouseOver={() =>
										handleHover(heroGallery[0])
									}
									onMouseLeave={() => handleMouseLeave()}
								>
									<a href="#work">build</a>
								</span>{" "}
								world-class experiences,<br></br>{" "}
								<span
									className={`${
										activeUnderline === "inspire"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("inspire")}
									onMouseOver={() =>
										handleHover(heroGallery[1])
									}
									onMouseLeave={() => handleMouseLeave()}
								>
									<a href="#testimonials">inspire</a>
								</span>{" "}
								change in people's lives, and <br />
								<span
									className={`${
										activeUnderline === "design"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("design")}
									onMouseOver={() =>
										handleHover(heroGallery[2])
									}
									onMouseLeave={() => handleMouseLeave()}
								>
									<a href="#projects">design</a>
								</span>
								&nbsp;whatever&apos;s coming next.
							</p>
						</div>
						<div className="flex flex-row gap-4 mt-8 ml-4 ">
							<a href="#contact">
								<button className="px-6 py-4 text-xl font-bold text-white rounded-lg bg-primary-green hover:bg-secondary-green">
									Let&apos;s Talk
								</button>
							</a>
							<a href="#work">
								<button className="px-6 py-4 text-xl font-bold rounded-lg hover:underline text-primary-green hover:text-secondary-green">
									Learn More
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="flex min-w-full overflow-hidden md:h-auto max-h-1/2 md:rounded-md">
					<div className="overflow-hidden md:w-full md:h-full isolate ">
						<img
							ref={imgRef}
							src={currentImage}
							alt={currentImageAlt}
							className="md:h-[682px] h-[660px] md:w-[1024]  object-cover  md:rounded-md "
						/>
					</div>
					<div className="hidden md:inline md:bg-gradient-to-l md:from-transparent md:from-[39%] md:via-[#f5f2ed] via-[48%] md:to-[#f5f2ed] md:absolute md:inset-0">
						&nbsp;
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
