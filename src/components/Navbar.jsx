import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20 bg-qportfolio-white`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-9 h-9 object-contain"
					/>
					<p className="text-primary-green text-[16px] font-bold cursor-pointer font-gloock">
						Dan McCollum{" "}
<<<<<<< HEAD
						<span className="hidden md:inline-block font-activo text-sm font-thin">
							<span className="">|</span> Designer, Educator,
							Developer
=======
<<<<<<< HEAD
						<span className="hidden md:inline-block font-activo text-sm font-thin">
							<span className="">|</span> Designer, Educator,
							Developer
=======
						<span className="hidden md:inline-block font-activo text-sm font-thin relative">
							<span className="">|</span> Designer, Educator,&nbsp;
							<span className="after:content-['new'] after:bg-primary-green after:text-qportfolio-white after:px-1.5 after:-py-1 after:text-[0.65rem] after:capitalize after:font-bold after:absolute after:rounded-sm after:-right-6 after:-top-3 after:rotate-6 after:scale-75 after:hover:rotate-3 after:hover:transition-all">Developer</span>
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
						</span>
					</p>
				</Link>
				<ul className="list-none hidden md:flex flex-row gap-10 text-white font-activo mt-2">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`
                  ${active === link.title ? "text-white" : "text-secondary"}
                      hover:text-white text-[16px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
				<div className="md:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							toggle ? "flex" : "hidden"
<<<<<<< HEAD
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl text-white font-activo`}
=======
<<<<<<< HEAD
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl text-white font-activo`}
=======
						} p-6 bg-primary-green absolute top-16 right-12 mx-4 my-2 min-w-3/4 z-30 rounded-xl text-white font-activo`}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
					>
						<ul className="list-none flex justify-end flex-col gap-4 ">
							{navLinks.map((link) => (
								<li
									key={link.id}
<<<<<<< HEAD
									className={`
                  ${active === link.title ? "text-white" : "text-secondary"}
                      hover:text-white text-[16px] font-medium cursor-pointer`}
=======
<<<<<<< HEAD
									className={`
                  ${active === link.title ? "text-white" : "text-secondary"}
                      hover:text-white text-[16px] font-medium cursor-pointer`}
=======
									className={` w-[200px]`}
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
<<<<<<< HEAD
									<a href={`#${link.id}`}>{link.title}</a>
=======
<<<<<<< HEAD
									<a href={`#${link.id}`}>{link.title}</a>
=======
									<a
										href={`#${link.id}`}
										className={`${
											active === link.title
												? "text-secondary-green font-bold"
												: "text-qportfolio-white font-medium"
										}
                      hover:text-white text-xl font-medium cursor-pointer`}
									>
										{link.title}
									</a>
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
