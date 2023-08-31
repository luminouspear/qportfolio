import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const withAuthProtection = (WrappedComponent) => {
	return (props) => {
		const { isLoggedIn } = useContext(UserContext);

		if (!isLoggedIn) {
			// Redirect to the 404 page
			return <Navigate to="/404" replace />;

		}

		return <WrappedComponent {...props} />;
	};
};

export default withAuthProtection;
