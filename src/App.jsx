import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
<<<<<<< HEAD
	Works,
=======
<<<<<<< HEAD
	Works,
=======
	Projects,
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
	Footer,
} from "./components";

const App = () => {
<<<<<<< HEAD
	return (
		<BrowserRouter>
			<div className=" z-0 bg-qportfolio-white">
=======
<<<<<<< HEAD
	return (
		<BrowserRouter>
			<div className=" z-0 bg-qportfolio-white">
=======
	const debugWindowSize = false;

	return (
		<BrowserRouter>
			<div className=" z-0 bg-qportfolio-white">
				{debugWindowSize && (
					<div className="fixed bottom-0 right-0 flex items-center justify-center w-12 h-12 font-bold text-center align-middle bg-cyan-400 text-black/90">
						<span className="sm:hidden">xs</span>
						<span className="hidden sm:inline md:hidden">sm</span>
						<span className="hidden md:inline lg:hidden">md</span>
						<span className="hidden lg:inline xl:hidden">lg</span>
						<span className="hidden xl:inline 2xl:hidden">xl</span>
						<span className="hidden 2xl:inline 3xl:hidden">
							2xl
						</span>
						<span className="hidden 3xl:inline 4xl:hidden">
							3xl
						</span>
						<span className="hidden 4xl:inline 5xl:hidden">
							4xl
						</span>
						<span className="hidden 5xl:inline 6xl:hidden">
							5xl
						</span>
						<span className="hidden 6xl:inline 7xl:hidden">
							6xl
						</span>
						<span className="hidden 7xl:inline 8xl:hidden">
							7xl
						</span>
					</div>
				)}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
				<Navbar />

				<Hero />
				<About />
				<Experience />
				<Tech />
<<<<<<< HEAD
				<Works />
=======
<<<<<<< HEAD
				<Works />
=======
				<Projects />
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
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
