import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;

	background: #404044;
	color: #fff;

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1080px;
	height: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
`;

export const Feed = styled.div`
	width: 38vw;
	min-width: 620px;
	max-width: 838px;
	height: 100vh;
	background: #434346;
	border: 1px solid #585757;
	border-left: none;
`;

export const Divider = styled.hr`
	width: 100%;
	border: 0;
	height: 1px;
	background: #ffffff12;
	margin: 8px 0;
`;

export const NewPost = styled.div`
	width: 100%;
	padding: 24px;

	display: flex;
	flex-direction: row;
	align-items: flex-start;

	border-bottom: 1px solid #585757;
`;

export const TitleBox = styled.div`
	padding: 12px;
	border: 1px solid #585757;
`;

export const Title = styled.span`
	font-size: 1.2rem;
	margin-left: 12px;
	font-weight: 700;
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
