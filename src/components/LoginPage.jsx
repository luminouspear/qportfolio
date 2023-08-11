import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { FullPageWrapper } from "../hoc";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const { setUserInfo, updateLoginStatus } = useContext(UserContext);
	const path =
		process.env.NODE_ENV === "production"
			? "https://danmccollum.com"
			: "http://127.0.0.1:4000";

	async function login(e) {
		e.preventDefault();
		const response = await fetch(`${path}/login`, {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		if (response.ok) {
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
				updateLoginStatus(true);
				setRedirect(true);
			});
		} else {
			alert("Wrong credentials.");
		}
	}
	if (redirect) {
		return <Navigate to={"/"} />;
	}
	return (
		<div className="container flex flex-col justify-start h-screen max-w-7xl top-24">
			<h1 className="w-11/12 mx-4 mt-24 text-2xl font-bold lg:mx-auto lg:w-1/2">
				Login
			</h1>
			<form className="flex flex-col " onSubmit={login}>
				<input
					className="w-11/12 px-4 py-2 m-2 mx-4 lg:mx-auto lg:w-1/2"
					type="text"
					placeholder="login name"
					autoComplete="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="w-11/12 px-4 py-2 m-2 mx-4 lg:mx-auto lg:w-1/2"
					type="password"
					placeholder="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="w-11/12 py-2 mx-4 mt-4 font-bold rounded-lg cursor-pointer lg:mx-auto lg:w-1/2 bg-qportfolio-black text-qportfolio-white hover:bg-primary-green">
					Login
				</button>
				<Link
					to="/register"
					className="w-11/12 mx-auto mt-8 mb-24 text-center cursor-pointer lg:w-1/2 hover:text-secondary-green hover:font-bold"
				>
					Register
				</Link>
			</form>
		</div>
	);
};

export default FullPageWrapper(LoginPage, "");