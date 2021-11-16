import { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import UserContext from "../user-context";

const GuardedRoute: React.FC<RouteProps> = ({ children, path }) => {
	const { state } = useContext(UserContext);

	return (
		<Route path={path}>
			{state.github !== "" && Object.keys(state.gitData).length ? (
				children
			) : (
				<Redirect to="/login" />
			)}
		</Route>
	);
};

export default GuardedRoute;
