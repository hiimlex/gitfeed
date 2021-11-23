import styled from "styled-components";

export const NewPostContainer = styled.div`
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
	margin: 4px 12px;
	border-radius: 50%;
	margin-top: 0;
`;

export const NewPostColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const NewPostTextArea = styled.textarea`
	width: 100%;
	max-width: 100%;
	margin-bottom: 8px;
	height: 60px;
	background: transparent;
	max-height: 100px;

	color: #fff;
	font-size: 0.9rem;

	resize: none;

	border: 0;
	outline: none;
	overflow: auto;

	overflow-wrap: break-word;
	word-wrap: break-word;

	* {
		overflow-wrap: break-word;
		word-wrap: break-word;
		width: 100%;
		max-width: 100%c;
	}
`;

interface NewPostButtonProps {
	disabled?: boolean;
}

export const NewPostButton = styled.button<NewPostButtonProps>`
	width: 128px;
	height: auto;
	padding: 6px 4px;
	margin: 4px 0;
	margin-bottom: 0;

	font-size: 0.8rem;
	text-transform: uppercase;
	color: #fff;
	font-weight: 600;

	align-self: flex-end;

	background: none;
	border: 2px solid #585757;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #ff5722;
		border-color: #ff5722;
	}

	${(props) =>
		props.disabled &&
		`
		background: #585757;
		border-color: #585757;
		cursor: not-allowed;
		color: #383838;

		&:hover {
			background: #585757;
			border-color: #585757;
		}
	`}
`;
