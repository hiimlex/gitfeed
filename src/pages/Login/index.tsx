import { debounce } from "lodash";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GitUserData } from "../../api/models/gitModel";
import { getAllUsers, getGitUser, postNewUser } from "../../api/services/api";
import UserContext from "../../context/user-context";
import {
	Box,
	BoxSubtitle,
	BoxTitle,
	Button,
	Container,
	Input,
	InputError,
	InputGroup,
} from "./styles";

const Login = () => {
	const [validUser, setValidUser] = useState(false);
	const [user, setUser] = useState<GitUserData>({} as GitUserData);
	const [errorMsg, setErrorMsg] = useState("");
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
				setErrorMsg("User not found");
				setValidUser(false);
			}
		} else {
			setErrorMsg("Empty input");

			setTimeout(() => {
				setErrorMsg("");
			}, 2000);

			setValidUser(false);
		}
	};

	const handleOnClick = async () => {
		if (validUser) {
			const { data } = await getAllUsers();

			if (!data.find((el) => el.gitID === user.id)) {
				await postNewUser({ gitID: user.id, username: user.login });
			}

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
					{!validUser && <InputError>{errorMsg}</InputError>}
				</InputGroup>
				{validUser && <Button onClick={handleOnClick}>Login</Button>}
			</Box>
		</Container>
	);
};

export default Login;
