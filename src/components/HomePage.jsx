import { useContext, useEffect } from "react";
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
	const { isLoggedIn, loading } = useContext(UserContext);
	const loginGate = true;
	// console.log("isLoggedIn: ", isLoggedIn)

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Hero />
			{loginGate && isLoggedIn && !loading && <BlogList />}
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
