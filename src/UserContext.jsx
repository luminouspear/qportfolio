import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [userInfo, setUserInfo] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:4000/profile", {
			credentials: "include",
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Not logged in");
				}
			})
			.then(() => {
				setIsLoggedIn(true);
			})
			.catch((error) => {
				setIsLoggedIn(false);
			})
			.finally(() => {
				setLoading(false); // Set loading state to false after the fetch request has completed
			});
	}, []);

	const updateLoginStatus = (status) => {
		setIsLoggedIn(status);
	};

	return (
		<UserContext.Provider
			value={{
				userInfo,
				setUserInfo,
				isLoggedIn,
				loading,
				updateLoginStatus,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
