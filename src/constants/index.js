import {
	www,
	appstore,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	python,
	mongodb,
	git,
	figma,
	affinity,
	axure,
	framer,
	illustrator,
	photoshop,
	sketch,
	xd,
	zeplin,
	appiction,
	quotient,
	disney,
	ga,
	woodbury,
	siegecraft,
	makermanager,
	simcoestitchcraft,
	mdx,
	dcl,
	resorts,
	danthumb,
	danwall,
	icon_adulteducation,
	icon_webdevelopment,
	icon_uxdesign,
	icon_gamedesign,
	gallery1,
	gallery2,
	gallery3,
	quentin_caron,
	janice_cheng,
	casestudy_hero_fastpass_plus,
	casestudy_image_mdx1,
	casestudy_image_fastpass1,
	icon_expand,
	icon_upgrade,
	icon_refresh,
	icon_winner,
	icon_simplify,
	icon_choice,
	casestudy_image_mdx_before,
	casestudy_image_mdx_after,
	casestudy_image_fpp_old,
	casestudy_image_fpp_update1,
} from "../assets";

export const navLinks = [
	{
		id: "newPost",
		title: "New Post",
		page: true,
		linkTo: "/newpost",
		loginRequired: true,
	},
	{
		id: "blog",
		title: "Blog",
		page: true,
		loginRequired: true,
		linkTo: "/blog",
	},
	{
		id: "about",
		title: "About",
		linkTo: "/",
	},
	{
		id: "casestudy",
		title: "Case Studies",
		page: true,
		linkTo: "/casestudy",
	},
	{
		id: "projects",
		title: "My Projects",
		linkTo: "/",
	},
	{
		id: "contact",
		title: "Contact",
		linkTo: "/",
	},
	{
		id: "logout",
		title: "Logout",
		page: true,
		linkTo: "/logout",
		loginRequired: true,
		action: "logout",
	},
];

const sectionOverviews = [
	{
		title: "Overview",
		subtitle: "Introduction",
		body: "I'm a user experience designer, educator and developer with over 20 years of experience working with professional teams, developing young minds in the classroom, and leading teams to deliver high quality designs.\n Let's build something great together.",
		image: danthumb,
	},
	{
		title: "My Work So Far",
		subtitle: "What I've Been Up To",
		body: "",
	},
	{
		title: "Technologies",
		subtitle: "Tools of the trade",
		body: "A collection of some of the design and development tools I use on a daily basis.",
	},
	{
		title: "My Projects",
		subtitle: "What I've been working on lately",
		body: "Some recent design and development projects.",
	},
	{
		title: "Testimonials",
		subtitle: "What do they say about me? (When I'm around, at least...)",
		body: "",
	},
	{
		title: "Let's Get Started",
		subtitle: "Let's build the future together",
		body: "Shoot me an email or get in contact with me via LinkedIn. I'm currently accepting freelance work and consultancy for UX/software design and development.",
		image: danwall,
	},
	{
		title: "Blog",
		subtitle: "Thoughts about things",
		body: "A collection of thoughts on design, development, teaching and all things between.",
	},
	{
		text: "© 2023 Dan McCollum",
		githubText: "View the source code for this website on Github",
		githubLink: "https://github.com/luminouspear/qportfolio",
		text_rights:
			"All rights reserved. Images used on this site are sourced from external platforms and credited to their respective creators.",
	},
	{
		title: "Dan's Blog",
		subtitle: "A blog about tech, life and learning",
		body: "A collection of thoughts and articles about UX design, web development, game design and the future of our industry.",
	},
];

const heroGallery = [
	{ image: gallery1, alt: "A wizard dreams up a castle." },
	{
		image: gallery2,
		alt: "A a magical wizard school where students are learning.",
	},
	{ image: gallery3, alt: "A desert with gigantic cloud trees." },
];

const services = [
	{
		title: "UX Designer",
		icon: icon_uxdesign,
	},
	{
		title: "Game Designer",
		icon: icon_gamedesign,
	},
	{
		title: "Adult Educator",
		icon: icon_adulteducation,
	},
	{
		title: "Web Developer",
		icon: icon_webdevelopment,
	},
];

