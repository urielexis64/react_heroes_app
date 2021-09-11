import React from "react";
import {Route, Redirect} from "react-router";
import PropTypes from "prop-types";

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				!isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

PublicRoute.propTypes = {
	component: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
};
