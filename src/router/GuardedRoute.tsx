import { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import UserContext from "../user-context";
import { isEmptyObject } from "../utils/isEmptyObject";

const GuardedRoute: React.FC<RouteProps> = ({ children, path }) => {
	const { state } = useContext(UserContext);

	const user = JSON.parse(localStorage.getItem("github") || "{}");

	return (
		<Route path={path}>
			{isEmptyObject(user) ||
			state.github !== "" ||
			isEmptyObject(state.gitData) ? (
				children
			) : (
				<Redirect to="/login" />
			)}
		</Route>
	);
};

export default GuardedRoute;
