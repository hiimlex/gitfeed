import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";
import { GitUserData } from "../api/models/gitModel";

interface UserType {
	github: string;
	gitData: GitUserData;
}

interface PropsUserContext {
	state: UserType;
	setState: Dispatch<SetStateAction<UserType>>;
}

const DEFAULT_USER: PropsUserContext = {
	state: {
		github: "",
		gitData: {} as GitUserData,
	},
	setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_USER);

const UserContextProvider: React.FC = ({ children }) => {
	const [state, setState] = useState<UserType>(DEFAULT_USER.state);

	return (
		<UserContext.Provider value={{ state, setState }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContextProvider };
export default UserContext;
