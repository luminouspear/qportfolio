import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./components/HomePage";
import { Navbar, Footer, NewPost, BlogPostPage, EditPost } from "./components";
import Layout from "./Layout";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserContextProvider } from "./UserContext";
import { showTailwindDebug } from "./showTailwindDebug";

const App = () => {
	const debugWindowSize = false;

	return (
		<UserContextProvider>
			<BrowserRouter>
				<div className=" z-0 bg-qportfolio-white">
					{debugWindowSize && showTailwindDebug(debugWindowSize)}
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path={"/login"} element={<LoginPage />} />
							<Route
								path={"/register"}
								element={<RegisterPage />}
							/>
							<Route path={"/newpost"} element={<NewPost />} />
							<Route
								path={"/post/:id"}
								element={<BlogPostPage />}
							/>
							<Route path={"/edit/:id"} element={<EditPost />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</UserContextProvider>
	);
};

export default App;
