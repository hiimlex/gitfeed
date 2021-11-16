import axios from "axios";
import { debounce } from "lodash";
import { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../user-context";
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

export default Login;
