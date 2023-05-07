import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export const useRedirectIfNotLoggedIn = () => {
	const { isLoggedIn, loading } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn && !loading) {
			navigate("/404");
		}
	}, [isLoggedIn, navigate, loading]);
};
