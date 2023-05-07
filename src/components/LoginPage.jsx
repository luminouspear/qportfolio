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

	async function login(e) {
		e.preventDefault();
		const response = await fetch("http://localhost:4000/login", {
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
		<div className=" container max-w-7xl flex flex-col justify-start top-24">
			<h1 className="w-11/12 mx-4 lg:mx-auto lg:w-1/2 text-2xl font-bold mt-24">
				Login
			</h1>
			<form className="flex flex-col " onSubmit={login}>
				<input
					className="w-11/12 mx-4 lg:mx-auto lg:w-1/2 px-4 py-2 m-2"
					type="text"
					placeholder="login name"
					autoComplete="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="w-11/12 mx-4 lg:mx-auto lg:w-1/2 px-4 py-2 m-2"
					type="password"
					placeholder="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className=" w-11/12 mx-4 lg:mx-auto lg:w-1/2 bg-qportfolio-black mt-4  text-qportfolio-white font-bold py-2 rounded-lg hover:bg-primary-green cursor-pointer">
					Login
				</button>
				<Link
					to="/register"
					className="w-11/12 lg:w-1/2 mx-auto  text-center mt-8 mb-24 hover:text-secondary-green hover:font-bold cursor-pointer"
				>
					Register
				</Link>
			</form>
		</div>
	);
};

export default FullPageWrapper(LoginPage, "");
