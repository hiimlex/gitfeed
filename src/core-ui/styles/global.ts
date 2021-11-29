import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;	
		outline: 0;

		background: #404044;
		color: #fff;

		::-webkit-scrollbar {
			width: 4px;
			height: 8px;
			background-color: #404044;
		}

		::-webkit-scrollbar-thumb {
			background: #ff5722;
		}
	}

	body {
		font-family: 'Poppins', sans-serif;
		font-size: 62.5%;
	}
`;
