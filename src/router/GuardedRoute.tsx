import { useContext, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import UserContext from "../context/user-context";
import { isEmptyObject } from "../utils/isEmptyObject";

const GuardedRoute: React.FC<RouteProps> = ({ children, path }) => {
	const { state, setState } = useContext(UserContext);

	const user = JSON.parse(localStorage.getItem("github") || "{}");

	useEffect(() => {
		setState({ gitData: user, github: user.login });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Route path={path}>
			{!isEmptyObject(user) ||
			state.github !== "" ||
			!isEmptyObject(state.gitData) ? (
				children
			) : (
				<Redirect to="/login" />
			)}
		</Route>
	);
};

export default GuardedRoute;
