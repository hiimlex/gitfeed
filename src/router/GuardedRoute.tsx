import { useContext, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import UserContext from "api/context/user-context";
import { isEmptyObject } from "shared/utils/isEmptyObject";

interface GuardedRouteProps extends RouteProps {}

const GuardedRoute = ({ children, path }: GuardedRouteProps) => {
	const { state, setState } = useContext(UserContext);

	const user = JSON.parse(localStorage.getItem("github") || "{}");

	useEffect(() => {
		setState({ gitData: user, github: user.login });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Route path={path}>
			{!isEmptyObject(user) ||
			(state.github !== "" && state.github !== undefined) ||
			!isEmptyObject(state.gitData) ? (
				children
			) : (
				<Redirect to="/login" />
			)}
		</Route>
	);
};

export default GuardedRoute;
