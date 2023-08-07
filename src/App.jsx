import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import HomePage from "./components/HomePage";
import {
	Navbar,
	Footer,
	NewPost,
	BlogPostPage,
	EditPost,
	BlogListPage,
	NotFoundPage,
} from "./components";
import Layout from "./Layout";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserContextProvider } from "./UserContext";
import { showTailwindDebug } from "./showTailwindDebug";

const App = () => {
	const debugWindowSize = false;

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const checkLoggedIn = async () => {
			try {
				const response = await fetch("/profile", {
					credentials: "include", // This is necessary to include the cookies
				});

				if (response.status === 200) {
					setLoggedIn(true);
				} else {
					setLoggedIn(false);
				}
			} catch (error) {
				console.error("Error fetching profile:", error);
				setLoggedIn(false);
			}
		};

		checkLoggedIn();
	}, []);

	return (
		<UserContextProvider>
			<BrowserRouter>
				<div className="z-0  bg-qportfolio-white">
					{debugWindowSize && showTailwindDebug(debugWindowSize)}
					<Navbar />
					<Routes>
						<Route index element={<HomePage />} />
						<Route path={"/login"} element={<LoginPage />} />
						<Route path={"/register"} element={<RegisterPage />} />
						<Route path={"/newpost"} element={<NewPost />} />
						<Route path={"/post/:id"} element={<BlogPostPage />} />
						<Route path={"/blog"} element={<BlogListPage />} />
						<Route path={"/edit/:id"} element={<EditPost />} />
						<Route path={"/404"} element={<NotFoundPage />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</UserContextProvider>
	);
};

export default App;