const technologies = [
	{ name: "Figma", icon: figma },
	{ name: "Sketch", icon: sketch },
	{ name: "Axure RP", icon: axure },
	{ name: "Framer", icon: framer },
	{ name: "Adobe Photoshop", icon: photoshop },
	{ name: "Adobe Illustrator", icon: illustrator },
	{ name: "Adobe Xd", icon: xd },
	{ name: "Affinity Suite", icon: affinity },
	{ name: "Zeplin", icon: zeplin },
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},

	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	{
		title: "Lead User Experience Design Instructor",
		company_name: "General Assembly - Toronto",
		icon: ga,
		iconBg: "#fff",
		date: "August 2019 - April 2023",
		points: [
			"Trained over 120 professionals across a diverse range of backgrounds, skills and abilities in basic and advanced user experience design.",
			"Created and lead cross-functional developer-designer student projects, fostering a thriving community of mentor alumni.",
			"Completely revised and rewrote the user experience design curriculum from the ground up to meet a modern online learning environment and drive student engagement.",
			"Completed all cohorts with outstanding NPS scores, including a perfect 100 🏅 in the final cohort.",
		],
	},
	{
		title: "Senior User Experience Design Lead / Interaction Design Lead",
		company_name:
			"Disney Parks, Experiences and Products (aka Walt Disney Parks & Resorts Online)",
		icon: disney,
		iconBg: "#fff",
		date: "Jun 2012 - Jun 2019",
		points: [
			'Lead designer for flagship Disney projects including the Walt Disney World "My Disney Experience" mobile app, the Disney Cruise Line app, Walt Disney World Resort eCommerce, and the 2015 redesign of Disney\'s FastPass+ Service in Walt Disney World. ',
			"Responsible for end-to-end user experience and product design deliverables for our team, including early strategic planning, budgeting, estimations and creating timelines, all aspects of pre- and post-release research and testing, and delivering experiences that transcended guest expectations.",
			"Practitioner with outstanding skills in information architecture, interaction design, wireframing, detailed functional prototyping, user interviews, surveying and testing.",
			"Lead multiple projects for each of the following Disney brands:",
			"Walt Disney World, Disneyland Resort, Disney Cruise Line, Disney's Aulani Resort & Spa, Disney Consumer Products, Disney Vacation Club, Adventures by Disney, Disney Institute, Disney Meetings, Disney Weddings, Disney Youth, Shanghai Disneyland, Hong Kong Disneyland, runDisney, Disney's Golden Oak, Disney's Club 33, ESPN Wide World of Sports",
		],
	},
	{
		title: "Associate UX Design Professor",
		company_name: "Woodbury University",
		icon: woodbury,
		iconBg: "#fff",
		date: "Aug 2015 - Jun 2018",
		points: [
			"Taught upper-division Information Design, User Experience Design and Future Design courses at the Woodbury University School of Media, Culture and Design.",
			"Worked with academic advisors to create and develop unique curriculum in alignment with national accreditation standards.",
			"Taught industry design standards and principles to help students build a professional portfolio and begin to develop their professional practice. Led class time, lectures, workshops, out-of-class communication with students and grading.",
		],
	},
	{
		title: "UX Designer",
		company_name: "Quotient Solutions",
		icon: quotient,
		iconBg: "#fff",
		date: "Jun 2011 - Jan 2012",
		points: [
			"Led UI and UX development for 2 released iOS and Android projects: Artist Growth (iOS/Android), VIPOrbit (iPhone/iPad), interfacing with clients and project managers to drive project success.",
			"Led design of back-end web CMS systems for HanleyWood, the world's largest construction convention company, and front- and back-end systems for Artist Growth.",
			"Created interactive, clickable prototypes and documentation for web and mobile applications with Axure RP.",
		],
	},
	{
		title: "UX Designer / Graphic Designer / Game Designer",
		company_name: "Appiction, LLC",
		icon: appiction,
		iconBg: "#fff",
		date: "Sep 2010 - Jun 2011",
		points: [
			"Led full application design for 15 iOS, Android, Windows Phone 7 and web applications, as well as worked as a graphic designer on another 15+.",
			"Dealt with clients in phone and face-to-face meetings, pitching ideas, working with their concepts and working with our internal team to bring their projects to life.",
			"Responsible for wireframing iPhone applications, prototyping game designs (using tools like Torque 2D and GameSalad), and technical documentation.",
			"Set standards for specification writing for games and applications, ensuring both best documentation practices, but also ensuring adherence to industry standard guidelines, like the Apple Human Interface Guidelines.",
		],
	},
];

