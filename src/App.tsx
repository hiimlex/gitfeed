import React from "react";
import GlobalContext from "./context/global-context";
import Routes from "./router";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<GlobalContext>
			<GlobalStyle />
			<Routes />
		</GlobalContext>
	);
}

export default App;
