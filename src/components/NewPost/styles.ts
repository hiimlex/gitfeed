import styled from "styled-components";

export const Post = styled.div`
	width: 100%;
	padding: 24px;

	display: flex;
	flex-direction: row;
	align-items: flex-start;

	border-bottom: 1px solid #585757;
`;

export const NewPostAvatar = styled.img`
	width: 64px;
	height: 64px;
	object-fit: contain;
	border-radius: 50%;
	margin: 4px 12px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const TextArea = styled.div`
	width: 100%;
	resize: none;
	height: auto;
	border: 0;
	outline: none;
	max-height: 80px;
	overflow: auto;
	margin-bottom: 8px;
	font-size: 0.8rem;
`;

export const Button = styled.button`
	background: none;
	border: 2px solid #585757;
	width: 128px;
	padding: 6px 4px;
	border-radius: 4px;
	height: auto;
	align-self: flex-end;
	font-size: 0.8rem;
	text-transform: uppercase;
	cursor: pointer;
	color: #fff;
	font-weight: 600;
	margin: 4px 0;
	margin-bottom: 0;
`;
