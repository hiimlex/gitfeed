import axios from "axios";
import { debounce } from "lodash";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GitUserData } from "../../api/models/gitModel";
import { getGitUser } from "../../api/services/git";
import UserContext from "../../context/user-context";
import {
	Box,
	BoxSubtitle,
	BoxTitle,
	Button,
	Container,
	Input,
	InputGroup,
} from "./styles";

const Login = () => {
	const [validUser, setValidUser] = useState(false);
	const [user, setUser] = useState<GitUserData>({} as GitUserData);
	const { setState } = useContext(UserContext);

	const history = useHistory();

	const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (value.length > 0) {
			try {
				const { data } = await getGitUser(value);

				setUser(data);
				setValidUser(!!data && Object.keys(data).length > 0);
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

			localStorage.setItem("github", JSON.stringify(user));

			history.push("/");
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceChangeHandler = useCallback(debounce(handleOnChange, 500), []);

	const token = JSON.parse(localStorage.getItem("github") || "{}");

	useEffect(() => {
		if (token && Object.keys(token).length > 0) {
			setState({
				github: token.login,
				gitData: token,
			});

			history.push("/");
		}
	});

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

export default Login;
