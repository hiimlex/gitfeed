import styled from "styled-components";

export const SearchSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding: 8px 18px;
	width: auto;
	min-width: 232px;
`;

export const SearchSectionContent = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;
`;

export const SeachSectionLabel = styled.label`
	font-size: 0.8rem;
	font-weight: 400;
	color: #fff;
	margin-bottom: 8px;

	align-self: flex-start;
`;

export const SearchSectionInputGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	width: 100%;

	margin-bottom: 8px;
`;

export const SearchSectionInput = styled.input`
	width: 100%;
	height: 32px;
	border: 1px solid #585757;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	background: transparent;
	padding: 8px;
	border-right: none;

	font-size: 0.8rem;
	font-weight: 400;
	color: #fff;
`;

export const SearchSectionInputIcon = styled.div`
	padding: 10px;
	height: 32px;
	cursor: pointer;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: transparent;
	border: 1px solid #585757;
	border-left: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SearchSectionListBox = styled.div`
	width: 100%;
	padding: 12px;
	border-radius: 8px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	border: 1px solid #585757;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #585757;
	}
`;

export const SearchSectionListAvatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 16px;
`;

export const SearchSectionListInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	margin-left: 8px;
	background: transparent;
`;

export const SearchSectionListInfoUsername = styled.span`
	font-size: 0.6rem;
	font-weight: 600;
	background: transparent;
`;

export const SearchSectionListInfoName = styled.span`
	font-size: 0.7rem;
	font-weight: 400;
	background: transparent;
`;
