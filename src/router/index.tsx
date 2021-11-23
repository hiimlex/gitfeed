import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../core-ui/pages/LandingPage";
import Login from "../core-ui/pages/Login";
import GuardedRoute from "./GuardedRoute";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<Login></Login>
				</Route>
				<GuardedRoute exact path="/">
					<LandingPage></LandingPage>
				</GuardedRoute>
			</Switch>
		</Router>
	);
};

export default Routes;
