import { useContext, useEffect } from "react";
import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";
import UserContext from "../context/user-context";

const GuardedRoute: React.FC<RouteProps> = ({ children, path }) => {
	const { state, setState } = useContext(UserContext);

	const user = JSON.parse(localStorage.getItem("github") || "{}");

	useEffect(() => {
		setState({
			github: user.login,
			gitData: user,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Route path={path}>
			{(state.github !== "" && state.github !== undefined) ||
			Object.keys(state.gitData).length ||
			Object.keys(user).length ? (
				children
			) : (
				<Redirect to="/login" />
			)}
		</Route>
	);
};

export default GuardedRoute;
