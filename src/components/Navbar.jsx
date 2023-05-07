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

	const { userInfo, setUserInfo } = useContext(UserContext);

	const username = userInfo?.username;

	const location = useLocation();
	const isIndex = location.pathname === "/";
	const { updateLoginStatus } = useContext(UserContext);

	useEffect(() => {
		fetch("http://localhost:4000/profile", {
			credentials: "include",
		}).then((res) => {
			res.json().then((userInfo) => {
				setUserInfo(userInfo);
			});
		});
	}, []);

	function logout() {
		fetch("http://localhost:4000/logout", {
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
						<span className="hidden md:inline-block font-activo text-sm font-thin relative">
							<span className="">|</span> Designer,
							Educator,&nbsp;
							<span className="after:content-['new'] after:bg-primary-green after:text-qportfolio-white after:px-1.5 after:-py-1 after:text-[0.65rem] after:capitalize after:font-bold after:absolute after:rounded-sm after:-right-6 after:-top-3 after:rotate-6 after:scale-75 after:hover:rotate-3 after:hover:transition-all">
								Developer
							</span>
						</span>
					</p>
				</Link>
				<ul className="list-none hidden md:flex flex-row gap-10 md:gap-6  font-activo mt-2">
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

					{/* {navLinks.map((link) => {
								<li
									key={link.id}
									className={getNavLinkStyle(
										active,
										link.title
									)}
									onClick={() => setActive(link.title)}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>

						})
					} */}
					{/* {username && (
						<>
							<li className={getNavLinkStyle(active, "New Post")}>
								<Link to="/newpost">New Post</Link>
							</li>
						</>
					)}
					{navLinks.map((link) => (
						!link.page ?
						<li
							key={link.id}
							className={getNavLinkStyle(active, link.title)}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
							</li>
							:
							<li><Link to={link.linkTo}>
								<a href={`#${link.id}`}>
								{link.title}</a></Link></li>
					))}
					{username && (
						<>
							<li className={getNavLinkStyle(active, "Logout")}>
								<a onClick={logout}>Logout</a>
							</li>
						</>
					)} */}
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
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl text-white font-activo`}
					>
						<ul className="list-none flex justify-end flex-col gap-4 ">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white"
											: "text-secondary"
									} hover:text-white text-[16px] font-medium cursor-pointer`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a
										href={`#${link.id}`}
										className={`${
											active === link.title
												? "text-secondary-green font-bold"
												: "text-qportfolio-white font-medium"
										} hover:text-white text-xl font-medium cursor-pointer`}
									>
										{link.title}
									</a>
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
