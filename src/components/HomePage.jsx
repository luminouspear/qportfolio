import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Projects,
	Footer,
	BlogList,
	NewPost,
} from "../components";

const HomePage = () => {
	return (
		<>
			<Hero />
			<BlogList />
			<About />
			<Experience />
			<Tech />
			<Projects />
			<Feedbacks />
			<Contact />
		</>
	);
};

export default HomePage;
