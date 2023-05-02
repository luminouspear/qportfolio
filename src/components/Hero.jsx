import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
<<<<<<< HEAD
import { ComputersCanvas } from "./canvas";
=======
<<<<<<< HEAD
import { ComputersCanvas } from "./canvas";
=======

import { heroGallery } from "../constants";
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)

const Hero = () => {
	const [activeUnderline, setActiveUnderline] = useState("build");
	const [userInteraction, setUserInteraction] = useState(false);
<<<<<<< HEAD
	const intervalIdRef = useRef(null);
=======
<<<<<<< HEAD
	const intervalIdRef = useRef(null);
=======
	const [currentImage, setCurrentImage] = useState(heroGallery[0].image);
	const [currentImageAlt, setCurrentImageAlt] = useState(heroGallery[0].alt);
  const intervalIdRef = useRef(null);
  const imgRef = useRef(null);
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)

	useEffect(() => {
		const changeActiveUnderline = () => {
			setActiveUnderline((prev) => {
				switch (prev) {
					case "build":
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 53893bb (updates to UI)
						return "inspire";
					case "inspire":
						return "design";
					case "design":
					default:
<<<<<<< HEAD
=======
=======
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

>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
						return "build";
				}
			});
		};

		if (!userInteraction) {
<<<<<<< HEAD
			intervalIdRef.current = setInterval(changeActiveUnderline, 5000);
=======
<<<<<<< HEAD
			intervalIdRef.current = setInterval(changeActiveUnderline, 5000);
=======
			intervalIdRef.current = setInterval(changeActiveUnderline, 9000);
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
		}

		return () => {
			clearInterval(intervalIdRef.current);
		};
<<<<<<< HEAD
	}, [userInteraction]);
=======
<<<<<<< HEAD
	}, [userInteraction]);
=======
  }, [userInteraction]);

  useEffect(() => {
		if (imgRef.current) {
			imgRef.current.style.animation = "none";
			imgRef.current.offsetHeight; // Trigger reflow
			imgRef.current.style.animation =
				"pan-right 20s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";
		}
  }, [currentImage, currentImageAlt]);
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)

	const handleClick = (value) => {
		setActiveUnderline(value);
		setUserInteraction(true);
	};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 53893bb (updates to UI)
	return (
		<section className="mx-auto mt-24">
			<div
				className={`${styles.paddingX}  max-w-7xl mx-auto flex flex-row items-start gap-6`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-primary-green" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="">
					<h1
						className={`${styles.heroHeadText} text-qportfolio-black`}
					>
						Hi, I'm{" "}
						<span className="text-primary-green font-gloock">
							Dan McCollum
						</span>
					</h1>
					<div
						className={`${styles.heroSubText} mt-2 text-qportfolio-black leading-[2.75rem]`}
					>
						<div className="flex gap-2">
							<p>I</p>
<<<<<<< HEAD
=======
=======
	const handleHover = (value) => {
		setCurrentImage(value.image);
		setCurrentImageAlt(value.alt);
		setUserInteraction(true);
	};

	const handleMouseLeave = () => {
		setUserInteraction(false);
	};

	return (
		<section className="mx-auto mt-24 relative max-w-7xl">
			<div
				className={`sm:px-16 px-0 mx-auto flex flex-col-reverse md:flex-row justify-start items-start gap-6`}
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
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
							<p>
								<span
									className={`${
										activeUnderline === "build"
											? "underline-primary animate"
											: ""
									} cursor-pointer `}
									onClick={() => handleClick("build")}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
									onMouseOver={() =>
										handleHover(heroGallery[0])
									}
									onMouseLeave={() => handleMouseLeave()}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
									onMouseOver={() =>
										handleHover(heroGallery[1])
									}
									onMouseLeave={() => handleMouseLeave()}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
									onMouseOver={() =>
										handleHover(heroGallery[2])
									}
									onMouseLeave={() => handleMouseLeave()}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
								>
									<a href="#projects">design</a>
								</span>
								&nbsp;whatever's coming next.
							</p>
						</div>
						<div className="ml-4 mt-8 flex flex-row gap-4 ">
							<a href="#contact">
								<button className="px-6 py-4 rounded-lg font-bold text-xl bg-primary-green hover:bg-secondary-green text-white">
									Let's Talk
								</button>
							</a>
							<a href="#work">
								<button className="px-6 py-4 rounded-lg text-xl hover:underline font-bold text-primary-green hover:text-secondary-green">
									Learn More
								</button>
							</a>
						</div>
					</div>
				</div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
				<div className="md:h-auto max-h-1/2 min-w-full overflow-hidden md:rounded-md flex">
					<div className="md:w-full md:h-full overflow-hidden isolate ">
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
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
			</div>
		</section>
	);
};

export default Hero;
