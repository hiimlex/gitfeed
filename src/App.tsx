import axios from "axios";
import { debounce } from "lodash";
import React, { useCallback, useContext, useState } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	RouteProps,
	Switch,
	useHistory,
} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import GlobalContext from "./global-context";
import UserContext from "./user-context";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Poppins', sans-serif;
		font-size: 62.5%;
	}
`;

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

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100vw;

	background: #404044;
	color: #fff;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	width: 60%;

	padding: 12px 24px;
	border-radius: 12px;
	background: #434346;
	box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.05);
`;

const BoxTitle = styled.h1`
	font-size: 1.8rem;
	line-height: 3rem;
`;

const BoxSubtitle = styled.h3`
	font-size: 0.9rem;
	line-height: 1.8rem;
	font-weight: 500;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;
	margin: 18px 0;

	* {
		margin: 2px 0;
		width: 100%;
		font-size: 0.8rem;
	}
`;

const Input = styled.input`
	outline: 0;
	border: 1px solid #fff;
	background: transparent;
	padding: 6px 10px;
	border-radius: 4px;
	color: #fff;
`;

const Button = styled.button`
	width: 100%;
	padding: 8px 12px;
	border-radius: 4px;
	background: #ff5722;
	color: #fff;
	font-size: 0.9rem;
	text-transform: uppercase;
	font-weight: 700;
	outline: 0;
	border: 0;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 0.84;
	}
`;

const Login = () => {
	const [validUser, setValidUser] = useState(false);
	const [user, setUser] = useState<Record<string, any>>({});
	const { setState } = useContext(UserContext);

	const history = useHistory();

	async function getGitUser(value: string) {
		try {
			const response = await axios.get(`https://api.github.com/users/${value}`);

			return response;
		} catch (err) {
			throw new Error("User not found");
		}
	}

	const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (value.length > 0) {
			try {
				const { data } = await getGitUser(value);

				setUser(data);
				setValidUser(!!data && data.login && Object.keys(data).length > 0);
			} catch (err) {
				console.error(err);
				setValidUser(false);
			}
		} else {
			setValidUser(false);
		}
	};

	const handleOnClick = () => {
		if (validUser) {
			setState({
				github: user.login,
				gitData: user,
			});

			history.push("/");
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceChangeHandler = useCallback(debounce(handleOnChange, 500), []);

	return (
		<Container>
			<Box>
				<BoxTitle>Login</BoxTitle>
				<BoxSubtitle>Type your github user</BoxSubtitle>
				<InputGroup>
					<label htmlFor="user">Github User</label>
					<Input
						type="text"
						id="user"
						name="user"
						onChange={debounceChangeHandler}
					/>
				</InputGroup>
				{validUser && <Button onClick={handleOnClick}>Login</Button>}
			</Box>
		</Container>
	);
};

const LandingPage = () => {
	return <div>Landing</div>;
};

function App() {
	return (
		<GlobalContext>
			<GlobalStyle />
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
		</GlobalContext>
	);
}

export default App;