const additionalExperiences = [
	{
		title: "Plus another 8 years of freelancing and designing",
		subtitle:
			"I've been working in mobile gaming since 2007, and have been designing and writing since 2004.",
	},
	{
		title: "And a professional education background that goes back to 2002",
		subtitle:
			"I specialize in working with adults, but I've worked a variety of different educational roles, always directly with students.",
	},
	{
		title: "I've recently pivoted to add development to my skillset",
		subtitle:
			"I'm concentrating on front-end web development using React, and wrangling Python 🐍.",
	},
];

const testimonials = [
	{
		testimonial:
			"Dan is not only an expert in the design industry but also someone who genuinely cares about his student's growth and success. His intuition and empathy as a teacher have been invaluable in shaping my design style and approach. He even encouraged and supported me in creating a workshop for new designers, igniting a new passion for teaching. If you have the opportunity to work with Dan, I highly recommend taking it – he is an exceptional instructor and mentor who will undoubtedly inspire and guide you to reach your full potential.",
		name: "Quentin Caron",
		designation: "Product Designer",
		company: "Thunkable",
		image: quentin_caron,
	},
	{
		testimonial:
			"As a product designer in the SAAS space, Dan's leadership as Lead UX Instructor at General Assembly was instrumental in my professional development. Dan's excellent design communication skills and his versatility as a UX practitioner helped bring clarity to my design process and helped me articulate design principles and decisions to project stakeholders. In my time of knowing Dan, he is always introducing useful methods to team projects that lead to useful product discoveries and better user experiences. Working with Dan is invaluable. I would be honored to learn with him again!",
		name: "Janice Cheng",
		designation: "Product Designer",
		company: "Samsara",
		image: janice_cheng,
	},
];

const projects = [
	{
		name: "Third Dawn: Siegecraft",
		description:
			"A hybrid card/board game with over 220 unique illustrated cards made with Stable Diffusion. Built for competitive play, you can explore the powers of the elements of Earth, Air, Fire, Water, Light and Shadow. Co-created with designer Ben Doeckel.",
		githubLink: true,
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "stablediffusion",
				color: "pink-text-gradient",
			},
		],
		image: siegecraft,
		location: www,

		git_source_code_link: "https://github.com/luminouspear/siegecraft-web",
		url_location: "https://siegecraftgame.com",
	},
	{
		name: "MakerManager.ca",
		description:
			"A quick one-page static site made to promote my wife's virtual administrator business. Created with Create React App and Tailwind CSS.",
		githubLink: true,
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: makermanager,
		location: www,
		git_source_code_link: "https://github.com/luminouspear/makermanager",
		url_location: "https://makermanager.ca",
	},
	{
		name: "Simcoe Stitchcraft",
		description:
			"A funky and customized eCommerce and gallery web store for Simcoe Stitchcraft, which specializes in quirky handmade quilts and over-the-top colours.",
		githubLink: true,
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
		],
		image: simcoestitchcraft,
		location: www,
		git_source_code_link: "https://github.com/luminouspear/k_store",
		url_location: "http://simcoestitchcraft.com",
	},
];
const legacyProjects = [
	{
		name: "My Disney Experience (WDW App)",
		description:
			'Lead designer for the Walt Disney World "My Disney Experience" app. Designed to assist you with planning and visiting the parks, booking FastPass+ and helping guests have a magical day.',
		dates: "2012 - 2015",
		location: appstore,
		tags: [
			{
				name: "ios development",
				color: "blue-text-gradient",
			},
			{
				name: "android development",
				color: "green-text-gradient",
			},
			{
				name: "lead product design",
				color: "pink-text-gradient",
			},
		],
		image: mdx,
		url_location:
			"https://apps.apple.com/ca/app/my-disney-experience/id547436543",
	},
	{
		name: "Disney Cruise Line Navigator App",
		description:
			'The official Disney app for sailing onboard Disney ships. The "Disney Cruise Line" Navigator app was built to ensure guests had the best experience during their sailing by giving them up-to-date info on everything going on on their ship.',
		dates: "2012 - 2015",
		location: appstore,
		tags: [
			{
				name: "ios development",
				color: "blue-text-gradient",
			},
			{
				name: "android development",
				color: "green-text-gradient",
			},
			{
				name: "lead product design",
				color: "pink-text-gradient",
			},
		],
		image: dcl,
		url_location:
			"https://apps.apple.com/ca/app/disney-cruise-line-navigator/id671153791",
	},
	{
		name: "WDW eCommerce (Resorts)",
		description:
			"Lead numerous initiatives for feature expansion and experience optimization in the WDW Resorts eCommerce space, including redesigning the resorts booking, dining plans and post-booking services for guests.",
		dates: "2016 - 2019",
		location: www,
		tags: [
			{
				name: "responsive web design",
				color: "qportfolio-black",
			},
			{
				name: "ecommerce",
				color: "green-text-gradient",
			},
			{
				name: "lead product design",
				color: "pink-text-gradient",
			},
		],
		image: resorts,
		url_location: "https://disneyworld.disney.go.com/resorts/",
	},
];

