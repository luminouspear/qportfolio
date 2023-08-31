import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Navigate,
} from "react-router-dom";
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
import withAuthProtection from "./hoc/withAuthProtection";

const App = () => {
	const debugWindowSize = false;

	const ProtectedBlogListPage = withAuthProtection(BlogListPage);
	const ProtectedBlogPostPage = withAuthProtection(BlogPostPage);
	const ProtectedNewPostPage = withAuthProtection(NewPost);
	const ProtectedEditPostPage = withAuthProtection(EditPost);

	return (
		<UserContextProvider>
			<BrowserRouter>
				<div className="z-0 flex flex-col w-screen max-w-full min-h-screen bg-qportfolio-white">
					{debugWindowSize && showTailwindDebug(debugWindowSize)}
					<Navbar />
					<div className="flex-grow">
						<Routes>
							<Route index element={<HomePage />} />
							<Route path={"/login"} element={<LoginPage />} />
							{/* <Route path={"/register"} element={<RegisterPage />} /> */}
							<Route
								path={"/newpost"}
								element={<ProtectedNewPostPage />}
							/>
							<Route
								path={"/post/:id"}
								element={<ProtectedBlogPostPage />}
							/>
							<Route
								path={"/casestudy"}
								element={<CaseStudyList />}
							/>
							<Route path={"/casestudy/:id"} element={<Outlet />}>
								<Route
									path={"v1"}
									element={<CaseStudyPage />}
								/>
								<Route path={"v2"} element={<CaseStudyv2 />} />
							</Route>
							<Route
								path={"/blog"}
								element={<ProtectedBlogListPage />}
							/>
							<Route
								path={"/edit/:id"}
								element={<ProtectedEditPostPage />}
							/>
							<Route path={"/404"} element={<NotFoundPage />} />
							<Route
								path={"*"}
								element={<Navigate to="/404" replace />}
							/>
						</Routes>
					</div>
				</div>
				<Footer />
			</BrowserRouter>
		</UserContextProvider>
	);
};

export default App;
