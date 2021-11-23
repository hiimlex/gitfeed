import { debounce } from "lodash";
import { useCallback, useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { GitUserData } from "../../../api/models/gitModel";
import { getAllUsers, getGitUser, postNewUser } from "../../../api/services/git";
import UserContext from "../../../api/context/user-context";
import {
	LoginBox,
	LoginBoxSubtitle,
	LoginBoxTitle,
	LoginButton,
	LoginContainer,
	LoginInput,
	LoginInputError,
	LoginInputGroup,
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
		<LoginContainer>
			<LoginBox>
				<BsGithub size={64} style={{ margin: "12px 0" }} />
				<LoginBoxTitle>Login</LoginBoxTitle>
				<LoginBoxSubtitle>Type your github user</LoginBoxSubtitle>
				<LoginInputGroup>
					<label htmlFor="user">Github User</label>
					<LoginInput
						type="text"
						id="user"
						name="user"
						onChange={debounceChangeHandler}
					/>
					{!validUser && <LoginInputError>{errorMsg}</LoginInputError>}
				</LoginInputGroup>
				{validUser && <LoginButton onClick={handleOnClick}>Login</LoginButton>}
			</LoginBox>
		</LoginContainer>
	);
};

export default Login;
