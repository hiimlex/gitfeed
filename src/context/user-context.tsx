import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";

interface UserType {
	github: string;
	gitData: Record<any, any>;
}

interface PropsUserContext {
	state: UserType;
	setState: Dispatch<SetStateAction<UserType>>;
}

const DEFAULT_USER: PropsUserContext = {
	state: {
		github: "",
		gitData: {},
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
