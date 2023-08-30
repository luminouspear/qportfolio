import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { getNavLinkStyle } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	const { userInfo, setUserInfo, updateLoginStatus, isLoggedIn } =
		useContext(UserContext);

	const username = userInfo?.username;

	const location = useLocation();
	const isIndex = location.pathname === "/";

	const path =
		process.env.NODE_ENV === "production"
			? "https://danmccollum.com"
			: "http://127.0.0.1:4000";



	function logout() {
		fetch(`${path}/logout`, {
			credentials: "include",
			method: "POST",
		});
		setUserInfo(null);
		updateLoginStatus(false);
	}

	const renderLink = (link) => {
		if (link.action === "logout") {
			return (
				<a
					className={getNavLinkStyle(active, link.title)}
					onClick={logout}
				>
					{link.title}
				</a>
			);
		}
		if (isIndex) {
			if (link.page) {
				return (
					<Link
						to={link.linkTo}
						onClick={link.action ?? undefined}
						className={getNavLinkStyle(active, link.title)}
					>
						{link.title}
					</Link>
				);
			} else {
				return (
					<a
						href={`#${link.id}`}
						className={getNavLinkStyle(active, link.title)}
					>
						{link.title}
					</a>
				);
			}
		} else {
			if (link.page) {
				return (
					<Link
						to={link.linkTo}
						onClick={link.action ?? undefined}
						className={getNavLinkStyle(active, link.title)}
					>
						{link.title}
					</Link>
				);
			} else {
				return (
					<Link
						to={{
							pathname: "/",
							hash: `#${link.id}`,
						}}
						onClick={link.action ?? undefined}
						className={getNavLinkStyle(active, link.title)}
					>
						{link.title}
					</Link>
				);
			}
		}
	};

	return (
		<nav
			className={`${styles.paddingX}  w-full flex justify-center items-center py-5 fixed top-0 z-20 bg-qportfolio-white`}
		>
			<div className="flex items-center justify-between w-full mx-auto max-w-7xl">
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
						className="object-contain mr-1 w-9 h-9"
					/>
					<p className="text-primary-green text-[16px] font-bold cursor-pointer font-gloock">
						Dan McCollum{" "}
						<span className="relative hidden text-sm font-thin md:inline-block font-archivo">
							<span className="">|</span> Designer,
							Educator&nbsp;
							<span className="">&amp;&nbsp;Developer</span>
						</span>
					</p>
				</Link>
				<ul className="flex-row hidden gap-10 mt-2 list-none md:flex md:gap-6 font-archivo">
					{navLinks.map((link) => {
						return (
							<li
								key={link.id}
								className={
									getNavLinkStyle(active, link.title) +
									`${
										link.loginRequired
											? username
												? " inline"
												: " hidden"
											: " "
									}`
								}
							>
								{renderLink(link)}
							</li>
						);
					})}
				</ul>
				<div className="flex items-center justify-end flex-1 md:hidden">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							toggle ? "flex" : "hidden"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl text-white font-archivo`}
					>
						<ul className="flex flex-col justify-end gap-4 list-none ">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white"
											: "text-secondary"
									} ${
										link.loginRequired
											? username
												? " inline"
												: " hidden"
											: " "
									} hover:text-white text-[16px] font-medium cursor-pointer`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									{renderLink(link)}
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
