import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [userInfo, setUserInfo] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	const path =
		process.env.NODE_ENV === "production"
			? "https://danmccollum.com"
			: "http://127.0.0.1:4000";

	useEffect(() => {
		fetch(`${path}/profile`, {
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.authenticated) {
					setIsLoggedIn(true);
					setUserInfo(data.user)
				} else {
					setIsLoggedIn(false);
					setUserInfo({})
				}
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
