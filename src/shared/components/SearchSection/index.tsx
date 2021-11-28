import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GitUserData } from "../../../api/models/gitModel";
import { getGitUser } from "../../../api/services/git";
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
		const names = name.split(" ");
		const firstName = names[0];
		const lastName = names[names.length - 1];

		return `${firstName} ${lastName}`;
	};

	return (
		<SearchSectionContainer>
			<SearchSectionContent>
				<SeachSectionLabel>Search for a Git user</SeachSectionLabel>
				<SearchSectionInputGroup>
					<SearchSectionInput onChange={debounceChangeHandler} />
					<SearchSectionInputIcon>
						<BsSearch size={14} />
					</SearchSectionInputIcon>
				</SearchSectionInputGroup>
				{hasUser && (
					<SearchSectionListBox>
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
