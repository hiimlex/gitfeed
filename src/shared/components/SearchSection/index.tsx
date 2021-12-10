import { debounce } from "lodash";
import { useCallback, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router";
import { GitUserData } from "api/models/gitModel";
import { getGitUser } from "api/services/git";
import {
	SeachSectionLabel,
	SearchSectionContainer,
	SearchSectionContent,
	SearchSectionInput,
	SearchSectionInputGroup,
	SearchSectionInputIcon,
	SearchSectionListAvatar,
	SearchSectionListBox,
	SearchSectionListInfo,
	SearchSectionListInfoName,
	SearchSectionListInfoUsername,
} from "./styles";

const SearchSection = () => {
	const [hasUser, setHasUser] = useState(false);
	const [user, setUser] = useState<GitUserData>({} as GitUserData);

	const history = useHistory();

	const inputRef = useRef(null);

	const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: inputValue } = e.target;

		try {
			const { data } = await getGitUser(inputValue);

			setUser(data);
			setHasUser(!!data && Object.keys(data).length > 0);
		} catch (err) {
			setHasUser(false);
			setUser({} as GitUserData);
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceChangeHandler = useCallback(debounce(handleOnChange, 500), []);

	const getFirstAndLastName = (name: string): string => {
		let firstName = "";
		let lastName = "";
		let names: string[] = [];

		if (name) {
			names = name.split(" ");
		}

		if (names.length > 1) {
			firstName = names[0];
			lastName = names[names.length - 1];

			return `${firstName} ${lastName}`;
		} else {
			return names[0];
		}
	};

	const navigateToUser = (username: string) => {
		history.push(`/${username}`);
	};

	return (
		<SearchSectionContainer>
			<SearchSectionContent>
				<SeachSectionLabel>Search for a Git user</SeachSectionLabel>
				<SearchSectionInputGroup>
					<SearchSectionInput ref={inputRef} onChange={debounceChangeHandler} />
					<SearchSectionInputIcon>
						<BsSearch size={14} />
					</SearchSectionInputIcon>
				</SearchSectionInputGroup>
				{hasUser && (
					<SearchSectionListBox onClick={() => navigateToUser(user.login)}>
						<SearchSectionListAvatar src={user.avatar_url} alt={user.login} />
						<SearchSectionListInfo>
							<SearchSectionListInfoUsername>
								@{user.login}
							</SearchSectionListInfoUsername>
							<SearchSectionListInfoName>
								{getFirstAndLastName(user.name)}
							</SearchSectionListInfoName>
						</SearchSectionListInfo>
					</SearchSectionListBox>
				)}
			</SearchSectionContent>
		</SearchSectionContainer>
	);
};

export default SearchSection;