const blogTestData = [
	{
		id: 1,
		title: "Getting Started with React",
		author: "Jane Doe",
		date: "2023-05-01",
		summary: "",
		content:
			"In this blog post, we'll explore the basics of React, a popular JavaScript library for building user interfaces. We'll start by setting up a new React project, then dive into components, props, and state management.",
		mainImage: "https://picsum.photos/300/200",
		tags: ["React", "JavaScript", "Frontend"],
		featured: false,
	},
	{
		id: 2,
		title: "An Introduction to Tailwind CSS",
		author: "John Smith",
		date: "2023-05-10",
		summary: "",
		content:
			"Tailwind CSS is a utility-first CSS framework that makes it easy to build custom designs with ease. In this blog post, we'll cover the basics of setting up a Tailwind CSS project and explore some of its powerful features.",
		mainImage: "https://picsum.photos/300/200",
		tags: ["Tailwind CSS", "CSS", "Design"],
		featured: false,
	},
	{
		id: 3,
		title: "How to Boost Your Productivity as a Developer",
		author: "Alice Brown",
		date: "2023-02-15",
		summary: "",
		content:
			"Being a developer can be both rewarding and challenging. In this post, we'll explore strategies to boost your productivity...",
		mainImage: "https://picsum.photos/300/200",
		tags: ["Productivity", "Developer", "Tips"],
		featured: true,
	},
	{
		id: 4,
		title: "Demystifying CSS Grid Layout",
		author: "Bob Johnson",
		date: "2023-01-30",
		summary: "",
		content:
			"CSS Grid Layout is a powerful tool for creating responsive and flexible layouts. In this post, we'll dive into the basics...",
		mainImage: "https://picsum.photos/300/200",
		tags: ["CSS", "Grid", "Web Development"],
		featured: false,
	},
];

