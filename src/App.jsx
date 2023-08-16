import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserContextProvider } from "./UserContext";
import { showTailwindDebug } from "./showTailwindDebug";
import CaseStudyPage from "./components/casestudy/CaseStudyPage";
import CaseStudyList from "./components/casestudy/CaseStudyList";
import CaseStudyv2 from "./components/casestudy/CaseStudyv2.jsx";

const App = () => {
	const debugWindowSize = false;

	return (
		<UserContextProvider>
			<BrowserRouter>
				<div className="z-0 w-screen max-w-full bg-qportfolio-white">
					{debugWindowSize && showTailwindDebug(debugWindowSize)}
					<Navbar />
					<Routes>
						<Route index element={<HomePage />} />
						<Route path={"/login"} element={<LoginPage />} />
						{/* <Route path={"/register"} element={<RegisterPage />} /> */}
						<Route path={"/newpost"} element={<NewPost />} />
						<Route path={"/post/:id"} element={<BlogPostPage />} />
						<Route
							path={"/casestudy"}
							element={<CaseStudyList />}
						/>
						<Route path={"/casestudy/:id"} element={<Outlet />}>
							<Route path={"v1"} element={<CaseStudyPage />} />
							<Route path={"v2"} element={<CaseStudyv2 />} />
						</Route>
						<Route path={"/blog"} element={<BlogListPage />} />
						<Route path={"/edit/:id"} element={<EditPost />} />
						<Route path={"/test"} element={<CaseStudyv2 />} />
						<Route path={"/404"} element={<NotFoundPage />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</UserContextProvider>
	);
};

export default App;
