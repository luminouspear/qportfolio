import { Link } from "react-router-dom";
import { useState } from "react";
import { FullPageWrapper } from "../hoc";

const RegisterPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function register(e) {
		e.preventDefault();
		const response = await fetch("http://localhost:4000/register", {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: { "Content-Type": "application/json" },
		});
		if (response.status === 200) {
			alert("Registration successful.");
		} else {
			alert("Registration failed.");
		}
		console.log(response);
	}

	return (
		<div className=" container max-w-7xl flex flex-col justify-start top-24">
			<h1 className="w-11/12 mx-4 lg:mx-auto lg:w-1/2 text-2xl font-bold mt-24">
				Register
			</h1>
			<form className="flex flex-col " onSubmit={register}>
				<input
					className="w-11/12 mx-4 lg:mx-auto lg:w-1/2 px-4 py-2 m-2"
					type="text"
					placeholder="login name"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="w-11/12 mx-4 lg:mx-auto lg:w-1/2 px-4 py-2 m-2"
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className=" w-11/12 mx-4 lg:mx-auto lg:w-1/2 bg-qportfolio-black mt-4  text-qportfolio-white font-bold py-2 rounded-lg hover:bg-primary-green cursor-pointer">
					Register
				</button>
				<Link
					to="/login"
					className="w-11/12 lg:w-1/2 mx-auto  text-center mt-8 mb-24 hover:text-secondary-green hover:font-bold cursor-pointer"
				>
					Log In
				</Link>
			</form>
		</div>
	);
};

export default FullPageWrapper(RegisterPage, "");