const caseStudyContent = [
	{
		id: "fastpass",
		pageTitle: "Disney's FastPass+ Redesign Case Study",
		heading: "Redesigning Disney's FastPass+",
		subHeading: "Re-imagining a classic Disney parks experience.",
		heroImage: casestudy_hero_fastpass_plus,
		heroImageAlt:
			"A guest uses their MagicBand to check into a terminal at Walt Disney World.",
		role: "Senior User Experience Lead @ Disney Parks, Resorts & Experiences",
		tools: [
			{ icon: axure, alt: "Axure RP Pro" },
			{ icon: sketch, alt: "Sketch" },
			{ icon: illustrator, alt: "Adobe Illustrator" },
		],
		duration: "3 months (Jan 2015-March 2015",
		sectionTwoTitle: "Project Goals",
		sectionTwoSubheading:
			"While <em>Disney's FastPass+ Service</em> was enjoyed by millions of Disney Parks guests, many guests had feedback about the initial implementation, which reduced guest choice and caused long lines at kiosks throughout the park (because editing was not available in the app).<br/><br/><blockquote class='border-l-2 border-solid border-l-qportfolio-black pl-4'>\"[The] fastpass system is full of glitches as well as confusing. Limiting people to three fastpasses per day and tiering them was a big mistake. <strong>The FP+ kiosk lines were much longer than the actual ride lines.</strong>\"<br/><em>&#8212;Barbara Stiefel</em><a href='https://allears.net/2014/01/30/how-to-use-new-fastpass-system-at-walt-disney-world/' class='font-bold text-qportfolio-secondary-green' target='_blank'><sup>1</sup></a></blockquote> <br /><br />The goal of this project was to create, test and implement an updated solution for FastPass+ that would uncover and satisfy evolving guest needs.",
		sectionTwoImage: {
			image: casestudy_image_fastpass1,
			alt: "The My Disney Experience app's FastPass+ selection screen.",
		},
		mainPointsHeading: "The Opportunity",
		mainPointsSubheading:
			"A redesign for FastPass+ needed to meet the following goals for guests and the business",
		mainPoints: [
			{
				id: 1,
				heading: "Greater Guest Freedom",
				subheading:
					"Allow guests to choose their own FastPass+ selections among available inventory.",
				icon: icon_choice,
				iconAlt: "choice by Dong Ik Seo from Noun Project (CC BY 3.0)",
			},
			{
				id: 2,
				heading: "Simplify and Expand Selection",
				subheading:
					"Create flows to allow guests to choose expereinces before their arrival and during their visit.",
				icon: icon_simplify,
				iconAlt:
					"direct by Adrien Coquet from Noun Project (CC BY 3.0)",
			},
			{
				id: 3,
				heading: "Beat the Existing Experience",
				subheading:
					"Demonstrate through user testing that users prefer the new direction before implementation.",
				icon: icon_winner,
				iconAlt:
					"winner by Ralf Schmitzer from Noun Project (CC BY 3.0)",
			},
		],
		research: {
			heading: "A Tale of Two Prototypes",
			subHeading:
				"Following a successful in-person paper test with guests at Walt Disney World, my team was given the task to take the results from that test and rapidly deliver a pair of prototypes for an in-person user test at the beginning of February.<br/><br/>Working closely with the product team, my design team (consisting of visual designer Wes Lebsack and information architect April Huerta) got to work quickly building two separate prototypes to be tested using Axure RP Pro.",
			content: [
				{
					id: 1,
					image: casestudy_image_fpp_old,
					story: "The first prototype was a modified Control version of the prototype. The team that made the original FastPass+ flow wanted to see their most-optimal version of the FastPass+ flow represented.<br/><br/>That said, the prototype represented a flow that had a number of issues that guests did not like: ",
					bulletPoints: [
						"<strong>A lack of user control:</strong> The original FastPass+ flow utilized an algorithm that gave users pre-configured sets of rides and times. It tried to manage <em>flow control</em>, or when and where guests were in the parks. While this may have worked to some extent, it prevented users from choosing specific rides and specific times.",
						"<strong>Inability to book more than 3 FastPass+ experiences:</strong> While the research showed that guests rarely used more than 3 FastPass+ experiences, we learned that restricting users to only 3 caused them to want more than 3.",
						'<strong>Inability to use FastPass+ between parks:</strong> Many guests bought "park-hopping"/multi-park tickets and were disappointed that they could not use FastPass+ at the Magic Kingdom and Epcot in the same day. This was mostly a limitation of how the original flow was constructed.',
					],
					summary: "",
				},
				{
					id: 2,
					image: casestudy_image_fpp_update1,
					story: "For our updated prototype, our team threw the kitchen sink at the problem. We wanted to give users everything we had heard them ask for and demonstrate to the other group that their thinking about FastPass+ was incorrect.<br/><br/>Ultimately, the updated FastPass+ prototype represented our capability of listening to what users needed, rather than telling them what was best for them.<br/><br/>I created both prototypes using Axure RP Pro. To increase immersion during our user test, I was able to use the Repeater functionality to create a searchable and bookable database of every FastPass+ attraction across all 4 parks.<br/><br/>Our 5 day in-person user test kicked off in a conference room in Epcot in early February 2015. Some highlights from the test:",
					bulletPoints: [
						"<strong>Users loved having direct control:</strong> The updated FastPass+ flow allowed users to select direct and specific times for attractions for the first time.",
						"<strong>But things were not perfect:</strong> Every day following the test, we incorporated user feedback into an updated prototype working to get the best solution for our guests.",
					],
					summary:
						"Conclusion: 19 out of 20 guests preferred our new FastPass+ experience! It was put into development and implemented in the app on April 28, 2016.",
				},
			],
		},
		reception: {
			heading: "So How Did It Do?",
			subHeading:
				"Following the test, Disney Parks president Tom Staggs announced to the <a href='https://disneyparks.disney.go.com/blog/2014/04/mymagic-now-available-to-walt-disney-world-resort-hotel-and-day-guests/' class='font-bold text-qportfolio-secondary-green' target='_blank'>Disney Parks Blog</a>:<br/><br/><blockquote class='border-l-2 border-solid border-l-qportfolio-black pl-4'>“We've heard from a number of guests that they would like the opportunity to add additional FastPass+ entitlements during their visit, in addition to the three they can plan in advance. So, we're working on providing them with the ability to add and enjoy additional entitlements on the day of their visit. Once they've used the three they've booked, we'll enable them to select another at kiosks in the parks. And once they've used the fourth, they can select another, and so on. We also heard that other guests liked the fact that with the FastPass+ service they could use FASTPASS when they park hopped. So we're working on a service enhancement to add that feature to FastPass+ as well.”</blockquote>",
			quotes: [
				{
					id: 1,
					quote: "<strong>FastPass+'s reliance on websites and smart phone apps is largely lauded</strong>, and the most passionate advocates will gladly tell you how much they appreciate the fact that they can even make their reservations 60 days in advance, or link their ride times with the rest of their family's. And the fact that a whole slew of additional attractions, such as older or minor rides and nighttime shows, have been added to the FastPass-eligible list is applauded.",
					source: "Orlando Informer",
					src: "https://orlandoinformer.com/2014/rumor-round-up-march-22-fastpass-plus-controversy/",
					author: "Marc N. Kleinhenz",
				},
				{
					id: 2,
					quote: "<strong>FastPass+ is being used by 40% more people than the previous system was</strong>, according to Disney Parks and Resorts chairman Tom Staggs, who also added that Disney'’'s guests are experiencing more attractions and exploring the parks more extensively than they did while using the original FastPass, spending less time \"running around grabbing passes.\".",
					source: "Inside the Magic",
					src: "https://insidethemagic.net/2014/05/development-of-fastpass-delivers-freedom-as-walt-disney-world-personalizes-vacations-with-more-mymagic-planned/",
					author: "Kat Maria",
				},
				{
					id: 3,
					quote: "This is awesome. Often in the past, I would have to book three fast-passes when I only had intentions of using one. <strong>Thanks for the change. it'll open up passes for others. Well done Disney</strong>",
					source: "Disney Parks Blog",
					src: "https://disneyparks.disney.go.com/blog/2016/04/new-fastpass-enhancements-at-walt-disney-world-resort/",
					author: "Charles (Guest)",
				},
			],
		},
		conclusion: {
			heading: "Making an Impact, Fast",
			subHeading:
				'This project is just one example of how quickly we moved to meet guest needs within the application. As I outlined in my "My Disney Experience" case study, because the Walt Disney World app was the hub for the billion dollar experience enhancement at Disney Parks it was critical make this experience work for our guests.<br/><br/>To conclude, check out this video released by Disney announcing the new changes.',
			videoSrc: "https://www.youtube.com/embed/xPvatp8W5Lk",
		},
	},
	{
		id: "mdx",
		pageTitle: "My Disney Experience Design Case Study",
		heading: "Designing My Disney Experience",
		subHeading:
			"The story behind the creation of the beloved <a class='font-bold text-qportfolio-secondary-green hover:text-qportfolio-primary-green'  href='https://winners.webbyawards.com/2013/apps-dapps-and-software/handheld-devices/travel-handheld-devices/148026/my-disney-experience' target='_blank'>award-winning</a> mobile parks app used by millions of Disney guests.",
		heroImage: mdx,
		heroImageAlt:
			"Screenshots of the My Disney Experience app for iOS and Android",
		role: "Senior User Experience Lead @ Disney Parks, Resorts & Experiences",
		tools: [
			{ icon: axure, alt: "Axure RP Pro" },
			{ icon: photoshop, alt: "Adobe Photoshop" },
			{ icon: illustrator, alt: "Adobe Illustrator" },
		],
		duration: "4 years (2012 - 2016)",
		sectionTwoTitle: "Overview",
		sectionTwoSubheading:
			"<strong>My Disney Experience</strong> (MDX) is the official Walt Disney World mobile application for guests to use to plan their upcoming vacations and in-park to meet any of their needs.<br /><br />Covering 6 theme parks and 42 resorts across an area the size of San Francisco, MDX was a massive application that allowed users to manage every part of their Disney vacation from 6 months out to their visit in park.<br/><br/> I lead the design teams responsible for feature expansion from version 1.1 to 1.5, then a total 2.0 redesign for native Android and iOS.",
		sectionTwoImage: {
			image: casestudy_image_mdx1,
			alt: "My Disney Experience's Map page",
		},
		mainPointsHeading: "Main Initiatives",
		mainPointsSubheading:
			"During my tenure as the MDX app lead, I lead iniatives to:",
		mainPoints: [
			{
				id: 1,
				heading: "Expand Features",
				subheading:
					"From v1.0.1 to v1.4, added expanded support for features from nearly every internal Disney vertical.",
				icon: icon_expand,
				iconAlt: "expand by Bhima from Noun Project (CC BY 3.0)",
			},
			{
				id: 2,
				heading: "Improve the Experience",
				subheading:
					"Following the release of the application, we had to respond to increasing guest feedback and increase satisfaction.",
				icon: icon_upgrade,
				iconAlt:
					"upgrade by Justin Blake from Noun Project (CC BY 3.0)",
			},
			{
				id: 3,
				heading: "Redesign for 2.0",
				subheading:
					"Lead the migration from a hybrid app implementation to separate native Android and iOS applications.",
				icon: icon_refresh,
				iconAlt:
					"Refresh by Deemak Daksina from Noun Project (CC BY 3.0)",
			},
		],
		research: {
			heading: "Before and After",
			subHeading:
				'When I started at Disney in 2012, the <strong>My Disney Experience</strong> app\'s initial design had already been done by another team. However, the 1.0 release lacked a lot of features desired by both the product team and our guests.<br/><br/>I was added to the project starting with the 1.1 "dot-release" and stayed with the project through 3 years of frequent monthly or bi-weekly feature releases.',
			content: [
				{
					id: 1,
					image: casestudy_image_mdx_before,
					story: "While 1.0 was a significant release, it took a couple of years of regular updates to meet the full feature set that our parks and resorts guests needed. <br/><br/>Over time, the limitations of the app's inefficient hybrid platform began to hold back the team and the application. ",
					bulletPoints: [
						"<strong>There were lots of successes!</strong> The team expanded the basic app to include a host of pre-planning services, in-app check-in and to your resort and payment using MagicBands, and feature/flow optimizations to help guests get to the fun faster.",
						"<strong>But there were plenty of challenges, too.</strong> Visually, and from a design process standpoint, we worked to refine our relationship with the product teams and development. However, there were a lot of visual defects that crept into the app. And over time, the inefficient hybrid architecture left a lot to be desired. Wait times between screens were very long, which was further impacted by poor in-park wifi (at the time). According to guests:<br /><br /><blockquote class='border-l-2 border-solid border-l-qportfolio-black pl-4' >\"<em>First of all, the app is almost unusable….not because of a lack of features or usefulness, rather the fact that load times are ridiculously long. Switching screens takes at least 30 seconds. OK maybe 20. I don't think I am exaggerating.</em>\"<a href='https://phandroid.com/2013/12/24/my-disney-experience-review/' class='font-bold text-qportfolio-secondary-green' target='_blank'><sup>1</sup></a></blockquote>",
					],
					summary:
						"(He wasn't!)<br/><br/>Clearly, there was some work to do to meet user expectations and get our product where we wanted it to be.",
				},
				{
					id: 2,
					image: casestudy_image_mdx_after,
					story: "In late Summer 2013, one of our engineers developed a proof of concept of a native iOS implementation of the MDX app. It ran so quickly -- OK it ran like a <em>normal</em> app but that was novel at the time -- that the project was greenlit immediately, and the development team committed to feature parity between the old app and the new one. <br/><br/>However, the development team underestimated the complexity of the app, and we had to rapidly spin up a product and design partnership to revise and clean up all of our existing feature and defect backlog as well as update and get approvals for the design for the 2.0 release.",

					summary:
						"All told, it was about 5 months from seeing the development prototype to it launching in the real world.",
				},
			],
		},

		reception: {
			heading: "Guests (and the Press) Loved It",
			subHeading:
				"Getting the <strong>My Disney Experience</strong> app working right was important! The app was at the center the <strong>MyMagic+</strong> initiative, which put technology into the parks to enhance the guest experience in hotels, restaurants and the parks using the <a href='https://flipflopweekend.com/disney-world-magic-band/' class='font-bold text-qportfolio-secondary-green hover:text-qportfolio-primary-green'>MagicBand wearable device</a>.",
			quotes: [
				{
					id: 0,
					quote: "We just returned from Disney World and I was REALLY impressed with how well  both the band and the app worked. [...] I was very impressed by the Billion Dollar Bracelet, <strong>I have never seen anything else like it so seemlessly integrated in to a total experience.</strong>",
					source: "NY Times: A Billion-Dollar Bracelet Is the Key to a Disney Park",
					src: "https://www.nytimes.com/2014/04/02/business/billion-dollar-bracelet-is-key-to-magical-kingdom.html",
					author: "Elliot Pierce (Commenter)",
				},
				{
					id: 1,
					quote: "The new version 2.0 of 'My Disney Experience' has a new look and feel, with a new homepage showing your day's plans, improved navigation, and is overall much quicker to use. ... The previous version was widely panned by Disney fans as being slow and not well designed. <strong>We tested the new app today and it seems like a big improvement. It was very, very fast.</strong>",
					source: "Disney Dining Blog",
					src: "https://www.disneydining.com/disney-experience-app-version-2/",
					author: "David Killingsworth",
				},
				{
					id: 2,
					quote: "I love the app, when it first rolled out I wanted to throw the thing at the wall. <strong>But with the updates, it is fast and easy to use.</strong>",
					source: "WDW Magic Boards",
					src: "https://forums.wdwmagic.com/threads/my-disney-experience-app.882000/",
					author: "Kat Maria",
				},
				{
					id: 3,
					quote: "The update, all around...performance, features, fluidity, mapping, 3D visuals, searching, everything,...<strong>is almost startling</strong>. I know that seems gushing, but update and try, you'll see.",
					source: "Disboards",
					src: "https://www.disboards.com/threads/my-disney-experience-android-app-update-great.3294492/",
					author: "Dan Murphy",
				},
			],
		},
		conclusion: {
			heading: "Helping Our Guests to Have a Magical Day",
			subHeading:
				"Working on the <strong>My Disney Experience</strong> app taught me a lot about big application development at an enterprise scale. While working to improve the experience for our guests, my teams had to balance the complex strategic needs of our product and tech partners to deliver high quality designs on time and on budget.<br/><br/>To conclude, please enjoy this video released by Disney announcing updates to the WDW app.",
			videoSrc: "https://www.youtube.com/embed/YtrKaCwGrZw",
		},
	},
];
export {
	services,
	technologies,
	experiences,
	additionalExperiences,
	testimonials,
	projects,
	legacyProjects,
	sectionOverviews,
	heroGallery,
	blogTestData,
	caseStudyContent,
};
