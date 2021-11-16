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

export const ProfileInfo = styled.div`
	flex: 1;
	max-width: 320px;
	padding: 0 32px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;

	border: 1px solid #585757;

	position: sticky;
	height: 100vh;
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

export const Avatar = styled.img`
	width: 128px;
	height: 128px;
	border-radius: 50%;
	border: 2px solid #fff;
	margin: 8px 0;
`;

export const Username = styled.span`
	font-size: 1.2rem;
	font-weight: 700;
	margin: 4px 0;
`;

export const Bio = styled.span`
	font-size: 0.8rem;
	font-weight: 400;
	margin: 4px 0;
	text-align: justify;
`;

export const Name = styled.span`
	font-size: 1.1rem;
	font-weight: 500;
	margin: 4px 0;
	text-align: justify;
`;

export const AddictionalInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 4px 0;
	width: 100%;

	* {
		display: flex;
		align-items: center;
		font-size: 0.7rem;
		word-wrap: break-word;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin: 4px 0;
	justify-content: space-between;
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
