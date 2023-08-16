import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { caseStudyContent } from "../../constants";
import WideSummaryModule from "./WideSummaryModule";
import { icon_caret } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { getPageTitle } from "../../utils/utilityFunctions";
import { FeedbackCard } from "../FeedbackCard";
import Contact from "../Contact";

const CaseStudyv2 = () => {
	const targetRef = useRef(null);

	const { id } = useParams();
	const navigate = useNavigate();



	const content = caseStudyContent.find((item) => item.id === id);

	useEffect(() => {
		if (!content) {
			navigate('/404')
		} else {
			document.title = getPageTitle(content.pageTitle)
		}
	}, [id, content, navigate])

	if (!content) return null

	const CaseStudyv2HeroImage = () => {
		return (
			<img
				className="object-cover w-full h-full "
				src={content.heroImage}
			/>
		);
	};

	const WhatITeachSection = () => {
		const whatITeachRef = useRef(null);
		const { scrollYProgress } = useScroll({
			target: whatITeachRef,
			offset: ["start end", "end start"],
		});

		const springScrollYProgress = useSpring(scrollYProgress);
		const diff = 0.05;

		const teachOpacity = useTransform(
			springScrollYProgress,
			[0.1, 0.13, 0.75, 0.85],
			[0, 1, 1, 0]
		);
		const designOpacity = useTransform(
			springScrollYProgress,
			[0.14, 0.17, 0.73, 0.85],
			[0, 1, 1, 0]
		);
		const uxStart = 0.19;
		const uxEnd = 0.28;
		const uxOpacity = useTransform(
			springScrollYProgress,
			[uxStart, uxStart + diff, uxEnd, uxEnd + diff],
			[0, 1, 1, 0]
		);
		const productStart = 0.26;
		const productEnd = 0.34;
		const productOpacity = useTransform(
			springScrollYProgress,
			[productStart, productStart + diff, productEnd, productEnd + diff],
			[0, 1, 1, 0]
		);
		const interactionStart = 0.32;
		const interactionEnd = 0.43;
		const interactionOpacity = useTransform(
			springScrollYProgress,
			[
				interactionStart,
				interactionStart + diff,
				interactionEnd,
				interactionEnd + diff,
			],
			[0, 1, 1, 0]
		);
		const visualStart = 0.38;
		const visualEnd = 0.49;
		const visualOpacity = useTransform(
			springScrollYProgress,
			[visualStart, visualStart + diff, visualEnd, visualEnd + diff],
			[0, 1, 1, 0]
		);
		const userInterfaceStart = 0.45;
		const userInterfaceEnd = 0.55;
		const userInterfaceOpacity = useTransform(
			springScrollYProgress,
			[
				userInterfaceStart,
				userInterfaceStart + diff,
				userInterfaceEnd,
				userInterfaceEnd + diff,
			],
			[0, 1, 1, 0]
		);
		const thinkingStart = 0.6;
		const thinkingEnd = 0.77;
		const thinkingOpacity = useTransform(
			springScrollYProgress,
			[
				thinkingStart,
				thinkingStart + diff,
				thinkingEnd,
				thinkingEnd + diff,
			],
			[0, 1, 1, 0]
		);

		return (
			<section
				ref={whatITeachRef}
				className="w-full h-[300vh] bg-qportfolio-black"
			>
				<div className="grid h-full grid-flow-row grid-cols-12">
					<div className="h-[300vh]  col-span-full grid grid-cols-12 grid-flow-col grid-rows-[repeat(12,_minmax(0,_1fr))] text-qportfolio-sage font-archivo  self-start">
						<motion.div
							style={{ opacity: designOpacity }}
							className="relative col-span-5 col-start-8 h-[300vh] "
						>
							<p className="sticky text-2xl text-qportfolio-white sm:text-3xl md:text-4xl lg:text-7xl top-[40vh] sm:top-[50vh] ml-1 sm:ml-2 font-bold text-left flex flex-col lg:pt-6 pt-20">
								<motion.span
									style={{ opacity: teachOpacity }}
									className="sticky w-full col-start-8 row-span-1 row-start-3  pt-0 mb-4 lg:mb-6 -mt-32 lg:-mt-[7.5rem] text-2xl lg:text-4xl lg:pt-8 lg:ml-3 lg:px-0 lg:col-span-5 text-qportfolio-white font-gloock col-span-full"
								>
									I teach
								</motion.span>
								Design
								<br />
								<motion.span
									className="mt-4 font-bold text-qportfolio-sage"
									style={{ opacity: thinkingOpacity }}
								>
									Thinking
								</motion.span>
							</p>
						</motion.div>
						<motion.div
							className="col-span-6 sm:col-span-5 col-start-2 sm:col-start-3 h-[75vh] relative pb-12 lg:col-start-2 lg:col-span-6  "
							style={{ opacity: uxOpacity }}
						>
							<p className=" top-[40vh] sm:top-[50vh] right-0 w-full  text-2xl sm:text-3xl font-bold text-right md:text-4xl lg:text-7xl  mt-[30vh]   sticky whitespace-nowrap col-start-1 row-start-1 mb-24">
								End-to-End UX
							</p>
						</motion.div>
						<motion.div
							className="col-span-6 sm:col-span-5 col-start-2 sm:col-start-3 h-[75vh] relative pb-12 lg:col-start-2 lg:col-span-6 mt-12 lg:mt-0"
							style={{ opacity: productOpacity }}
						>
							<p className=" top-[40vh] sm:top-[50vh] right-0 w-full  text-2xl sm:text-3xl font-bold text-right md:text-4xl lg:text-7xl  mt-[30vh] sticky whitespace-nowrap pb-36 lg:pb-0">
								Product
							</p>
						</motion.div>
						<motion.div
							className="col-span-5 col-start-3 h-[75vh] relative lg:col-start-2 lg:col-span-6"
							style={{ opacity: interactionOpacity }}
						>
							<p className=" top-[40vh] sm:top-[50vh] right-0 w-full text-2xl sm:text-3xl font-bold text-right md:text-4xl lg:text-7xl  mt-[30vh] row-start-4 row-span-3  sticky whitespace-nowrap pb-36 lg:pb-0">
								Interaction
							</p>
						</motion.div>
						<motion.div
							className="col-span-5 col-start-3 h-[75vh] lg:col-start-2 lg:col-span-6 relative mt-12"
							style={{ opacity: visualOpacity }}
						>
							<p className=" top-[40vh] sm:top-[50vh] right-0 w-full text-2xl sm:text-3xl font-bold text-right md:text-4xl lg:text-7xl font-archivo mt-[30vh] row-start-4 row-span-3 text-qportfolio-sage sticky whitespace-nowrap pb-36 lg:pb-0">
								Visual
							</p>
						</motion.div>
						<motion.div
							className="col-span-6 sm:col-span-5 col-start-2 sm:col-start-3 h-[75vh] relative pb-12 lg:col-start-2 lg:col-span-6 mt-24"
							style={{ opacity: userInterfaceOpacity }}
						>
							<p className=" top-[40vh] sm:top-[50vh] right-0 w-full text-2xl sm:text-3xl font-bold text-right md:text-4xl lg:text-7xl font-archivo mt-[30vh] row-start-4 row-span-3 text-qportfolio-sage sticky whitespace-nowrap pb-36 lg:pb-0">
								User Interface
							</p>
						</motion.div>
					</div>
				</div>
			</section>
		);
	};

	const EndToEndUXDesignSection = () => {
		const endToEndUXDesignRef = useRef(null);
		const { scrollYProgress } = useScroll({
			target: endToEndUXDesignRef,
			offset: ["start end", "end start"],
		});

		const [selectedSection, setSelectedSection] = useState("Research");
		const [selectedData, setSelectedData] = useState(content.gallery[3]);
		const [selectedGallery, setSelectedGallery] = useState();
		const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
		const [currentGalleryLength, setCurrentGalleryLength] = useState(
			selectedData.length
		);
		const [showModal, setShowModal] = useState(false);

		const subsections = ["Research", "Sketching", "Wireframes", "Prototypes"];

		const sectionOpacity = useTransform(
			scrollYProgress,
			[0, 0.24, 0.6, 0.8],
			[0, 1, 1, 0]
		);

		const titleOpacity = useTransform(
			scrollYProgress,
			[0, 0.23, 0.27, 0.62, 0.67],
			[0, 0, 1, 1, 0]
		);

		const tabOpacity = useTransform(
			scrollYProgress,
			[0, 0.26, 0.32, 0.65, 0.7],
			[0, 0, 1, 1, 0]
		);

		const galleryOpacity = useTransform(
			scrollYProgress,
			[0, 0.3, 0.35, 0.7, 0.75],
			[0, 0, 1, 1, 0]
		);


		const getSectionTextColor = (section) => {
			if (section === selectedSection) {
				return "font-bold text-qportfolio-black/95";
			} else {
				return "font-semibold text-qportfolio-black/70 hover:text-qportfolio-black/85";
			}
		};

		const handleChangeTab = (section) => {
			setSelectedSection(section);
			if (section === "Sketching") {
				setSelectedData(content.gallery[0]);
				setCurrentGalleryLength(content.gallery[0].length);
			} else if (section === "Wireframes") {
				setSelectedData(content.gallery[1]);
				setCurrentGalleryLength(content.gallery[1].length);
			} else if (section === "Prototypes") {
				setSelectedData(content.gallery[2]);
				setCurrentGalleryLength(content.gallery[2].length);
			} else if (section === "Research") {
				setSelectedData(content.gallery[3]);
				setCurrentGalleryLength(content.gallery[3].length)
			}
			setCurrentGalleryIndex(0);
		};

		const handleChangeIndex = (index) => {
			setCurrentGalleryIndex(index);
		};

		const showNextImage = () => {
			handleChangeIndex(
				(prevIndex) => (prevIndex + 1) % currentGalleryLength
			);
		};

		const showPrevImage = () => {
			handleChangeIndex((prevIndex) =>
				prevIndex === 0 ? currentGalleryLength - 1 : prevIndex - 1
			);
		};

		const Modal = ({ src, alt, section, closeModal }) => {
			console.log(section);
			return (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-qportfolio-black/60">
					<div className="absolute inset-0 flex items-center justify-center ">
						<div className="z-10 p-4 bg-white rounded-lg shadow-lg">
							{section === "Sketching" ||
							section === "Wireframes" || section === "Research" ? (
								<img
									src={src}
									alt={alt}
									className="w-full h-auto"
									onClick={closeModal}
								/>
							) : (
								<video
									src={src}
									alt={alt}
									className="w-full h-auto"
									onClick={closeModal}
									autoPlay
								/>
							)}
							<button
								onClick={closeModal}
								className="p-2 mt-4 text-white rounded-lg bg-qportfolio-black"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			);
		};

		const openModal = () => {
			setShowModal(true);
		};

		const closeModal = () => {
			setShowModal(false);
		};

		return (
			<>
				<motion.section
					className="h-[150vh] flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-12 bg-qportfolio-white relative grid-rows-1 items-start justify-items-start  "
					style={{ opacity: sectionOpacity }}
					ref={endToEndUXDesignRef}
				>
					<motion.h2
						className="sticky left-0 w-full row-start-1 px-6 mt-8 text-4xl font-bold lg:text-6xl sm:px-8 lg:px-16 h-fit top-24 font-archivo col-span-full lg:col-start-1 lg:col-span-5 text-qportfolio-black z-[1] pr-4 "
						style={{ opacity: titleOpacity }}
					>
						End to End UX Design
					</motion.h2>
					<motion.div
						className="sticky w-full px-6 pb-0 my-0 overflow-x-auto min-h-fit  lg:col-start-1 lg:row-start-1 sm:px-8 lg:overflow-auto top-44 sm:top-36 lg:top-0 sm:mt-12 lg:col-span-4 lg:pl-16 lg:row-span-full z-[1]"
						style={{ opacity: tabOpacity }}
					>
						<ul className="relative flex row-start-1 pr-6 space-x-6 row-span-full sm:pr-8 col-span-full lg:relative lg:space-x-0 lg:space-y-6 lg:flex-col lg:pl-4 lg:mt-64 w-fit lg:place-items-start ">
							{subsections.map((practice, idx) => (
								<li
									key={idx}
									className={`h-24 lg:h-16 text-3xl cursor-pointer ${getSectionTextColor(
										practice
									)}`}
									onClick={() => handleChangeTab(practice)}
								>
									{practice}
								</li>
							))}
						</ul>
					</motion.div>
					<motion.div
						className="sticky top-64 h-[100vh] sm:h-[75vh] grid w-full grid-flow-col grid-rows-2 mx-auto lg:w-full lg:top-48 lg:ml-8 lg:col-start-5 lg:row-span-1 lg:h-full lg:row-start-1 bg-qportfolio-black lg:col-span-full  z-[0] "
						style={{ opacity: galleryOpacity }}
					>
						<div className=" sticky top-64 grid h-[70vh] grid-cols-12 grid-rows-3 px-8  ">
							<div className="flex justify-center w-full h-full col-span-1 col-start-1 row-span-2 row-start-1 -mt-12 rotate-180 cursor-pointer hover:scale-105 hover:transition-all ">
								<img
									src={icon_caret}
									className="w-4"
									role="button"
									onClick={() => showPrevImage()}
								/>
							</div>
							<div
								className="flex justify-center col-span-10 col-start-2 row-span-2 row-start-1 "
								onClick={() => openModal()}
							>
								{selectedSection === "Sketching" ||
								selectedSection === "Wireframes" || selectedSection === "Research" ? (
									<img
										src={
											selectedData[currentGalleryIndex]
												.src
										}
										alt={
											selectedData[currentGalleryIndex]
												.alt
										}
										className="object-contain h-full"
									/>
								) : (
									<video
										src={
											selectedData[currentGalleryIndex]
												.src
										}
										alt={
											selectedData[currentGalleryIndex]
												.alt
										}
										className="object-contain h-full"
										autoPlay
									/>
								)}
							</div>
							<div
								className="flex justify-center w-full h-full col-span-1 col-start-12 row-span-2 row-start-1 -mt-12 cursor-pointer hover:scale-105 hover:transition-all "
								onClick={() => showNextImage()}
							>
								<img
									src={icon_caret}
									className="w-4"
									role="button"
								/>
							</div>
							<p className="col-span-12 col-start-1 row-span-1 row-start-3 pt-4 text-xl sm:col-span-10 sm:col-start-2 font-archivo text-qportfolio-white">
								{selectedData[currentGalleryIndex].description}
							</p>
						</div>
					</motion.div>
					{showModal && (
						<Modal
							src={selectedData[currentGalleryIndex].src}
							alt={selectedData[currentGalleryIndex].alt}
							section={selectedSection}
							closeModal={() => closeModal()}
						/>
					)}
				</motion.section>
			</>
		);
	};

	const ProductDesignSection = () => {
		const productDesignRef = useRef(null);
		const { scrollYProgress } = useScroll({
			target: productDesignRef,
			offset: ["start end", "end start"],
		});

		const [selectedSection, setSelectedSection] = useState("Theory");
		const [selectedData, setSelectedData] = useState(
			content.theoryAndPractice.theory
		);

		const subsections = ["Theory", "Practice"];

		const sectionOpacity = useTransform(
			scrollYProgress,
			[0, 0.1, 0.9, 0.93],
			[0, 1, 1, 0]
		);
		const titleOpacity = useTransform(
			scrollYProgress,
			[0, 0.23, 0.27, 0.62, 0.67],
			[0, 0, 1, 1, 0]
		);

		const tabOpacity = useTransform(
			scrollYProgress,
			[0, 0.26, 0.32, 0.65, 0.7],
			[0, 0, 1, 1, 0]
		);

		const contentOpacity = useTransform(
			scrollYProgress,
			[0, 0.3, 0.35, 0.7, 0.75],
			[0, 0, 1, 1, 0]
		);

		const getSectionTextColor = (section) => {
			if (section === selectedSection) {
				return "font-bold text-qportfolio-black/95";
			} else {
				return "font-semibold text-qportfolio-black/70 hover:text-qportfolio-black/85";
			}
		};

		const handleChangeTab = (section) => {
			setSelectedSection(section);
			if (section === "Theory") {
				setSelectedData(content.theoryAndPractice.theory);
			} else if (section === "Practice") {
				setSelectedData(content.theoryAndPractice.practice);
			}
		};

		const containerVariants = {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.5, // This will stagger the animation of children by 0.5 seconds
				},
			},
		};

		const childVariants = {
			hidden: { opacity: 0, y: 20 },
			visible: { opacity: 1, y: 0 },
		};

		return (
			<>
				<motion.section
					className="mt-48 min-h-[150vh] h-fit pb-12 flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-12 bg-qportfolio-white relative grid-rows-1 items-start justify-items-start  "
					ref={productDesignRef}
					style={{ opacity: sectionOpacity }}
				>
					<motion.h2 className="sticky left-0 w-full row-start-1 px-6 mt-8 text-4xl font-bold lg:text-6xl sm:px-8 lg:px-16 h-fit top-24 font-archivo col-span-full lg:col-start-1 lg:col-span-5 text-qportfolio-black z-[1] pr-4 " style={{opacity:titleOpacity}}>
						Product Design
					</motion.h2>
					<motion.div className="sticky w-full px-6 pb-0 my-0 overflow-x-auto min-h-fit  lg:col-start-1 lg:row-start-1 sm:px-8 lg:overflow-auto top-44 sm:top-36 lg:top-0 sm:mt-12 lg:col-span-4 lg:pl-16 lg:row-span-full z-[1]" style={{opacity: tabOpacity}}>
						<ul className="relative flex row-start-1 pr-6 space-x-6 row-span-full sm:pr-8 col-span-full lg:relative lg:space-x-0 lg:space-y-6 lg:flex-col lg:pl-4 lg:mt-64 w-fit lg:place-items-start ">
							{subsections.map((practice, idx) => (
								<li
									key={idx}
									className={`h-24 lg:h-16 text-3xl cursor-pointer ${getSectionTextColor(
										practice
									)}`}
									onClick={() => handleChangeTab(practice)}
								>
									{practice}
								</li>
							))}
						</ul>
					</motion.div>
					<motion.div className="sticky top-64 h-[100vh] sm:h-[75vh] grid w-full grid-flow-col grid-rows-2 mx-auto lg:w-full lg:top-48 lg:ml-8 lg:col-start-5 lg:row-span-1 lg:h-full lg:row-start-1 bg-qportfolio-white lg:col-span-full  z-[0] " style={{opacity: contentOpacity}}>
						<div className=" sticky top-64 lg:grid h-[70vh] lg:grid-cols-12 lg:grid-rows-4 px-8 flex flex-col ">
							<motion.h3
								className="col-start-1 text-4xl font-bold col-span-full"
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.75, delay: 0 }}
							>
								{selectedData.heading}
							</motion.h3>
							<motion.p
								className="col-start-1 text-2xl col-span-full lg:col-span-10 lg:-mt-24"
								dangerouslySetInnerHTML={{
									__html: selectedData.text,
								}}
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.75, delay: 0.5 }}
							/>
							<motion.div className="grid items-center justify-center w-2/3 grid-cols-3 col-start-1 row-start-4 gap-8 pt-16 mx-auto col-span-full lg:gap-12 lg:pt-0 lg:w-1/2"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{selectedData.thumbnails.map((icon, index) => {
									return <motion.img
										key={index}
										src={icon.icon}
										className="w-full h-auto aspect-square"
										variants={childVariants}
									/>
								})}
							</motion.div>
						</div>
					</motion.div>
				</motion.section>
			</>
		);
	};

	const StudentPortfolioSection = () => {

		const portfolios = content.portfolios

		console.log(portfolios)

		return (
			<section className="w-full min-h-screen mt-48 bg-qportfolio-white">
				<h2 className=" left-0 w-full px-6 mt-8 text-4xl font-bold lg:text-6xl sm:px-8 lg:px-16 h-fit top-24 font-archivo col-span-full lg:col-start-1 lg:col-span-5 text-qportfolio-black z-[1] pr-4 ">
					{portfolios.heading}
				</h2>
				<p className="left-0  px-6 mt-8 text-2xl lg:text-3xl sm:px-8 lg:px-16 h-fit top-24 font-archivo col-span-full lg:col-start-1 lg:col-span-5 text-qportfolio-black z-[1] pr-4 lg:w-2/3 w-10/12">
					{portfolios.subheading}
				</p>
				<div className="grid w-full grid-flow-row grid-cols-4 gap-2 px-12 py-12 my-12 ">
					{portfolios.portfolioGallery.map((portfolio, index) => {
						return (
							<div
								key={index}
								className="flex flex-col col-span-2 "
							>
								<a href={portfolio.link}>
									<img
										src={portfolio.thumbnail}
										className="object-cover transition-all duration-200 hover:scale-105"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	}
	const StudentTestimonialsSection = () => {

		const testimonials = content.testimonials


		return (
			<section className="w-full min-h-screen mt-48 bg-qportfolio-white">
				<h2 className=" left-0 w-full px-6 mt-8 text-4xl font-bold lg:text-6xl sm:px-8 lg:px-16 h-fit top-24 font-archivo col-span-full lg:col-start-1 lg:col-span-5 text-qportfolio-black z-[1] pr-4 ">
					{testimonials.heading}
				</h2>
				<p
					className="left-0 px-6 mt-8 text-2xl lg:text-3xl sm:px-8 lg:px-16 h-fit top-24 font-archivo col-span-full lg:col-start-1 lg:col-span-5 text-qportfolio-black z-[1] pr-4 lg:w-2/3 w-10/12"
					dangerouslySetInnerHTML={{
						__html: testimonials.subHeading,
					}}
				/>
				<div className="grid w-full grid-flow-row grid-cols-1 gap-2 px-12 py-12 my-12 ">
					{testimonials.testimonialCards.map((testimonial, index) => (
						<div
							className="w-full p-5 rounded-md shadow-lg bg-qportfolio-white"
						>
							<p
								className="text-xl font-semibold tracking-wider text-qportfolio-black"
								dangerouslySetInnerHTML={{
									__html: testimonial.testimonial,
								}}
							/>

							<div className="flex items-center justify-between gap-1 mt-7">
								<div className="flex flex-col flex-1 text-qportfolio-black">
									<p className="text-base font-bold text-primary-green">
										<span className="text-xl text-primary-green">
											~
										</span>
										{testimonial.name}
									</p>

								</div>

							</div>
						</div>
					))}
				</div>
			</section>
		);
	}

	const ClosingSection = () => {
		return (<section className="w-full min-h-[40vh] my-48 pb-24 bg-primary-green">
			<h2 className="w-10/12 pt-24 mx-auto text-4xl md:text-5xl text-qportfolio-white font-gloock lg:pt-12">
				How Can I Help Your Team Grow Today?
			</h2>
			<p className="w-10/12 py-12 mx-auto text-2xl lg:mx-0 text-qportfolio-white font-archivo lg:px-24 xl:px-32">I create significant change for students, clients, stakeholders and organizations.<br/><br/>Let's talk about how I can make an impact at yours.</p>
		</section>)
	}

	return (
		<>
			<section
				ref={targetRef}
				className="mt-20  lg:h-[100vh] bg-primary-green"
			>
				<div className="grid w-full h-full min-h-full grid-flow-row grid-cols-12 grid-rows-4 lg:grid-flow-col lg:grid-rows-1 lg:grid-cols-12">
					<div className="relative col-start-1 row-span-2 row-start-1 col-span-full lg:col-span-8 lg:col-start-1">
						<motion.div
							className="absolute bottom-0  text-6xl sm:text-[5.5rem] lg:text-[7rem] xl:text-[7.5rem] text-qportfolio-white font-gloock p-4 sm:p-6 lg:p-16 xl:p-24"
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								staggerChildren: 2,
								delay: 0.75,
								duration: 0.75,
							}}
						>
							<h1>{content.heading}</h1>
							<p className="w-full mt-8 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-qportfolio-white font-archivo">
								{content.subHeading}
							</p>
						</motion.div>
					</div>
					<motion.div
						className="w-full h-full row-start-3 lg:col-span-4 lg:col-start-9 lg:row-start-1 bg-qportfolio-white col-span-full row-span-full"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 1.5, duration: 0.75 }}
					>
						<WideSummaryModule
							role={content.role}
							tools={content.tools}
							duration={content.duration}
						/>
					</motion.div>
				</div>
				</section>
				<CaseStudyv2HeroImage />
				<WhatITeachSection />
				<EndToEndUXDesignSection />
				<ProductDesignSection />
				<StudentPortfolioSection />
				<StudentTestimonialsSection />
				<ClosingSection />
				<Contact />
		</>

	);
};

export default CaseStudyv2;
