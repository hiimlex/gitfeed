import { debounce } from "lodash";
import { useCallback } from "react";
import { BsSearch } from "react-icons/bs";
import {
	SeachSectionLabel,
	SearchSectionContainer,
	SearchSectionContent,
	SearchSectionInput,
	SearchSectionInputGroup,
	SearchSectionInputIcon,
} from "./styles";

const SearchSection = () => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceChangeHandler = useCallback(debounce(handleOnChange, 500), []);

	return (
		<SearchSectionContainer>
			<SearchSectionContent>
				<SeachSectionLabel>Search Section</SeachSectionLabel>
				<SearchSectionInputGroup>
					<SearchSectionInput onChange={debounceChangeHandler} />
					<SearchSectionInputIcon>
						<BsSearch size={14} />
					</SearchSectionInputIcon>
				</SearchSectionInputGroup>
			</SearchSectionContent>
		</SearchSectionContainer>
	);
};

export default SearchSection;
