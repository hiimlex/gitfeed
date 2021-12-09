import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "core-ui/pages/LandingPage";
import LoginPage from "core-ui/pages/LoginPage";
import ProfilePage from "core-ui/pages/ProfilePage";
import GuardedRoute from "./GuardedRoute";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<LoginPage></LoginPage>
				</Route>
				<GuardedRoute exact path="/">
					<LandingPage></LandingPage>
				</GuardedRoute>
				<GuardedRoute path="/:username">
					<ProfilePage></ProfilePage>
				</GuardedRoute>
			</Switch>
		</Router>
	);
};

export default Routes;
