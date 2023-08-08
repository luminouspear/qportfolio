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
			"Led design of back-end web CMS systems for HanleyWood, the world’s largest construction convention company, and front- and back-end systems for Artist Growth.",
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
};
