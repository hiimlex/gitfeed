import styled from "styled-components";

export const PostContent = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;

	border-bottom: 1px solid #585757;
`;

export const PostAvatar = styled.img`
	width: 52px;
	height: 52px;
	margin: 4px 12px;
	border-radius: 50%;
	margin-top: 0;
`;

export const PostRow = styled.div`
	display: flex;
	flex-direction: row;
	padding: 12px;
`;

export const PostActions = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-direction: column;

	margin: 4px 0;
`;

export const PostUsername = styled.span`
	font-size: 0.9rem;
	font-weight: bold;
	color: #fff;

	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export const PostDescription = styled.span`
	font-size: 0.8rem;
	color: #fff;
`;

export const PostColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const PostItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	font-size: 0.8rem;
	font-weight: 500;

	cursor: pointer;

	transition: all 0.2s ease-in-out;

	* {
		margin-left: 8px;
	}
`;

export const PostDropdown = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const PostDropdownContent = styled.div`
	position: absolute;
	right: 0;
	background-color: #424244;
	min-width: 160px;
	height: auto;
	overflow: auto;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	border-radius: 4px;
`;

export const PostExcludeItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	padding: 6px;

	color: #fff;
	cursor: pointer;
	font-size: 0.8rem;

	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #585757;
	}
`;
