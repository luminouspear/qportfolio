import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	Footer,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className=" z-0 bg-qportfolio-white">
				<Navbar />

				<Hero />
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
