import styled from "styled-components";

export const Content = styled.div`
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

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	padding: 12px;
`;

export const Actions = styled.div`
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
`;

export const PostDescription = styled.span`
	font-size: 0.8rem;
	color: #fff;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	font-size: 0.8rem;
	font-weight: 500;

	cursor: pointer;

	* {
		margin-left: 8px;
	}
`;

export const Dropdown = styled.div`
	position: relative;
	display: inline-block;
`;
