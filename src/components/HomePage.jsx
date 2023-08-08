import { useContext } from "react";
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
	BlogListPage,
} from "../components";
import { UserContext } from "../UserContext";

const HomePage = () => {

	const { isLoggedIn } = useContext(UserContext);
	const loginGate = true


	return (
		<>
			<Hero />
			{loginGate && isLoggedIn && <BlogList />}
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
