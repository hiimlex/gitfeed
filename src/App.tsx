import React from "react";
import GlobalContext from "./api/context/global-context";
import Routes from "./router";
import { GlobalStyle } from "./core-ui/styles/global";

const App = () => (
	<GlobalContext>
		<GlobalStyle />
		<Routes />
	</GlobalContext>
);

export default App;
